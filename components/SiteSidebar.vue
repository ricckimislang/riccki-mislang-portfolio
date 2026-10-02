<script setup lang="ts">
import { profile } from '~/data/portfolio'

const links = [
  { id: 'profile', label: 'Profile' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'github', label: 'GitHub' }
]
</script>

<template>
  <aside class="fixed inset-y-0 left-0 z-10 flex w-[238px] flex-col border-r border-[var(--line)] px-6 pb-7 pt-[34px] max-[820px]:hidden" aria-label="Primary navigation">
    <NuxtLink class="font-mono text-[0.8rem] font-medium tracking-[-0.03em] no-underline" to="/#profile" aria-label="Alex Morgan home">A<span>/</span>M <em class="not-italic text-[var(--muted)]">folio</em></NuxtLink>
    <nav class="mt-[70px] grid gap-[5px]">
      <a class="flex items-center justify-between border border-transparent px-2 py-[7px] font-mono text-[0.74rem] text-[var(--muted)] no-underline transition-colors duration-150 hover:border-[var(--line)] hover:text-[var(--text)]" v-for="(link, index) in links" :key="link.id" :href="`/#${link.id}`">
        <span class="text-[0.66rem] text-[var(--faint)]">{{ String(index + 1).padStart(2, '0') }}</span>
        {{ link.label }}
      </a>
    </nav>
    <div class="mt-auto grid gap-5">
      <ThemeToggle />
      <div class="grid gap-1 text-[0.76rem] text-[var(--muted)]">
        <a class="underline underline-offset-[3px]" :href="profile.resume">Request résumé by email</a>
        <a class="underline underline-offset-[3px]" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      </div>
    </div>
  </aside>
</template>
