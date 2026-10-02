# Featured projects card stack

## Scope and content

Replace the homepage Projects section's two sample cards with an interactive showcase of six featured projects. Keep the existing project archive and case study routes intact. Store the new featured content separately from the sample case study data. Quizfi is selected on first load.

The six entries are Quizfi, Hardware Management System, Hotel Reservation Web App, Attendance & Payroll System, Dormitory Management System, and ISP Management System. Descriptions reflect the user's supplied experience without inventing dates, metrics, or technologies. Quizfi describes quiz-based internet rewards with Orange Pi One, TP-Link EAP110, Bash/iptables session control, and dashboard monitoring. Hardware covers payroll, attendance, and inventory. Hotel covers PCC Hotel bookings. Attendance & Payroll names Laravel and Tailwind CSS. Dormitory names Vue.js, Vite, and WAMP deployment. ISP covers customers, plans, invoices, payments, collections, installation tasks, maps, and activity records.

## Visual design

One large, readable card sits in the center. Smaller cards peek out behind it on both sides, with offsets, restrained rotation, and reduced contrast. On narrow screens reduce the offsets and show one neighboring card on either side. Each card includes a colored monogram logo placeholder, title, concise description, technology stack tags, and a demo link. Following the October 3 refinement, put the category and title to the right of the logo, with the description below the header row. Use only the user's confirmed technologies; show "Details coming soon" for projects whose stacks have not been supplied. The centered logo displays full color and the card receives a soft matching glow; background cards are desaturated and subdued. Match the site's existing typography and light/dark themes.

Give each entry a distinct accent and monogram. Support replacing a monogram with an image path later. Fake demo URLs use https://example.com/projects/<slug> and links visibly say "Demo (placeholder)". Do not invent working deployments or case study pages.

## Interaction and accessibility

Use Motion for Vue (motion-v) to recognize horizontal mouse/touch swipes and animate spring transitions. Following the user's clarification, cards stay fixed during the gesture. On release, swipe left advances; swipe right goes back; the selected card springs into the center. A displacement of at least 55px, or a fast flick of at least 18px and 550px/s, advances one card. Ignore short, vertical, and cancelled gestures. Loop through all six entries. Allow normal vertical page scrolling. Do not trigger navigation when clicking the demo link.

Provide Previous/Next buttons, project selection dots, a current/total indicator, and left/right keyboard navigation when the carousel has focus. Only the active card's content and link are keyboard-accessible and announced. Respect reduced motion with immediate or minimal transitions and no animated glow. Preserve stable layout during hydration, responsive resizing, and slide changes.

## Implementation boundaries and verification

Add a reusable featured carousel and featured content data. Update only the homepage Projects section to consume them. Add motion-v as a runtime dependency. Gesture offsets only determine navigation; they never reposition the card directly. Derive card position from its circular distance to the active entry.

Verify the production build, desktop/mobile layouts, swipes in both directions, stationary cards during swipes, ignored short/vertical gestures, wraparound, dot/button/keyboard controls, active-card link behavior, inactive-card focus exclusion, and both color themes. Inspect reduced-motion handling. Confirm there are no console/hydration errors or horizontal page overflow.

## Reference decisions

The existing portfolio supplies typography, spacing, and theme colors. Motion's gesture documentation (https://motion.dev/docs/vue-gestures) describes pan event recognition separately from draggable positioning, which supports the clarified swipe behavior. The WAI carousel pattern (https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) supports native navigation buttons, labeled slide selectors, hidden inactive content, and explicit user control. Apply those controls to an original overlapping card layout; use no autoplay.
