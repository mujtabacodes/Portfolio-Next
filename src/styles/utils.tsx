import { IRow, ISection } from '@/types/types';

export const Section = ({ className, children, id }: ISection) => {
  return (
    <section
      id={id}
      className={`w-full  x-gap ${className}`}
      data-aos="zoom-in-up"
    >
      {children}
    </section>
  );
};

export const Row = ({ className, children }: IRow) => {
  return <div className={`flex  ${className} `}>{children}</div>;
};
