import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
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
  SiPostgresql,
  SiRedux,
  SiExpress,
  SiNestjs,
  SiNginx,
} from 'react-icons/si';
import { TbWorldWww } from 'react-icons/tb';
import { BiSolidComponent } from 'react-icons/bi';
import { FaAws } from 'react-icons/fa6';
import { IoIosCloud } from 'react-icons/io';

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
      { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML / CSS' },
      { icon: <FaReact className="text-cyan-500" />, name: 'MERN Stack' },
      {
        icon: <TbWorldWww className="text-primary" />,
        name: 'Web Development',
      },
    ],
  },
  {
    title: 'Frontend',
    subtitle: 'Libraries & Frameworks',
    skills: [
      { icon: <FaReact className="text-cyan-500" />, name: 'React' },
      { icon: <SiNextdotjs className="text-primary" />, name: 'Next.js' },
      { icon: <SiRedux className="text-purple-500" />, name: 'Redux' },
      { icon: <FaCss3Alt className="text-blue-500" />, name: 'Tailwind CSS' },
      {
        icon: <BiSolidComponent className="text-orange-500" />,
        name: 'ShadCN, Bootstrap, Material UI, and more',
      },
    ],
  },
  {
    title: 'Backend',
    subtitle: 'Technology, Frameworks & Libraries',
    skills: [
      { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
      { icon: <SiExpress className="text-primary" />, name: 'ExpressJS' },
      { icon: <SiNestjs className="text-orange-500" />, name: 'NestJS' },
      { icon: <SiGraphql className="text-pink-500" />, name: 'GraphQL' },
      { icon: <SiPrisma className="text-blue-400" />, name: 'Prisma' },
    ],
  },
  {
    title: 'Database & Caching',
    subtitle: 'Backbone of our applications',
    skills: [
      { icon: <SiPostgresql className="text-blue-500" />, name: 'PostgreSQL' },
      { icon: <SiMysql className="text-orange-500" />, name: 'MySQL' },
      { icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
      { icon: <SiRedis className="text-red-500" />, name: 'Redis' },
    ],
  },
  {
    title: 'DevOps & Tools',
    subtitle: 'Tools & Services',
    skills: [
      { icon: <FaDocker className="text-blue-500" />, name: 'Docker' },
      { icon: <FaJenkins className="text-orange-500" />, name: 'Jenkins' },
      { icon: <FaGithub className="text-primary" />, name: 'Git / GitHub' },
      { icon: <SiNginx className="text-green-500" />, name: 'Nginx' },
    ],
  },
  {
    title: 'Cloud Platforms',
    subtitle: 'Cloud platforms and services I have used',
    skills: [
      {
        icon: <FaAws className="text-orange-500" />,
        name: 'Amazon Web Services(AWS)',
      },

      { icon: <SiFirebase className="text-yellow-500" />, name: 'Firebase' },
      {
        icon: <SiGooglecloud className="text-blue-500" />,
        name: 'Google Cloud Platform',
      },
      {
        icon: <IoIosCloud className="text-primary" />,
        name: 'Digital Ocean, Hostinger, A2Hosting and more',
      },
    ],
  },
];
