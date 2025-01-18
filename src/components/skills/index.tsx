import { Section } from '@/styles/utils';
import dynamic from 'next/dynamic';
import { memo } from 'react';
import {
  FaAws,
  FaCss3Alt,
  FaGithubSquare,
  FaReact,
  FaHtml5,
  FaJava,
} from 'react-icons/fa';
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from 'react-icons/ri';
import { AiOutlineJavaScript } from 'react-icons/ai';
import { SiTypescript, SiExpress, SiMysql, SiNginx } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
import { DiMongodb } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';
import SkillCard from './skill-card';
import { Header } from '../header/header';
import { SectionHeader } from '../section-header';
import SkillsCard from './skills-card';
import { skillsData } from './data';

const Parallax = dynamic(() => import('./parallax'), {
  loading: () => <p>Loading...</p>,
});

const Skills = () => {
  return (
    <Section id="skills" className="skills_section py-2">
      <SectionHeader
        heading="Skills"
        subTitle="The Core of Excellence"
        align="center"
      />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-aos="fade-up"
      >
        {skillsData.map((category, index) => (
          <SkillsCard
            key={index}
            title={category.title}
            subtitle={category.subtitle}
            skills={category.skills}
          />
        ))}
      </div>
      {/* <Parallax baseVelocity={-5}>
        <div className="flex gap-4">
          <SkillCard title="React" link="https://reactjs.org/">
            <FaReact className="text-heightlightColor" />
          </SkillCard>
          <SkillCard title="Next.js" link="https://nextjs.org/">
            <RiNextjsFill />
          </SkillCard>
          <SkillCard title="Redux" link="https://redux.js.org/">
            <TbBrandRedux className="text-violet-700" />
          </SkillCard>
          <SkillCard title="Tailwind CSS" link="https://tailwindcss.com/">
            <RiTailwindCssFill className="text-sky-700" />
          </SkillCard>
          <SkillCard title="Node.js" link="https://nodejs.org/">
            <RiNodejsFill className="text-green-700" />
          </SkillCard>
          <SkillCard title="Express" link="https://expressjs.com/">
            <SiExpress />
          </SkillCard>
          <SkillCard title="TypeScript" link="https://www.typescriptlang.org/">
            <SiTypescript className="text-blue-500" />
          </SkillCard>
          <SkillCard
            title="HTML5"
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
          >
            <FaHtml5 className="text-red-500" />
          </SkillCard>
          <SkillCard
            title="CSS3"
            link="https://developer.mozilla.org/en-US/docs/Web/CSS"
          >
            <FaCss3Alt className="text-blue-500" />
          </SkillCard>
        </div>
      </Parallax>
      <Parallax baseVelocity={5}>
        <div className="flex gap-4 mt-5">
          <SkillCard title="GitHub" link="https://github.com/">
            <FaGithubSquare />
          </SkillCard>
          <SkillCard title="AWS" link="https://aws.amazon.com/">
            <FaAws className="text-orange-400" />
          </SkillCard>
          <SkillCard title="MongoDB" link="https://www.mongodb.com/">
            <DiMongodb className="text-green-600" />
          </SkillCard>
          <SkillCard title="MySQL" link="https://www.mysql.com/">
            <SiMysql />
          </SkillCard>
          <SkillCard title="PostgreSQL" link="https://www.postgresql.org/">
            <BiLogoPostgresql className="text-blue-500" />
          </SkillCard>
          <SkillCard title="Java" link="https://www.java.com/">
            <FaJava className="text-orange-500" />
          </SkillCard>
          <SkillCard title="Nginx" link="https://nginx.org/">
            <SiNginx className="text-green-500" />
          </SkillCard>
          <SkillCard title="TypeScript" link="https://www.typescriptlang.org/">
            <SiTypescript className="text-blue-500" />
          </SkillCard>
          <SkillCard
            title="JavaScript"
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          >
            <AiOutlineJavaScript className="text-yellow-500" />
          </SkillCard>
        </div>
      </Parallax> */}
    </Section>
  );
};

export default memo(Skills);
