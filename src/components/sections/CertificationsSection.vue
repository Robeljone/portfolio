<script setup lang="ts">
import SectionHeader from '../ui/SectionHeader.vue'
import { certifications } from '../../data/portfolio'
import { Award, Brain, Users, Shield, Database } from 'lucide-vue-next'

const icons = [Database, Award, Users, Shield, Brain]
</script>

<template>
  <section id="certifications" class="py-20 lg:py-28">
    <div class="section-container">
      <SectionHeader
        label="Certifications"
        title="Professional Development"
        subtitle="Continuous learning across data, engineering, leadership, and emerging technologies."
      />

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(cert, index) in certifications"
          :key="cert.title"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visibleOnce="{
            opacity: 1,
            scale: 1,
            transition: { duration: 400, delay: index * 80 },
          }"
          class="glass glass-hover rounded-2xl p-6 lg:p-8 group"
        >
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <component :is="icons[index]" class="w-5 h-5 text-accent-blue" />
          </div>
          <span class="text-xs font-semibold uppercase tracking-wider text-accent-purple">
            {{ cert.category }}
          </span>
          <h3 class="mt-2 text-lg font-semibold text-text-primary">{{ cert.title }}</h3>
          <p class="mt-3 text-sm text-text-secondary leading-relaxed">
            {{ cert.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
