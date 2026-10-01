<script setup lang="ts">
import { profile } from '~/data/portfolio'

const isOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const menu = ref<HTMLElement | null>(null)
let previousBodyOverflow = ''
const links = [
  { id: 'profile', label: 'Profile' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'github', label: 'GitHub' }
]

const close = () => { isOpen.value = false }

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

const onKeydown = (event: KeyboardEvent) => {
  if (!isOpen.value) return

  if (event.key === 'Escape') {
    event.preventDefault()
    close()
    return
  }

  if (event.key === 'Tab') {
    const focusable = menu.value ? Array.from(menu.value.querySelectorAll<HTMLElement>(focusableSelector)) : []
    if (!focusable.length) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }
}

watch(isOpen, async (open) => {
  if (!import.meta.client) return

  if (open) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    await nextTick()
    menu.value?.querySelector<HTMLElement>(focusableSelector)?.focus()
    return
  }

  document.body.style.overflow = previousBodyOverflow
  await nextTick()
  if (window.innerWidth <= 820) menuButton.value?.focus()
})

const closeOnDesktopResize = () => {
  if (window.innerWidth > 820) close()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', closeOnDesktopResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', closeOnDesktopResize)
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
    <nav v-if="isOpen" ref="menu" id="mobile-menu" class="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <a v-for="(link, index) in links" :key="link.id" :href="`/#${link.id}`" @click="close">
        {{ String(index + 1).padStart(2, '0') }} — {{ link.label }}
      </a>
      <ThemeToggle />
      <a :href="profile.resume" @click="close">Request résumé by email</a>
      <a :href="`mailto:${profile.email}`" @click="close">{{ profile.email }}</a>
    </nav>
  </div>
</template>
