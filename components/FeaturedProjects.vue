<script setup lang="ts">
import { motion, useReducedMotion } from 'motion-v'
import type { FeaturedProject } from '~/data/featured-projects'
import FeaturedProjectCard from '~/components/FeaturedProjectCard.vue'

const props = defineProps<{ projects: FeaturedProject[] }>()
const activeIndex = ref(0)
const reduceMotion = useReducedMotion()
const carousel = ref<HTMLElement | null>(null)
const current = computed(() => props.projects[activeIndex.value])
const transition = computed(() => reduceMotion.value
  ? { duration: 0 }
  : { type: 'spring' as const, stiffness: 240, damping: 25, mass: 0.9 })

function distance(index: number) {
  const count = props.projects.length
  const offset = (index - activeIndex.value + count) % count
  return offset > count / 2 ? offset - count : offset
}

function cardPosition(index: number) {
  const offset = distance(index)
  const depth = Math.abs(offset)
  return {
    x: `${offset * 24}%`,
    y: depth * 15,
    scale: 1 - Math.min(depth, 3) * 0.09,
    rotate: offset * 4,
    opacity: depth > 2 ? 0 : depth === 0 ? 1 : depth === 1 ? 0.65 : 0.35,
    filter: offset === 0 ? 'grayscale(0)' : 'grayscale(1)'
  }
}

function select(index: number) {
  const count = props.projects.length
  if (!count) return
  // Return focus to the carousel before hiding a focused outgoing link.
  if (carousel.value?.querySelector('.featured-card a:focus')) carousel.value.focus({ preventScroll: true })
  activeIndex.value = ((index % count) + count) % count
}

function advance(direction: number) { select(activeIndex.value + direction) }

function onKeydown(event: KeyboardEvent) {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
  const actions: Record<string, () => void> = {
    ArrowLeft: () => advance(-1),
    ArrowRight: () => advance(1),
    Home: () => select(0),
    End: () => select(props.projects.length - 1)
  }
  if (actions[event.key]) {
    event.preventDefault()
    actions[event.key]()
  }
}

watch(() => props.projects.length, count => {
  if (activeIndex.value >= count) activeIndex.value = 0
})
</script>

<template>
  <div v-if="current" ref="carousel" class="featured-projects" role="region"
    aria-roledescription="carousel" aria-label="Featured projects" tabindex="0" @keydown="onKeydown">
    <div class="showcase-caption" aria-hidden="true">
      <span class="caption-label"><span class="caption-dot" /> A few things I've built</span>
      <span class="drag-hint">Swipe to explore <span>↔</span></span>
    </div>

    <div class="card-stage">
      <motion.div v-for="(project, index) in projects" :key="project.slug" class="card-slot"
        :data-depth="Math.abs(distance(index))"
        :initial="false" :animate="cardPosition(index)" :transition="transition"
        :style="{ zIndex: projects.length - Math.abs(distance(index)), pointerEvents: index === activeIndex ? 'auto' : 'none' }">
        <FeaturedProjectCard :project="project" :active="index === activeIndex"
          :position="index + 1" :total="projects.length" @advance="advance" />
      </motion.div>
    </div>

    <div class="showcase-controls">
      <span class="project-count" aria-hidden="true">{{ String(activeIndex + 1).padStart(2, '0') }} <span>/ {{ String(projects.length).padStart(2, '0') }}</span></span>
      <div class="project-dots" role="group" aria-label="Choose a project">
        <button v-for="(project, index) in projects" :key="project.slug" type="button"
          :aria-label="`Show ${project.name}`" :aria-disabled="index === activeIndex" :aria-current="index === activeIndex ? 'true' : undefined"
          :style="{ '--accent': current.accent }" @click="select(index)"><span /></button>
      </div>
      <div class="direction-controls">
        <button type="button" aria-label="Previous project" :disabled="projects.length < 2" @click="advance(-1)">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="m13 6-6 6 6 6M7 12h12" stroke="currentColor" stroke-width="1.5" /></svg>
        </button>
        <button type="button" aria-label="Next project" :disabled="projects.length < 2" @click="advance(1)">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="m11 6 6 6-6 6M17 12H5" stroke="currentColor" stroke-width="1.5" /></svg>
        </button>
      </div>
    </div>
    <p class="sr-only" aria-live="polite" aria-atomic="true">{{ current.name }}. Project {{ activeIndex + 1 }} of {{ projects.length }}.</p>
  </div>
</template>

<style scoped>
.featured-projects { padding-bottom: 8px; }
.showcase-caption { display: flex; align-items: center; justify-content: space-between; gap: 12px; font-family: 'DM Mono', monospace; font-size: 0.62rem; color: var(--muted); }
.caption-label { display: inline-flex; align-items: center; gap: 8px; }
.caption-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--muted); }
.drag-hint { font-size: 0.58rem; color: var(--muted); }
.drag-hint span { margin-left: 7px; }
.card-stage { display: grid; place-items: center; isolation: isolate; padding: 42px 0 54px; }
.card-slot { grid-area: 1 / 1; width: min(430px, calc(100% - 150px)); height: 100%; transform-origin: center 60%; }
.showcase-controls { display: flex; align-items: center; justify-content: space-between; gap: 10px; border-top: 1px solid var(--line); padding-top: 16px; }
.project-count { min-width: 60px; font-family: 'DM Mono', monospace; font-size: 0.65rem; }
.project-count span { color: var(--muted); }
.project-dots { display: flex; align-items: center; }
.project-dots button { display: grid; place-items: center; width: 28px; min-height: 44px; border: 0; padding: 0; background: none; cursor: pointer; }
.project-dots button span { width: 5px; height: 5px; border-radius: 50%; background: var(--line-strong); transition: background 200ms, width 200ms; }
.project-dots button[aria-current='true'] span { width: 18px; border-radius: 3px; background: var(--accent); }
.project-dots button:hover span { background: var(--text); }
.direction-controls { display: flex; gap: 7px; }
.direction-controls button { display: grid; place-items: center; width: 44px; height: 44px; border: 1px solid var(--line); border-radius: 50%; background: var(--bg); cursor: pointer; transition: background 150ms, border-color 150ms; }
.direction-controls button:hover { border-color: var(--line-strong); background: var(--surface); }
.direction-controls button:disabled { opacity: 0.4; cursor: default; }
@media (max-width: 620px) {
  .card-slot { width: calc(100% - 58px); max-width: 370px; }
  .card-slot:not([data-depth='0']):not([data-depth='1']) { visibility: hidden; }
  .card-stage { padding: 34px 0 47px; }
  .showcase-caption { font-size: 0.57rem; }
  .drag-hint { font-size: 0.53rem; }
  .project-dots button { width: 24px; }
  .project-count { min-width: 45px; font-size: 0.59rem; }
  .direction-controls { gap: 5px; }
}
@media (max-width: 360px) {
  .drag-hint { display: none; }
  .project-count { display: none; }
}
@media (prefers-reduced-motion: reduce) { .project-dots button span { transition: none; } }
</style>
