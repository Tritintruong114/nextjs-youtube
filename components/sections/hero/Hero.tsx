import Image from "next/image";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <section className="bg-secondary-950 h-fit pt-48 flex flex-col gap-32">
      <div className="container h-1/2 flex justify-center items-center">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="text-white">
            <h1 className="text-hero leading-none">
              The Future of Green Energy
            </h1>
          </div>
          <div className="mt-10 xl:mt-0">
            <p className="text-base text-white mb-10">
              Our commitment to green energy is paving the way for a cleaner,
              healthier planet. Join us on a journey towards a future where
              clean, renewable energy sources transform the way we power our
              lives.
            </p>
            <button className="bg-primary-300 hover:bg-primary-400 rounded-full px-6 py-4 duration-300">
              See our Solutions
            </button>
          </div>
        </div>
      </div>
      <div className="w-full col-span-2 h-1/2">
        <Marquee autoFill>
          <div className="flex justify-center gap-6 items-start mx-3">
            <Image
              src="/images/hero1.png"
              alt="Hero Image"
              width={450}
              height={250}
            />
            <Image
              src="/images/hero2.png"
              alt="Hero Image"
              width={450}
              height={250}
            />
            <Image
              src="/images/hero3.png"
              alt="Hero Image"
              width={450}
              height={250}
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export { Hero };
