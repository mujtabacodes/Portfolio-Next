import { Section } from '@/styles/utils';
import { memo } from 'react';

import { SectionHeader } from '../section-header';
import SkillsCard from './skills-card';
import { skillsData } from '@/config/skills';

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
    </Section>
  );
};

export default memo(Skills);
