"use client";
import Container from "@/components/layouts/container/container";
import Section from "@/components/layouts/section/section";
import Image from "next/image";

const PlayroundPage = () => {
  return (
    <main className="rounded-3xl overflow-y-scroll h-screen  no-scrollbar">
      <Section className="bg-bruno-white">
        <Container>
          <div className=" sm:col-span-4  sticky top-24 text-bruno-ximen text-center flex justify-center items-center flex-col">
            <h1 className="font-bebas text-fluid-display-2xl leading-normal">
              PlayGround
            </h1>
          </div>
          <div
            data-comp="hero"
            className="grid grid-cols-1  sm:grid-cols-4 gap-base"
          ></div>
          <div className="grid mt-base grid-cols-1 relative bg-bruno-white py-base md:grid-cols-2 xl:grid-cols-3 gap-base  max-w-screen-2xl">
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
      </Section>
    </main>
  );
};

export default PlayroundPage;
