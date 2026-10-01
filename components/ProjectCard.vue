<script setup lang="ts">
import type { Project } from '~/data/portfolio'
defineProps<{ project: Project }>()
</script>

<template>
  <article class="project-card">
    <div class="project-card-head">
      <h3>{{ project.name }}</h3>
      <span class="project-year">{{ project.year }}</span>
    </div>
    <p>{{ project.summary }} {{ project.outcome }}</p>
    <div class="tag-row" aria-label="Project layers">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div class="project-links">
      <NuxtLink class="inline-link" :to="`/projects/${project.slug}`">Read case study ↗</NuxtLink>
      <a v-if="project.demo" class="inline-link" :href="project.demo" target="_blank" rel="noreferrer">Live demo ↗</a>
      <a v-if="project.source" class="inline-link" :href="project.source" target="_blank" rel="noreferrer">Source ↗</a>
    </div>
  </article>
</template>
