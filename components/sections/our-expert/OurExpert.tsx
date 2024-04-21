import { Linkedln } from "@/components/elements/icons/Linkedln";
import Image from "next/image";
import Link from "next/link";

export const OurExpert = () => {
  return (
    <section className="py-48 bg-secondary-950">
      <div className="container">
        <div className="flex text-white items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4">
          <span className="h-3 w-3 bg-primary-300 block rounded-full" />
          <span>Our experts</span>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <h2 className="text-features leading-none text-white">
              Meet our experts{" "}
            </h2>
            <p className="text-neutral-400">
              Our team boasts top green energy experts, driving innovation in
              sustainability.
            </p>
          </div>
          <div className="mt-20">
            <div className="py-8 border-b flex gap-12 items-center border-neutral-600">
              <div className="h-[90px] w-[90px] relative">
                <Image
                  src="/images/bruno.jpg"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                  <h3 className="text-sub-title">Jenny Wilson</h3>
                  <p className="text-neutural-600">
                    Senior Sustainability Consultant
                  </p>
                </div>
                <Link href="/">
                  <Linkedln />
                </Link>
              </div>
            </div>
            <div className="py-8 border-b flex gap-12 items-center border-neutral-600">
              <div className="h-[90px] w-[90px] relative">
                <Image
                  src="/images/bruno.jpg"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                  <h3 className="text-sub-title">Jenny Wilson</h3>
                  <p className="text-neutural-600">
                    Senior Sustainability Consultant
                  </p>
                </div>
                <Link href="/">
                  <Linkedln />
                </Link>
              </div>
            </div>
            <div className="py-8 border-b flex gap-12 items-center border-neutral-600">
              <div className="h-[90px] w-[90px] relative">
                <Image
                  src="/images/bruno.jpg"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                  <h3 className="text-sub-title">Jenny Wilson</h3>
                  <p className="text-neutural-600">
                    Senior Sustainability Consultant
                  </p>
                </div>
                <Link href="/">
                  <Linkedln />
                </Link>
              </div>
            </div>
            <div className="py-8 border-b flex gap-12 items-center border-neutral-600">
              <div className="h-[90px] w-[90px] relative">
                <Image
                  src="/images/bruno.jpg"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                  <h3 className="text-sub-title">Jenny Wilson</h3>
                  <p className="text-neutural-600">
                    Senior Sustainability Consultant
                  </p>
                </div>
                <Link href="/">
                  <Linkedln />
                </Link>
              </div>
            </div>
            <div className="py-8 border-b flex gap-12 items-center border-neutral-600">
              <div className="h-[90px] w-[90px] relative">
                <Image
                  src="/images/bruno.jpg"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                  <h3 className="text-sub-title">Jenny Wilson</h3>
                  <p className="text-neutural-600">
                    Senior Sustainability Consultant
                  </p>
                </div>
                <Link href="/">
                  <Linkedln />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
