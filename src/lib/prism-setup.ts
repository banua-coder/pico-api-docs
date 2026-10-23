import Prism from 'prismjs'

// Grammars register on the Prism singleton, so they must live in this one file
// (and one chunk) with the core. Only the languages the docs show are loaded.
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-go'

// Offer line breaks after / . ? inside strings (URLs), so long commands wrap at path
// boundaries first. Not after & or =: token content is already HTML-escaped (&amp;).
Prism.hooks.add('wrap', (env) => {
  if (env.type === 'string') env.content = env.content.replace(/([/.?])/g, '$1<wbr>')
})

export default Prism
