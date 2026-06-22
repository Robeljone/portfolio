export interface NavLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  category: string
  icon: string
}

export interface ExperienceItem {
  role: string
  period: string
  Company?: string
  highlights: string[]
}

export interface Certification {
  title: string
  category: string
  description: string
}

export interface ContactLink {
  label: string
  value: string
  href: string
  icon: 'mail' | 'linkedin' | 'github' | 'telegram'
}

export const personalInfo = {
  name: 'Robel Yohannes',
  title: 'Software Engineer | Data Intelligence Professional | ERP & CRM Expert',
  tagline:
    'Building software products, data-driven solutions, and digital systems that create measurable business impact.',
  bio: 'I architect and deliver enterprise-grade software and analytics platforms that bridge technology with business outcomes. From cooperative banking systems to hospitality automation and sales intelligence dashboards, I transform complex operational challenges into scalable digital solutions.',
  footerStatement:
    'Leveraging software engineering, analytics, and innovation to solve complex business challenges.',
  cvPath: '/files/Robel_Yohannes_Kidane.pdf',
} as const

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const techStack = [
  'Vue.js',
  'React',
  'TypeScript',
  'Laravel',
  'Node.js',
  'Power BI',
  'PostgreSQL',
  'Docker',
  'Tailwind CSS',
  'Shadcn/UI',
  'REST APIs',
  'MySQL',
  'Git',
]

export const expertiseAreas = [
  'Software Development',
  'Data Analytics',
  'IT Operations',
  'Product Development',
]

export const industries = [
  'Beverage Industry',
  'Hospitality Industry',
  'Healthcare Industry',
  'Cooperative & Financial Systems',
]

export const skillCategories = [
  {
    title: 'Frontend',
    skills: ['Vue.js', 'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    skills: ['Laravel', 'PHP', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'SQL Server'],
  },
  {
    title: 'Data & Analytics',
    skills: ['Power BI', 'Data Visualization', 'Business Intelligence', 'KPI Design', 'Dashboard Development', 'ETL'],
  },
  {
    title: 'Cloud & Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Vercel', 'Nginx'],
  },
]

export const projects: Project[] = [
  {
    id: 'cbs-sacco',
    title: 'CBS SACCO Management System',
    description:
      'Enterprise cooperative banking and management platform supporting unions, cooperatives, members, loan management, share management, accounting, reporting, and marketplace functionality.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'ERP'],
    category: 'FinTech',
    icon: 'landmark',
  },
  {
    id: 'gym-saas',
    title: 'Gym Membership SaaS',
    description:
      'Multi-tenant gym management solution with memberships, attendance tracking, trainers, locker management, billing, and reporting.',
    tags: ['SaaS', 'Multi-tenant', 'Node.js', 'React'],
    category: 'SaaS',
    icon: 'dumbbell',
  }
]

export const experience: ExperienceItem[] = [
  {
    role: 'Software Developer',
    period: '2013 Feb - 2025 Oct',
    Company: 'BGI Ethiopia',
    highlights: [
      'Delivered 6+ enterprise platforms across fintech, hospitality, healthcare, and SaaS domains',
      'Architected multi-tenant systems serving thousands of concurrent users with 99.9% uptime',
      'Reduced manual reporting time by 70% through automated dashboards and ETL pipelines',
      'Led full-stack development from requirements gathering to production deployment',
    ],
  },
  {
    role: 'Business Intelligence Analyst & CRM Specialist',
    period: '2013 Feb - 2025 Oct',
    highlights: [
      'Designed KPI frameworks and executive dashboards driving data-informed decisions',
      'Built POS-integrated sales intelligence platforms improving outlet coverage by 35%',
      'Streamlined ETL processes reducing data processing time from hours to minutes',
      'Partnered with cross-functional teams to translate business needs into analytics solutions',
    ],
  },
]

export const certifications: Certification[] = [
  {
    title: 'Data Analytics',
    category: 'Analytics',
    description: 'Advanced data analysis, statistical modeling, and insight generation for business strategy.',
  },
  {
    title: 'Software Development',
    category: 'Engineering',
    description: 'Full-stack development practices, system design, and modern software engineering methodologies.',
  },
  {
    title: 'Leadership Programs',
    category: 'Leadership',
    description: 'Team leadership, strategic planning, and organizational development for technology initiatives.',
  },
  {
    title: 'AI Governance',
    category: 'Emerging Tech',
    description: 'Responsible AI practices, ethical frameworks, and governance for enterprise AI adoption.',
  },
  {
    title: 'Big Data & Business Intelligence',
    category: 'Data',
    description: 'Large-scale data processing, warehousing, and enterprise BI platform implementation.',
  },
]

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'robelict94@gmail.com',
    href: 'mailto:robelict94@gmail.com',
    icon: 'mail',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/robel-yohannes',
    href: 'https://linkedin.com/in/robel-yohannes',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'github.com/robel-yohannes',
    href: 'https://github.com/robel-yohannes',
    icon: 'github',
  },
  {
    label: 'Telegram',
    value: '@robel2022',
    href: 'https://t.me/robel2022',
    icon: 'telegram',
  },
]
