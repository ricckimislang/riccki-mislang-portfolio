<script setup lang="ts">
import { profile } from '~/data/portfolio'

useHead({
  title: 'Field Notes — Case study',
  meta: [{ name: 'description', content: 'A case study of Field Notes, a lightweight research log for product teams.' }]
})
</script>

<template>
  <div class="content-column">
    <NuxtLink class="case-back" to="/#projects">← Back to projects</NuxtLink>
    <header class="case-header">
      <div class="eyebrow">02 / Projects / Case study</div>
      <h1>Field Notes helps product teams turn interviews into patterns they can revisit.</h1>
      <p class="case-lede">A lightweight research log for capturing observations, grouping themes, and sharing the context behind product decisions.</p>
      <dl class="case-meta">
        <div><dt>Role</dt><dd>Product engineer · solo build</dd></div>
        <div><dt>Timeline</dt><dd>8 weeks · 2024</dd></div>
        <div><dt>Stack</dt><dd>Nuxt · TypeScript · SQLite</dd></div>
      </dl>
    </header>

    <section class="case-section">
      <h2>Problem and goal</h2>
      <p>Research notes often disappear into separate documents after a conversation ends. Field Notes started with a smaller goal: make observations easy to capture, then keep the path from a quote to a product pattern visible.</p>
      <p>The workflow needed to stay quick enough for a live conversation while giving a distributed team a shared place to return to later.</p>
    </section>

    <section class="case-section">
      <h2>My contribution</h2>
      <p>I shaped the note and theme model, designed the publishing flow, built the Nuxt interface, and added keyboard-friendly filtering for reviewing a growing research set.</p>
      <div class="tag-row mt-6"><span class="tag">Interface</span><span class="tag">Data</span><span class="tag">Accessibility</span></div>
    </section>

    <section class="case-section">
      <h2>Product walkthrough</h2>
      <div class="case-steps">
        <div class="case-step"><span class="case-step-index">01 / capture</span><div><h3>Write the observation first</h3><p>A note keeps the original observation, source, and date together so later synthesis can begin with the evidence.</p></div></div>
        <div class="case-step"><span class="case-step-index">02 / group</span><div><h3>Connect notes into themes</h3><p>Themes gather related observations without requiring a heavy taxonomy. A short description records what the group means.</p></div></div>
        <div class="case-step"><span class="case-step-index">03 / share</span><div><h3>Publish the useful thread</h3><p>Teams can share a focused view of a theme with the context needed to discuss a product decision.</p></div></div>
      </div>
    </section>

    <section class="case-section">
      <h2>Constraints and tradeoffs</h2>
      <p>The first version favors a small publishing workflow over a full research repository. Notes remain readable and portable, while the interface keeps the next action close to the current context.</p>
    </section>

    <section class="case-section">
      <h2>Outcome</h2>
      <p>Field Notes made synthesis visible across a distributed team with a small, fast workflow that connected interviews to the patterns they informed.</p>
      <div class="case-cta">
        <a class="button button-primary" :href="`mailto:${profile.email}`">Start a conversation</a>
        <NuxtLink class="button button-secondary" to="/#projects">All projects</NuxtLink>
      </div>
    </section>

    <footer class="site-footer"><div class="site-footer-row"><span>Field Notes / 2024</span><NuxtLink class="inline-link" to="/#projects">All projects ↗</NuxtLink></div></footer>
  </div>
</template>
