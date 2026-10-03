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
  'profile-image': '/images/riccki-rejee-mislang.jpg',
  name: 'Riccki Rejee Mislang',
  shortName: 'RRM',
  role: 'Full stack developer',
  email: 'codingriccki@gmail.com',
  github: 'https://github.com/ricckimislang',
  // The résumé fallback opens a request email until a real public/resume.pdf is supplied.
  resume: 'mailto:codingriccki@gmail.com?subject=Resume%20request'
}

export const achievements = [
  { value: '4+ yrs', label: 'freelance development' },
  { value: '10+', label: 'applications built' },
  { value: '7th', label: 'PSITS Java placement', icon: '/images/psits-region-xii.png' },
  { value: '6th', label: 'PSITS Java placement', icon: '/images/psits-region-xii.png' }
]

export const projects: Project[] = [
  {
    slug: 'atlas',
    name: 'Atlas',
    year: '2025',
    summary: 'A calm operations desk for independent teams to map work, ownership, and decisions in one place.',
    outcome: 'Reduced weekly status work by turning scattered updates into a shared, searchable record.',
    tags: ['Interface', 'Backend', 'Data', 'Deployment'],
    // Sample project content; add verified destinations when they are available.
  },
  {
    slug: 'field-notes',
    name: 'Field Notes',
    year: '2024',
    summary: 'A lightweight research log that helps product teams turn interviews into patterns they can revisit.',
    outcome: 'Made synthesis visible across a distributed team with a small, fast publishing workflow.',
    tags: ['Interface', 'Data', 'Accessibility'],
    // Sample project content; add a verified repository URL when it is available.
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

export type Repository = {
  name: string
  description: string
  link?: string
}

export const repositories: Repository[] = [
  // Sample repository entries; add verified URLs when they are available.
  { name: 'atlas', description: 'The operations desk case study: a full stack app with a small, durable data model.' },
  { name: 'quiet-ui', description: 'Accessible interface primitives for products that need a little less visual noise.' },
  { name: 'field-notes', description: 'A focused publishing workflow for turning research into a shared team memory.' }
]
