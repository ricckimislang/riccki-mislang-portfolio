# Responsive portfolio and mobile navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make all portfolio routes fit and read well on phone and tablet screens, and animate the existing full-screen mobile menu accessibly.

**Architecture:** Keep the Nuxt route/component structure and existing monochrome theme. Make shared page widths and touch behavior consistent, then tune the home, case studies, project cards, and carousel at the existing breakpoints. Use Vue transition classes for the full-screen menu while retaining its keyboard and scroll management.

**Tech Stack:** Nuxt 3, Vue 3, Tailwind CSS, scoped component CSS, Motion Vue carousel.

---

## File map

- `app.vue`: global shell/sidebar boundary and page overflow behavior.
- `assets/css/main.css`: global responsive safeguards and shared focus/touch rules only if existing base styles do not cover them.
- `pages/index.vue`: homepage hero, achievements, lists, and footer.
- `pages/projects/index.vue`: project archive layout.
- `pages/projects/atlas.vue`, `pages/projects/field-notes.vue`: case-study metadata, walkthrough rows, actions, and footers.
- `components/MobileNav.vue`: opening/closing transition without replacing the user's uncommitted brand-label edit.
- `components/FeaturedProjects.vue`, `components/FeaturedProjectCard.vue`: carousel sizing and active card fit.
- `components/ProjectCard.vue`, `components/SectionHeading.vue`, `components/GitHubContributions.vue`, `components/ThemeToggle.vue`: shared narrow-width fit and usable control areas where needed.

## Task 1: Normalize the shared responsive frame

**Files:** `app.vue`, `assets/css/main.css`, route page wrappers.

- [ ] Compare shared margins, maximum width, and breakpoints across all route roots.
- [ ] Make route roots use consistent fluid side padding that remains legible at 320px, and keep the desktop sidebar offset only above its current 820px cutoff.
- [ ] Ensure decorative background layers never create horizontal scroll or cover interactive elements.
- [ ] Keep page-level overflow clipped only for decorative spill; do not clip vertically scrolling content or keyboard focus rings.

## Task 2: Reflow the homepage

**Files:** `pages/index.vue`, `components/SectionHeading.vue`.

- [ ] Keep the hero as two columns where both columns retain readable widths; stack the copy and 4:5 portrait on narrow screens.
- [ ] Keep achievement values and labels legible in a two-column phone grid, with borders aligned to actual columns.
- [ ] Let section headings and notes wrap without overlap at narrow widths.
- [ ] Preserve the existing single-column experience and certification treatments and verify long organization names and dates wrap safely.
- [ ] Keep the footer links visible and comfortably separated when stacked.

## Task 3: Reflow project archive and case studies

**Files:** `pages/projects/index.vue`, `pages/projects/atlas.vue`, `pages/projects/field-notes.vue`, `components/ProjectCard.vue`.

- [ ] Fit project archive cards to the available route width; allow headings, years, tags, and actions to wrap without causing page overflow.
- [ ] Retain the three-column case-study metadata layout only when each field has enough room; stack fields on narrow screens.
- [ ] Adapt walkthrough index/content columns so their labels remain readable and content starts at a consistent edge.
- [ ] Ensure action links have touch-friendly height and wrap as separate rows on narrow screens.
- [ ] Match footer behavior across both case studies.

## Task 4: Make featured projects and calendar usable at phone width

**Files:** `components/FeaturedProjects.vue`, `components/FeaturedProjectCard.vue`, `components/GitHubContributions.vue`.

- [ ] Size the carousel stage and active card from available width, accounting for section padding and controls; avoid relying on a fixed card width.
- [ ] Keep carousel count, dots, and previous/next controls reachable and large enough to tap.
- [ ] Ensure project title, stack labels, tags, and links wrap within the active card at 320px.
- [ ] Preserve calendar horizontal scrolling as its own labeled region, keep page width unchanged, and make its keyboard focus visible.

## Task 5: Animate the full-screen mobile navigation

**Files:** `components/MobileNav.vue`.

- [ ] Replace conditional immediate mount/unmount with a Vue transition that retains the menu during its leave animation.
- [ ] Add a short overlay fade and a subtle staggered upward reveal for menu links; use a matching brief close fade.
- [ ] Preserve the user's existing mobile brand-label edit.
- [ ] Keep focus placement, Tab wrapping, Escape close, return focus, scroll lock restoration, navigation click close, and desktop-resize close correct across transition start/end.
- [ ] Respect reduced-motion preferences with no travel or stagger when motion is reduced.
- [ ] Keep the menu button at least 44px high and give menu links generous vertical touch areas.

## Task 6: Inspect the complete responsive surface

**Files:** all routes and changed shared components.

- [ ] Start the local Nuxt site and inspect `/`, `/projects`, `/projects/atlas`, and `/projects/field-notes` at 320px, 375px, 768px, 820px, and desktop widths.
- [ ] Check both light and dark themes for clipped text, overlapping borders, unreadable labels, and focus contrast.
- [ ] Confirm page-level horizontal overflow is absent outside the contribution calendar's intentional scroll region.
- [ ] Open and close the menu with pointer, Enter/Space, Escape, Tab, and Shift+Tab; verify focus return and body scroll restoration.
- [ ] Repeat menu behavior with reduced motion enabled; verify the content state changes immediately.
- [ ] Use the carousel at phone and tablet widths and scroll the calendar with touch and keyboard.
- [ ] Build the Nuxt app after the viewport inspection and resolve any build failures caused by the changes.

## Acceptance criteria

- All four routes are usable at 320 CSS pixels without page-level horizontal scrolling.
- Tablet and desktop layout preserve the current centered reading column and sidebar behavior.
- The project carousel's active content and controls remain inside the viewport.
- The contribution calendar alone may scroll horizontally, with an accessible label and visible focus.
- The mobile menu animates open and closed, honors reduced motion, and preserves its existing keyboard and scroll behavior.
- The pre-existing uncommitted brand-label edit in `components/MobileNav.vue` remains intact.
