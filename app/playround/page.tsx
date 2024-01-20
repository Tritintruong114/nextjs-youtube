import HandlSprinkle from "@/components/elements/icon/hand-spinkle";
import HandUp from "@/components/elements/icon/hand-up";
import Container from "@/components/layouts/container/container";
import Section from "@/components/layouts/section/section";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Playground",
  description: "Playground of Bruno",
};
const PlayroundPage = () => {
  return (
    <main className="rounded-3xl relative overflow-y-scroll h-screen no-scrollbar">
      <div className="fixed top-0 w-full h-full z-10 flex flex-col justify-between pointer-events-none">
        <div className="w-full flex items-center">
          <HandlSprinkle />
        </div>
        <div className="w-full flex items-center justify-end">
          <HandUp />
        </div>
      </div>
      <Section className="bg-bruno-white sticky top-0">
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
                <span className="bg-bruno-ximen rounded-3xl text-bruno-yellow px-base">
                  <span>building</span>
                </span>
                vison &
                <span className="bg-bruno-ximen rounded-3xl text-bruno-yellow px-base">
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
            <div className="shrink h-fit p-base border border-bruno-black bg-[#ffffff] rounded-3xl">
              <div className="relative h-[300px] w-full">
                <Image
                  src="https://cdn.dribbble.com/userupload/5934311/file/original-9dd868a288cb625c2915941f021aacac.jpg?resize=2048x1536"
                  fill
                  className="w-full h-full object-cover rounded-3xl"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start pt-base">
                <h3 className="text-fluid-h3">Svg mask</h3>
                <p className="text-fluid-body-lg my-3">
                  Mordern svg technique with Next JS, Tailwind, Gsap
                </p>
                <button className="px-6 py-1 bg-bruno-grey text-bruno-white">
                  More
                </button>
              </div>
            </div>
            <div className="shrink h-fit p-base border border-bruno-black bg-[#ffffff] rounded-3xl">
              <div className="relative h-[300px] w-full">
                <Image
                  src="https://cdn.dribbble.com/userupload/8098427/file/original-c93690ccf7b111b11ee77f25608ee305.png?resize=1504x1128"
                  fill
                  className="w-full h-full object-cover rounded-3xl"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start pt-base">
                <h3 className="text-fluid-h3">Svg mask</h3>
                <p className="text-fluid-body-lg my-3">
                  Mordern svg technique with Next JS, Tailwind, Gsap
                </p>
                <button className="px-6 py-1 bg-bruno-grey text-bruno-white">
                  More
                </button>
              </div>
            </div>
            <div className="shrink h-fit p-base border border-bruno-black bg-[#ffffff] rounded-3xl">
              <div className="relative h-[300px] w-full">
                <Image
                  src="https://cdn.dribbble.com/userupload/12120905/file/original-283706f7e67387970473b2572f5b4c61.png?resize=1504x1128"
                  fill
                  className="w-full h-full object-cover rounded-3xl"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start pt-base">
                <h3 className="text-fluid-h3">Svg mask</h3>
                <p className="text-fluid-body-lg my-3">
                  Mordern svg technique with Next JS, Tailwind, Gsap
                </p>
                <button className="px-6 py-1 bg-bruno-grey text-bruno-white">
                  More
                </button>
              </div>
            </div>
            <div className="shrink h-fit p-base border border-bruno-black bg-[#ffffff] rounded-3xl">
              <div className="relative h-[300px] w-full">
                <Image
                  src="https://cdn.dribbble.com/userupload/5934311/file/original-9dd868a288cb625c2915941f021aacac.jpg?resize=2048x1536"
                  fill
                  className="w-full h-full object-cover rounded-3xl"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start pt-base">
                <h3 className="text-fluid-h3">Svg mask</h3>
                <p className="text-fluid-body-lg my-3">
                  Mordern svg technique with Next JS, Tailwind, Gsap
                </p>
                <button className="px-6 py-1 bg-bruno-grey text-bruno-white">
                  More
                </button>
              </div>
            </div>
            <div className="shrink h-fit p-base border border-bruno-black bg-[#ffffff] rounded-3xl">
              <div className="relative h-[300px] w-full">
                <Image
                  src="https://cdn.dribbble.com/userupload/8098427/file/original-c93690ccf7b111b11ee77f25608ee305.png?resize=1504x1128"
                  fill
                  className="w-full h-full object-cover rounded-3xl"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start pt-base">
                <h3 className="text-fluid-h3">Svg mask</h3>
                <p className="text-fluid-body-lg my-3">
                  Mordern svg technique with Next JS, Tailwind, Gsap
                </p>
                <button className="px-6 py-1 bg-bruno-grey text-bruno-white">
                  More
                </button>
              </div>
            </div>
            <div className="shrink h-fit p-base border border-bruno-black bg-[#ffffff] rounded-3xl">
              <div className="relative h-[300px] w-full">
                <Image
                  src="https://cdn.dribbble.com/userupload/12120905/file/original-283706f7e67387970473b2572f5b4c61.png?resize=1504x1128"
                  fill
                  className="w-full h-full object-cover rounded-3xl"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start pt-base">
                <h3 className="text-fluid-h3">Svg mask</h3>
                <p className="text-fluid-body-lg my-3">
                  Mordern svg technique with Next JS, Tailwind, Gsap
                </p>
                <button className="px-6 py-1 bg-bruno-grey text-bruno-white">
                  More
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default PlayroundPage;
