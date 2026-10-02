<script setup lang="ts">
import { profile } from '~/data/portfolio'

useHead({
  title: 'Field Notes — Case study',
  meta: [{ name: 'description', content: 'A case study of Field Notes, a lightweight research log for product teams.' }]
})
</script>

<template>
  <div class="relative z-[1] mx-auto w-full max-w-[880px] px-9 pb-[110px] pt-[72px] max-[820px]:px-5 max-[820px]:pb-[78px] max-[820px]:pt-[52px]">
    <NuxtLink class="inline-flex font-mono text-[0.7rem] text-[var(--muted)] no-underline hover:text-[var(--text)]" to="/#projects">← Back to projects</NuxtLink>
    <header class="border-b border-[var(--line)] pb-11 pt-[42px]">
      <div class="font-mono text-[0.7rem] uppercase leading-[1.3] tracking-[0.08em] text-[var(--faint)]">02 / Projects / Case study</div>
      <h1 class="mb-[13px] mt-[22px] max-w-[690px] text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.03] tracking-[-0.07em]">Field Notes helps product teams turn interviews into patterns they can revisit.</h1>
      <p class="max-w-[625px] text-[1.02rem] text-[var(--muted)]">A lightweight research log for capturing observations, grouping themes, and sharing the context behind product decisions.</p>
      <dl class="mt-[30px] grid grid-cols-3 gap-5 max-[620px]:grid-cols-1 max-[620px]:gap-[14px]">
        <div class="border-t border-[var(--line)] pt-[10px]"><dt class="font-mono text-[0.65rem] uppercase text-[var(--faint)]">Role</dt><dd class="mb-0 ml-0 mr-0 mt-[5px] text-[0.8rem]">Product engineer · solo build</dd></div>
        <div class="border-t border-[var(--line)] pt-[10px]"><dt class="font-mono text-[0.65rem] uppercase text-[var(--faint)]">Timeline</dt><dd class="mb-0 ml-0 mr-0 mt-[5px] text-[0.8rem]">8 weeks · 2024</dd></div>
        <div class="border-t border-[var(--line)] pt-[10px]"><dt class="font-mono text-[0.65rem] uppercase text-[var(--faint)]">Stack</dt><dd class="mb-0 ml-0 mr-0 mt-[5px] text-[0.8rem]">Nuxt · TypeScript · SQLite</dd></div>
      </dl>
    </header>

    <section class="border-b border-[var(--line)] py-10">
      <h2 class="mb-3 mt-0 text-[1.16rem] tracking-[-0.03em]">Problem and goal</h2>
      <p class="mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">Research notes often disappear into separate documents after a conversation ends. Field Notes started with a smaller goal: make observations easy to capture, then keep the path from a quote to a product pattern visible.</p>
      <p class="mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">The workflow needed to stay quick enough for a live conversation while giving a distributed team a shared place to return to later.</p>
    </section>

    <section class="border-b border-[var(--line)] py-10">
      <h2 class="mb-3 mt-0 text-[1.16rem] tracking-[-0.03em]">My contribution</h2>
      <p class="mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">I shaped the note and theme model, designed the publishing flow, built the Nuxt interface, and added keyboard-friendly filtering for reviewing a growing research set.</p>
      <div class="flex flex-wrap gap-[7px] mt-6"><span class="border border-[var(--line)] px-[6px] py-[3px] font-mono text-[0.62rem] text-[var(--muted)]">Interface</span><span class="border border-[var(--line)] px-[6px] py-[3px] font-mono text-[0.62rem] text-[var(--muted)]">Data</span><span class="border border-[var(--line)] px-[6px] py-[3px] font-mono text-[0.62rem] text-[var(--muted)]">Accessibility</span></div>
    </section>

    <section class="border-b border-[var(--line)] py-10">
      <h2 class="mb-3 mt-0 text-[1.16rem] tracking-[-0.03em]">Product walkthrough</h2>
      <div class="mt-[26px] grid gap-0">
        <div class="grid grid-cols-[84px_1fr] gap-[18px] border-t border-[var(--line)] py-[18px] max-[620px]:grid-cols-[52px_minmax(0,1fr)] max-[620px]:gap-[10px]"><span class="font-mono text-[0.68rem] text-[var(--faint)]">01 / capture</span><div><h3 class="mb-[5px] mt-0 text-[0.92rem]">Write the observation first</h3><p class="text-[0.8rem] mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">A note keeps the original observation, source, and date together so later synthesis can begin with the evidence.</p></div></div>
        <div class="grid grid-cols-[84px_1fr] gap-[18px] border-t border-[var(--line)] py-[18px] max-[620px]:grid-cols-[52px_minmax(0,1fr)] max-[620px]:gap-[10px]"><span class="font-mono text-[0.68rem] text-[var(--faint)]">02 / group</span><div><h3 class="mb-[5px] mt-0 text-[0.92rem]">Connect notes into themes</h3><p class="text-[0.8rem] mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">Themes gather related observations without requiring a heavy taxonomy. A short description records what the group means.</p></div></div>
        <div class="grid grid-cols-[84px_1fr] gap-[18px] border-t border-[var(--line)] py-[18px] max-[620px]:grid-cols-[52px_minmax(0,1fr)] max-[620px]:gap-[10px]"><span class="font-mono text-[0.68rem] text-[var(--faint)]">03 / share</span><div><h3 class="mb-[5px] mt-0 text-[0.92rem]">Publish the useful thread</h3><p class="text-[0.8rem] mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">Teams can share a focused view of a theme with the context needed to discuss a product decision.</p></div></div>
      </div>
    </section>

    <section class="border-b border-[var(--line)] py-10">
      <h2 class="mb-3 mt-0 text-[1.16rem] tracking-[-0.03em]">Constraints and tradeoffs</h2>
      <p class="mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">The first version favors a small publishing workflow over a full research repository. Notes remain readable and portable, while the interface keeps the next action close to the current context.</p>
    </section>

    <section class="border-b border-[var(--line)] py-10">
      <h2 class="mb-3 mt-0 text-[1.16rem] tracking-[-0.03em]">Outcome</h2>
      <p class="mb-3 max-w-[680px] text-[var(--muted)] last:mb-0">Field Notes made synthesis visible across a distributed team with a small, fast workflow that connected interviews to the patterns they informed.</p>
      <div class="flex flex-wrap gap-[10px] pt-[34px]">
        <a class="inline-flex min-h-[42px] items-center justify-center rounded-[3px] border border-[var(--text)] px-[14px] py-2 font-mono text-[0.72rem] no-underline transition-colors duration-150 bg-[var(--inverse)] text-[var(--inverse-text)] hover:bg-transparent hover:text-[var(--text)]" :href="`mailto:${profile.email}`">Start a conversation</a>
        <NuxtLink class="inline-flex min-h-[42px] items-center justify-center rounded-[3px] border border-[var(--text)] px-[14px] py-2 font-mono text-[0.72rem] no-underline transition-colors duration-150 border-[var(--line-strong)] text-[var(--text)] hover:border-[var(--text)] hover:bg-[var(--surface)]" to="/#projects">All projects</NuxtLink>
      </div>
    </section>

    <footer class="mt-[94px] border-t border-[var(--line)] pt-5 text-[0.75rem] text-[var(--muted)]"><div class="flex items-center justify-between gap-5 max-[620px]:flex-col max-[620px]:items-start"><span>Field Notes / 2024</span><NuxtLink class="underline decoration-[var(--line-strong)] decoration-1 underline-offset-4 transition-colors duration-150 hover:text-[var(--muted)] hover:decoration-[var(--text)]" to="/#projects">All projects ↗</NuxtLink></div></footer>
  </div>
</template>
