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
import { BsEmojiExpressionlessFill } from 'react-icons/bs';
import { AiOutlineJavaScript } from 'react-icons/ai';
import { SiTypescript, SiExpress, SiMysql, SiNginx } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
import { DiMongodb } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';
import SkillCard from './skill-card';

const Parallax = dynamic(() => import('./parallax'), {
  loading: () => <p>Loading...</p>,
});

const Skills = () => {
  return (
    <Section id="skills" className="skills_section pt-10">
      <Parallax baseVelocity={-5}>
        <div className="flex gap-4">
          <SkillCard>
            <FaReact className="text-heightlightColor" />
          </SkillCard>
          <SkillCard>
            <RiNextjsFill />
          </SkillCard>
          <SkillCard>
            <TbBrandRedux className="text-violet-700" />
          </SkillCard>
          <SkillCard>
            <RiTailwindCssFill className="text-sky-700" />
          </SkillCard>
          <SkillCard>
            <RiNodejsFill className="text-green-700" />
          </SkillCard>
          <SkillCard>
            <SiExpress />
          </SkillCard>
          <SkillCard>
            <SiTypescript className="text-blue-500" />
          </SkillCard>
          <SkillCard>
            <FaHtml5 className="text-red-500" />
          </SkillCard>
          <SkillCard>
            <FaCss3Alt className="text-blue-500" />
          </SkillCard>
        </div>
      </Parallax>
      <Parallax baseVelocity={5}>
        <div className="flex gap-4 mt-5">
          <SkillCard>
            <FaGithubSquare />
          </SkillCard>
          <SkillCard>
            <FaAws className="text-orange-400" />
          </SkillCard>
          <SkillCard>
            <DiMongodb className="text-green-600" />
          </SkillCard>
          <SkillCard>
            <SiMysql />
          </SkillCard>
          <SkillCard>
            <BiLogoPostgresql className="text-blue-500" />
          </SkillCard>
          <SkillCard>
            <FaJava className="text-orange-500" />
          </SkillCard>
          <SkillCard>
            <SiNginx className="text-green-500" />
          </SkillCard>
          <SkillCard>
            <SiTypescript className="text-blue-500" />
          </SkillCard>
          <SkillCard>
            <AiOutlineJavaScript className="text-yellow-500" />
          </SkillCard>
        </div>
      </Parallax>
    </Section>
  );
};

export default memo(Skills);
