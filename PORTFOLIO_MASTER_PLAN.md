# Full Stack Developer Portfolio — Master Plan

*Planning date: 30 September 2026. Status: proposed direction for a new, empty repository.*

## 1. Purpose and launch scope

Build a fast, clear personal website that gives **hiring managers and freelance clients equal reasons to get in touch**. The first release should make three things obvious within the first screen: who you are, what you build across the stack, and where to see proof. Launch with **one or two finished projects** and give each a substantive case study. Add more work only when it is ready.

The portfolio itself can be simple. Your full stack skill is best demonstrated by the architecture, decisions, code, and results of the featured products rather than by adding a database or API to a personal site without a user need.

### Success criteria

- A visitor can identify your name, the kind of work you do, and the next action after a quick scan of the homepage.
- Each featured project explains the problem, your contribution, frontend work, backend/data work, tradeoffs, and outcome.
- Every project offers the relevant live demo, source, or an explanation when either cannot be shared.
- A hiring manager can reach your résumé and professional profile; a client can reach a clear project inquiry path.
- The site works on small phones through desktop, with keyboard access, readable contrast, and no layout overflow.

## 2. Reference research

These are current **examples to study**, not a popularity ranking or layouts to copy. The observations below come from the linked live sites. The recommendation is an inference from patterns that suit this brief.

| Reference | Useful observed pattern | What to borrow for your site |
|---|---|---|
| [Brittany Chiang](https://brittanychiang.com/) | Direct role statement, experience history, selected projects, résumé link. | Clear professional positioning and evidence a recruiter can scan. |
| [Paco Coursey](https://paco.me/) | Short introduction followed by compact, text-led project and writing lists. | Let project names and descriptions carry the page instead of decorative cards. |
| [Tania Rascia — Projects](https://www.taniarascia.com/projects/) | Projects have concise descriptions and separate article, demo, and source links where available. | Give each proof link a clear purpose. |
| [Anthony Fu](https://antfu.me/) | Contributions and recognizable projects appear in the introductory copy, with a route to the full list. | Put your strongest proof early, using specific claims you can support. |
| [Lee Robinson](https://leerob.com/) | Compact bio and a writing-first structure. | Consider a notes section later if you publish useful technical writing. |
| [Rauno Freiberg](https://rauno.me/) | Sparse project navigation with deliberate interaction details. | Apply small moments of polish to links and transitions while keeping navigation conventional. |

### Design styles worth considering

| Style | Character | Fit for this portfolio |
|---|---|
| **Editorial monochrome** | Strong typography, controlled spacing, thin rules, project rows, white/black/gray only. | **Chosen direction.** Reads well for both audiences and leaves room for technical case studies; supports light and dark modes. |
| Technical minimalism | Code-like metadata, denser layout, engineering motifs, restrained animation. | A possible tone for selected details, but too much of it could compete with the project stories. |
| Restrained bento grid | Differently sized project panels, simple fills, neat modular rhythm. | Useful once there are several varied projects; with only one or two it can look padded. |

The recurring useful pattern is **specific evidence presented with low visual noise**. “Minimal” should mean fewer distractions, not hidden links or thin, low-contrast text. Nielsen Norman Group's [flat-design guidance](https://www.nngroup.com/articles/flat-design-best-practices/) specifically recommends making interactive elements distinguishable from static content.

**Research limit:** the live pages were reviewed for content and navigation; exact typography, spacing, and color treatments were not measured. The suggested palette and layout are an original direction to test in a visual mockup, not a reproduction of any reference.

## 3. Recommended visual direction

Use **editorial monochrome flat design** with a professional, approachable tone. The site chrome uses only black, white, and neutral grays. The page should feel like a well-edited project notebook, with enough visual personality to be memorable but no effect that slows access to the work.

- **Layout:** a slim left sidebar for navigation and theme control on desktop; a centered main content container around 850–900px wide within the remaining space. Keep generous margins on both sides. The hero uses two compact columns inside that container for introduction and a small portrait, with a short achievements row below. On mobile, use a compact accessible navigation control and stack introduction, portrait, then achievements in reading order.
- **Color:** use black, white, and neutral grays in both themes. The starting tokens are below; validate their contrast in the actual layouts.

  | Role | Light mode | Dark mode |
  |---|---|---|
  | Background | `#FAFAFA` | `#121212` |
  | Main text | `#161616` | `#F5F5F5` |
  | Secondary text | `#595959` | `#B8B8B8` |
  | Subtle surface | `#F1F1F1` | `#1D1D1D` |
  | Divider | `#D8D8D8` | `#383838` |
  | Primary action | Near-black fill, white text | Near-white fill, near-black text |

  Links use a visible underline in both modes.
- **Theme control:** put a clearly labeled Light/Dark toggle in the sidebar on desktop and in the compact mobile navigation. Follow the visitor's device theme until they choose a mode; remember that explicit choice on future visits. Apply the theme before the page visibly paints to avoid a flash of the other theme. The layout, content hierarchy, and interaction states stay the same across modes.
- **Background treatment:** use a custom, editable SVG with one sparse dot-and-connector motif in the outer margins and sidebar, inspired by the site's interface / logic / data theme. Keep the SVG's dots, lines, spacing, and stroke widths easy to change. Use the same SVG geometry in both themes, with muted gray colors supplied by theme tokens. Apply a soft radial vignette *to the motif's visibility*: dots and lines remain near the page edges, then fade to zero before the centered reading column. The vignette must not darken the page or affect the profile, portrait, buttons, achievements, or project content. Keep the pattern static and decorative. Text contrast must depend on the solid theme surface, not the SVG; this follows [background readability guidance](https://www.nngroup.com/articles/big-pictures-small-screens/) and the site's WCAG target.
- **Typography:** give your name a restrained monospaced display treatment in the hero, paired with a clean sans serif for the short first-person bio and the rest of the interface. Use monospaced text sparingly elsewhere for dates, labels, or technical metadata. Use type size and weight for hierarchy; avoid all-caps paragraphs.
- **Components:** flat project rows or panels, 1px dividers, little or no shadow, restrained corner radius, clear button fills and underlined text links. Never depend on hover alone to show that something is clickable.
- **Motion:** brief opacity or underline transitions only. Respect reduced-motion preferences. No scroll hijacking, autoplay background video, or mandatory animation to reveal content.
- **Imagery:** include a real portrait in a small, simple 4:5 rectangular holder in the hero (roughly 170–190px wide at desktop size). Use an intentional crop and descriptive alt text; a grayscale treatment is optional if it still represents you well. Use real screenshots or diagrams from your projects. Keep the portfolio interface monochrome; project screenshots may retain their original colors so the work is represented accurately. One strong screenshot per project is more useful than generic technology illustrations.

## 4. Site map and page jobs

```text
Home /
├── Profile: introduction, verified achievements, résumé, contact
├── Projects: 1–2 featured projects with clear skill evidence
├── Experience: roles, responsibilities, and outcomes
├── Certifications: relevant credentials with verification links
└── GitHub: selected repositories and full-profile link

Project case study /work/[project]
Résumé /resume.pdf
```

**Sidebar:** place the name or wordmark at the top, then Profile, Projects, Experience, Certifications, and GitHub as a vertical list. Put the Light/Dark control and résumé/contact links near the lower edge. Separate the sidebar from the centered content with a thin rule. On small screens, replace the fixed sidebar with a compact accessible menu while keeping the same destinations. Contact and résumé also remain prominent in Profile.

**Profile:** open the hero with your name, styled as a compact monospaced heading, and pair it with the small portrait holder. Beneath the name, use one or two short first-person paragraphs about what you build and what motivates your work. Do not place a job title or position as the hero heading. Show only two actions: **View projects** and **Contact me**. Below, show up to two verified achievements as one-line proof points; each must convey a real result without extra explanatory copy. Keep résumé and contact in the sidebar. Put fuller background and technical detail in Experience and project case studies. If availability is true and current, state it briefly; otherwise omit it.

**Projects:** feature the best finished project first. For each item show product name, the problem or audience, your role, one concrete outcome or technical achievement, and links to case study plus demo/source where appropriate. Tag the actual layers you worked on—interface, backend, data, deployment—so your full stack scope is visible. One or two excellent entries are enough.

**Experience:** use a compact reverse-chronological timeline. Each role gets organization, title, dates, one sentence describing scope, and one or two specific contributions or outcomes. Link to a project or résumé detail when relevant. Avoid repeating the same skills list at every role.

**Certifications:** use a clean list with credential name, issuer, issue date, and verification link when one exists. Feature credentials relevant to the work you want; do not inflate the page with minor course completions.

**GitHub:** curate two or three repositories that demonstrate different strengths and explain why each matters. Show repository name, purpose, your contribution, and a direct link. A link to your full GitHub profile covers the complete activity history; the homepage does not need a live contribution graph. Do not publish a phone number or location unless you want them public.

**Visual signature:** number the five sections consistently (01–05) and use the same quiet index treatment beside case-study chapters. This makes the page feel like a professional record. In projects, small interface / logic / data labels connect the visual system to real capabilities; each label appears only when supported by the project story.

## 5. Case study template

For each of the one or two launch projects, create a page that answers both “Can this person build it?” and “Would I trust them with a project?”

1. **Overview:** one-line product description, audience, your exact role, timeline, team context, and links.
2. **Problem and goal:** what users or the client needed; what success meant.
3. **Your contribution:** separate what you owned from teammates' contributions.
4. **Product walkthrough:** 2–4 annotated screenshots showing key flows, including a mobile view when relevant.
5. **Technical decisions:** frontend architecture, API design, data model, authentication/security or deployment choices that mattered. Include a small architecture diagram only when it explains a real decision.
6. **Constraints and tradeoffs:** one or two decisions you considered, why you chose the final approach, and what you would improve next.
7. **Outcome:** measured results if documented; otherwise describe what shipped and what you learned without inventing metrics.
8. **Next action:** live demo, source repository, and contact link. If work is private, explain the limitation and show permitted evidence.

Prepare a short, working demo and a README that explains setup and architecture. A broken demo harms the portfolio more than an honest “source available” note.

## 6. Content to gather before design or development

| Required for launch | Optional later |
|---|---|
| Your name, short first-person bio, portrait, location/time zone if useful, email, professional links | Writing, speaking, testimonials |
| Résumé PDF with current experience | Detailed experience timeline |
| One or two project stories with role and constraints | More projects or an archive |
| Real project screenshots and permission to show them | Custom photography or illustrations |
| Verified demo and source links, or honest sharing limits | Inquiry form, analytics dashboard |
| Verified achievements, experience entries, relevant certifications, and selected GitHub repositories | Live contribution data |

Draft the copy before fine-tuning the interface. The exact headline, project count, and proof will determine how much space the design needs. Avoid generic claims such as “passionate problem solver” unless the next sentence makes them concrete.

## 7. Build approach

**Default recommendation:** build a mostly static site with **Astro, TypeScript, and straightforward CSS**. The content is public, changes infrequently, and benefits from pre-rendered pages. With only one or two case studies, individual project pages are simpler than introducing a content system immediately; Astro's [page documentation](https://docs.astro.build/en/basics/astro-pages/) supports that structure, and its [content-collection guidance](https://v6.docs.astro.build/en/guides/content-collections/) notes that collections may be unnecessary for a very small set of pages.

If you specifically want the portfolio code itself to demonstrate **React/Next.js**, Next.js can also serve public pages that are prerendered; its [public-pages guide](https://nextjs.org/docs/app/guides/public-static-pages) explains that approach. Choose the framework you can maintain confidently. Keep the portfolio's own runtime features small; demonstrate full stack depth through the featured products.

Create reusable pieces for the sidebar/mobile navigation, footer, project summary, link/button, and case-study section. Keep project content separate from site chrome. Add page titles, descriptions, social preview images, sitemap, and sensible image sizes. A simple deployment workflow should build the site on each change and check for broken links.

## 8. Delivery phases

| Phase | Work | Exit condition |
|---|---|---|
| **0 — Evidence** | Collect résumé, links, screenshots, and project facts; choose the two strongest stories. | No placeholder claims or unverified metrics in the launch copy. |
| **1 — Content and wireframe** | Draft homepage copy and case-study outlines; sketch mobile and desktop layouts. | A reader can find work, résumé, and contact without explanation. |
| **2 — Visual system** | Set type, color, spacing, grid, links, buttons, and image rules; test one homepage and one case-study design. | Consistent flat style with obvious interactive controls. |
| **3 — Build** | Implement responsive pages, metadata, screenshots, and deployment workflow. | All launch pages and links work on staging. |
| **4 — Quality and launch** | Review keyboard use, contrast in both themes, theme persistence and first paint, mobile layout, performance, content accuracy, and demo availability; connect domain. | [WCAG 2.2 AA](https://www.w3.org/TR/wcag/) checks pass for the implemented content; no critical navigation or link failures. |
| **5 — Improve** | Review real visitor questions and update case studies; add writing or a form only if useful. | Changes respond to observed needs. |

For a first version with content ready, phases 1–4 are a modest build. The biggest schedule variable is writing accurate case studies and preparing reliable demos.

## 9. Launch review checklist

- Check 360px, tablet, and desktop layouts; verify reading order and no horizontal scroll.
- Test all links and buttons with keyboard and touch. Include visible focus, meaningful link labels, image alt text, and reduced-motion behavior.
- Check color contrast and text size against WCAG 2.2 AA; flat styling must preserve clear link and button cues.
- Check both Light and Dark modes, device-theme changes before an explicit choice, persistence after a choice, and theme appearance on the first paint.
- Check that the decorative background vignette stays outside the centered content in both modes and that text remains legible if the image does not load.
- Verify project screenshots, outcome claims, roles, dates, demo links, source links, résumé, and email.
- Measure loading and interaction with browser tools; review [Core Web Vitals measurement guidance](https://web.dev/articles/vitals-measurement-getting-started) after deployment.
- Check titles, descriptions, share previews, and the appearance of every page when linked directly.

## 10. Decisions to finalize before implementation

1. Your preferred name/wordmark and exact positioning sentence.
2. Which one or two projects lead, and what public evidence can be shown.
3. Whether Astro or Next.js better matches the work you want the portfolio code to demonstrate.
4. Which achievements, experience entries, certifications, and repositories should appear in the five sections.

The working direction is **a flat monochrome editorial portfolio with Light and Dark modes, one or two deep project stories, clear résumé access, and a direct contact path**. This is the plan to review before implementation.
