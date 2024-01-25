import React from "react";
type SectionTypes = {
  children: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLDivElement>;
};
const Section = ({ children, className }: SectionTypes) => {
  return (
    <section
      data-component-layout="section"
      className={`py-xxl h-fit sm:h-screen relative overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
