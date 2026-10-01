<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button class="theme-button" type="button" :aria-pressed="theme === 'dark'" aria-label="Toggle light and dark mode" @click="toggleTheme">
    <span>{{ theme === 'dark' ? 'Dark mode' : 'Light mode' }}</span>
    <span aria-hidden="true">{{ theme === 'dark' ? '◐' : '○' }}</span>
  </button>
</template>
