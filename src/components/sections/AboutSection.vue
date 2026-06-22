<script setup lang="ts">
import SectionHeader from '../ui/SectionHeader.vue'
import { expertiseAreas, industries } from '../../data/portfolio'
import { Code2, BarChart3, Layers, Server, Rocket, Lightbulb } from 'lucide-vue-next'

const icons = [Code2, BarChart3, Layers, Server, Rocket, Lightbulb]
</script>

<template>
  <section id="about" class="py-20 lg:py-28">
    <div class="section-container">
      <SectionHeader
        label="About Me"
        title="Bridging Technology & Business Impact"
        subtitle="A multidisciplinary professional delivering end-to-end solutions across software engineering, data intelligence, and digital transformation."
      />

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="glass rounded-2xl p-8 lg:p-10"
        >
          <h3 class="text-xl font-semibold text-text-primary mb-6">Core Expertise</h3>
          <div class="grid sm:grid-cols-2 gap-4">
            <div
              v-for="(area, index) in expertiseAreas"
              :key="area"
              class="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] transition-colors hover:border-accent-blue/20"
            >
              <component :is="icons[index]" class="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
              <span class="text-sm font-medium text-text-secondary">{{ area }}</span>
            </div>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600, delay: 150 } }"
          class="glass rounded-2xl p-8 lg:p-10"
        >
          <h3 class="text-xl font-semibold text-text-primary mb-6">Industry Experience</h3>
          <p class="text-text-secondary leading-relaxed mb-6">
            I bring deep domain knowledge across diverse sectors, understanding the unique operational
            challenges and regulatory requirements that shape each industry. This cross-sector experience
            enables me to design solutions that are both technically robust and contextually relevant.
          </p>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="industry in industries"
              :key="industry"
              class="px-4 py-2 rounded-full text-sm font-medium glass border border-accent-purple/20 text-accent-purple"
            >
              {{ industry }}
            </span>
          </div>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
        class="mt-8 glass rounded-2xl p-8 lg:p-10 text-center"
      >
        <p class="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
          With a passion for solving complex problems through technology and data, I help organizations
          modernize operations, unlock insights from their data, and build products that drive sustainable
          growth. Whether it's an enterprise ERP system, a SaaS platform, or an executive analytics dashboard,
          I deliver solutions engineered for scale, reliability, and measurable ROI.
        </p>
      </div>
    </div>
  </section>
</template>
