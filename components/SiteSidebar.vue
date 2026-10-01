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
  <aside class="sidebar" aria-label="Primary navigation">
    <NuxtLink class="wordmark" to="/#profile" aria-label="Alex Morgan home">A<span>/</span>M <em>folio</em></NuxtLink>
    <nav class="side-nav">
      <a v-for="(link, index) in links" :key="link.id" :href="`/#${link.id}`">
        <span>{{ String(index + 1).padStart(2, '0') }}</span>
        {{ link.label }}
      </a>
    </nav>
    <div class="sidebar-bottom">
      <ThemeToggle />
      <div class="side-meta">
        <a :href="profile.resume">Résumé — request a copy</a>
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      </div>
    </div>
  </aside>
</template>
