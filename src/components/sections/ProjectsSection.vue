<script setup lang="ts">
import SectionHeader from '../ui/SectionHeader.vue'
import ProjectCard from '../ui/ProjectCard.vue'
import { projects } from '../../data/portfolio'
</script>

<template>
  <section id="projects" class="py-20 lg:py-28">
    <div class="section-container">
      <SectionHeader
        label="Featured Projects"
        title="Enterprise Solutions & Platforms"
        subtitle="A selection of production systems delivering measurable business value across multiple industries."
      />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>
