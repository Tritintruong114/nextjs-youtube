"use client";
import { useWindScreenowSize } from "@/hooks/useWindowSize";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

export const Testimonials = () => {
  const size = useWindScreenowSize();
  return (
    <section className="py-48 bg-secondary-950 rounded-3xl overflow-hidden">
      <div className="container flex-col flex items-center">
        <div className="flex w-full text-white items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4">
          <span className="h-3 w-3 bg-primary-300 block rounded-full" />
          <span>Testimonials</span>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-features leading-none text-white">
            What our customers say{" "}
          </h2>
        </div>
        <div className="mt-24">
          <Carousel
            swipeable
            stopOnHover
            showThumbs={false}
            showStatus={false}
            interval={6000}
            showArrows={false}
            autoPlay
            emulateTouch
            showIndicators={false}
            centerMode
            centerSlidePercentage={20}
            infiniteLoop
            useKeyboardArrows
            className="cursor-grabbing w-full"
          >
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
