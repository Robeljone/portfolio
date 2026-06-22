<script setup lang="ts">
import SectionHeader from '../ui/SectionHeader.vue'
import { contactLinks } from '../../data/portfolio'
import { Mail, Linkedin, Github, Send } from 'lucide-vue-next'

const iconMap = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  telegram: Send,
} as const
</script>

<template>
  <section id="contact" class="py-20 lg:py-28 relative">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 blur-3xl rounded-full" />
    </div>

    <div class="section-container relative">
      <SectionHeader
        label="Contact"
        title="Let's Build Something Great"
        subtitle="Open to international opportunities, consulting engagements, and collaborative projects."
      />

      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="max-w-2xl mx-auto"
      >
        <div class="glass rounded-2xl p-8 lg:p-10">
          <div class="grid sm:grid-cols-2 gap-4">
            <a
              v-for="link in contactLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] transition-all duration-300 hover:border-accent-blue/30 hover:bg-white/[0.05] group"
            >
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <component :is="iconMap[link.icon]" class="w-5 h-5 text-accent-blue" />
              </div>
              <div class="min-w-0">
                <p class="text-xs font-semibold uppercase tracking-wider text-text-muted">{{ link.label }}</p>
                <p class="text-sm font-medium text-text-primary truncate group-hover:text-accent-blue transition-colors">
                  {{ link.value }}
                </p>
              </div>
            </a>
          </div>

          <div class="mt-8 pt-8 border-t border-white/[0.06] text-center">
            <p class="text-text-secondary mb-6">
              Ready to discuss your next project or opportunity?
            </p>
            <a href="mailto:robel.yohannes@email.com" class="btn-primary">
              <Mail class="w-4 h-4" />
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
