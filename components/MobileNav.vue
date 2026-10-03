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
  <div class="hidden max-[820px]:block">
    <div class="relative z-[11] flex items-center justify-between border-b border-[var(--line)] px-5 py-[18px]">
      <NuxtLink class="font-mono text-[0.8rem] font-medium tracking-[-0.03em] no-underline" to="/#profile" @click="close">Riccki Rejee <span></span>Mislang</NuxtLink>
      <button ref="menuButton" class="cursor-pointer border border-[var(--line)] bg-transparent px-[9px] py-[7px] font-mono text-[0.7rem] text-[var(--text)]" type="button" :aria-expanded="isOpen" aria-controls="mobile-menu" @click="isOpen = !isOpen">
        {{ isOpen ? 'Close' : 'Menu' }}
      </button>
    </div>
    <nav v-if="isOpen" ref="menu" id="mobile-menu" class="fixed inset-0 z-[12] grid content-start gap-[10px] bg-[var(--bg)] px-5 pb-7 pt-[82px]" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <a class="border-b border-[var(--line)] px-1 py-[14px] font-mono no-underline" v-for="(link, index) in links" :key="link.id" :href="`/#${link.id}`" @click="close">
        {{ String(index + 1).padStart(2, '0') }} — {{ link.label }}
      </a>
      <div class="mt-[14px]"><ThemeToggle /></div>
      <a class="border-b border-[var(--line)] px-1 py-[14px] font-mono no-underline" :href="profile.resume" @click="close">Request résumé by email</a>
      <a class="border-b border-[var(--line)] px-1 py-[14px] font-mono no-underline" :href="`mailto:${profile.email}`" @click="close">{{ profile.email }}</a>
    </nav>
  </div>
</template>
