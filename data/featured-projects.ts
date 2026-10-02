export type FeaturedProject = {
  slug: string
  name: string
  category: string
  summary: string
  techStack: string[]
  monogram: string
  accent: string
  logo?: string
  link: string
}

// Replace each monogram with a `logo: '/images/your-logo.svg'` and update
// the example.com link when the project's logo and destination are ready.
// Empty techStack arrays await the project's actual technologies.
export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'quizfi',
    name: 'Quizfi',
    category: 'Quiz-based internet access',
    summary: 'An internet vending system that rewards quiz performance with access. Orange Pi One and TP-Link EAP110 hardware connect to Bash and iptables session controls, with a web dashboard for real-time reward monitoring.',
    techStack: ['Orange Pi One', 'Bash', 'iptables', 'TP-Link EAP110'],
    monogram: 'Qf',
    accent: '#e77832',
    link: 'https://example.com/projects/quizfi'
  },
  {
    slug: 'hardware-management',
    name: 'Hardware Management System',
    category: 'Business operations',
    summary: 'A centralized application for business owners to manage payroll, track employee attendance, and oversee full inventory in one place.',
    techStack: [],
    monogram: 'Hm',
    accent: '#318d8a',
    link: 'https://example.com/projects/hardware-management'
  },
  {
    slug: 'hotel-reservation',
    name: 'Hotel Reservation Web App',
    category: 'PCC Hotel · Reservations',
    summary: 'A custom booking system for PCC Hotel, built to streamline reservations and improve the efficiency of front-desk bookings.',
    techStack: [],
    monogram: 'Hr',
    accent: '#b68b3b',
    link: 'https://example.com/projects/hotel-reservation'
  },
  {
    slug: 'attendance-payroll',
    name: 'Attendance & Payroll System',
    category: 'Employee management',
    summary: 'A functional employee management tool built with Laravel and Tailwind CSS, bringing attendance and payroll workflows together with reliable data persistence.',
    techStack: ['Laravel', 'Tailwind CSS'],
    monogram: 'Ap',
    accent: '#b96070',
    link: 'https://example.com/projects/attendance-payroll'
  },
  {
    slug: 'dormitory-management',
    name: 'Dormitory Management System',
    category: 'Frontend architecture',
    summary: 'A dormitory management frontend built with Vue.js and Vite. Resolved MIME type and build configuration issues to support seamless deployment in local WAMP environments.',
    techStack: ['Vue.js', 'Vite', 'WAMP'],
    monogram: 'Dm',
    accent: '#59875b',
    link: 'https://example.com/projects/dormitory-management'
  },
  {
    slug: 'isp-management',
    name: 'ISP Management System',
    category: 'Internet service operations',
    summary: 'A system for customers, internet plans, billing, and payments. Includes invoices, overdue tracking, receipts, collection reports, installation requests, technician tasks, location mapping, and activity records.',
    techStack: [],
    monogram: 'Is',
    accent: '#537ec7',
    link: 'https://example.com/projects/isp-management'
  }
]
