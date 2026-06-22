<script setup lang="ts">
import type { Project } from '../../data/portfolio'
import { ExternalLink } from 'lucide-vue-next'
import {
  Landmark,
  Dumbbell,
  BarChart3,
  Truck,
  Ticket,
  Building2,
} from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps<{
  project: Project
  index: number
}>()

const iconMap: Record<string, typeof Landmark> = {
  landmark: Landmark,
  dumbbell: Dumbbell,
  'bar-chart': BarChart3,
  truck: Truck,
  ticket: Ticket,
  building: Building2,
}

const Icon = computed(() => iconMap[props.project.icon] ?? Landmark)
</script>

<template>
  <article
    v-motion
    :initial="{ opacity: 0, y: 40 }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: { duration: 500, delay: index * 100 },
    }"
    class="group glass glass-hover rounded-2xl p-6 lg:p-8 flex flex-col h-full"
  >
    <div class="flex items-start justify-between mb-5">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center border border-white/[0.08] group-hover:scale-110 transition-transform duration-300">
          <component :is="Icon" class="w-6 h-6 text-accent-blue" />
        </div>
        <span class="text-xs font-semibold uppercase tracking-wider text-accent-purple">
          {{ project.category }}
        </span>
      </div>
      <ExternalLink class="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    <h3 class="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-blue transition-colors">
      {{ project.title }}
    </h3>

    <p class="text-sm text-text-secondary leading-relaxed flex-grow mb-6">
      {{ project.description }}
    </p>

    <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/[0.06]">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.03] text-text-muted"
      >
        {{ tag }}
      </span>
    </div>
  </article>
</template>
