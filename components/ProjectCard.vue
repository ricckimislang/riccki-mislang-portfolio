<script setup lang="ts">
import type { Project } from '~/data/portfolio'
defineProps<{ project: Project }>()
</script>

<template>
  <article class="border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_52%,transparent)] px-6 pb-5 pt-[23px] transition-colors duration-150 hover:border-[var(--line-strong)] hover:bg-[var(--surface)]">
    <div class="flex items-start justify-between gap-[18px]">
      <h3 class="m-0 text-[1.12rem] font-semibold tracking-[-0.03em]">{{ project.name }}</h3>
      <span class="font-mono text-[0.68rem] text-[var(--faint)]">{{ project.year }}</span>
    </div>
    <p class="mb-[19px] mt-[10px] max-w-[650px] text-[var(--muted)]">{{ project.summary }} {{ project.outcome }}</p>
    <div class="flex flex-wrap gap-[7px]" aria-label="Project layers">
      <span v-for="tag in project.tags" :key="tag" class="border border-[var(--line)] px-[6px] py-[3px] font-mono text-[0.62rem] text-[var(--muted)]">{{ tag }}</span>
    </div>
    <div class="mt-[19px] flex flex-wrap gap-[15px] font-mono text-[0.68rem]">
      <NuxtLink class="underline decoration-[var(--line-strong)] decoration-1 underline-offset-4 transition-colors duration-150 hover:text-[var(--muted)] hover:decoration-[var(--text)]" :to="`/projects/${project.slug}`">Read case study ↗</NuxtLink>
      <a v-if="project.demo" class="underline decoration-[var(--line-strong)] decoration-1 underline-offset-4 transition-colors duration-150 hover:text-[var(--muted)] hover:decoration-[var(--text)]" :href="project.demo" target="_blank" rel="noreferrer">Live demo ↗</a>
      <a v-if="project.source" class="underline decoration-[var(--line-strong)] decoration-1 underline-offset-4 transition-colors duration-150 hover:text-[var(--muted)] hover:decoration-[var(--text)]" :href="project.source" target="_blank" rel="noreferrer">Source ↗</a>
    </div>
  </article>
</template>
