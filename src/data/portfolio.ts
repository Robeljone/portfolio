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
  },
    {
    id: 'crowdfunding-platform',
    title: 'Crowdfunding Platform',
    description:
      'Multi-tenant crowdfunding platform with project management, funding tracking, and donor engagement features.',
    tags: ['Vue.js','Laravel', 'MySQL'],
    category: 'FinTech',
    icon: 'hand-holding-dollar',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform for Car Dealerships',
    description:
      'Multi-tenant e-commerce platform for car dealerships with inventory management, sales tracking, and customer relationship management.',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'E-commerce'],
    category: 'E-commerce',
    icon: 'cars',
  }
]

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    period: '2026 Feb - Present',
     Company: 'Seqela Technologies',
    highlights: [
      'Design Lite CBS system',
      'Lead development of a crowd funding platform',
      'Lead development of a cooperative and unions management system',
      'Design car e-commerce platform',
    ],
  },
  {
    role: 'Software Developer | Business Intelligence Analyst & CRM Specialist',
    period: '2023 March - 2025 Oct',
    Company: 'BGI Ethiopia',
    highlights: [
      'Delivered 6+ in-house projects',
      'Transport Request Management System: Streamlined logistics operations with a Laravel-Vue.js platform, reducing manual processes by 40%',
      'Fleet Management Dashboard: Developed a real-time dashboard integrating maintenance data',
      'KPI Management System: Implemented a KPI tracking system that improved performance monitoring and accountability in beer production',
      'Pickup & Delivery Automation: Automated pickup and delivery scheduling',
      'Sales & Distribution Dashboard: Developed a Power BI dashboard integrating sales and distribution data, providing real-time insights that improved decision-making and increased sales by 15%',
      'CRM Implementation: Led the implementation of a CRM system, enhancing customer relationship management and increasing customer retention by 20%',
      'Cross-functional Collaboration: Worked closely with sales, logistics, and finance teams to identify pain points and develop tailored software solutions that improved operational efficiency',
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
  }
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
    value: 'linkedin.com/in/robel-kidane-9b6787169',
    href: 'https://www.linkedin.com/in/robel-kidane-9b6787169',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'github.com/robel-yohannes',
    href: 'https://github.com/Robeljone?tab=repositories',
    icon: 'github',
  },
  {
    label: 'Telegram',
    value: '@robel2022',
    href: 'https://t.me/robel2022',
    icon: 'telegram',
  },
]
