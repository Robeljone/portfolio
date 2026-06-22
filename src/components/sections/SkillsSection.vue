<script setup lang="ts">
import SectionHeader from '../ui/SectionHeader.vue'
import { skillCategories } from '../../data/portfolio'
</script>

<template>
  <section id="skills" class="py-20 lg:py-28 relative">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-purple/5 blur-3xl rounded-full" />
    </div>

    <div class="section-container relative">
      <SectionHeader
        label="Technical Skills"
        title="Tools & Technologies"
        subtitle="A comprehensive toolkit spanning full-stack development, data engineering, and cloud infrastructure."
      />

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(category, catIndex) in skillCategories"
          :key="category.title"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: catIndex * 80 },
          }"
          class="glass glass-hover rounded-2xl p-6 lg:p-8 group"
        >
          <div class="flex items-center gap-3 mb-5">
            <div class="w-2 h-8 rounded-full bg-gradient-to-b from-accent-blue to-accent-purple group-hover:h-10 transition-all duration-300" />
            <h3 class="text-lg font-semibold text-text-primary">{{ category.title }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] text-text-secondary border border-white/[0.06] transition-colors hover:text-accent-blue hover:border-accent-blue/30"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
