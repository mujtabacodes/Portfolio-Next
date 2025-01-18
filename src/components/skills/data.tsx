import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaJenkins,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiNextdotjs,
  SiPrisma,
  SiRedis,
  SiElastic,
  SiFirebase,
  SiGooglecloud,
} from 'react-icons/si';

export const skillsData = [
  {
    title: 'Area of Expertise',
    subtitle: 'Programming/Markup Languages & Stacks',
    skills: [
      {
        icon: <SiJavascript className="text-yellow-500" />,
        name: 'JavaScript',
      },
      { icon: <SiTypescript className="text-blue-500" />, name: 'TypeScript' },
      { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML' },
      { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS' },
      { icon: <FaSass className="text-pink-500" />, name: 'SASS' },
      { icon: <FaReact className="text-cyan-500" />, name: 'MERN Stack' },
      {
        icon: <SiJavascript className="text-white" />,
        name: 'Web Development',
      },
    ],
  },
  {
    title: 'Frontend',
    subtitle: 'Libraries & Frameworks',
    skills: [
      { icon: <FaReact className="text-cyan-500" />, name: 'React' },
      { icon: <FaReact className="text-purple-500" />, name: 'Redux' },
      { icon: <SiNextdotjs className="text-black" />, name: 'Next.js' },
      { icon: <FaCss3Alt className="text-blue-500" />, name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend',
    subtitle: 'Technology, Frameworks & Libraries',
    skills: [
      { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
      { icon: <FaNodeJs className="text-gray-500" />, name: 'ExpressJS' },
      { icon: <FaNodeJs className="text-orange-500" />, name: 'NestJS' },
      { icon: <SiGraphql className="text-pink-500" />, name: 'GraphQL' },
      { icon: <SiPrisma className="text-blue-400" />, name: 'Prisma' },
      { icon: <SiPrisma className="text-cyan-500" />, name: 'Sequelize' },
    ],
  },
  {
    title: 'Database & Caching',
    subtitle: 'Backbone of our applications',
    skills: [
      { icon: <SiMysql className="text-blue-500" />, name: 'MySQL' },
      { icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
      { icon: <SiRedis className="text-red-500" />, name: 'Redis' },
      { icon: <SiElastic className="text-teal-500" />, name: 'Elastic Search' },
    ],
  },
  {
    title: 'DevOps & Tools',
    subtitle: 'Tools & Services',
    skills: [
      { icon: <FaDocker className="text-blue-500" />, name: 'Docker' },
      { icon: <FaJenkins className="text-blue-500" />, name: 'Jenkins' },
      { icon: <FaGitAlt className="text-orange-500" />, name: 'Git' },
    ],
  },
  {
    title: 'Cloud Platforms',
    subtitle: 'Cloud platforms and services I have used',
    skills: [
      { icon: <SiFirebase className="text-yellow-500" />, name: 'Firebase' },
      {
        icon: <SiGooglecloud className="text-blue-500" />,
        name: 'Google Cloud Platform',
      },
    ],
  },
];
