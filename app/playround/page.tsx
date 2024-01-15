"use client";
import Container from "@/components/layouts/container/container";
import Section from "@/components/layouts/section/section";
import Image from "next/image";

const PlayroundPage = () => {
  return (
    <>
      <Section className="">
        <Container>
          <div
            data-comp="hero"
            className="grid grid-cols-1  sm:grid-cols-4 gap-base"
          >
            <div className=" sm:col-span-3 text-center flex justify-center items-center flex-col border  border-bruno-black">
              <h1 className="font-bebas text-fluid-display-2xl leading-normal">
                PlayGround
              </h1>
            </div>
            <div className="sm:col-span-1 py-base bg-bruno-pink flex justify-center items-center font-bold text-fluid-body-sm px-base">
              <div className="text-bruno-white">
                <p>
                  The Playground features web experiments, concepts, and layouts
                  that push the boundaries of traditional design and showcase
                  the latest in animation techniques.
                </p>
              </div>
            </div>
          </div>
          <div className="grid mt-base grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-base ">
            <div className="shrink h-fit p-base border border-bruno-black rounded-3xl">
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
                <button className="px-6 py-1 bg-bruno-pink text-bruno-white">
                  More
                </button>
              </div>
            </div>
            <div className="shrink h-fit p-base border border-bruno-black rounded-3xl">
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
                <button className="px-6 py-1 bg-bruno-pink text-bruno-white">
                  More
                </button>
              </div>
            </div>
            <div className="shrink h-fit p-base border border-bruno-black rounded-3xl">
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
                <button className="px-6 py-1 bg-bruno-pink text-bruno-white">
                  More
                </button>
              </div>
            </div>
            <div className="shrink h-fit p-base border border-bruno-black rounded-3xl">
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
                <button className="px-6 py-1 bg-bruno-pink text-bruno-white">
                  More
                </button>
              </div>
            </div>
            <div className="shrink h-fit p-base border border-bruno-black rounded-3xl">
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
                <button className="px-6 py-1 bg-bruno-pink text-bruno-white">
                  More
                </button>
              </div>
            </div>
            <div className="shrink h-fit p-base border border-bruno-black rounded-3xl">
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
                <button className="px-6 py-1 bg-bruno-pink text-bruno-white">
                  More
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PlayroundPage;
