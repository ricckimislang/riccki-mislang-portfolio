<script setup lang="ts">
import { profile } from '~/data/portfolio'

const isOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
let previousBodyOverflow = ''
const links = [
  { id: 'profile', label: 'Profile' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'github', label: 'GitHub' }
]

const close = () => { isOpen.value = false }

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    event.preventDefault()
    close()
  }
}

watch(isOpen, async (open) => {
  if (!import.meta.client) return

  if (open) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return
  }

  document.body.style.overflow = previousBodyOverflow
  await nextTick()
  menuButton.value?.focus()
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  if (import.meta.client) document.body.style.overflow = previousBodyOverflow
})
</script>

<template>
  <div class="mobile-shell">
    <div class="mobile-bar">
      <NuxtLink class="wordmark" to="/#profile" @click="close">A<span>/</span>M <em>folio</em></NuxtLink>
      <button ref="menuButton" class="menu-button" type="button" :aria-expanded="isOpen" aria-controls="mobile-menu" @click="isOpen = !isOpen">
        {{ isOpen ? 'Close' : 'Menu' }}
      </button>
    </div>
    <nav v-if="isOpen" id="mobile-menu" class="mobile-menu" aria-label="Mobile navigation">
      <a v-for="(link, index) in links" :key="link.id" :href="`/#${link.id}`" @click="close">
        {{ String(index + 1).padStart(2, '0') }} — {{ link.label }}
      </a>
      <ThemeToggle />
      <a :href="profile.resume" @click="close">Résumé — request a copy</a>
      <a :href="`mailto:${profile.email}`" @click="close">{{ profile.email }}</a>
    </nav>
  </div>
</template>
