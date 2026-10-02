# Featured Projects Implementation Plan

> Execute inline in the user's existing portfolio checkout. Track the steps below and validate the actual browser behavior before completion.

**Goal:** Showcase the user's six projects in a centered card carousel with swipe gestures and spring transitions.

**Architecture:** A standalone featured-project dataset feeds a carousel that manages selection and circular positioning. A featured card handles its content, logo treatment, and Motion pan gesture. Cards remain stationary during a swipe; on release the carousel changes selection. Existing sample case-study routes remain intact.

**Tech Stack:** Nuxt 3, Vue 3, TypeScript, Motion for Vue, existing theme tokens, browser verification.

### 1. Establish verification and dependency

- [x] Verify that the original homepage has no featured carousel. The in-app browser check initially returned zero matching regions. Use the same browser for final interaction checks; standalone Chromium execution is unavailable on this host.
- [x] Install the runtime dependency with `npm install motion-v`.

### 2. Featured content

- [x] Create `data/featured-projects.ts` with the six approved descriptions, category labels, technology tags, monograms, distinct accent colors, optional logo image paths, and `https://example.com/projects/<slug>` URLs.
- [x] Define the card contract as `FeaturedProject { slug, name, category, summary, tags, monogram, accent, logo?, link }`. Do not add unsupported years or performance claims.

### 3. Card and carousel

- [x] Create `components/FeaturedProjectCard.vue`. Render the project logo, title, description, tags, and a visibly labeled placeholder demo link. Use Motion's `pan-end` event to recognize swipes without making the card draggable. Suppress gesture initiation on the link. Remove the placeholder label automatically when a real URL replaces example.com.
- [x] Create `components/FeaturedProjects.vue`. Use `motion.div` layers with percentage offsets, diminishing scale, slight rotation, and hidden distant layers. Loop selection with `(index + count) % count`. Initialize selection to Quizfi.
- [x] Advance on release when `abs(offset.x) >= 55` or `abs(offset.x) >= 18 && abs(velocity.x) >= 550`. Use displacement direction for committed long swipes and velocity direction for short flicks. Ignore vertical and cancelled pointer gestures.
- [x] Add 44px Previous/Next controls, labeled project dots, ArrowLeft/ArrowRight/Home/End keys, an announcement of current project and position, inactive `inert`/`aria-hidden`, and reduced-motion transitions.
- [x] Use existing theme tokens, a soft accent-colored glow, and responsive card offsets. Show only the closest neighbor on each side on mobile. Keep the stage height stable and prevent viewport overflow. Hide the redundant bottom count on screens under 360px so controls fit.
- [x] Replace the homepage's ProjectCard list with `<FeaturedProjects :projects="featuredProjects" />` and import the new dataset.

### 4. Verification and finish

- [x] Run `npm run build` and inspect its exit status. The final production build passed. Vue type-checking passed with `npx --yes --package vue-tsc --package typescript@5 vue-tsc --noEmit`.
- [x] Check desktop, 390px, and 320px layouts in the in-app browser. All six card descriptions fit, controls stay within the section, and there is no horizontal page overflow. Inspect both color themes. Reduced-motion handling was reviewed in code; browser media emulation was unavailable.
- [x] Verify native pointer swipes advance exactly one entry in both directions; short and vertical gestures leave Quizfi selected. Verify buttons, dots, wraparound, keyboard navigation, inert background cards, and example.com destinations. Check cancellation and link event isolation in code review.
- [x] Review `git diff --check` and the final scoped diff. Independent code review found no actionable issues. Browser logs for the final build contain no errors or warnings. Keep the user's concurrent MobileNav.vue edit untouched and leave implementation changes available to review on `codex/featured-projects`.

Saved preview: `C:/Users/Rek Bords/.codex/visualizations/2026/10/02/01a0fd3b-aca5-7803-ad47-cb3d496819b3/featured-projects.jpg`.
