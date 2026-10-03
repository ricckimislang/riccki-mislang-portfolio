# Responsive portfolio and mobile navigation design

## Goal

Make every portfolio route comfortable to read and use on mobile widths, and give the existing full-screen mobile navigation a deliberate opening animation.

## Product and screens

This is a monochrome personal portfolio for a full-stack developer, serving hiring teams and freelance clients. The work covers the home page, project index, and the Atlas and Field Notes case studies, along with their shared navigation, project cards, and GitHub contribution calendar.

## Existing design and structure

- Nuxt 3 with Vue and Tailwind CSS.
- Desktop uses a fixed 238px sidebar and a centered content column capped at 880px.
- At 820px and below, the sidebar is replaced by a compact mobile header and full-screen navigation.
- The palette, type, and background pattern already support light and dark themes.
- Several sections already change layout below 620px, but project cards, headings, metadata, and shared page spacing have a mixture of route-specific rules.
- The contribution calendar already preserves its dense weekly grid in a horizontally scrollable region.
- The mobile menu already handles Escape, keyboard focus wrapping, body scroll lock, and closing when the viewport becomes desktop-sized.

## Design questions

1. How should each route reflow across phone, tablet, and desktop widths without changing the portfolio's visual identity?
2. How should a full-screen menu open with clear visual feedback while preserving keyboard use and reduced-motion preferences?
3. How can we prevent page-level horizontal overflow while preserving intentionally dense content such as the contribution calendar?

## References and observations

- [Brittany Chiang](https://brittanychiang.com/) currently organizes a developer portfolio around a concise profile, experience, selected projects, and résumé access. This supports keeping the portfolio's existing content hierarchy when it reflows. The fetched page exposes semantic content but does not verify its mobile layout.
- [Paco Coursey](https://paco.me/) uses compact text-led sections for building, projects, writing, and contact. This supports retaining readable text lists and direct links instead of compressing content into small mobile cards. The fetched page does not verify its mobile layout.
- [WCAG 2.2 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) says pointer targets should be at least 24 by 24 CSS pixels, subject to stated exceptions. This design will use larger touch-friendly controls for the menu button and prominent actions.
- [WebKit: Responsive Design for Motion](https://webkit.org/blog/7551/responsive-design-for-motion/) describes adapting interface motion to user motion preferences. The menu transition will become immediate under `prefers-reduced-motion: reduce`.

## Common patterns

- Keep the information hierarchy and links intact as columns collapse.
- Reflow text and metadata into a single column when their side-by-side arrangement becomes cramped.
- Preserve dense data with a clearly labeled, keyboard-accessible scroll region when reflow would destroy its structure.
- Animate state changes briefly and provide an immediate path for reduced-motion users.

## Use and avoid

### Use

- Keep the current desktop sidebar, centered editorial column, monochrome theme, and light/dark support.
- Keep the full-screen mobile navigation selected by the user.
- Normalize route padding and fluid heading sizing, while using section-specific breakpoints where the content needs them.
- Give mobile menu links and controls comfortable touch areas and visible keyboard focus.
- Let only the contribution calendar scroll horizontally; other page content should fit the viewport at 320 CSS pixels and above.

### Avoid

- Replacing the existing design with a new visual system or changing the portfolio content hierarchy.
- Hiding metadata, contact actions, project details, or other content solely to fit small screens.
- Adding horizontal page scrolling to compensate for a cramped grid.
- Using motion that ignores reduced-motion settings or prevents keyboard users from opening and closing the menu.

## Direction

Use the existing 820px navigation breakpoint and the existing 620px content breakpoint as starting points, adjusting only where browser rendering shows a real fit problem. At phone widths, the hero stacks the introduction and portrait, achievements remain in a readable two-column grid, section headings wrap cleanly, and project and case-study details flow vertically. Tablet widths use available space without retaining the desktop sidebar when it would squeeze the reading column. The project carousel scales its active card to available width and keeps its controls reachable. The contribution calendar remains an explicitly labeled horizontal scroll area.

When the mobile menu opens, fade the full-screen background in and reveal the navigation links with a short, subtle upward motion and stagger. Close with a matching brief fade. Keep the current Escape handling, focus wrapping, return focus, body scroll lock, resize close, and navigation click behavior. The transition must not delay focus movement or navigation; reduced-motion users get an immediate state change.

All routes should be checked at narrow phone, standard phone, tablet, and desktop widths. Page-level overflow must be absent at 320px, and keyboard focus must remain visible in both themes.

## Implementation boundaries

- `app.vue`: shared page shell and sidebar/mobile header boundary.
- `pages/index.vue`: profile, achievements, experience, certifications, GitHub section, and footer layouts.
- `pages/projects/index.vue`, `pages/projects/atlas.vue`, `pages/projects/field-notes.vue`: shared route padding and case-study grids, metadata, walkthroughs, and actions.
- `components/MobileNav.vue`: transition and focus-preserving full-screen navigation. Retain the in-progress brand-label edit already present in this file.
- `components/FeaturedProjects.vue` and `components/FeaturedProjectCard.vue`: responsive carousel geometry, labels, and card content.
- `components/ProjectCard.vue`, `components/SectionHeading.vue`, `components/GitHubContributions.vue`, `components/ThemeToggle.vue`, and `assets/css/main.css`: shared fit, touch, focus, and scroll behavior as needed.

## Verification

- Build or generate the Nuxt site after implementation.
- Inspect all four routes at 320px, 375px, 768px, 820px, and desktop widths.
- Verify there is no horizontal overflow outside the contribution calendar.
- Open and close navigation using pointer and keyboard; confirm Escape, Tab wrapping, focus restoration, body scrolling, and desktop resize behavior.
- Repeat the motion check with reduced motion enabled and in both light and dark themes.
- Inspect carousel interaction and the contribution calendar's touch and keyboard scrolling.

## Limits

The web reference fetch exposed current page content but not interactive viewport captures, so reference observations about mobile layout are intentionally limited. The responsive recommendation is grounded in the existing project patterns and WCAG guidance, then will be checked against local renders at real viewport sizes.
