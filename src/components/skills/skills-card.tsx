import React from 'react';
import { Card } from '../ui/card';
import { MagicCard } from '../ui/magic-card';

interface ISkillsCard {
  title: string;
  subtitle: string;
  skills: { icon: JSX.Element; name: string }[];
}

const SkillsCard: React.FC<ISkillsCard> = ({ title, subtitle, skills }) => {
  return (
    <MagicCard
      className=" p-6 rounded-md shadow-md transition-transform duration-500 hover:scale-105"
      data-aos="fade-up"
    >
      <h3 className="text-primary text-xl font-bold mb-2">{title}</h3>
      <p className="text-primary-foreground text-sm mb-4">{subtitle}</p>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          >
            <span className="w-6 h-6 flex items-center justify-center">
              {skill.icon}
            </span>
            <span className="text-primary">{skill.name}</span>
          </li>
        ))}
      </ul>
    </MagicCard>
  );
};

export default SkillsCard;
