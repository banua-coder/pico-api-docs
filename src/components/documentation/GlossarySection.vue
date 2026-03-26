<template>
  <section v-show="isActive" id="glossary" class="mb-12 md:mb-20 px-6 lg:px-10">

    <!-- Page Header — Editorial Style -->
    <div class="mb-10 md:mb-14 border-b border-gray-200 dark:border-gray-700 pb-8">
      <p class="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-3">
        {{ t('documentation.glossary.subtitle') }}
      </p>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight tracking-tight">
        {{ t('documentation.glossary.title') }}
      </h1>
      <p class="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
        {{ t('documentation.glossary.cardSubtitle') }}
      </p>
    </div>

    <!-- ── Section 01: Reproduction Rate ── -->
    <div class="mb-14 md:mb-20">

      <!-- Section label -->
      <div class="flex items-baseline gap-4 mb-8">
        <span class="text-4xl sm:text-5xl font-black text-gray-200 dark:text-gray-700 select-none leading-none">01</span>
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
          {{ t('documentation.glossary.reproductionRate.title') }}
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16">

        <!-- Left Column -->
        <div class="space-y-10">

          <!-- Definition -->
          <div>
            <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
              {{ t('documentation.glossary.reproductionRate.definition') }}
            </h3>
            <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {{ t('documentation.glossary.reproductionRate.definitionText') }}
            </p>
          </div>

          <!-- Interpretation — inline editorial callout -->
          <div>
            <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
              {{ t('documentation.glossary.reproductionRate.interpretation') }}
            </h3>
            <div class="divide-y divide-gray-100 dark:divide-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <div class="flex items-center gap-4 px-4 py-3 bg-red-50 dark:bg-red-950/40">
                <span class="font-mono text-sm font-bold text-red-600 dark:text-red-400 w-16 shrink-0">Rt &gt; 1</span>
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('documentation.glossary.reproductionRate.growing') }}</span>
              </div>
              <div class="flex items-center gap-4 px-4 py-3 bg-amber-50 dark:bg-amber-950/40">
                <span class="font-mono text-sm font-bold text-amber-600 dark:text-amber-400 w-16 shrink-0">Rt = 1</span>
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('documentation.glossary.reproductionRate.stable') }}</span>
              </div>
              <div class="flex items-center gap-4 px-4 py-3 bg-green-50 dark:bg-green-950/40">
                <span class="font-mono text-sm font-bold text-green-600 dark:text-green-400 w-16 shrink-0">Rt &lt; 1</span>
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('documentation.glossary.reproductionRate.declining') }}</span>
              </div>
            </div>
          </div>

          <!-- Calculation Method -->
          <div>
            <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
              {{ t('documentation.glossary.reproductionRate.calculationMethod') }}
            </h3>
            <div class="border-l-2 border-indigo-300 dark:border-indigo-600 pl-4 space-y-1">
              <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {{ t('documentation.glossary.reproductionRate.epiEstimTitle') }}
              </p>
              <ul class="space-y-0.5 text-sm text-gray-600 dark:text-gray-400">
                <li v-for="(detail, index) in methodDetails" :key="index">{{ detail }}</li>
              </ul>
            </div>
          </div>

          <!-- Data Availability -->
          <div>
            <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
              {{ t('documentation.glossary.reproductionRate.dataAvailability') }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ t('documentation.glossary.reproductionRate.dataAvailabilityText') }}
            </p>
          </div>

          <!-- Formula -->
          <div>
            <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
              {{ t('documentation.glossary.reproductionRate.formula') }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {{ t('documentation.glossary.reproductionRate.formulaDescription') }}
            </p>
            <div class="space-y-3">
              <div
                v-for="(_, i) in [0,1,2,3]" :key="i"
                class="flex gap-3 items-start"
              >
                <span class="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-bold flex items-center justify-center">{{ i + 1 }}</span>
                <div class="flex-1 min-w-0">
                  <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">{{ t(`documentation.glossary.reproductionRate.formulaSteps.${i}`) }}</p>
                  <div class="bg-gray-50 dark:bg-gray-900 rounded-lg px-3 py-2 overflow-x-auto border border-gray-200 dark:border-gray-700">
                    <MathFormula
                      v-if="i === 0" formula="\lambda_t = \sum_{s=1}^{t-1} I_{t-s} \cdot w_s"
                    />
                    <template v-else-if="i === 1">
                      <MathFormula formula="I_{t-s} = \text{incidence at time } (t-s)" />
                      <MathFormula formula="w_s = \text{serial interval probability}" />
                    </template>
                    <MathFormula
                      v-else-if="i === 2" formula="R_t | \text{data} \sim \text{Gamma}\left(a + \sum I_t, \, b + \sum \lambda_t\right)"
                    />
                    <MathFormula
                      v-else formula="\mathbb{E}[R_t | \text{data}] = \frac{a + \sum I_t}{b + \sum \lambda_t}"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Right Column -->
        <div class="space-y-10">

          <!-- Practical Example -->
          <div>
            <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
              {{ t('documentation.glossary.reproductionRate.practicalExample.title') }}
            </h3>
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
              {{ t('documentation.glossary.reproductionRate.practicalExample.subtitle') }}
            </p>

            <!-- Time Series Table -->
            <div class="overflow-x-auto mb-5">
              <table class="w-full text-xs border-collapse">
                <thead>
                  <tr class="border-b-2 border-gray-200 dark:border-gray-700">
                    <th class="text-left py-2 px-3 font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-[10px]">{{ t('documentation.glossary.reproductionRate.practicalExample.table.day') }}</th>
                    <th class="text-left py-2 px-3 font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-[10px]">{{ t('documentation.glossary.reproductionRate.practicalExample.table.date') }}</th>
                    <th class="text-right py-2 px-3 font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-[10px]">{{ t('documentation.glossary.reproductionRate.practicalExample.table.newCases') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, index) in exampleData" :key="index"
                    class="border-b border-gray-100 dark:border-gray-800"
                    :class="row.current ? 'bg-indigo-50 dark:bg-indigo-950/40' : ''"
                  >
                    <td class="py-2 px-3 font-mono" :class="row.current ? 'font-bold text-indigo-700 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-400'">{{ row.day }}</td>
                    <td class="py-2 px-3" :class="row.current ? 'font-semibold text-indigo-700 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-400'">{{ row.date }}</td>
                    <td class="py-2 px-3 text-right font-mono font-semibold" :class="row.current ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-800 dark:text-gray-200'">{{ row.cases }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Step-by-step Calculation -->
            <div class="space-y-4 text-xs font-mono">
              <div class="border-l-2 border-gray-200 dark:border-gray-700 pl-4 space-y-1">
                <p class="font-sans font-semibold text-gray-700 dark:text-gray-300 text-xs not-italic mb-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step1.title') }}</p>
                <p class="text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.reproductionRate.practicalExample.step1.formula') }}</p>
                <p class="text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.reproductionRate.practicalExample.step1.calculation') }}</p>
              </div>
              <div class="border-l-2 border-gray-200 dark:border-gray-700 pl-4 space-y-1">
                <p class="font-sans font-semibold text-gray-700 dark:text-gray-300 text-xs not-italic mb-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step2.title') }}</p>
                <p class="text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.reproductionRate.practicalExample.step2.formula') }}</p>
                <p class="text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.reproductionRate.practicalExample.step2.calculation') }}</p>
              </div>
              <div class="border-l-2 border-indigo-300 dark:border-indigo-600 pl-4 space-y-2">
                <p class="font-sans font-semibold text-gray-700 dark:text-gray-300 text-xs not-italic mb-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.title') }}</p>
                <p class="font-sans not-italic text-gray-500 dark:text-gray-400 italic text-xs">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.explanation') }}</p>
                
                <!-- Gamma Quantile -->
                <div class="bg-gray-50 dark:bg-gray-900 rounded p-2 border border-gray-200 dark:border-gray-700 space-y-0.5">
                  <p class="font-sans font-semibold text-gray-700 dark:text-gray-300 text-[10px] uppercase tracking-wide">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.gammaQuantileFormula.title') }}</p>
                  <p class="text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.gammaQuantileFormula.formula') }}</p>
                  <p class="font-sans not-italic text-gray-500 dark:text-gray-500 text-[10px]">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.gammaQuantileFormula.description') }}</p>
                </div>

                <!-- Bounds -->
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-gray-50 dark:bg-gray-900 rounded p-2 border border-gray-200 dark:border-gray-700 space-y-0.5">
                    <p class="font-sans font-semibold text-gray-700 dark:text-gray-300 text-[10px] uppercase tracking-wide">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.lowerBoundStep.title') }}</p>
                    <p class="text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.lowerBoundStep.formula') }}</p>
                    <p class="text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.lowerBoundStep.wilsonHilfertyFormula') }}</p>
                    <p class="font-bold text-gray-800 dark:text-gray-200">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.lowerBoundStep.calculation') }}</p>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-900 rounded p-2 border border-gray-200 dark:border-gray-700 space-y-0.5">
                    <p class="font-sans font-semibold text-gray-700 dark:text-gray-300 text-[10px] uppercase tracking-wide">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.upperBoundStep.title') }}</p>
                    <p class="text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.upperBoundStep.formula') }}</p>
                    <p class="font-bold text-gray-800 dark:text-gray-200">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.upperBoundStep.calculation') }}</p>
                  </div>
                </div>

                <!-- Summary -->
                <div class="text-gray-600 dark:text-gray-400 space-y-0.5">
                  <p>{{ t('documentation.glossary.reproductionRate.practicalExample.step3.formulas.lowerBound') }}</p>
                  <p>{{ t('documentation.glossary.reproductionRate.practicalExample.step3.formulas.upperBound') }}</p>
                  <p class="font-semibold text-gray-800 dark:text-gray-200 mt-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.confidenceInterval') }}</p>
                  <p class="font-sans not-italic text-[10px] text-gray-400 dark:text-gray-500 italic mt-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.mathematicalNote') }}</p>
                </div>

                <!-- Result -->
                <div class="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded px-3 py-2">
                  <span class="font-bold text-red-700 dark:text-red-400">{{ t('documentation.glossary.reproductionRate.practicalExample.result.title') }}</span>
                  <span class="font-sans not-italic text-xs text-red-700 dark:text-red-400 ml-1">{{ t('documentation.glossary.reproductionRate.practicalExample.result.interpretation') }}</span>
                </div>
              </div>
            </div>

            <p class="mt-4 text-xs text-gray-400 dark:text-gray-500 italic">
              <span class="not-italic font-semibold text-gray-500 dark:text-gray-400">{{ t('documentation.glossary.reproductionRate.practicalExample.note.title') }}</span>
              {{ t('documentation.glossary.reproductionRate.practicalExample.note.content') }}
            </p>
          </div>

          <!-- References -->
          <div>
            <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
              {{ t('documentation.glossary.reproductionRate.references') }}
            </h3>
            <div class="space-y-4">
              <div class="group">
                <p class="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                  Cori, A., Ferguson, N. M., Fraser, C., & Cauchemez, S. (2013)
                </p>
                <p class="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">American Journal of Epidemiology</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                  A new framework and software to estimate time-varying reproduction numbers during epidemics. 178(9), 1505–1512.
                </p>
                <a href="https://doi.org/10.1093/aje/kwt133" target="_blank"
                   class="text-xs text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-0.5 inline-block">
                  DOI: 10.1093/aje/kwt133 ↗
                </a>
              </div>
              <div class="group">
                <p class="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                  Thompson, R. N., et al. (2019)
                </p>
                <p class="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">Epidemics</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                  Improved inference of time-varying reproduction numbers during infectious disease outbreaks. 29, 100356.
                </p>
                <a href="https://doi.org/10.1016/j.epidem.2019.100356" target="_blank"
                   class="text-xs text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-0.5 inline-block">
                  DOI: 10.1016/j.epidem.2019.100356 ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Divider -->
    <hr class="border-gray-200 dark:border-gray-800 mb-14 md:mb-20" />

    <!-- ── Section 02: Case Classifications & Data Types ── -->
    <div class="mb-14 md:mb-20">
      <div class="flex items-baseline gap-4 mb-8">
        <span class="text-4xl sm:text-5xl font-black text-gray-200 dark:text-gray-700 select-none leading-none">02</span>
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
          {{ t('documentation.glossary.caseClassifications.title') }} &amp; {{ t('documentation.glossary.dataTypes.title') }}
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-10 lg:gap-16">
        <!-- Case Classifications -->
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">
            {{ t('documentation.glossary.caseClassifications.title') }}
          </h3>
          <dl class="divide-y divide-gray-100 dark:divide-gray-800">
            <div v-for="key in ['positive','recovered','deceased','active']" :key="key" class="py-4 first:pt-0 last:pb-0">
              <dt class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {{ t(`documentation.glossary.caseClassifications.${key}.title`) }}
              </dt>
              <dd class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ t(`documentation.glossary.caseClassifications.${key}.description`) }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- Data Types -->
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">
            {{ t('documentation.glossary.dataTypes.title') }}
          </h3>
          <dl class="divide-y divide-gray-100 dark:divide-gray-800">
            <div v-for="key in ['daily','cumulative','percentages','serialInterval']" :key="key" class="py-4 first:pt-0 last:pb-0">
              <dt class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {{ t(`documentation.glossary.dataTypes.${key}.title`) }}
              </dt>
              <dd class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ t(`documentation.glossary.dataTypes.${key}.description`) }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <hr class="border-gray-200 dark:border-gray-800 mb-14 md:mb-20" />

    <!-- ── Section 03: Indonesian Terminology ── -->
    <div>
      <div class="flex items-baseline gap-4 mb-8">
        <span class="text-4xl sm:text-5xl font-black text-gray-200 dark:text-gray-700 select-none leading-none">03</span>
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
          {{ t('documentation.glossary.indonesianTerminology.title') }}
        </h2>
      </div>

      <p class="text-sm text-gray-600 dark:text-gray-400 mb-3 max-w-2xl leading-relaxed">
        {{ t('documentation.glossary.indonesianTerminology.subtitle') }}
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-500 mb-10 max-w-2xl italic">
        {{ t('documentation.glossary.indonesianTerminology.officialNote') }}
      </p>

      <!-- Current Terms -->
      <div class="mb-10">
        <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5 flex items-center gap-2">
          <span class="w-4 h-4 rounded-full bg-green-500 inline-block"></span>
          {{ t('documentation.glossary.indonesianTerminology.currentTerms') }}
        </h3>
        <div class="grid sm:grid-cols-2 gap-4">
          <div
            v-for="key in ['kasusSuspect','kasusProbable','kontakErat','kasusKonfirmasi']"
            :key="key"
            class="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
          >
            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-0.5">
              {{ t(`documentation.glossary.indonesianTerminology.${key}.name`) }}
            </h4>
            <p class="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-2">
              {{ t(`documentation.glossary.indonesianTerminology.${key}.translation`) }}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ t(`documentation.glossary.indonesianTerminology.${key}.description`) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Legacy Terms -->
      <div class="mb-10">
        <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5 flex items-center gap-2">
          <span class="w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600 inline-block"></span>
          {{ t('documentation.glossary.indonesianTerminology.legacyTerms') }}
        </h3>
        <div class="grid sm:grid-cols-3 gap-4 opacity-80">
          <div
            v-for="key in ['odp','pdp','otg']"
            :key="key"
            class="border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-5"
          >
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl font-black text-gray-300 dark:text-gray-600">
                {{ t(`documentation.glossary.indonesianTerminology.${key}.acronym`) }}
              </span>
            </div>
            <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-0.5">
              {{ t(`documentation.glossary.indonesianTerminology.${key}.fullName`) }}
            </h4>
            <p class="text-xs text-gray-500 dark:text-gray-500 mb-2">
              {{ t(`documentation.glossary.indonesianTerminology.${key}.translation`) }}
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-500 leading-relaxed mb-3">
              {{ t(`documentation.glossary.indonesianTerminology.${key}.description`) }}
            </p>
            <span class="inline-flex items-center gap-1 text-[10px] font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-full px-2 py-0.5">
              → {{ t(`documentation.glossary.indonesianTerminology.${key}.replacedBy`) }}
            </span>
          </div>
        </div>
      </div>

      <!-- Classification Evolution -->
      <div class="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
        <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
          {{ t('documentation.glossary.indonesianTerminology.classificationProgression.title') }}
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
          {{ t('documentation.glossary.indonesianTerminology.classificationProgression.description') }}
        </p>

        <!-- Official Quote -->
        <blockquote class="border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 mb-6 italic text-sm text-gray-600 dark:text-gray-400">
          "{{ t('documentation.glossary.indonesianTerminology.classificationProgression.officialQuote') }}"
          <footer class="mt-1 text-xs not-italic text-gray-400 dark:text-gray-500">— Kementerian Kesehatan RI</footer>
        </blockquote>

        <!-- Flow diagrams -->
        <div class="space-y-4">
          <div>
            <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
              {{ t('documentation.glossary.indonesianTerminology.classificationProgression.currentFlow') }}
            </p>
            <div class="flex flex-wrap items-center gap-2 text-xs">
              <span class="px-3 py-1 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-400 rounded-full font-medium">Suspect</span>
              <span class="text-gray-300 dark:text-gray-600">→</span>
              <span class="px-3 py-1 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-400 rounded-full font-medium">Probable</span>
              <span class="text-gray-300 dark:text-gray-600">→</span>
              <span class="px-3 py-1 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-400 rounded-full font-medium">Confirmed</span>
              <span class="text-gray-300 dark:text-gray-600">→</span>
              <span class="px-3 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium">Recovery / Death</span>
            </div>
          </div>
          <div class="opacity-60">
            <p class="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-2">
              {{ t('documentation.glossary.indonesianTerminology.classificationProgression.legacyFlow') }}
            </p>
            <div class="flex flex-wrap items-center gap-2 text-xs">
              <span class="px-3 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-full font-medium">ODP</span>
              <span class="text-gray-300 dark:text-gray-600">→</span>
              <span class="px-3 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-full font-medium">PDP</span>
              <span class="text-gray-300 dark:text-gray-600">→</span>
              <span class="px-3 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-full font-medium">OTG</span>
              <span class="text-gray-300 dark:text-gray-600">→</span>
              <span class="px-3 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-full font-medium">Confirmed</span>
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import MathFormula from '@/components/MathFormula.vue'

interface Props {
  isActive: boolean
}

defineProps<Props>()
const { t, tm } = useI18n()

const methodDetails = computed(() => tm('documentation.glossary.reproductionRate.methodDetails') as string[])

const exampleData = computed(() => [
  { day: 't-6', date: t('documentation.glossary.reproductionRate.practicalExample.dates.jan1'), cases: '12', current: false },
  { day: 't-5', date: t('documentation.glossary.reproductionRate.practicalExample.dates.jan2'), cases: '18', current: false },
  { day: 't-4', date: t('documentation.glossary.reproductionRate.practicalExample.dates.jan3'), cases: '25', current: false },
  { day: 't-3', date: t('documentation.glossary.reproductionRate.practicalExample.dates.jan4'), cases: '31', current: false },
  { day: 't-2', date: t('documentation.glossary.reproductionRate.practicalExample.dates.jan5'), cases: '28', current: false },
  { day: 't-1', date: t('documentation.glossary.reproductionRate.practicalExample.dates.jan6'), cases: '35', current: false },
  { day: 't',   date: t('documentation.glossary.reproductionRate.practicalExample.dates.jan7'), cases: '42', current: true  },
])
</script>
