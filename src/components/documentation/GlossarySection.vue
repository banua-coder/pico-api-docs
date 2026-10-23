<template>
  <div class="min-w-0">

    <!-- ── Section 01: Reproduction Rate ── -->
    <div class="mb-14 md:mb-20">

      <!-- Section label -->
      <div class="mb-8">
        <h2 class="h2">
          {{ t('documentation.glossary.reproductionRate.title') }}
        </h2>
      </div>

      <div class="grid min-[1900px]:grid-cols-2 gap-10">

        <!-- Left Column -->
        <div class="space-y-10 min-w-0">

          <!-- Definition -->
          <div>
            <h3 class="h3 text-ink mb-3">
              {{ t('documentation.glossary.reproductionRate.definition') }}
            </h3>
            <p class="text-base text-ink leading-relaxed">
              {{ t('documentation.glossary.reproductionRate.definitionText') }}
            </p>
          </div>

          <!-- Interpretation — inline editorial callout -->
          <div>
            <h3 class="h3 text-ink mb-4">
              {{ t('documentation.glossary.reproductionRate.interpretation') }}
            </h3>
            <div class="divide-y divide-rule rounded-lg border border-rule overflow-hidden">
              <div class="flex items-center gap-3 px-4 py-3 bg-surface">
                <span class="mark mark-filled" aria-hidden="true" /><span class="num w-14 shrink-0 font-mono text-sm font-bold text-ink">Rt &gt; 1</span>
                <span class="text-sm text-ink min-w-0 break-words">{{ t('documentation.glossary.reproductionRate.growing') }}</span>
              </div>
              <div class="flex items-center gap-3 px-4 py-3 bg-surface">
                <span class="mark mark-half" aria-hidden="true" /><span class="num w-14 shrink-0 font-mono text-sm font-bold text-ink">Rt = 1</span>
                <span class="text-sm text-ink min-w-0 break-words">{{ t('documentation.glossary.reproductionRate.stable') }}</span>
              </div>
              <div class="flex items-center gap-3 px-4 py-3 bg-surface">
                <span class="mark" aria-hidden="true" /><span class="num w-14 shrink-0 font-mono text-sm font-bold text-ink">Rt &lt; 1</span>
                <span class="text-sm text-ink min-w-0 break-words">{{ t('documentation.glossary.reproductionRate.declining') }}</span>
              </div>
            </div>
          </div>

          <!-- Calculation Method -->
          <div>
            <h3 class="h3 text-ink mb-3">
              {{ t('documentation.glossary.reproductionRate.calculationMethod') }}
            </h3>
            <div class="rounded-lg border border-rule bg-sunk p-4 space-y-1">
              <p class="text-sm font-semibold text-ink">
                {{ t('documentation.glossary.reproductionRate.epiEstimTitle') }}
              </p>
              <ul class="space-y-0.5 text-sm text-ink-soft">
                <li v-for="(detail, index) in methodDetails" :key="index">{{ detail }}</li>
              </ul>
            </div>
          </div>

          <!-- Data Availability -->
          <div>
            <h3 class="h3 text-ink mb-3">
              {{ t('documentation.glossary.reproductionRate.dataAvailability') }}
            </h3>
            <p class="text-base text-ink leading-relaxed">
              {{ t('documentation.glossary.reproductionRate.dataAvailabilityText') }}
            </p>
          </div>

          <!-- Formula -->
          <div>
            <h3 class="h3 text-ink mb-4">
              {{ t('documentation.glossary.reproductionRate.formula') }}
            </h3>
            <p class="text-base text-ink mb-4 leading-relaxed">
              {{ t('documentation.glossary.reproductionRate.formulaDescription') }}
            </p>
            <div class="space-y-3">
              <div
                v-for="(_, i) in [0,1,2,3]" :key="i"
                class="flex gap-3 items-start"
              >
                <span class="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-sunk text-ink-soft text-xs font-bold flex items-center justify-center">{{ i + 1 }}</span>
                <div class="flex-1 min-w-0">
                  <p class="text-sm text-ink-soft mb-1">{{ t(`documentation.glossary.reproductionRate.formulaSteps.${i}`) }}</p>
                  <div class="bg-surface px-4 py-3 overflow-x-auto text-base rounded-md border border-rule">
                    <MathFormula
                      v-if="i === 0" formula="\lambda_t = \sum_{s=1}^{t-1} I_{t-s} \cdot w_s"
                    />
                    <template v-else-if="i === 1">
                      <MathFormula formula="I_{t-s} = \text{incidence at time } (t-s)" />
                      <MathFormula formula="w_s = \text{serial interval probability}" />
                    </template>
                    <template v-else-if="i === 2">
                      <MathFormula formula="R_t \mid \text{data} \sim \text{Gamma}\!\left(a + \textstyle\sum I_t,\right." :display-mode="false" />
                      <MathFormula formula="\left. b + \textstyle\sum \lambda_t\right)" :display-mode="false" />
                    </template>
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
        <div class="space-y-10 min-w-0">

          <!-- Practical Example -->
          <div>
            <h3 class="h3 text-ink mb-4">
              {{ t('documentation.glossary.reproductionRate.practicalExample.title') }}
            </h3>
            <p class="text-sm font-medium text-ink mb-4">
              {{ t('documentation.glossary.reproductionRate.practicalExample.subtitle') }}
            </p>

            <!-- Time Series Table -->
            <div class="table-card mb-5">
              <table class="data-table">
                <caption class="sr-only">{{ t('documentation.glossary.reproductionRate.practicalExample.subtitle') }}</caption>
                <thead>
                  <tr>
                    <th scope="col">{{ t('documentation.glossary.reproductionRate.practicalExample.table.day') }}</th>
                    <th scope="col">{{ t('documentation.glossary.reproductionRate.practicalExample.table.date') }}</th>
                    <th scope="col" class="text-right">{{ t('documentation.glossary.reproductionRate.practicalExample.table.newCases') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in exampleData" :key="index" :class="row.current ? 'bg-brand-tint' : ''">
                    <td class="py-2 font-mono" :class="row.current ? 'font-bold text-brand' : 'text-ink-soft'">{{ row.day }}</td>
                    <td class="py-2" :class="row.current ? 'font-semibold text-brand' : 'text-ink-soft'">{{ row.date }}</td>
                    <td class="py-2 text-right font-mono font-semibold" :class="row.current ? 'text-brand' : 'text-ink'">{{ row.cases }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Step-by-step Calculation -->
            <div class="space-y-4 text-sm font-mono">
              <div class="rounded-lg border border-rule bg-sunk p-4 space-y-1">
                <p class="font-sans font-semibold text-ink text-sm mb-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step1.title') }}</p>
                <p class="text-ink">{{ t('documentation.glossary.reproductionRate.practicalExample.step1.formula') }}</p>
                <p class="text-ink">{{ t('documentation.glossary.reproductionRate.practicalExample.step1.calculation') }}</p>
              </div>
              <div class="rounded-lg border border-rule bg-sunk p-4 space-y-1">
                <p class="font-sans font-semibold text-ink text-sm mb-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step2.title') }}</p>
                <p class="text-ink">{{ t('documentation.glossary.reproductionRate.practicalExample.step2.formula') }}</p>
                <p class="text-ink">{{ t('documentation.glossary.reproductionRate.practicalExample.step2.calculation') }}</p>
              </div>
              <div class="rounded-lg border border-rule bg-sunk p-4 space-y-2">
                <p class="font-sans font-semibold text-ink text-sm mb-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.title') }}</p>
                <p class="font-sans text-sm text-ink">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.explanation') }}</p>
                
                <!-- Gamma Quantile -->
                <div class="bg-surface p-3 rounded-md border border-rule space-y-0.5">
                  <p class="font-sans font-semibold text-ink text-sm">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.gammaQuantileFormula.title') }}</p>
                  <p class="text-ink">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.gammaQuantileFormula.formula') }}</p>
                  <p class="font-sans text-sm text-ink">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.gammaQuantileFormula.description') }}</p>
                </div>

                <!-- Bounds -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div class="bg-surface p-3 rounded-md border border-rule space-y-0.5">
                    <p class="font-sans font-semibold text-ink text-sm">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.lowerBoundStep.title') }}</p>
                    <p class="text-ink">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.lowerBoundStep.formula') }}</p>
                    <p class="text-ink">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.lowerBoundStep.wilsonHilfertyFormula') }}</p>
                    <p class="font-bold text-ink">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.lowerBoundStep.calculation') }}</p>
                  </div>
                  <div class="bg-surface p-3 rounded-md border border-rule space-y-0.5">
                    <p class="font-sans font-semibold text-ink text-sm">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.upperBoundStep.title') }}</p>
                    <p class="text-ink">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.upperBoundStep.formula') }}</p>
                    <p class="font-bold text-ink">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.upperBoundStep.calculation') }}</p>
                  </div>
                </div>

                <!-- Summary -->
                <div class="text-ink space-y-0.5">
                  <p>{{ t('documentation.glossary.reproductionRate.practicalExample.step3.formulas.lowerBound') }}</p>
                  <p>{{ t('documentation.glossary.reproductionRate.practicalExample.step3.formulas.upperBound') }}</p>
                  <p class="font-semibold text-ink mt-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.confidenceInterval') }}</p>
                  <p class="font-sans text-sm text-ink mt-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.mathematicalNote') }}</p>
                </div>

                <!-- Result -->
                <div class="bg-surface rounded-md border border-rule-strong px-3 py-2">
                  <span class="font-bold text-ink">{{ t('documentation.glossary.reproductionRate.practicalExample.result.title') }}</span>
                  <span class="font-sans text-sm text-ink ml-1">{{ t('documentation.glossary.reproductionRate.practicalExample.result.interpretation') }}</span>
                </div>
              </div>
            </div>

            <p class="mt-4 text-sm text-ink-soft">
              <span class="font-semibold text-ink">{{ t('documentation.glossary.reproductionRate.practicalExample.note.title') }}</span>
              {{ t('documentation.glossary.reproductionRate.practicalExample.note.content') }}
            </p>
          </div>

          <!-- References -->
          <div>
            <h3 class="h3 text-ink mb-4">
              {{ t('documentation.glossary.reproductionRate.references') }}
            </h3>
            <div class="space-y-4">
              <div class="group">
                <p class="text-sm font-semibold text-ink leading-snug">
                  Cori, A., Ferguson, N. M., Fraser, C., & Cauchemez, S. (2013)
                </p>
                <p class="text-sm text-brand font-medium mt-0.5">American Journal of Epidemiology</p>
                <p class="text-sm text-ink-soft mt-0.5 leading-relaxed">
                  A new framework and software to estimate time-varying reproduction numbers during epidemics. 178(9), 1505–1512.
                </p>
                <a href="https://doi.org/10.1093/aje/kwt133" target="_blank" rel="noopener noreferrer"
                   class="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand underline-offset-4 hover:underline">
                  DOI: 10.1093/aje/kwt133 <Icon name="external" :size="12" />
                </a>
              </div>
              <div class="group">
                <p class="text-sm font-semibold text-ink leading-snug">
                  Thompson, R. N., et al. (2019)
                </p>
                <p class="text-sm text-brand font-medium mt-0.5">Epidemics</p>
                <p class="text-sm text-ink-soft mt-0.5 leading-relaxed">
                  Improved inference of time-varying reproduction numbers during infectious disease outbreaks. 29, 100356.
                </p>
                <a href="https://doi.org/10.1016/j.epidem.2019.100356" target="_blank" rel="noopener noreferrer"
                   class="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand underline-offset-4 hover:underline">
                  DOI: 10.1016/j.epidem.2019.100356 <Icon name="external" :size="12" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Divider -->
    <hr class="border-rule mb-14 md:mb-20" />

    <!-- ── Section 02: Case Classifications & Data Types ── -->
    <div class="mb-14 md:mb-20">
      <div class="mb-8">
        <h2 class="h2">
          {{ t('documentation.glossary.caseClassifications.title') }} &amp; {{ t('documentation.glossary.dataTypes.title') }}
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-10 lg:gap-16">
        <!-- Case Classifications -->
        <div class="min-w-0">
          <h3 class="h3 text-ink mb-5">
            {{ t('documentation.glossary.caseClassifications.title') }}
          </h3>
          <dl class="divide-y divide-rule">
            <div v-for="key in ['positive','recovered','deceased','active']" :key="key" class="py-4 first:pt-0 last:pb-0">
              <dt class="text-sm font-semibold text-ink mb-1">
                {{ t(`documentation.glossary.caseClassifications.${key}.title`) }}
              </dt>
              <dd class="text-sm text-muted leading-relaxed">
                {{ t(`documentation.glossary.caseClassifications.${key}.description`) }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- Data Types -->
        <div>
          <h3 class="h3 text-ink mb-5">
            {{ t('documentation.glossary.dataTypes.title') }}
          </h3>
          <dl class="divide-y divide-rule">
            <div v-for="key in ['daily','cumulative','percentages','serialInterval']" :key="key" class="py-4 first:pt-0 last:pb-0">
              <dt class="text-sm font-semibold text-ink mb-1">
                {{ t(`documentation.glossary.dataTypes.${key}.title`) }}
              </dt>
              <dd class="text-sm text-muted leading-relaxed">
                {{ t(`documentation.glossary.dataTypes.${key}.description`) }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <hr class="border-rule mb-14 md:mb-20" />

    <!-- ── Section 03: Indonesian Terminology ── -->
    <div>
      <div class="mb-8">
        <h2 class="h2">
          {{ t('documentation.glossary.indonesianTerminology.title') }}
        </h2>
      </div>

      <p class="text-sm text-muted mb-3 max-w-2xl leading-relaxed">
        {{ t('documentation.glossary.indonesianTerminology.subtitle') }}
      </p>
      <p class="text-sm text-muted mb-10 max-w-2xl italic">
        {{ t('documentation.glossary.indonesianTerminology.officialNote') }}
      </p>

      <!-- Current Terms -->
      <div class="mb-10">
        <h3 class="h3 text-ink mb-5 flex items-center gap-2">
          <span class="mark mark-filled" aria-hidden="true" />
          {{ t('documentation.glossary.indonesianTerminology.currentTerms') }}
        </h3>
        <div class="grid sm:grid-cols-2 gap-4">
          <div
            v-for="key in ['kasusSuspect','kasusProbable','kontakErat','kasusKonfirmasi']"
            :key="key"
            class="rounded-lg border border-rule bg-surface p-5"
          >
            <h4 class="font-semibold text-ink mb-0.5">
              {{ t(`documentation.glossary.indonesianTerminology.${key}.name`) }}
            </h4>
            <p class="text-sm font-medium text-brand mb-2">
              {{ t(`documentation.glossary.indonesianTerminology.${key}.translation`) }}
            </p>
            <p class="text-sm text-muted leading-relaxed">
              {{ t(`documentation.glossary.indonesianTerminology.${key}.description`) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Legacy Terms -->
      <div class="mb-10">
        <h3 class="h3 text-ink mb-5 flex items-center gap-2">
          <span class="mark" aria-hidden="true" />
          {{ t('documentation.glossary.indonesianTerminology.legacyTerms') }}
        </h3>
        <div class="grid sm:grid-cols-3 gap-4">
          <div
            v-for="key in ['odp','pdp','otg']"
            :key="key"
            class="rounded-lg border border-dashed border-rule-strong p-5"
          >
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl font-black text-muted">
                {{ t(`documentation.glossary.indonesianTerminology.${key}.acronym`) }}
              </span>
            </div>
            <h4 class="text-sm font-semibold text-ink mb-0.5">
              {{ t(`documentation.glossary.indonesianTerminology.${key}.fullName`) }}
            </h4>
            <p class="text-sm text-muted mb-2">
              {{ t(`documentation.glossary.indonesianTerminology.${key}.translation`) }}
            </p>
            <p class="text-sm text-muted leading-relaxed mb-3">
              {{ t(`documentation.glossary.indonesianTerminology.${key}.description`) }}
            </p>
            <span class="inline-flex items-center gap-1.5 rounded-full border border-rule-strong px-2 py-0.5 text-xs font-semibold text-ink">
              <Icon name="arrow-right" :size="12" />{{ t(`documentation.glossary.indonesianTerminology.${key}.replacedBy`) }}
            </span>
          </div>
        </div>
      </div>

      <!-- Classification Evolution -->
      <div class="rounded-lg border border-rule bg-surface p-6">
        <h3 class="h3 text-ink mb-4">
          {{ t('documentation.glossary.indonesianTerminology.classificationProgression.title') }}
        </h3>
        <p class="text-sm text-muted mb-5 leading-relaxed">
          {{ t('documentation.glossary.indonesianTerminology.classificationProgression.description') }}
        </p>

        <!-- Official Quote -->
        <blockquote class="mb-6 rounded-lg border border-rule bg-brand-tint p-4 text-base text-ink">
          "{{ t('documentation.glossary.indonesianTerminology.classificationProgression.officialQuote') }}"
          <footer class="mt-1 text-sm text-ink-soft">— Kementerian Kesehatan RI</footer>
        </blockquote>

        <!-- Flow diagrams -->
        <div class="space-y-4">
          <div>
            <p class="text-sm font-semibold text-muted mb-2">
              {{ t('documentation.glossary.indonesianTerminology.classificationProgression.currentFlow') }}
            </p>
            <div class="flex flex-wrap items-center gap-2 text-sm">
              <span class="rounded-lg border border-rule bg-surface px-3 py-1 font-medium text-ink">Suspect</span>
              <Icon name="arrow-right" :size="14" class="text-muted" />
              <span class="rounded-lg border border-rule bg-surface px-3 py-1 font-medium text-ink">Probable</span>
              <Icon name="arrow-right" :size="14" class="text-muted" />
              <span class="rounded-lg border border-rule bg-surface px-3 py-1 font-medium text-ink">Confirmed</span>
              <Icon name="arrow-right" :size="14" class="text-muted" />
              <span class="rounded-lg border border-rule bg-surface px-3 py-1 font-medium text-ink">Recovery / Death</span>
            </div>
          </div>
          <div>
            <p class="text-sm font-semibold text-muted mb-2">
              {{ t('documentation.glossary.indonesianTerminology.classificationProgression.legacyFlow') }}
            </p>
            <div class="flex flex-wrap items-center gap-2 text-sm">
              <span class="rounded-lg border border-rule bg-surface px-3 py-1 font-medium text-ink">ODP</span>
              <Icon name="arrow-right" :size="14" class="text-muted" />
              <span class="rounded-lg border border-rule bg-surface px-3 py-1 font-medium text-ink">PDP</span>
              <Icon name="arrow-right" :size="14" class="text-muted" />
              <span class="rounded-lg border border-rule bg-surface px-3 py-1 font-medium text-ink">OTG</span>
              <Icon name="arrow-right" :size="14" class="text-muted" />
              <span class="rounded-lg border border-rule bg-surface px-3 py-1 font-medium text-ink">Confirmed</span>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/icons/Icon.vue'
import MathFormula from '@/components/MathFormula.vue'

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
