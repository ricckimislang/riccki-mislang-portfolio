<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button class="inline-flex w-full cursor-pointer items-center justify-between border border-[var(--line)] bg-transparent px-[10px] py-[9px] font-mono text-[0.68rem] text-[var(--text)] transition-colors duration-150 hover:border-[var(--line-strong)] hover:bg-[var(--surface)]" type="button" :aria-pressed="theme === 'dark'" aria-label="Toggle light and dark mode" @click="toggleTheme">
    <span>{{ theme === 'dark' ? 'Dark mode' : 'Light mode' }}</span>
    <span aria-hidden="true">{{ theme === 'dark' ? '◐' : '○' }}</span>
  </button>
</template>
