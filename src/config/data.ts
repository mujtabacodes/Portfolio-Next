import { TCard } from '@/types/types';
// export type TCard = {
//   posterImage: string;
//   title: string;
//   category: string;
//   description: string;
//   liveUrl?: string;
//   githubUrl?: string;
//   videoDemoUrl?: string;
//   techstack: string[];
// };
export const projectData: TCard[] = [
  {
    category: 'AI Project',
    title: 'AskPDF (Chat with PDFs)',
    posterImage: '/projects/askpdf.png',
    description:
      'AskPDF is like a chatbot, but specifically designed for complex documents to simplify understanding of how it works. Users upload documents and are then able to ask questions about them. AskPDF generates responses using the ChatGPT API and stores uploaded files in embedded form in the database. It provides the most relevant answers and also offers subscription plans on a monthly basis.',
    techstack: [
      'NextJS',
      'React',
      'Typescript',
      'TailwindCSS',
      'ChatGPT API',
      'Shadcn-ui',
      'Stripe',
      'Zod',
      'Prisma',
      'MySQL',
      'WebSockets',
      'Vector database',
    ],
    liveUrl: 'https://askpdf.mujtabacodes.com/',
    videoDemoUrl: 'https://youtu.be/SdqBKlXfxEk',
  },
  {
    category: 'Ecommerce Project',
    title: 'InteriorFilm',
    posterImage: '/projects/Interriorfilm.PNG',
    description: `InteriorFilm is a luxury e-commerce platform offering high-end home decor solutions, including flooring and architectural services. Designed and implemented responsive components, dashboards for admin management, and secured backend endpoints for multi-role access. This project deepened my expertise in Redux Toolkit for state management and implementing scalable backend solutions.`,
    techstack: [
      'Redux',
      'Redux Thunk',
      'React Query',
      'NextJS',
      'TailwindCSS',
      'MongoDB',
      'Express.js',
    ],
    liveUrl: 'https://interiorfilm.ae',
    videoDemoUrl: 'https://youtu.be/OS38rIm6sjw',
  },
  {
    category: 'Ecommerce Project',
    title: 'Blinds and Curtains',
    posterImage: '/projects/Bnc.PNG',
    description: `Blinds and Curtains is an e-commerce platform offering a wide range of roller blinds with free installation and lifetime warranties. Migrated from Shopify to a custom-built Next.js and NestJS solution to reduce operational costs and improve user experience. Enhanced the platform with modern UI designs, responsive components, and SEO-friendly URL mapping. Developed a blog section to support content marketing and created an admin dashboard for streamlined management.`,
    techstack: [
      'NextJS',
      'React.js',
      'TailwindCSS',
      'shadcn',
      'NestJS',
      'Prisma ORM',
      'PostgreSQL',
    ],
    liveUrl: 'https://blindsandcurtains.ae/',
    videoDemoUrl: 'https://youtu.be/eOPKEVPb8L8',
  },
  {
    category: 'Content Sharing Plateform',
    title: 'Afroboost',
    posterImage: '/projects/afroboost.webp',
    description:
      'Revived and enhanced Afroboost, an application showcasing African artists and entrepreneurs. Updated dependencies, added payment methods, online coaching, attendance, and meeting features. Deployed on a VPS server with Nginx. Worked on full-stack development using MySQL for the backend and ReactJS for the front end.',
    techstack: ['ReactJS', 'MUI', 'Redux', 'Node.js', 'MySQL', 'Paypal'],
    liveUrl: 'https://afroboost.com/',
    videoDemoUrl: 'https://youtu.be/PR9ixcrsXSY',
  },
  {
    category: 'Ecommerce Project',
    title: 'Avenue39',
    posterImage: '/projects/avenue39.PNG',
    description: `Avenue39 is an e-commerce platform designed for a seamless furniture shopping experience. Developed both the backend (NestJS, Prisma, PostgreSQL) and frontend (Next.js) to ensure a robust and user-friendly system. Added key features like JWT-based authentication, dynamic cart management, and real-time data fetching. This project significantly enhanced my understanding of enterprise-level full-stack development.`,
    techstack: [
      'NestJS',
      'TypeScript',
      'NextJS',
      'TailwindCSS',
      'Prisma ORM',
      'PostgreSQL',
      'JWT',
      'Redux',
      'React Query',
    ],
    liveUrl: 'https://avenue39.com/',
    videoDemoUrl: 'https://youtu.be/Jqk6VD8RumI',
  },

  {
    category: 'Mobile App | Personal Project',
    title: 'Deliveroo Clone',
    posterImage: '/projects/deliveroo.webp',
    description:
      'Developed a Deliveroo Clone for food delivery with a sleek interface and real-time updates. Built with React Native and TailwindCSS, featuring a backend powered by Sanity. Created this project to learn and master React Native.',
    techstack: ['React Native', 'TailwindCSS', 'Sanity'],
    liveUrl: 'https://vimeo.com/756063945',
    githubUrl: 'https://github.com/mujtabacodes/Pak-Deliveroo-React-Native',
    videoDemoUrl: 'https://youtu.be/GJ7YqqLtxos',
  },
  {
    category: 'AI Project | IBM Watsonx Challenge',
    title: 'Sphera - Knowledgebase Chatbot Platform',
    posterImage: '/projects/sphera.jpg',
    description: `Sphera is an AI-powered enterprise chatbot platform designed to simplify access to accurate and up-to-date company information. Built for large enterprises and SMEs, it leverages advanced vector search technology and multi-LLM integration to deliver contextually relevant answers in real-time. The platform integrates seamlessly with tools like intranets, websites, and Telegram, enhancing internal communication, productivity, and decision-making across teams. Developed during the IBM Watsonx Generative AI competition, Sphera showcases cutting-edge AI-driven solutions for knowledge management.`,
    techstack: [
      'React.js',
      'TailwindCSS',
      'TypeScript',
      'Node.js',
      'Prisma ORM',
      'IBM Granite',
      'TurboRepo',
      'Multi-LLM',
    ],
    liveUrl: 'https://lablab.ai/event/ibm-watsonx-challenge/dragons/sphera',
    githubUrl: 'https://github.com/mujtabacodes/sphera',
  },
  {
    category: 'Booking Platform',
    title: 'Dr. Kate Beauty',
    posterImage: '/projects/drkate.png',
    description: `Dr. Kate Beauty is an appointment booking system integrated with an online luxury beauty store. Built the frontend for a seamless user experience, handled server deployment, and added booking flow management features. Gained hands-on experience in developing scalable booking systems and integrating e-commerce functionalities.`,
    techstack: [
      'React.js',
      'TailwindCSS',
      'CSS',
      'Frontend Development',
      'MVC Architecture',
    ],
    liveUrl: 'https://drkatebeauty.co.uk/',
    videoDemoUrl: 'https://youtu.be/1BV3wSLuLiE',
  },
  {
    category: 'Ecommerce Project',
    title: 'Artiart',
    posterImage: '/projects/artiart.PNG',
    description: `Artiart is an innovative e-commerce platform with secure transactions and dynamic product management. I focused on payment gateway integration (Paymod), implemented CI/CD pipelines, and managed VPS deployment with Nginx. This project enhanced my skills in deploying complex full-stack applications efficiently while optimizing performance for scalable solutions.`,
    techstack: [
      'React.js',
      'Next.js',
      'MERN Stack',
      'MongoDB',
      'VPS',
      'Nginx',
      'CI/CD',
    ],
    liveUrl: 'http://artiart.ae',
    videoDemoUrl: 'https://youtu.be/AMF_yiLmVy8',
  },
  {
    category: 'Property Development',
    title: 'Agson',
    posterImage: '/projects/agson.png',
    description: `Agson is a platform for showcasing property developments with detailed client portfolios and project information. Contributed by adding responsive components and deploying the platform on A2 Hosting. Optimized the domain and hosting configurations for better performance and scalability.`,
    techstack: ['React.js', 'NextJS', 'Express.js', 'MongoDB', 'A2 Hosting'],
  },

  {
    category: 'SaaS Platform',
    title: 'TryReach',
    posterImage: '/projects/tryreach.png',
    description: `TryReach is a SaaS platform that simplifies meeting coordination with polling calendars and app integrations. Designed responsive, pixel-perfect UI components using React.js and improved frontend architecture for scalability. Enhanced my skills in TypeScript and modern UI frameworks.`,
    techstack: [
      'React.js',
      'CSS',
      'HTML5',
      'JavaScript',
      'TypeScript',
      'Redux',
    ],
    liveUrl: 'https://codejunkie.co/portfolio/try-reach/',
  },
  {
    category: 'Multivendor E-commerce',
    title: 'ChelseaFarm',
    posterImage: '/projects/chelseafarm.png',
    description: `ChelseaFarm is a multivendor e-commerce platform supporting diverse categories like groceries and fashion. Designed and implemented core e-commerce functionalities, including product listing, cart management, and multi-language support. Leveraged GraphQL for efficient data fetching and scalable architecture.`,
    techstack: [
      'React.js',
      'TailwindCSS',
      'Next.js',
      'Redux',
      'GraphQL',
      'AWS',
      'Nginx',
    ],
    videoDemoUrl: 'https://youtu.be/SyVvMAHSCQg',
  },
  {
    category: 'Personal Project',
    title: 'Ecommerce Web Application',
    posterImage: '/projects/ecommerce.webp',
    description:
      'A modern, high-performance online store with a sleek, responsive design for a seamless shopping experience on any device. Built using NextJS, ReactJS, TailwindCSS, Sanity, and Stripe for efficient and secure transactions.',
    techstack: ['NextJS', 'ReactJS', 'TailwindCSS', 'Sanity', 'Stripe'],
    liveUrl: 'https://ecommerce.mujtabacodes.com/',
    githubUrl: 'https://github.com/mujtabacodes/BuyNow-ecommerce-store',
    videoDemoUrl: 'https://youtu.be/Wx_q4CeK6CM',
  },

  {
    category: 'Personal Project',
    title: 'Netflix Clone',
    posterImage: '/projects/netflix.webp',
    description:
      'Developed a Netflix Clone with a user-friendly interface, secure payment integration, and real-time database. Features include user authentication and a responsive design. Created this project to learn and master Typescript, enhance ReactJS and TailwindCSS skills, and explore Firebase integration.',
    techstack: [
      'ReactJS',
      'Typescript',
      'TailwindCSS',
      'Redux',
      'Stripe',
      'Firestore',
      'Google Auth',
    ],
    liveUrl: 'https://netflix.mujtabacodes.com/',
    githubUrl:
      'https://github.com/mujtabacodes/Netflix-Clone-ReactJS-TailwindCSS-Sanity-',
  },

  {
    category: 'Ecommerce Project',
    title: 'Jadid Creations',
    posterImage: '/projects/woocommerce.webp',
    description:
      'Developed an ecommerce website from scratch using WooCommerce and WordPress. Responsible for maintenance and deployment on managed hosting, featuring a user-friendly interface and integrated contact form for seamless customer interaction.',
    techstack: ['WooCommerce', 'WordPress', 'Contact form'],
  },
];
