<script setup lang="ts">
import { personalInfo, techStack } from '../../data/portfolio'
import { ArrowDown, Download, Mail, FolderOpen } from 'lucide-vue-next'

const doubledStack = [...techStack, ...techStack]
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent-blue/10 blur-3xl animate-pulse-glow" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-purple/10 blur-3xl animate-pulse-glow" style="animation-delay: 2s" />
    </div>

    <div class="section-container relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span class="text-sm text-text-secondary">Available for opportunities</span>
        </div>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
          class="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
        >
          <span class="block text-text-primary">Hi, I'm</span>
          <span class="block mt-2 gradient-text">{{ personalInfo.name }}</span>
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="mt-6 text-lg sm:text-xl text-accent-blue/90 font-medium"
        >
          {{ personalInfo.title }}
        </p>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
          class="mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          {{ personalInfo.tagline }}
        </p>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
          class="mt-4 text-sm sm:text-base text-text-muted max-w-xl mx-auto leading-relaxed"
        >
          {{ personalInfo.bio }}
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }"
          class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" class="btn-primary w-full sm:w-auto">
            <FolderOpen class="w-4 h-4" />
            View Projects
          </a>
          <a :href="personalInfo.cvPath" download class="btn-secondary w-full sm:w-auto">
            <Download class="w-4 h-4" />
            Download CV
          </a>
          <a href="#contact" class="btn-ghost w-full sm:w-auto">
            <Mail class="w-4 h-4" />
            Contact Me
          </a>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 800, delay: 700 } }"
        class="mt-16 lg:mt-20"
      >
        <p class="text-center text-xs font-semibold uppercase tracking-[0.2em] text-text-muted mb-6">
          Technology Stack
        </p>
        <div class="relative overflow-hidden glass rounded-2xl py-4">
          <div class="flex animate-marquee whitespace-nowrap">
            <span
              v-for="(tech, index) in doubledStack"
              :key="`${tech}-${index}`"
              class="mx-4 px-5 py-2 glass rounded-full text-sm font-mono text-text-secondary"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-12">
        <a
          href="#about"
          class="animate-float text-text-muted hover:text-accent-blue transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown class="w-6 h-6" />
        </a>
      </div>
    </div>
  </section>
</template>
