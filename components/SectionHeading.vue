<script setup lang="ts">
defineProps<{ index: string; title: string; note?: string }>()
</script>

<template>
  <div class="section-heading">
    <div>
      <div class="section-index">/{{ index }}</div>
      <h2 class="section-title">{{ title }}</h2>
    </div>
    <span v-if="note" class="eyebrow">{{ note }}</span>
  </div>
</template>
