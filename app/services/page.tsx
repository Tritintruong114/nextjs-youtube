"use client";

import Container from "@/components/layouts/container/container";
import Section from "@/components/layouts/section/section";

const About = () => {
  return (
    <>
      <Section className="bg-bruno-grey">
        <Container>
          <div
            data-comp="hero"
            className="grid grid-cols-1  sm:grid-cols-4 gap-base place-content-center h-full"
          >
            <div className=" sm:col-span-4  text-bruno-ximen text-center flex justify-center items-center flex-col">
              <h1 className="font-bebas text-bruno-black text-fluid-display-3xl leading-none">
                Services
              </h1>
              <p className="font-bold text-bruno-black font-manrope sm:w-5/6 w-full text-fluid-body-xxl text-center">
                “Instead of focusing on how much you can accomplish, focus on
                how much you can absolutely love what you’re doing.”
                <span className="italic text-fluid-body-xl">— Leo Babauta</span>
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-bruno-grey">
        <Container>
          <div className="w-full text-center">
            <h2 className="text-fluid-body-xxl font-bebas">
              One client at a time
            </h2>
          </div>
          <div>
            <div>Discovery Call</div>
            <div>Onboarding Design - Define timeline</div>
            <div>Building Process</div>
            <div>Delivery</div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default About;
