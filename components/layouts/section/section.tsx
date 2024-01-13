import React from "react";
type SectionTypes = {
  children: React.ReactNode;
  className?: string;
};
const Section = ({ children, className }: SectionTypes) => {
  return (
    <section data-comp="section" className={`sm:pb-base pt-xxl  ${className}`}>
      {children}
    </section>
  );
};

export default Section;
