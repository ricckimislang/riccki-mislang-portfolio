export type Project = {
  slug: string
  name: string
  year: string
  summary: string
  outcome: string
  tags: string[]
  demo?: string
  source?: string
}

export const profile = {
  name: 'Alex Morgan',
  shortName: 'AM',
  role: 'Full stack developer',
  email: 'hello@alexmorgan.dev',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  // Contact fallback until a real public/resume.pdf is supplied.
  resume: '#contact'
}

export const achievements = [
  { value: '18 mo', label: 'shipping products with small teams' },
  { value: '06', label: 'systems taken from idea to release' }
]

export const projects: Project[] = [
  {
    slug: 'atlas',
    name: 'Atlas',
    year: '2025',
    summary: 'A calm operations desk for independent teams to map work, ownership, and decisions in one place.',
    outcome: 'Reduced weekly status work by turning scattered updates into a shared, searchable record.',
    tags: ['Interface', 'Backend', 'Data', 'Deployment'],
    // Placeholder URLs: replace with the real project links before launch.
    demo: 'https://example.com',
    source: 'https://github.com/'
  },
  {
    slug: 'field-notes',
    name: 'Field Notes',
    year: '2024',
    summary: 'A lightweight research log that helps product teams turn interviews into patterns they can revisit.',
    outcome: 'Made synthesis visible across a distributed team with a small, fast publishing workflow.',
    tags: ['Interface', 'Data', 'Accessibility'],
    // Placeholder URL: replace with the real repository link before launch.
    source: 'https://github.com/'
  }
]

export const experience = [
  {
    dates: '2024 — now',
    role: 'Product engineer',
    organization: 'Northstar Studio',
    copy: 'Building internal tools and customer products with a focus on useful defaults, clear state, and reliable release paths.'
  },
  {
    dates: '2022 — 2024',
    role: 'Frontend developer',
    organization: 'Common Thread',
    copy: 'Turned complex workflows into accessible interfaces and helped shape a small design system used across client work.'
  },
  {
    dates: '2021 — 2022',
    role: 'Independent projects',
    organization: 'Selected collaborations',
    copy: 'Worked with early teams to prototype, validate, and ship focused web products from the first useful screen.'
  }
]

export const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: '2025', url: 'https://aws.amazon.com/certification/' },
  { name: 'Professional Scrum Master I', issuer: 'Scrum.org', date: '2024', url: 'https://www.scrum.org/assessments/professional-scrum-master-certification' }
]

export const repositories = [
  // Placeholder URLs: replace these with the real repository links before launch.
  { name: 'atlas', description: 'The operations desk case study: a full stack app with a small, durable data model.', link: 'https://github.com/' },
  { name: 'quiet-ui', description: 'Accessible interface primitives for products that need a little less visual noise.', link: 'https://github.com/' },
  { name: 'field-notes', description: 'A focused publishing workflow for turning research into a shared team memory.', link: 'https://github.com/' }
]
