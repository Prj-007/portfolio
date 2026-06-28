import type { Project, Experience, Education, SkillCategory, Achievement, Position } from '@/types'

export const PERSONAL = {
  name: 'Prajjwal Pratap Singh',
  firstName: 'Prajjwal',
  initials: 'PS',
  role: 'Full Stack Developer',
  tagline: 'CS 2026 Graduate · AI-powered apps · Scalable backends',
  bio: 'Computer Science fresher (2026) with strong skills in C++, Java, Python, JavaScript, React, Spring Boot, Node.js, MongoDB, and DSA. Experienced in developing AI-powered full-stack applications and scalable backend systems through internship and project work.',
  about: [
    "I'm a final-year B.Tech student at RGIPT (An Institute of National Importance), specializing in Computer Science & Design Engineering. I build scalable full-stack applications with a focus on clean architecture, AI integration, and production-grade quality.",
    "During my internship at Newgen Software Technologies, I shipped a production document summarization platform using Spring Boot, React, MongoDB, and AWS S3 — reducing manual review time by 80% across 1,000+ documents.",
    "I scored in the top 2% in IIT-JEE Advanced 2022, which reflects my analytical thinking and problem-solving drive. Beyond code, I'm passionate about system design, competitive programming, and building products that users actually love.",
  ],
  email: 'psinghpratap8588@gmail.com',
  phone: '+91 7317544732',
  github: 'https://github.com/Prj-007',
  linkedin: 'https://www.linkedin.com/in/prajjwalpratapsingh/',
  leetcode: 'https://leetcode.com/u/x_mark21/',
  codolio: 'https://codolio.com/profile/xmark',
  resume: '/resume.pdf',
  interests: ['Full Stack Development', 'Backend Systems', 'AI/ML Applications', 'System Design', 'Competitive Programming'],
  careerGoal: 'Seeking Software Engineer, Backend Developer, Full-Stack Developer, or AI Engineer roles where I can contribute, learn, and grow in a fast-paced, technology-driven environment.',
  typingTexts: ['Full Stack Developer', 'AI Developer', 'Problem Solver'],
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS: SkillCategory[] = [
  {
    category: 'Languages',
    icon: 'Code2',
    items: ['C/C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'C#', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    icon: 'Monitor',
    items: ['React.js', 'Next.js', 'Angular', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: ['Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'ASP.NET Core', 'REST API', 'JWT'],
  },
  {
    category: 'Databases',
    icon: 'Database',
    items: ['MongoDB', 'MySQL', 'Mongoose'],
  },
  {
    category: 'AI & Tools',
    icon: 'Sparkles',
    items: ['Claude', 'Copilot', 'Codex', 'ChatGPT', 'LLM', 'RAG', 'MCP'],
  },
  {
    category: 'Cloud & DevOps',
    icon: 'Cloud',
    items: ['AWS S3', 'Azure', 'Docker', 'Maven'],
  },
  {
    category: 'Testing',
    icon: 'FlaskConical',
    items: ['Test Automation', 'Pytest', 'System Integration Testing'],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux'],
  },
]

export const EXPERIENCE: Experience[] = [
  {
    company: 'Newgen Software Technologies',
    role: 'Full Stack Developer Intern',
    period: 'Feb 2025 – Feb 2026',
    type: 'internship',
    description: [
      'Developed a scalable full-stack web application with RESTful APIs using Spring Boot, React, and MongoDB, integrating AWS S3 for cloud storage.',
      'Implemented backend logic for text extraction from 1,000+ PDFs using Apache PDFBox and AI-based summarization, reducing manual review time by 80%.',
      'Built a responsive React UI with Tailwind CSS and containerized the application using Docker, improving user engagement by 60%.',
      'Developed test automation scripts and performed system integration testing for REST APIs.',
      'Participated in Agile sprints and code reviews, contributing to code quality and team productivity.',
    ],
    technologies: ['Spring Boot', 'React', 'MongoDB', 'AWS S3', 'Apache PDFBox', 'Docker', 'Tailwind CSS', 'REST API'],
  },
]

export const EDUCATION: Education[] = [
  {
    institution: 'Rajiv Gandhi Institute of Petroleum Technology',
    shortName: 'RGIPT',
    degree: 'B.Tech',
    field: 'Computer Science and Design Engineering',
    period: '2022 – 2026',
    note: 'An Institute of National Importance',
    courses: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Computer Networks (TCP/IP, HTTP, DNS)',
      'Machine Learning',
      'Operating Systems',
      'Software Development Life Cycle',
    ],
    achievements: ['Top 2% Rank in IIT-JEE Advanced Exam 2022'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'ai-document-summarizer',
    title: 'AI Document Summarizer',
    tagline: 'Production-grade document intelligence platform',
    description:
      'A full-stack document summarization platform built during my internship at Newgen Software Technologies. Processes 1,000+ PDFs with Apache PDFBox and AI-based summarization, dramatically reducing manual review effort for enterprise teams.',
    problem:
      'Enterprise teams spent hours manually reviewing large volumes of PDF documents. There was no automated way to extract, summarize, and store document insights at scale.',
    features: [
      'PDF text extraction from 1,000+ documents using Apache PDFBox',
      'AI-powered summarization reducing manual review time by 80%',
      'AWS S3 integration for cloud document storage',
      'Containerized deployment with Docker for consistent environments',
      'Responsive React UI with Tailwind CSS and real-time feedback',
      'REST API test automation scripts covering all endpoints',
      'Agile development with code reviews and sprint planning',
    ],
    techStack: ['Spring Boot', 'React', 'MongoDB', 'AWS S3', 'Apache PDFBox', 'Docker', 'Tailwind CSS', 'Java'],
    githubFE: 'https://github.com/Prj-007/frontend-summarizer',
    githubBE: 'https://github.com/Prj-007/backend-summarizer-latest',
    live: 'https://frontend-summarizer-gh.vercel.app',
    image: '/projects/summarizer.png',
    featured: true,
    metrics: ['80% reduction in manual review time', '60% increase in user engagement', '1,000+ PDFs processed'],
    period: 'Feb 2025 – Feb 2026',
    category: ['Full Stack', 'AI', 'Backend'],
  },
  {
    id: '2',
    slug: 'imagify-ai-saas',
    title: 'Imagify — AI Image SaaS',
    tagline: 'Text-to-image generation with credit control and payments',
    description:
      'A full-stack AI SaaS application for text-to-image generation using the MERN stack and ClipDrop API. Features credit-based usage tracking, secure JWT authentication, and Razorpay payment integration handling 2,000+ transactions.',
    problem:
      'Developers and creators needed a programmatic, credit-gated image generation service with integrated payments — not just a UI wrapper.',
    features: [
      'Real-time text-to-image conversion via ClipDrop API',
      'Credit-based usage tracking and access control system',
      'Secure JWT authentication and authorization',
      'Razorpay payment integration with 2,000+ processed transactions',
      'Automated test suites covering 40+ API endpoints',
      'Scalable MERN stack architecture',
    ],
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'ClipDrop API', 'Razorpay', 'JWT'],
    githubFE: 'https://github.com/Prj-007/imagify-client',
    githubBE: 'https://github.com/Prj-007/imagify-server',
    live: 'https://client-kappa-sepia-85.vercel.app',
    image: '/projects/imagify.png',
    featured: true,
    metrics: ['2,000+ transactions processed', '40+ API endpoints tested'],
    period: 'Dec 2025 – Jan 2026',
    category: ['Full Stack', 'AI', 'SaaS'],
  },
  {
    id: '3',
    slug: 'food-delivery-mern',
    title: 'FullStack Food Delivery App',
    tagline: 'Real-time ordering with customer app and admin panel',
    description:
      'An end-to-end food delivery platform supporting 1,500+ users with real-time features, JWT authentication, and a schema-driven MongoDB backend. Ships with both a customer-facing app and a separate admin panel.',
    problem:
      'Restaurant owners needed a unified platform to manage orders and menus, while customers needed a seamless, secure ordering experience.',
    features: [
      'Customer-facing ordering app and separate admin management panel',
      'JWT-based authentication reducing unauthorized access incidents by 70%',
      'Schema-driven MongoDB backend with Mongoose ORM',
      'Optimized database queries using joins and indexing',
      'TLS/SSL secure data handling',
      'Supports 1,500+ concurrent users with scalable design',
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Mongoose', 'JavaScript'],
    github: 'https://github.com/Prj-007/Food-Delivery-App-MERN-',
    live: 'https://food-delivery-mern-frontend-it7n.onrender.com',
    liveAdmin: 'https://food-delivery-mern-admin-opfb.onrender.com',
    image: '/projects/food-delivery.png',
    featured: true,
    metrics: ['1,500+ users supported', '70% reduction in unauthorized access'],
    period: 'Sep 2024 – Dec 2024',
    category: ['Full Stack', 'Backend'],
  },
  {
    id: '4',
    slug: 'expense-sharing-app',
    title: 'Expense Sharing App',
    tagline: 'Split expenses and settle debts with friends',
    description:
      'A web application to create groups, log shared expenses, track balances, and calculate optimal settlements — all in real time.',
    problem: 'Tracking shared expenses manually leads to confusion, missed payments, and disputes among friends.',
    features: ['Group creation and member management', 'Expense logging with automatic balance calculation', 'Optimal settlement suggestions'],
    techStack: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Prj-007/Prajjwal_Expense-Sharing-Application',
    image: '/projects/expense.png',
    featured: false,
    metrics: [],
    period: 'Dec 2025',
    category: ['Full Stack', 'Backend'],
  },
  {
    id: '5',
    slug: 'trading-signal-tracker',
    title: 'Trading Signal Tracker',
    tagline: 'Spring Boot backend for financial signal management',
    description: 'A Spring Boot backend service for tracking, managing, and querying trading signals with a RESTful API design and structured data models.',
    problem: 'Traders need a reliable backend system to log, query, and analyze signals without manual tracking.',
    features: ['RESTful API for signal CRUD operations', 'Spring Boot with structured data models', 'Signal history and query support'],
    techStack: ['Java', 'Spring Boot', 'REST API'],
    github: 'https://github.com/Prj-007/zuvomo-trading-signal-tracker',
    image: '/projects/trading.png',
    featured: false,
    metrics: [],
    period: 'Jun 2026',
    category: ['Backend'],
  },
  {
    id: '6',
    slug: 'fastapi-products-backend',
    title: 'FastAPI Products Backend',
    tagline: 'Paginated product API with Python and FastAPI',
    description: 'A Python FastAPI backend for product listing with efficient cursor-based pagination, search, and filtering — built as a take-home assignment.',
    problem: 'E-commerce platforms need fast, scalable product listing APIs with pagination that works under high concurrency.',
    features: ['Cursor-based pagination for efficient data access', 'Product search and category filtering', 'FastAPI async endpoints with Swagger docs'],
    techStack: ['Python', 'FastAPI', 'REST API'],
    github: 'https://github.com/Prj-007/codevector-products-backend',
    image: '/projects/fastapi.png',
    featured: false,
    metrics: [],
    period: 'Jun 2026',
    category: ['Backend'],
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Top 2% in IIT-JEE Advanced',
    description: "Ranked in the top 2% among 150,000+ candidates in India's most competitive engineering entrance exam.",
    year: '2022',
    icon: 'Trophy',
  },
]

export const POSITIONS: Position[] = [
  {
    role: 'Event Organiser',
    organization: 'Urjotsav 2023 — Annual Tech Fest of RGIPT',
    period: '2023',
  },
  {
    role: 'Core Team Member',
    organization: 'Arpan — Social Council of RGIPT',
    period: '2023 – 2025',
  },
]

export const CODING_PROFILES = [
  {
    name: 'GitHub',
    url: 'https://github.com/Prj-007',
    username: 'Prj-007',
    description: '12 public repositories · Full-stack, AI, Spring Boot, MERN projects',
    icon: 'Github',
    stats: ['12 repos', 'Active 2024–2026'],
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/x_mark21/',
    username: 'x_mark21',
    description: 'Consistent practice in DSA — Arrays, Trees, Dynamic Programming, Graphs',
    icon: 'Code',
    stats: ['DSA Practice', 'Active'],
  },
  {
    name: 'Codolio',
    url: 'https://codolio.com/profile/xmark',
    username: 'xmark',
    description: 'Coding portfolio and activity tracker across platforms',
    icon: 'BarChart2',
    stats: ['Multi-platform', 'Portfolio'],
  },
]
