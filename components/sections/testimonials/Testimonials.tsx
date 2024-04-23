import Image from "next/image";

export const Testimonials = () => {
  return (
    <section className="py-48 bg-secondary-950 rounded-3xl">
      <div className="container">
        {" "}
        <div className="flex text-white items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4">
          <span className="h-3 w-3 bg-primary-300 block rounded-full" />
          <span>Testimonials</span>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-features leading-none text-white">
            What our customers say{" "}
          </h2>
        </div>
        <div className="flex sm:grid grid-cols-4 gap-8 mt-24">
          <div className="w-full shrink-0 sm:col-span-1 p-10 rounded-3xl bg-primary-300">
            <p className="min-h-[180px]">
              “Flow transformed my energy use. Efficient, green tech,
              outstanding service!”
            </p>
            <div className="flex gap-6 items-center ">
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
          <div className=" w-full shrink-0 sm:col-span-1  p-10 rounded-3xl bg-primary-300">
            <p className="min-h-[180px]">
              “Flow transformed my energy use. Efficient, green tech,
              outstanding service!”
            </p>
            <div className="flex gap-6 items-center ">
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
          <div className=" w-full shrink-0 sm:col-span-1 p-10 rounded-3xl bg-primary-300">
            <p className="min-h-[180px]">
              “Flow transformed my energy use. Efficient, green tech,
              outstanding service!”
            </p>
            <div className="flex gap-6 items-center ">
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
          <div className="w-full shrink-0 sm:col-span-1 p-10 rounded-3xl bg-primary-300">
            <p className="min-h-[180px]">
              “Flow transformed my energy use. Efficient, green tech,
              outstanding service!”
            </p>
            <div className="flex gap-6 items-center ">
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
        </div>
        <div className="w-full h-[2px] block bg-neutral-500 mt-16">
          <div className="h-[2px] bg-neutral-100 block w-[25%]" />
        </div>
      </div>
    </section>
  );
};
