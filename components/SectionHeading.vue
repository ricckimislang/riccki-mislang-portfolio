<script setup lang="ts">
defineProps<{ index: string; title: string; note?: string }>()
</script>

<template>
  <div class="mb-[30px] flex items-baseline justify-between gap-6 max-[620px]:mb-[22px]">
    <div>
      <div class="font-mono text-[0.72rem] text-[var(--faint)]">/{{ index }}</div>
      <h2 class="m-0 text-[1.35rem] font-semibold tracking-[-0.035em]">{{ title }}</h2>
    </div>
    <span v-if="note" class="font-mono text-[0.7rem] uppercase leading-[1.3] tracking-[0.08em] text-[var(--faint)]">{{ note }}</span>
  </div>
</template>
