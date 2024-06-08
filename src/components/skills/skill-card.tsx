import { ISkillCard } from '@/types/types';
import React, { memo } from 'react';

const SkillCard = ({ children, className }: ISkillCard) => {
  return (
    <div className="bg-secondary rounded-lg p-3 shadow-lg">{children}</div>
  );
};

export default memo(SkillCard);
