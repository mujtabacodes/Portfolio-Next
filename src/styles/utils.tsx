import { IRow, ISection } from '@/types/types';

export const Section = ({ className, children, id }: ISection) => {
  return (
    <section
      id={id}
      className={` md:max-w-[1100px] lg:max-w-[1800px] w-full mx-auto  px-1 md:px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
};

export const Row = ({ className, children }: IRow) => {
  return <div className={`flex  ${className} `}>{children}</div>;
};
