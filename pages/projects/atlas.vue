<script setup lang="ts">
import { profile, projects } from '~/data/portfolio'

const atlas = projects.find((project) => project.slug === 'atlas')
useHead({
  title: 'Atlas — Case study',
  meta: [{ name: 'description', content: 'A case study of Atlas, a calm operations desk for independent teams.' }]
})
</script>

<template>
  <div class="content-column">
    <NuxtLink class="case-back" to="/#projects">← Back to projects</NuxtLink>
    <header class="case-header">
      <div class="eyebrow">02 / Projects / Case study</div>
      <h1>Atlas gives small teams one clear place to keep work moving.</h1>
      <p class="case-lede">An operations desk for mapping work, ownership, and decisions without turning every update into another meeting.</p>
      <dl class="case-meta">
        <div><dt>Role</dt><dd>Product engineer · solo build</dd></div>
        <div><dt>Timeline</dt><dd>12 weeks · 2025</dd></div>
        <div><dt>Stack</dt><dd>Nuxt · TypeScript · Postgres</dd></div>
      </dl>
    </header>

    <section class="case-section">
      <h2>Problem and goal</h2>
      <p>Small teams often have the information they need, but it lives across threads, documents, and memory. Atlas started as a focused question: what if a team could open one page and understand what is moving, who owns it, and why a decision was made?</p>
      <p>The goal was a small, dependable record that made the next action obvious while staying pleasant to update.</p>
    </section>

    <section class="case-section">
      <h2>My contribution</h2>
      <p>I shaped the information model, designed the core interaction patterns, built the Nuxt interface, and implemented the API and persistence layer. I also set up deployment and wrote the first onboarding flow.</p>
      <div class="tag-row mt-6"><span class="tag">Interface</span><span class="tag">Backend</span><span class="tag">Data</span><span class="tag">Deployment</span></div>
    </section>

    <section class="case-section">
      <h2>Product walkthrough</h2>
      <div class="case-steps">
        <div class="case-step"><span class="case-step-index">01 / map</span><div><h3>Start with the work</h3><p>Projects open as a map of active threads. The first view gives a useful overview without hiding the details underneath it.</p></div></div>
        <div class="case-step"><span class="case-step-index">02 / decide</span><div><h3>Keep decisions beside context</h3><p>A decision is captured where the work lives, with a short reason and a visible owner. Future readers get the why, not just the what.</p></div></div>
        <div class="case-step"><span class="case-step-index">03 / share</span><div><h3>Make the next update easy</h3><p>Updates are deliberately small: progress, blocker, next step. The system gives teams a consistent language without making them fill out a report.</p></div></div>
      </div>
    </section>

    <section class="case-section">
      <h2>Technical decisions</h2>
      <p>The interface is a Nuxt application with server routes that keep the browser close to the data model. PostgreSQL stores projects, threads, and decisions as separate records, which keeps history queryable and makes the UI easy to extend.</p>
      <p>I chose a small API surface and server-side validation over a broad client state layer. That keeps permissions and writes in one place and leaves the frontend responsible for presentation and optimistic feedback.</p>
    </section>

    <section class="case-section">
      <h2>Constraints and tradeoffs</h2>
      <p>Atlas could have started as a richer collaborative editor, but that would have put real-time presence ahead of the core record. The first release keeps updates atomic and legible. A future version could add presence once teams prove they need it.</p>
    </section>

    <section class="case-section">
      <h2>Outcome</h2>
      <p>The first version shipped as a focused working desk for small teams. It replaced the weekly hunt through updates with a record people could scan, trust, and maintain in a few minutes.</p>
      <div class="case-cta">
        <a v-if="atlas?.demo" class="button button-primary" :href="atlas.demo" target="_blank" rel="noreferrer">Open live demo ↗</a>
        <a v-if="atlas?.source" class="button button-secondary" :href="atlas.source" target="_blank" rel="noreferrer">View source ↗</a>
        <a class="button button-secondary" :href="`mailto:${profile.email}`">Start a conversation</a>
      </div>
    </section>

    <footer class="site-footer"><div class="site-footer-row"><span>Atlas / 2025</span><NuxtLink class="inline-link" to="/#projects">All projects ↗</NuxtLink></div></footer>
  </div>
</template>
