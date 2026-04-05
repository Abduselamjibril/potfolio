export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
  role: string
  highlights: string[]
  link?: string
}

export interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'Skylink Technologies',
    location: 'Addis Ababa, Ethiopia',
    period: 'July 2023 - Present',
    description: 'Transitioned from internship to permanent full-time role; continue delivering full-stack web and mobile solutions for clients in Agile environment.',
    highlights: [
      'Engineered custom CMS platforms and dynamic React frontends for client websites (Jabulani Mehal Mercato and Kasma Islamic Organization)',
      'Developed cross-platform Flutter mobile application for Basirah TV (now in production on Play Store) with persistent media player, real-time progress sync, and hybrid payment integration (Chapa + Stripe) powered by Laravel backend',
    ],
  },
  {
    id: 2,
    title: 'Software Intern',
    company: 'Skylink Technologies',
    location: 'Addis Ababa, Ethiopia',
    period: 'July - September 2023',
    description: 'Built secure user authentication system from scratch using PHP and MySQL.',
    highlights: [
      'Contributed to Learning Management System (LMS) development using WordPress',
      'Performed comprehensive system testing and bug reporting',
      'Provided client training and customer support on newly deployed systems',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'hobbe',
    title: 'HOBBE Event Management System',
    description: 'Enterprise-grade multi-tenant Event Management System for professional organizers with real-time features.',
    tags: ['Flutter', 'Supabase', 'Socket.io', 'Firebase'],
    image: '/hobee.jpeg',
    role: 'Lead Flutter Developer & Full-Stack Engineer',
    highlights: [
      'Built real-time chat (Socket.io), WebRTC live streaming, Chapa payment gateway, automated PDF ticketing',
      'Implemented offline-first features using Flutter + Supabase + Firebase',
    ],
  },
  {
    id: 'alfaruk',
    title: 'Al-Faruk Multimedia Backend',
    description: 'High-performance backend powering video streaming and spiritual content app (Production – Play Store).',
    tags: ['NestJS', 'Redis', 'PostgreSQL', 'Bunny.net'],
    image: '/alfaruk.jpg',
    link: 'https://play.google.com/store/apps/details?id=com.alfaruk.app',
    role: 'Backend Architect & Lead Developer',
    highlights: [
      'Implemented Bunny.net HLS streaming, Tus resumable uploads, Chapa fintech with self-healing transactions',
      'Achieved 40% performance gain with Redis caching using NestJS and PostgreSQL with RBAC',
    ],
  },
  {
    id: 'cafe',
    title: 'Cafe Arigato – Cafe POS & ERP System',
    description: 'Full Point-of-Sale and inventory system currently used daily by Cafe Arigato (Live in Production).',
    tags: ['React', 'Laravel', 'Node.js'],
    image: '/cafe-arigato.png',
    role: 'Full-Stack Developer',
    highlights: [
      'Designed and deployed full Point-of-Sale and inventory system',
      'Features real-time order synchronization, automated COGS tracking, menu engineering analytics',
      'Implemented custom Node.js thermal printer bridge',
    ],
  },
  {
    id: 'basirah',
    title: 'Basirah TV – Full-Stack Media Streaming Platform',
    description: 'Complete full-stack media ecosystem (Flutter app + Laravel API + React dashboard), live on Play Store. Tech: Flutter, Laravel, Stripe + Chapa.',
    tags: ['Flutter', 'Laravel', 'React', 'Chapa', 'Stripe'],
    image: '/basirah tv.png',
    link: 'https://play.google.com/store/apps/details?id=com.basirahtv.app',
    role: 'Full-Stack Developer',
    highlights: [
      'Developed persistent mini-player, real-time progress sync across devices',
      'Implemented hybrid payments (Chapa + Stripe) and real-time analytics',
    ],
  },
  {
    id: 'diabetic',
    title: 'Diabetic Aid – Intelligent Health Platform',
    description: 'Graduation capstone: Led full-stack Flutter app for Type 2 diabetes management with AI. Integrated real-time vitals tracking, doctor-patient chat, and Python ML model.',
    tags: ['Flutter', 'Python', 'ML', 'Node.js', 'Socket.io'],
    image: '/diabatic aid.jpg',
    role: 'Full-Stack & AI Developer',
    highlights: [
      'Integrated real-time vitals tracking, doctor-patient chat (Socket.io)',
      'Implemented Python machine-learning model (Scikit-learn) for risk prediction',
    ],
  },
]

export const skillCategories = {
  'Languages': ['Dart', 'JavaScript', 'PHP', 'Python', 'SQL', 'TypeScript'],
  'Frontend': ['Material-UI', 'Next.js', 'React', 'Redux', 'Tailwind CSS'],
  'Backend': ['GraphQL', 'Laravel', 'NestJS', 'Node.js', 'REST APIs'],
  'Mobile': ['Dart', 'Flutter (BLoC, Provider)'],
  'Databases': ['Firebase', 'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Supabase'],
  'Tools': ['Agile/Scrum', 'Chapa Payments', 'Docker', 'Git', 'Socket.io', 'WebRTC'],
}

export const allSkills = [
  'React', 'Flutter', 'NestJS', 'Node.js', 'Laravel',
  'PostgreSQL', 'Firebase', 'TypeScript', 'Python', 'Docker',
  'Supabase', 'Redis', 'GraphQL', 'Socket.io', 'Tailwind CSS',
]

export const education = {
  school: 'Adama Science and Technology University',
  degree: 'BSc in Software Engineering',
  location: 'Adama, Ethiopia',
  year: '2023',
}
