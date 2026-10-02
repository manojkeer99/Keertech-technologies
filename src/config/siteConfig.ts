/**
 * KeerTech Technologies - Central Site Configuration
 * 
 * Update contact details, links, and content here.
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Development' | 'AI & Automation' | 'Design & Deployment';
  features: string[];
  techTags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: 'In Development' | 'Prototype' | 'Case Study' | 'Live';
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Process' | 'Pricing & Delivery';
}

export interface PricingPackage {
  id: string;
  name: string;
  shortDesc: string;
  priceLabel: string;
  timelineNote: string;
  idealFor: string[];
  highlights: string[];
  ctaLabel: string;
}

export const siteConfig = {
  name: 'KeerTech Technologies',
  shortName: 'KeerTech',
  tagline: 'Engineering Useful, Reliable & Scalable Digital Solutions',
  subTagline: 'We build modern websites, web applications, custom software, and AI-powered workflows for individuals, startups, and growing organizations.',
  founder: {
    name: 'Manoj Keer',
    role: 'Founder & Software Developer',
    location: 'Rajasthan, India',
    bio: 'A technology-focused software developer dedicated to building practical digital products, resilient software architectures, and intuitive AI-assisted experiences.',
  },
  contact: {
    email: '',
    whatsapp: '',
    whatsappNumber: '',
    whatsappDefaultMessage: 'Hello KeerTech, I would like to discuss a project.',
    location: 'Rajasthan, India',
    workingMode: 'Working with clients globally and across India digitally',
  },
  social: {
    github: '',
    linkedin: '',
    instagram: '',
  },
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ],
  capabilitiesList: [
    'Website Development',
    'Web Applications',
    'Custom Software',
    'Mobile Solutions',
    'AI Integration',
    'Workflow Automation',
    'UI/UX Design',
    'Deployment & Maintenance',
  ],
  services: [
    {
      id: 'website-development',
      title: 'Website Development',
      shortDesc: 'Responsive and modern websites for individuals, startups and businesses.',
      fullDesc: 'Custom website development for personal brands, portfolios, businesses, and online products built with clean code and modern responsive design.',
      category: 'Development',
      features: [
        'Responsive layouts for mobile and desktop screens',
        'Clean semantic code and structure',
        'Fast load times and asset optimization',
        'Search engine friendly structure'
      ],
      techTags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS']
    },
    {
      id: 'web-application-development',
      title: 'Web Application Development',
      shortDesc: 'Custom web applications built around specific business or workflow requirements.',
      fullDesc: 'Interactive web applications designed to manage data, support user accounts, and streamline day-to-day operations.',
      category: 'Development',
      features: [
        'Custom workflow and dashboard interfaces',
        'Responsive data tables and forms',
        'Client-side and server-side state handling',
        'Role-based access structures'
      ],
      techTags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL']
    },
    {
      id: 'software-development',
      title: 'Software Development',
      shortDesc: 'Custom software solutions for specific business and organizational needs.',
      fullDesc: 'Practical custom software designed from first principles to solve operational challenges, organize internal information, and adapt as requirements grow.',
      category: 'Development',
      features: [
        'Modular architecture for maintainability',
        'Clear technical documentation',
        'Type-safe business logic',
        'Structured data handling'
      ],
      techTags: ['TypeScript', 'Python', 'Node.js', 'SQL']
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development',
      shortDesc: 'Development of mobile application solutions based on project requirements.',
      fullDesc: 'Mobile-optimized applications and progressive web apps designed for touch screens, reliable performance, and cross-device consistency.',
      category: 'Development',
      features: [
        'Touch-friendly user interfaces',
        'Progressive web application capabilities',
        'Cross-platform responsive design',
        'Clean mobile navigation'
      ],
      techTags: ['React', 'Tailwind CSS', 'PWA', 'Mobile Web']
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions & Integration',
      shortDesc: 'Practical integration of AI capabilities into software products and workflows.',
      fullDesc: 'Connecting modern AI APIs to assist with tasks such as text processing, content categorization, document search, and intelligent suggestions.',
      category: 'AI & Automation',
      features: [
        'AI API integration (such as Google Gemini)',
        'Prompt design and workflow integration',
        'Text synthesis and structured extraction',
        'Practical assistant features'
      ],
      techTags: ['Google Gemini / AI APIs', 'Python', 'TypeScript', 'APIs']
    },
    {
      id: 'automation',
      title: 'Automation Solutions',
      shortDesc: 'Automation of repetitive digital workflows and processes where appropriate.',
      fullDesc: 'Custom scripts and webhook triggers designed to reduce manual data entry, connect tools, and improve day-to-day efficiency.',
      category: 'AI & Automation',
      features: [
        'Repetitive task automation',
        'Webhook and API triggers',
        'Data formatting and transfer scripts',
        'Scheduled background jobs'
      ],
      techTags: ['Python', 'Node.js', 'Webhooks', 'APIs']
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX & Frontend Development',
      shortDesc: 'Clean, responsive and user-focused interfaces.',
      fullDesc: 'Interface design and frontend implementation focusing on clear visual hierarchy, readability, comfortable navigation, and responsive layouts.',
      category: 'Design & Deployment',
      features: [
        'Responsive layout design across breakpoints',
        'Design system consistency',
        'Accessibility and readability focus',
        'Intuitive user interactions'
      ],
      techTags: ['Figma', 'React', 'Tailwind CSS', 'TypeScript']
    },
    {
      id: 'api-backend-solutions',
      title: 'API & Backend Development',
      shortDesc: 'Backend services and APIs for web applications and software systems.',
      fullDesc: 'Structured backend services, RESTful APIs, and database configurations to support applications with secure and reliable data flow.',
      category: 'Development',
      features: [
        'RESTful API endpoint design',
        'Database schema modeling',
        'Input validation and error handling',
        'Authentication integration'
      ],
      techTags: ['Node.js', 'Express', 'PostgreSQL', 'Supabase']
    },
    {
      id: 'deployment-maintenance',
      title: 'Deployment & Maintenance',
      shortDesc: 'Deployment assistance, updates, bug fixing and ongoing technical maintenance.',
      fullDesc: 'Assistance with project launch, domain and hosting setup, routine software updates, bug resolution, and ongoing technical support.',
      category: 'Design & Deployment',
      features: [
        'Deployment configuration (Vercel, Netlify)',
        'Domain and SSL setup assistance',
        'Bug fixes and dependency updates',
        'Post-launch technical support'
      ],
      techTags: ['Vercel', 'Netlify', 'Git', 'GitHub']
    },
  ] as ServiceItem[],
  whyChooseUs: [
    {
      title: 'Understand Before Building',
      description: 'We prioritize deep discovery first. We clarify requirements, target users, and technical constraints before writing a single line of code.',
    },
    {
      title: 'Clean & Modern Engineering',
      description: 'Zero unnecessary bloat or fragile hacks. We write maintainable, type-safe TypeScript code structured for longevity.',
    },
    {
      title: 'Direct, Transparent Communication',
      description: 'You speak directly with the engineer building your project. No confusing account managers, no hidden surprises, and no missed handoffs.',
    },
    {
      title: 'Practical Technology Selection',
      description: 'We choose proven, practical tools and technologies that match your specific budget and scale, avoiding hype-driven complexity.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Solutions designed to start lean today while possessing clean seams to grow into larger teams, databases, and microservices tomorrow.',
    },
    {
      title: 'Continuous Quality & Integrity',
      description: 'Every project goes through rigorous responsiveness, accessibility, performance, and cross-browser quality checks before release.',
    },
  ],
  processSteps: [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Understand the idea, problem and requirements.',
      description: 'We review your goals, audience, pain points, and technical needs to establish a realistic scope and measurable outcomes.',
      deliverables: ['Requirement breakdown', 'Scope of work', 'Architecture feasibility']
    },
    {
      number: '02',
      title: 'Plan',
      tagline: 'Define features, technology and project direction.',
      description: 'We map user flows, database structures, wireframes, and technology stack choices that fit your timeline.',
      deliverables: ['Technical blueprint', 'Component structure', 'Delivery milestones']
    },
    {
      number: '03',
      title: 'Design',
      tagline: 'Create a clean and intuitive digital experience.',
      description: 'We construct a modern, accessible interface with intentional typography, sensible contrast, and responsive spacing.',
      deliverables: ['UI/UX prototypes', 'Responsive breakpoints', 'Design token system']
    },
    {
      number: '04',
      title: 'Build',
      tagline: 'Develop, integrate, test and refine the solution.',
      description: 'We implement clean code, integrate necessary APIs, configure databases, and execute multi-device testing.',
      deliverables: ['Type-safe codebase', 'API integrations', 'Cross-browser testing']
    },
    {
      number: '05',
      title: 'Launch & Support',
      tagline: 'Deploy the project and continue improving it.',
      description: 'We configure DNS, deploy to edge cloud hosting, verify SEO tags, and provide technical guidance for future iterations.',
      deliverables: ['Production deployment', 'Documentation & walkthrough', 'Ongoing support']
    },
  ] as ProcessStep[],
  projects: [
    {
      id: 'studyrise',
      title: 'StudyRise',
      category: 'Student Productivity Platform',
      status: 'In Development',
      shortDesc: 'An interactive student productivity platform focused on tasks, habits, performance tracking, focus and student engagement.',
      fullDesc: 'StudyRise is an interactive student productivity platform designed around task management, habit tracking, focus sessions, and academic engagement. Built with clean component hierarchy and responsive layouts to help learners organize their daily study workflows.',
      tags: ['Web App', 'Productivity', 'React', 'TypeScript'],
      features: [
        'Structured daily task queue with priority categorization',
        'Habit streak tracker with visual progress indicators',
        'Customizable focus intervals and session timers',
        'Distraction-free responsive user interface'
      ],
    },
    {
      id: 'sih-hackathon',
      title: 'Smart India Hackathon Project',
      category: 'Prototype / Hackathon Project',
      status: 'Prototype',
      shortDesc: 'A technical software platform designed and developed to address a real-world problem statement during the Smart India Hackathon.',
      fullDesc: 'Developed for the Smart India Hackathon, this prototype focuses on addressing operational workflow bottlenecks with structured user interfaces, role-based workflows, and practical data presentation.',
      tags: ['Smart India Hackathon', 'Prototype', 'Web App', 'Workflow'],
      features: [
        'Modular frontend and backend architecture designed during the hackathon',
        'Role-based views for administrators and end users',
        'Structured operational forms and workflow validation',
        'Tested on multi-device responsive screen sizes'
      ],
    },
    {
      id: 'travel-experience',
      title: 'Travel Explorer Platform',
      category: 'Digital Travel Web Application',
      status: 'Case Study',
      shortDesc: 'A travel platform exploration focusing on itinerary organization, destination discovery, and clean route mapping.',
      fullDesc: 'An intuitive travel web application focusing on destination showcases, trip scheduling, and curated travel details with responsive visuals and clean itinerary views.',
      tags: ['Travel', 'Web App', 'Case Study', 'Interactive UI'],
      features: [
        'Day-by-day trip itinerary planning layout',
        'Destination discovery cards with location information',
        'Responsive route and transit overview layouts',
        'Clean navigation optimized for mobile and desktop screens'
      ],
    },
    {
      id: 'developer-portfolio',
      title: 'Personal Portfolio',
      category: 'Developer Portfolio & Showcase',
      status: 'Case Study',
      shortDesc: "Manoj Keer's developer portfolio showcasing software engineering projects, technical skills, and practical web solutions.",
      fullDesc: 'A modern personal portfolio engineered with semantic markup, responsive layouts, and clean typography to present software development projects, technical competencies, and contact channels.',
      tags: ['Frontend', 'Portfolio', 'TypeScript', 'React'],
      features: [
        'Lightweight, responsive component structure',
        'Dark and light mode with persistent preference',
        'Structured showcase of technology projects and skills',
        'Built with modern web standards and accessibility practices'
      ],
    }
  ] as ProjectItem[],
  technologies: {
    frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Python', 'REST APIs'],
    programming: ['C', 'C++', 'Java', 'Python', 'TypeScript'],
    database: ['PostgreSQL', 'SQL', 'Supabase'],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
    deployment: ['Vercel', 'Netlify', 'Cloudflare', 'Linux'],
    ai: ['Gemini API', 'AI Integration', 'Prompt Engineering', 'Workflow Automation']
  },
  pricingNote: 'Project pricing is customized based on scope, features, complexity and requirements.',
  pricingPackages: [
    {
      id: 'starter',
      name: 'Starter',
      shortDesc: 'For personal websites, portfolios, and simple business websites.',
      priceLabel: 'Custom Quote',
      timelineNote: 'Timeline depends on project scope and requirements.',
      idealFor: [
        'Personal websites',
        'Portfolios',
        'Simple business websites'
      ],
      highlights: [
        'Responsive layout across mobile and desktop',
        'Clean semantic code structure',
        'Contact and social channel integration',
        'Production deployment assistance'
      ],
      ctaLabel: 'Request a Quote'
    },
    {
      id: 'business',
      name: 'Business',
      shortDesc: 'For business websites, web applications, and custom functionality.',
      priceLabel: 'Custom Quote',
      timelineNote: 'Timeline depends on project scope and requirements.',
      idealFor: [
        'Business websites',
        'Web applications',
        'Custom functionality'
      ],
      highlights: [
        'Custom workflow and dashboard layouts',
        'API and database integrations',
        'Structured forms and data validation',
        'Cross-device performance optimization'
      ],
      ctaLabel: 'Discuss Your Project'
    },
    {
      id: 'custom',
      name: 'Custom',
      shortDesc: 'For custom software, AI integrations, automation, and advanced applications.',
      priceLabel: "Let's Discuss",
      timelineNote: 'Timeline depends on project scope and requirements.',
      idealFor: [
        'Custom software',
        'AI integrations',
        'Automation',
        'Advanced applications'
      ],
      highlights: [
        'Bespoke software architecture design',
        'Practical AI and Gemini API integration',
        'Workflow automation and custom scripting',
        'Ongoing technical maintenance support'
      ],
      ctaLabel: 'Discuss Your Project'
    }
  ] as PricingPackage[],
  faqs: [
    {
      category: 'General',
      question: 'What is KeerTech Technologies?',
      answer: 'KeerTech Technologies is a founder-led modern technology company based in Rajasthan, India. We design and engineer websites, web applications, custom software, and AI-powered workflows for individuals, startups, and growing businesses.'
    },
    {
      category: 'General',
      question: 'Who will I be working with directly?',
      answer: 'You will work directly with founder and software developer Manoj Keer throughout discovery, development, and launch. This ensures transparent communication, rapid feedback, and zero misinterpretation between requirements and code.'
    },
    {
      category: 'Services',
      question: 'Can you build a custom website or web application from scratch?',
      answer: 'Yes. We build tailored websites and full-stack web applications using modern, maintainable technologies such as React, TypeScript, Node.js, and Tailwind CSS. We avoid bloated pre-made templates with a focus on maintainable and responsive web experiences.'
    },
    {
      category: 'Services',
      question: 'Can you integrate AI into our existing application or workflows?',
      answer: 'Yes. We integrate practical AI capabilities into existing platforms—including intelligent text synthesis, document search, automated customer query sorting, and AI-assisted workflows using modern APIs like Google Gemini.'
    },
    {
      category: 'Process',
      question: 'How does the project process work from start to finish?',
      answer: 'We follow a structured 5-step methodology: 01 Discover (understand goals & scope), 02 Plan (define tech stack & roadmap), 03 Design (create UI/UX), 04 Build (develop and rigorously test), and 05 Launch & Support (production deployment and handover).'
    },
    {
      category: 'Pricing & Delivery',
      question: 'How do you handle project quotes and pricing?',
      answer: 'Every project receives an honest, transparent breakdown based on the specific scope, complexity, and timeline requirements. We provide milestone-based pricing with clearly defined deliverables so there are no unexpected costs.'
    },
    {
      category: 'Pricing & Delivery',
      question: 'Do you provide maintenance and updates after the website is launched?',
      answer: 'Yes. We offer continuous technical maintenance, security updates, bug fixes, and feature additions as your business grows. We can also provide a clear documentation walkthrough so your team can manage routine updates.'
    },
    {
      category: 'General',
      question: 'Do you work with clients outside Rajasthan or internationally?',
      answer: 'Absolutely. We work digitally with individuals, startups, and organizations across India and internationally, using asynchronous updates, video discovery calls, and clear project tracking.'
    }
  ] as FAQItem[]
};
