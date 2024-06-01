import { ISection } from '@/types/types';

export const Section = ({ className, children }: ISection) => {
  return <div className={`${className} x-gap  md:h-[80vh]`}>{children}</div>;
};