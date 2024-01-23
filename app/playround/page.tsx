import HandlSprinkle from "@/components/elements/icon/hand-spinkle";
import HandUp from "@/components/elements/icon/hand-up";
import Container from "@/components/layouts/container/container";
import Section from "@/components/layouts/section/section";
import { Metadata } from "next";
import PlaygroundCard from "./playroud-card";
export const metadata: Metadata = {
  title: "Playground",
  description: "Playground of Bruno",
};
const PlayroundPage = () => {
  return (
    <main className="rounded-3xl relative overflow-y-scroll h-fit no-scrollbar">
      <div className="fixed top-0 w-full sm:h-screen z-10 flex flex-col justify-between pointer-events-none">
        <div className="w-full flex items-center">
          <HandlSprinkle />
        </div>
        <div className="w-full flex items-center justify-end">
          <HandUp />
        </div>
      </div>
      <Section className="bg-bruno-white">
        <Container>
          <div
            data-comp="hero"
            className="grid grid-cols-1  sm:grid-cols-4 gap-base place-content-center h-full"
          >
            <div className=" sm:col-span-4  text-bruno-ximen text-center flex justify-center items-center flex-col">
              <h1 className="font-bebas text-fluid-display-3xl leading-none">
                PlayGround
              </h1>
              <p className="flex items-center justify-center w-full gap-3 pl-3 font-bold font-manrope text-fluid-body-xxl">
                <span className="bg-bruno-ximen text-bruno-yellow px-base">
                  building
                </span>
                vison &
                <span className="bg-bruno-ximen text-bruno-yellow px-base">
                  creating
                </span>
                reality
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <div className="bg-bruno-white">
        <Container>
          <div className="grid z-20 mt-base grid-cols-1 relative py-base md:grid-cols-2 xl:grid-cols-3 gap-base  max-w-screen-2xl">
            <PlaygroundCard />
            <PlaygroundCard />
            <PlaygroundCard />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default PlayroundPage;
