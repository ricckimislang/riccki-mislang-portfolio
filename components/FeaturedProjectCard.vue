<script setup lang="ts">
import { motion, type PanInfo } from 'motion-v'
import type { FeaturedProject } from '~/data/featured-projects'

const props = defineProps<{
  project: FeaturedProject
  active: boolean
  position: number
  total: number
}>()

const emit = defineEmits<{ advance: [direction: number] }>()
const placeholderLink = computed(() => props.project.link.startsWith('https://example.com/'))

function endSwipe(event: PointerEvent, info: PanInfo) {
  if (event.type === 'pointercancel' || !props.active) return
  // Only intentional horizontal gestures change the selected project.
  if (Math.abs(info.offset.x) <= Math.abs(info.offset.y)) return

  const longSwipe = Math.abs(info.offset.x) >= 55
  const flick = Math.abs(info.offset.x) >= 18 && Math.abs(info.velocity.x) >= 550
  if (longSwipe || flick) {
    const direction = longSwipe ? info.offset.x : info.velocity.x
    emit('advance', direction < 0 ? 1 : -1)
  }
}
</script>

<template>
  <motion.article
    class="featured-card"
    :style="{ '--accent': project.accent }"
    :data-active="active"
    :inert="!active"
    :aria-hidden="!active"
    role="group"
    aria-roledescription="slide"
    :aria-label="`${project.name}, ${position} of ${total}`"
    @pan-end="endSwipe"
  >
    <div class="card-topline">
      <span>Featured project</span>
      <span>{{ String(position).padStart(2, '0') }} / {{ String(total).padStart(2, '0') }}</span>
    </div>

    <div class="project-heading">
      <div class="project-logo" :class="{ 'has-image': project.logo }" aria-hidden="true">
        <img v-if="project.logo" :src="project.logo" alt="" draggable="false" />
        <span v-else>{{ project.monogram }}</span>
        <svg v-if="!project.logo" class="logo-mark" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M12 5v14" stroke="currentColor" stroke-width="1.5" />
        </svg>
      </div>
      <div class="project-heading-copy">
        <p class="project-category">{{ project.category }}</p>
        <h3>{{ project.name }}</h3>
      </div>
    </div>

    <p class="project-description">{{ project.summary }}</p>

    <div class="card-bottom">
      <div class="project-stack">
        <p class="stack-label">Tech stack</p>
        <ul v-if="project.techStack.length" class="project-tags" aria-label="Technology stack">
          <li v-for="technology in project.techStack" :key="technology">{{ technology }}</li>
        </ul>
        <p v-else class="stack-pending">Details coming soon</p>
      </div>
      <a :href="project.link" class="project-link" target="_blank" rel="noopener noreferrer"
        :tabindex="active ? 0 : -1" @pointerdown.stop @click.stop @dragstart.prevent>
        <span>Demo <span v-if="placeholderLink" class="link-placeholder">(placeholder)</span></span>
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
          <path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.5" />
        </svg>
      </a>
    </div>
  </motion.article>
</template>

<style scoped>
.featured-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 410px;
  height: 100%;
  padding: 24px 28px;
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  background: var(--bg);
  text-align: left;
  touch-action: pan-y;
  user-select: none;
  transition: border-color 300ms, box-shadow 300ms;
}
.featured-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(ellipse at 20% 0%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 58%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 300ms;
}
.featured-card[data-active='true'] {
  cursor: ew-resize;
  border-color: color-mix(in srgb, var(--accent) 45%, var(--line));
  box-shadow: 0 12px 40px color-mix(in srgb, var(--text) 7%, transparent),
    0 0 42px color-mix(in srgb, var(--accent) 16%, transparent);
}
.featured-card[data-active='true']::before { opacity: 1; }
.card-topline {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-family: 'DM Mono', monospace;
  font-size: 0.58rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
}
.project-heading {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  align-items: center;
  gap: 18px;
  margin: 28px 0 18px;
}
.project-heading-copy { min-width: 0; }
.project-logo {
  position: relative;
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  border: 1px solid color-mix(in srgb, var(--accent) 42%, transparent);
  border-radius: 17px;
  background: color-mix(in srgb, var(--accent) 14%, var(--bg));
  color: var(--accent);
  font-family: 'Manrope', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.09em;
}
.featured-card[data-active='true'] .project-logo {
  box-shadow: 0 0 26px color-mix(in srgb, var(--accent) 19%, transparent);
}
.project-logo img { width: 100%; height: 100%; object-fit: contain; padding: 10px; }
.project-logo.has-image { background: var(--surface); }
.logo-mark { position: absolute; top: 5px; right: 5px; width: 10px; height: 10px; opacity: 0.65; }
.project-category {
  margin: 0 0 7px;
  font-family: 'DM Mono', monospace;
  font-size: 0.61rem;
  line-height: 1.5;
  color: var(--muted);
}
h3 { margin: 0; font-size: 1.5rem; line-height: 1.2; font-weight: 600; letter-spacing: -0.05em; text-wrap: balance; }
.project-description { margin: 0 0 25px; font-size: 0.83rem; line-height: 1.8; color: var(--muted); }
.card-bottom { margin-top: auto; }
.project-stack { margin-bottom: 18px; }
.stack-label { margin: 0 0 8px; font-family: 'DM Mono', monospace; font-size: 0.55rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); }
.stack-pending { margin: 0; font-family: 'DM Mono', monospace; font-size: 0.6rem; color: var(--muted); }
.project-tags { display: flex; flex-wrap: wrap; gap: 6px; margin: 0; padding: 0; list-style: none; }
.project-tags li {
  padding: 3px 7px;
  border: 1px solid var(--line);
  border-radius: 3px;
  font-family: 'DM Mono', monospace;
  font-size: 0.56rem;
  line-height: 1.6;
  color: var(--muted);
}
.project-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 44px;
  border-top: 1px solid var(--line);
  padding-top: 13px;
  font-family: 'DM Mono', monospace;
  font-size: 0.67rem;
  text-decoration: none;
}
.project-link:hover { color: var(--accent); }
.link-placeholder { color: var(--muted); font-size: 0.58rem; }
@media (max-width: 620px) {
  .featured-card { min-height: 440px; padding: 21px 21px 18px; }
  .card-topline { font-size: 0.52rem; }
  .project-heading { grid-template-columns: 58px minmax(0, 1fr); gap: 13px; margin: 25px 0 20px; }
  .project-logo { width: 58px; height: 58px; border-radius: 14px; font-size: 1.7rem; }
  .project-category { font-size: 0.56rem; }
  h3 { font-size: 1.16rem; overflow-wrap: anywhere; }
  .project-description { font-size: 0.8rem; line-height: 1.75; }
}
@media (max-width: 360px) {
  .project-heading { grid-template-columns: 48px minmax(0, 1fr); gap: 10px; }
  .project-logo { width: 48px; height: 48px; border-radius: 12px; font-size: 1.45rem; }
  h3 { font-size: 1.05rem; }
}
@media (prefers-reduced-motion: reduce) {
  .featured-card, .featured-card::before { transition: none; }
}
</style>
