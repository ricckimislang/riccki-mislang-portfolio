<script setup lang="ts">
import { projects } from '~/data/portfolio'
useHead({ title: 'Projects — Riccki Rejee Mislang' })
</script>

<template>
  <div class="relative z-[1] mx-auto w-full max-w-[880px] px-9 pb-[110px] pt-[72px] max-[820px]:px-5 max-[820px]:pb-[78px] max-[820px]:pt-[52px]">
    <NuxtLink class="inline-flex font-mono text-[0.7rem] text-[var(--muted)] no-underline hover:text-[var(--text)]" to="/#projects">← Back to profile</NuxtLink>
    <div class="border-b border-[var(--line)] pb-11 pt-[42px]">
      <div class="font-mono text-[0.7rem] uppercase leading-[1.3] tracking-[0.08em] text-[var(--faint)]">02 / Projects</div>
      <h1 class="mb-[13px] mt-[22px] max-w-[690px] text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.03] tracking-[-0.07em]">Selected work, with the decisions left in.</h1>
      <p class="max-w-[625px] text-[1.02rem] text-[var(--muted)]">A short archive of products built with care for the people using them and the teams maintaining them.</p>
    </div>
    <div class="grid gap-[14px] mt-10">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
    </div>
  </div>
</template>
