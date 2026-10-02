<script setup lang="ts">
import { profile, projects } from '~/data/portfolio'

const atlas = projects.find((project) => project.slug === 'atlas')
useHead({
  title: 'Atlas — Case study',
  meta: [{ name: 'description', content: 'A case study of Atlas, a calm operations desk for independent teams.' }]
})
</script>

<template>
  <div class="relative z-[1] mx-auto w-full max-w-[880px] px-9 pb-[110px] pt-[72px] max-[820px]:px-5 max-[820px]:pb-[78px] max-[820px]:pt-[52px]">
    <NuxtLink class="inline-flex font-mono text-[0.7rem] text-[var(--muted)] no-underline hover:text-[var(--text)]" to="/#projects">← Back to projects</NuxtLink>
    <header class="border-b border-[var(--line)] pb-11 pt-[42px]">
      <div class="font-mono text-[0.7rem] uppercase leading-[1.3] tracking-[0.08em] text-[var(--faint)]">02 / Projects / Case study</div>
      <h1 class="mb-[13px] mt-[22px] max-w-[690px] text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.03] tracking-[-0.07em]">Atlas gives small teams one clear place to keep work moving.</h1>
      <p class="max-w-[625px] text-[1.02rem] text-[var(--muted)]">An operations desk for mapping work, ownership, and decisions without turning every update into another meeting.</p>
      <dl class="mt-[30px] grid grid-cols-3 gap-5 max-[620px]:grid-cols-1 max-[620px]:gap-[14px]">
        <div class="border-t border-[var(--line)] pt-[10px]"><dt class="font-mono text-[0.65rem] uppercase text-[var(--faint)]">Role</dt><dd class="mb-0 ml-0 mr-0 mt-[5px] text-[0.8rem]">Product engineer · solo build</dd></div>
        <div class="border-t border-[var(--line)] pt-[10px]"><dt class="font-mono text-[0.65rem] uppercase text-[var(--faint)]">Timeline</dt><dd class="mb-0 ml-0 mr-0 mt-[5px] text-[0.8rem]">12 weeks · 2025</dd></div>
        <div class="border-t border-[var(--line)] pt-[10px]"><dt class="font-mono text-[0.65rem] uppercase text-[var(--faint)]">Stack</dt><dd class="mb-0 ml-0 mr-0 mt-[5px] text-[0.8rem]">Nuxt · TypeScript · Postgres</dd></div>
      </dl>
    </header>

    <section class="border-b border-[var(--line)] py-10">
      <h2 class="mb-3 mt-0 text-[1.16rem] tracking-[-0.03em]">Problem and goal</h2>
      <p class="mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">Small teams often have the information they need, but it lives across threads, documents, and memory. Atlas started as a focused question: what if a team could open one page and understand what is moving, who owns it, and why a decision was made?</p>
      <p class="mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">The goal was a small, dependable record that made the next action obvious while staying pleasant to update.</p>
    </section>

    <section class="border-b border-[var(--line)] py-10">
      <h2 class="mb-3 mt-0 text-[1.16rem] tracking-[-0.03em]">My contribution</h2>
      <p class="mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">I shaped the information model, designed the core interaction patterns, built the Nuxt interface, and implemented the API and persistence layer. I also set up deployment and wrote the first onboarding flow.</p>
      <div class="flex flex-wrap gap-[7px] mt-6"><span class="border border-[var(--line)] px-[6px] py-[3px] font-mono text-[0.62rem] text-[var(--muted)]">Interface</span><span class="border border-[var(--line)] px-[6px] py-[3px] font-mono text-[0.62rem] text-[var(--muted)]">Backend</span><span class="border border-[var(--line)] px-[6px] py-[3px] font-mono text-[0.62rem] text-[var(--muted)]">Data</span><span class="border border-[var(--line)] px-[6px] py-[3px] font-mono text-[0.62rem] text-[var(--muted)]">Deployment</span></div>
    </section>

    <section class="border-b border-[var(--line)] py-10">
      <h2 class="mb-3 mt-0 text-[1.16rem] tracking-[-0.03em]">Product walkthrough</h2>
      <div class="mt-[26px] grid gap-0">
        <div class="grid grid-cols-[84px_1fr] gap-[18px] border-t border-[var(--line)] py-[18px] max-[620px]:grid-cols-[52px_minmax(0,1fr)] max-[620px]:gap-[10px]"><span class="font-mono text-[0.68rem] text-[var(--faint)]">01 / map</span><div><h3 class="mb-[5px] mt-0 text-[0.92rem]">Start with the work</h3><p class="text-[0.8rem] mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">Projects open as a map of active threads. The first view gives a useful overview without hiding the details underneath it.</p></div></div>
        <div class="grid grid-cols-[84px_1fr] gap-[18px] border-t border-[var(--line)] py-[18px] max-[620px]:grid-cols-[52px_minmax(0,1fr)] max-[620px]:gap-[10px]"><span class="font-mono text-[0.68rem] text-[var(--faint)]">02 / decide</span><div><h3 class="mb-[5px] mt-0 text-[0.92rem]">Keep decisions beside context</h3><p class="text-[0.8rem] mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">A decision is captured where the work lives, with a short reason and a visible owner. Future readers get the why, not just the what.</p></div></div>
        <div class="grid grid-cols-[84px_1fr] gap-[18px] border-t border-[var(--line)] py-[18px] max-[620px]:grid-cols-[52px_minmax(0,1fr)] max-[620px]:gap-[10px]"><span class="font-mono text-[0.68rem] text-[var(--faint)]">03 / share</span><div><h3 class="mb-[5px] mt-0 text-[0.92rem]">Make the next update easy</h3><p class="text-[0.8rem] mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">Updates are deliberately small: progress, blocker, next step. The system gives teams a consistent language without making them fill out a report.</p></div></div>
      </div>
    </section>

    <section class="border-b border-[var(--line)] py-10">
      <h2 class="mb-3 mt-0 text-[1.16rem] tracking-[-0.03em]">Technical decisions</h2>
      <p class="mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">The interface is a Nuxt application with server routes that keep the browser close to the data model. PostgreSQL stores projects, threads, and decisions as separate records, which keeps history queryable and makes the UI easy to extend.</p>
      <p class="mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">I chose a small API surface and server-side validation over a broad client state layer. That keeps permissions and writes in one place and leaves the frontend responsible for presentation and optimistic feedback.</p>
    </section>

    <section class="border-b border-[var(--line)] py-10">
      <h2 class="mb-3 mt-0 text-[1.16rem] tracking-[-0.03em]">Constraints and tradeoffs</h2>
      <p class="mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">Atlas could have started as a richer collaborative editor, but that would have put real-time presence ahead of the core record. The first release keeps updates atomic and legible. A future version could add presence once teams prove they need it.</p>
    </section>

    <section class="border-b border-[var(--line)] py-10">
      <h2 class="mb-3 mt-0 text-[1.16rem] tracking-[-0.03em]">Outcome</h2>
      <p class="mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">The first version shipped as a focused working desk for small teams. It replaced the weekly hunt through updates with a record people could scan, trust, and maintain in a few minutes.</p>
      <div class="flex flex-wrap gap-[10px] pt-[34px]">
        <a v-if="atlas?.demo" class="inline-flex min-h-[42px] items-center justify-center rounded-[3px] border border-[var(--text)] px-[14px] py-2 font-mono text-[0.72rem] no-underline transition-colors duration-150 bg-[var(--inverse)] text-[var(--inverse-text)] hover:bg-transparent hover:text-[var(--text)]" :href="atlas.demo" target="_blank" rel="noreferrer">Open live demo ↗</a>
        <a v-if="atlas?.source" class="inline-flex min-h-[42px] items-center justify-center rounded-[3px] border border-[var(--text)] px-[14px] py-2 font-mono text-[0.72rem] no-underline transition-colors duration-150 border-[var(--line-strong)] text-[var(--text)] hover:border-[var(--text)] hover:bg-[var(--surface)]" :href="atlas.source" target="_blank" rel="noreferrer">View source ↗</a>
        <a class="inline-flex min-h-[42px] items-center justify-center rounded-[3px] border border-[var(--text)] px-[14px] py-2 font-mono text-[0.72rem] no-underline transition-colors duration-150 border-[var(--line-strong)] text-[var(--text)] hover:border-[var(--text)] hover:bg-[var(--surface)]" :href="`mailto:${profile.email}`">Start a conversation</a>
      </div>
    </section>

    <footer class="mt-[94px] border-t border-[var(--line)] pt-5 text-[0.75rem] text-[var(--muted)]"><div class="flex items-center justify-between gap-5 max-[620px]:flex-col max-[620px]:items-start"><span>Atlas / 2025</span><NuxtLink class="underline decoration-[var(--line-strong)] decoration-1 underline-offset-4 transition-colors duration-150 hover:text-[var(--muted)] hover:decoration-[var(--text)]" to="/#projects">All projects ↗</NuxtLink></div></footer>
  </div>
</template>
