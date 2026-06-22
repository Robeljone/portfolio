<script setup lang="ts">
import { personalInfo } from '../../data/portfolio'
</script>

<template>
  <footer class="border-t border-white/[0.06] mt-8">
    <div class="section-container py-12">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="text-center md:text-left">
          <p class="text-lg font-semibold gradient-text">{{ personalInfo.name }}</p>
          <p class="mt-2 text-sm text-text-secondary max-w-md">
            {{ personalInfo.footerStatement }}
          </p>
        </div>
        <p class="text-sm text-text-muted">
          &copy; {{ new Date().getFullYear() }} {{ personalInfo.name }}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
