import { ISection } from '@/types/types';

export const Section = ({ className, children }: ISection) => {
  return (
    <div className={`w-full min-h-screen x-gap ${className}`}>{children}</div>
  );
};

export const Row = ({ className, children }: ISection) => {
  return <div className={`${className} flex `}>{children}</div>;
};
