<script setup lang="ts">
import { achievements, certifications, experience, profile, projects, repositories } from '~/data/portfolio'

useHead({
  title: `${profile.name} — ${profile.role}`,
  meta: [{ name: 'description', content: 'A considered portfolio of full stack products, systems, and experiments.' }]
})
</script>

<template>
  <div class="content-column">
    <section id="profile" class="section-anchor">
      <div class="hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">01 / Profile</div>
          <h1 class="display-name">Alex <span>Morgan</span></h1>
          <p class="hero-bio">I build thoughtful web products for teams doing meaningful work. My best days sit where a clear interface meets a dependable system.</p>
          <p class="hero-bio">Currently making tools for small teams, with an eye for the quiet details that help people move with confidence.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projects">View projects</a>
            <a class="button button-secondary" :href="`mailto:${profile.email}`">Contact me</a>
          </div>
        </div>
        <div class="portrait" role="img" aria-label="Portrait placeholder for Alex Morgan">
          <small>portrait / 4:5</small>
        </div>
      </div>
      <div class="proof-row" aria-label="Selected achievements">
        <div v-for="item in achievements" :key="item.label" class="proof-item">
          <span class="proof-value">{{ item.value }}</span>
          <span class="proof-label">{{ item.label }}</span>
        </div>
      </div>
    </section>

    <section id="projects" class="section-block section-rule section-anchor">
      <SectionHeading index="02" title="Projects" note="selected work" />
      <div class="project-list">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </div>
    </section>

    <section id="experience" class="section-block section-rule section-anchor">
      <SectionHeading index="03" title="Experience" note="how I got here" />
      <div class="timeline">
        <article v-for="item in experience" :key="`${item.dates}-${item.organization}`" class="timeline-item">
          <div class="timeline-date">{{ item.dates }}</div>
          <div>
            <h3 class="timeline-role">{{ item.role }}</h3>
            <div class="timeline-org">{{ item.organization }}</div>
            <p class="timeline-copy">{{ item.copy }}</p>
          </div>
        </article>
      </div>
    </section>

    <section id="certifications" class="section-block section-rule section-anchor">
      <SectionHeading index="04" title="Certifications" note="verified learning" />
      <div class="credential-list">
        <div v-for="credential in certifications" :key="credential.name" class="credential-item">
          <div>
            <span class="credential-name">{{ credential.name }}</span>
            <span class="credential-meta">{{ credential.issuer }}</span>
          </div>
          <a class="credential-date inline-link" :href="credential.url" target="_blank" rel="noreferrer">{{ credential.date }} ↗</a>
        </div>
      </div>
    </section>

    <section id="github" class="section-block section-rule section-anchor">
      <SectionHeading index="05" title="GitHub" note="selected repositories" />
      <div class="repo-list">
        <div v-for="repo in repositories" :key="repo.name" class="repo-item">
          <div>
            <span class="repo-name">{{ repo.name }}</span>
            <span class="repo-copy">{{ repo.description }}</span>
          </div>
          <a class="repo-link" :href="repo.link" target="_blank" rel="noreferrer">View repo ↗</a>
        </div>
      </div>
      <p class="mt-6 text-sm text-[var(--muted)]">See the complete activity history on <a class="inline-link" :href="profile.github" target="_blank" rel="noreferrer">GitHub ↗</a>.</p>
    </section>

    <footer id="contact" class="site-footer">
      <div class="site-footer-row">
        <span>© {{ new Date().getFullYear() }} Alex Morgan</span>
        <a class="inline-link" href="#profile">Back to top ↑</a>
      </div>
    </footer>
  </div>
</template>
