<script setup lang="ts">
import { achievements, certifications, experience, profile, projects, repositories } from '~/data/portfolio'

useHead({
  title: `${profile.name} — ${profile.role}`,
  meta: [{ name: 'description', content: 'A considered portfolio of full stack products, systems, and experiments.' }]
})
</script>

<template>
  <div
    class="relative z-[1] mx-auto w-full max-w-[880px] px-9 pb-[110px] pt-[72px] max-[820px]:px-5 max-[820px]:pb-[78px] max-[820px]:pt-[52px]">
    <section id="profile" class="scroll-mt-8">
      <div
        class="grid grid-cols-1 items-stretch gap-[30px] min-[621px]:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] min-[621px]:gap-9">
        <div class="min-w-0">
          <div class="font-mono text-[0.7rem] uppercase leading-[1.3] tracking-[0.08em] text-[var(--faint)] mb-7">01 /
            Profile</div>
          <h1 class="m-0 font-mono font-medium leading-[0.98] tracking-[-0.1em] text-[clamp(2.4rem,5vw,4.3rem)]">Alex
            <span class="text-[var(--muted)]">Morgan</span></h1>
          <p class="mt-[26px] max-w-[490px] text-[1.02rem] leading-[1.75] text-[var(--muted)]">I build thoughtful web
            products for teams doing meaningful work. My best days sit where a clear interface meets a dependable
            system.</p>
          <p class="mt-[10px] max-w-[490px] text-[1.02rem] leading-[1.75] text-[var(--muted)]">Currently making tools
            for small teams, with an eye for the quiet details that help people move with confidence.</p>
          <div class="mt-[30px] flex flex-wrap gap-[10px]">
            <a class="inline-flex min-h-[42px] items-center justify-center rounded-[3px] border border-[var(--text)] px-[14px] py-2 font-mono text-[0.72rem] no-underline transition-colors duration-150 bg-[var(--inverse)] text-[var(--inverse-text)] hover:bg-transparent hover:text-[var(--text)]"
              href="#projects">View projects</a>
            <a class="inline-flex min-h-[42px] items-center justify-center rounded-[3px] border border-[var(--text)] px-[14px] py-2 font-mono text-[0.72rem] no-underline transition-colors duration-150 border-[var(--line-strong)] text-[var(--text)] hover:border-[var(--text)] hover:bg-[var(--surface)]"
              :href="`mailto:${profile.email}`">Contact me</a>
          </div>
        </div>
        <div
          class="relative flex w-full items-end justify-start overflow-hidden border border-[var(--line-strong)] bg-[linear-gradient(145deg,var(--surface-strong),var(--surface))] p-3 text-[var(--muted)] before:absolute before:inset-x-[17%] before:bottom-0 before:top-[13%] before:rounded-t-[100px] before:border before:border-b-0 before:border-[var(--line-strong)] after:absolute after:inset-x-[33%] after:top-[25%] after:aspect-square after:rounded-full after:border after:border-[var(--line-strong)] max-[620px]:aspect-[4/5] max-[620px]:max-w-[300px]"
          role="img" aria-label="Portrait placeholder for Alex Morgan">
          <small class="relative z-[1] font-mono text-[0.62rem]">portrait / 4:5</small>
        </div>
      </div>
      <div class="mt-[66px] grid grid-cols-2 gap-4 max-[620px]:mt-12 max-[620px]:grid-cols-1 max-[620px]:gap-5"
        aria-label="Selected achievements">
        <div v-for="item in achievements" :key="item.label" class="border-t border-[var(--line-strong)] pt-[13px]">
          <span class="block font-mono text-[1.02rem] font-medium">{{ item.value }}</span>
          <span class="mt-[3px] block text-[0.77rem] text-[var(--muted)]">{{ item.label }}</span>
        </div>
      </div>
    </section>

    <section id="projects" class="pt-[74px] max-[620px]:pt-[58px] border-t border-[var(--line)] scroll-mt-8">
      <SectionHeading index="02" title="Projects" note="selected work" />
      <div class="grid gap-[14px]">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </div>
    </section>

    <section id="experience" class="pt-[74px] max-[620px]:pt-[58px] border-t border-[var(--line)] scroll-mt-8">
      <SectionHeading index="03" title="Experience" note="how I got here" />
      <div class="grid">
        <article v-for="item in experience" :key="`${item.dates}-${item.organization}`"
          class="grid grid-cols-[116px_minmax(0,1fr)] gap-6 border-t border-[var(--line)] pb-[22px] pt-5 max-[620px]:grid-cols-1 max-[620px]:gap-1">
          <div class="pt-[3px] font-mono text-[0.68rem] text-[var(--faint)] max-[620px]:order-first">{{ item.dates }}
          </div>
          <div>
            <h3 class="m-0 text-[0.99rem] font-semibold">{{ item.role }}</h3>
            <div class="text-[0.82rem] text-[var(--muted)]">{{ item.organization }}</div>
            <p class="mb-0 mt-2 text-[0.83rem] text-[var(--muted)]">{{ item.copy }}</p>
          </div>
        </article>
      </div>
    </section>

    <section id="certifications" class="pt-[74px] max-[620px]:pt-[58px] border-t border-[var(--line)] scroll-mt-8">
      <SectionHeading index="04" title="Certifications" note="verified learning" />
      <div class="grid">
        <div v-for="credential in certifications" :key="credential.name"
          class="grid grid-cols-[minmax(0,1fr)_auto] gap-[18px] border-t border-[var(--line)] py-[17px] max-[620px]:grid-cols-1 max-[620px]:gap-[5px]">
          <div>
            <span class="block text-[0.9rem] font-semibold">{{ credential.name }}</span>
            <span class="text-[0.76rem] text-[var(--muted)]">{{ credential.issuer }}</span>
          </div>
          <a class="text-right font-mono text-[0.66rem] text-[var(--faint)] max-[620px]:text-left underline decoration-[var(--line-strong)] decoration-1 underline-offset-4 transition-colors duration-150 hover:text-[var(--muted)] hover:decoration-[var(--text)]"
            :href="credential.url" target="_blank" rel="noreferrer">{{ credential.date }} ↗</a>
        </div>
      </div>
    </section>

    <section id="github" class="pt-[74px] max-[620px]:pt-[58px] border-t border-[var(--line)] scroll-mt-8">
      <SectionHeading index="05" title="GitHub" note="selected repositories" />
      <div class="grid">
        <div v-for="repo in repositories" :key="repo.name"
          class="grid grid-cols-[minmax(0,1fr)_auto] gap-[18px] border-t border-[var(--line)] py-[17px] max-[620px]:grid-cols-1 max-[620px]:gap-[5px]">
          <div>
            <span class="block text-[0.9rem] font-semibold">{{ repo.name }}</span>
            <span class="mt-[5px] text-[0.76rem] text-[var(--muted)]">{{ repo.description }}</span>
          </div>
          <a v-if="repo.link"
            class="self-start text-right font-mono text-[0.66rem] text-[var(--text)] underline underline-offset-[3px] max-[620px]:text-left"
            :href="repo.link" target="_blank" rel="noreferrer">View repo ↗</a>
        </div>
      </div>
      <p v-if="profile.github" class="mt-6 text-sm text-[var(--muted)]">See the complete activity history on <a
          class="underline decoration-[var(--line-strong)] decoration-1 underline-offset-4 transition-colors duration-150 hover:text-[var(--muted)] hover:decoration-[var(--text)]"
          :href="profile.github" target="_blank" rel="noreferrer">GitHub ↗</a>.</p>
      <p v-else class="mt-6 text-sm text-[var(--muted)]">Repository links will be added as projects are published.</p>
    </section>

    <footer id="contact" class="mt-[94px] border-t border-[var(--line)] pt-5 text-[0.75rem] text-[var(--muted)]">
      <div class="flex items-center justify-between gap-5 max-[620px]:flex-col max-[620px]:items-start">
        <span>© {{ new Date().getFullYear() }} Alex Morgan</span>
        <a class="underline decoration-[var(--line-strong)] decoration-1 underline-offset-4 transition-colors duration-150 hover:text-[var(--muted)] hover:decoration-[var(--text)]"
          href="#profile">Back to top ↑</a>
      </div>
    </footer>
  </div>
</template>
