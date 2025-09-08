#!/usr/bin/env ruby

require 'json'
require 'date'
require 'optparse'

class ChangelogGenerator
  COMMIT_TYPES = {
    'feat' => '✨ Features',
    'fix' => '🐛 Bug Fixes',
    'docs' => '📝 Documentation',
    'style' => '💎 Style',
    'refactor' => '♻️ Code Refactoring',
    'perf' => '⚡ Performance Improvements',
    'test' => '✅ Tests',
    'build' => '📦 Build System',
    'ci' => '👷 CI/CD',
    'chore' => '🔧 Chores',
    'revert' => '⏪ Reverts'
  }.freeze

  BREAKING_CHANGE_HEADER = '💥 BREAKING CHANGES'

  def initialize(options = {})
    @from_tag = options[:from_tag]
    @to_ref = options[:to_ref] || 'HEAD'
    @version = options[:version]
    @output_file = options[:output_file]
    @include_merge_commits = options[:include_merge_commits] || false
  end

  def generate
    # Get the latest tag if not specified
    @from_tag ||= get_latest_tag
    
    if @from_tag.nil? || @from_tag.empty?
      puts "No previous tags found. Generating changelog from beginning."
      @from_tag = nil
    end

    commits = get_commits
    grouped_commits = group_commits_by_type(commits)
    changelog = format_changelog(grouped_commits)

    if @output_file
      write_to_file(changelog)
    else
      puts changelog
    end

    changelog
  end

  private

  def get_latest_tag
    `git describe --tags --abbrev=0 2>/dev/null`.strip
  rescue
    nil
  end

  def get_commits
    range = @from_tag ? "#{@from_tag}..#{@to_ref}" : @to_ref
    merge_flag = @include_merge_commits ? '' : '--no-merges'
    
    # Get commit information in a parseable format using a unique delimiter
    delimiter = '|||DELIMITER|||'
    format = "%H#{delimiter}%s#{delimiter}%b#{delimiter}%an#{delimiter}%ae#{delimiter}%ad"
    commits_raw = `git log #{merge_flag} --format="#{format}#{delimiter}END" --date=short #{range}`
    
    commits = []
    commits_raw.split("#{delimiter}END").each do |commit_block|
      next if commit_block.strip.empty?
      
      parts = commit_block.split(delimiter)
      next unless parts && parts.length >= 6
      
      commits << {
        hash: parts[0][0..7], # Short hash
        subject: parts[1] || '',
        body: parts[2] || '',
        author: parts[3] || '',
        email: parts[4] || '',
        date: parts[5] || ''
      }
    end
    
    commits
  end

  def group_commits_by_type(commits)
    grouped = {
      breaking: [],
      types: Hash.new { |h, k| h[k] = [] }
    }

    commits.each do |commit|
      # Parse conventional commit format
      if commit[:subject] =~ /^(\w+)(?:\(([^)]+)\))?: (.+)$/
        type = $1
        scope = $2
        description = $3

        commit_info = {
          hash: commit[:hash],
          scope: scope,
          description: description,
          author: commit[:author],
          date: commit[:date]
        }

        # Check for breaking changes
        if commit[:subject].include?('!:') || commit[:body].to_s.downcase.include?('breaking change')
          grouped[:breaking] << commit_info
        end

        # Group by type
        if COMMIT_TYPES.key?(type)
          grouped[:types][type] << commit_info
        else
          grouped[:types]['chore'] << commit_info
        end
      else
        # Non-conventional commits go to chore
        grouped[:types]['chore'] << {
          hash: commit[:hash],
          description: commit[:subject],
          author: commit[:author],
          date: commit[:date]
        }
      end
    end

    grouped
  end

  def format_changelog(grouped_commits)
    lines = []
    
    # Header
    if @version
      lines << "# Changelog for v#{@version}"
    else
      lines << "# Changelog"
    end
    
    lines << ""
    lines << "Generated on #{Date.today.strftime('%Y-%m-%d')}"
    
    if @from_tag
      lines << "Changes since #{@from_tag}"
    else
      lines << "All changes"
    end
    
    lines << ""
    lines << "---"
    lines << ""

    # Breaking changes
    unless grouped_commits[:breaking].empty?
      lines << "## #{BREAKING_CHANGE_HEADER}"
      lines << ""
      grouped_commits[:breaking].each do |commit|
        scope_text = commit[:scope] ? "**#{commit[:scope]}:** " : ""
        lines << "- #{scope_text}#{commit[:description]} (#{commit[:hash]})"
      end
      lines << ""
    end

    # Regular commits by type
    COMMIT_TYPES.each do |type, header|
      commits = grouped_commits[:types][type]
      next if commits.empty?

      lines << "## #{header}"
      lines << ""
      
      commits.each do |commit|
        scope_text = commit[:scope] ? "**#{commit[:scope]}:** " : ""
        lines << "- #{scope_text}#{commit[:description]} (#{commit[:hash]})"
      end
      lines << ""
    end

    # Statistics
    lines << "---"
    lines << ""
    lines << "## 📊 Statistics"
    lines << ""
    
    total_commits = grouped_commits[:types].values.flatten.size
    lines << "- Total commits: #{total_commits}"
    
    if @from_tag
      contributors = get_contributors
      lines << "- Contributors: #{contributors.size}"
      lines << ""
      lines << "### Contributors"
      lines << ""
      contributors.each do |contributor|
        lines << "- #{contributor[:name]} (#{contributor[:commits]} commits)"
      end
    end

    lines.join("\n")
  end

  def get_contributors
    range = @from_tag ? "#{@from_tag}..#{@to_ref}" : @to_ref
    merge_flag = @include_merge_commits ? '' : '--no-merges'
    
    contributors_raw = `git shortlog -sn #{merge_flag} #{range}`
    
    contributors_raw.split("\n").map do |line|
      if line =~ /^\s*(\d+)\s+(.+)$/
        { commits: $1.to_i, name: $2.strip }
      end
    end.compact.sort_by { |c| -c[:commits] }
  end

  def write_to_file(content)
    File.write(@output_file, content)
    puts "Changelog written to #{@output_file}"
  end
end

# CLI interface
if __FILE__ == $0
  options = {}
  
  OptionParser.new do |opts|
    opts.banner = "Usage: generate_changelog.rb [options]"
    
    opts.on("-f", "--from TAG", "Starting tag (default: latest tag)") do |tag|
      options[:from_tag] = tag
    end
    
    opts.on("-t", "--to REF", "Ending reference (default: HEAD)") do |ref|
      options[:to_ref] = ref
    end
    
    opts.on("-v", "--version VERSION", "Version for the changelog") do |version|
      options[:version] = version
    end
    
    opts.on("-o", "--output FILE", "Output file (default: stdout)") do |file|
      options[:output_file] = file
    end
    
    opts.on("-m", "--include-merges", "Include merge commits") do
      options[:include_merge_commits] = true
    end
    
    opts.on("-h", "--help", "Show this help message") do
      puts opts
      exit
    end
  end.parse!
  
  generator = ChangelogGenerator.new(options)
  generator.generate
end