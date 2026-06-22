<script setup lang="ts">
import SectionHeader from '../ui/SectionHeader.vue'
import { experience } from '../../data/portfolio'
import { Briefcase, BarChart2 } from 'lucide-vue-next'

const roleIcons = [Briefcase, BarChart2]
</script>

<template>
  <section id="experience" class="py-20 lg:py-28 relative">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-blue/5 blur-3xl rounded-full" />
    </div>

    <div class="section-container relative">
      <SectionHeader
        label="Experience"
        title="Professional Journey"
        subtitle="Delivering measurable impact through software engineering and data intelligence."
      />

      <div class="relative max-w-3xl mx-auto">
        <div class="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent" aria-hidden="true" />

        <div
          v-for="(item, index) in experience"
          :key="item.role"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: index * 200 },
          }"
          class="relative pl-16 lg:pl-20 pb-12 last:pb-0"
        >
          <div class="absolute left-3 lg:left-5 top-1 w-6 h-6 rounded-full bg-surface border-2 border-accent-blue flex items-center justify-center">
            <component :is="roleIcons[index]" class="w-3 h-3 text-accent-blue" />
          </div>

          <div class="glass rounded-2xl p-6 lg:p-8">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <h3 class="text-xl font-semibold text-text-primary">{{ item.role }}</h3>
              <span class="text-sm font-mono text-accent-purple">{{ item.Company}}</span>
              <span class="text-sm font-mono text-accent-purple">{{ item.period }}</span>
            </div>

            <ul class="space-y-3">
              <li
                v-for="highlight in item.highlights"
                :key="highlight"
                class="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
              >
                <span class="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                {{ highlight }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
