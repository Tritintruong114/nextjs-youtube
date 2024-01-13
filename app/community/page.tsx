import Container from "@/components/layouts/container/container";
import Section from "@/components/layouts/section/section";
import React from "react";

const Community = () => {
  return (
    <Section>
      <Container>
        <div
          data-comp="hero"
          className="grid grid-cols-1  sm:grid-cols-4 gap-base"
        >
          <div className=" sm:col-span-3 text-center flex justify-center items-center flex-col border border-bruno-yellow">
            <h1 className="font-bebas text-fluid-display-2xl leading-normal">
              Community
            </h1>
          </div>
          <div className="sm:col-span-1 py-base bg-bruno-yellow flex justify-center items-center font-bold text-fluid-body-sm px-base">
            <div className="text-bruno-black">
              <p>
                The Playground features web experiments, concepts, and layouts
                that push the boundaries of traditional design and showcase the
                latest in animation techniques.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Community;
