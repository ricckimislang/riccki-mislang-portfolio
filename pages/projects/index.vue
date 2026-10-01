<script setup lang="ts">
import { projects } from '~/data/portfolio'
useHead({ title: 'Projects — Alex Morgan' })
</script>

<template>
  <div class="content-column">
    <NuxtLink class="case-back" to="/#projects">← Back to profile</NuxtLink>
    <div class="case-header">
      <div class="eyebrow">02 / Projects</div>
      <h1>Selected work, with the decisions left in.</h1>
      <p class="case-lede">A short archive of products built with care for the people using them and the teams maintaining them.</p>
    </div>
    <div class="project-list mt-10">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
    </div>
  </div>
</template>
