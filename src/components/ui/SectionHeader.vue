<script setup lang="ts">
defineProps<{
  label: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
    class="text-center mb-12 lg:mb-16"
  >
    <span class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-3">
      {{ label }}
    </span>
    <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-4 text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
      {{ subtitle }}
    </p>
    <div class="mt-6 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple" />
  </div>
</template>
