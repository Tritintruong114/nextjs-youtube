import { Ev } from "@/components";

export const Features = () => {
  return (
    <section className="py-48 bg-[#FFF7ED] rounded-3xl">
      <div className="container">
        <div className="flex items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4">
          <span className="h-3 w-3 bg-primary-300 block rounded-full" />
          <span>Solutions</span>
        </div>
        <div>
          <div className="mb-12 sm:mb-24">
            <h2 className="text-section leading-none">Key to clean future</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8  xl:grid-cols-4">
            <div className="flex flex-col gap-6 items-start">
              <Ev />
              <div>
                <h3 className="text-title leading-none mb-4">EV charging</h3>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Ev />
              <div>
                <h3 className="text-title leading-none mb-4">EV charging</h3>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Ev />
              <div>
                <h3 className="text-title leading-none mb-4">EV charging</h3>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Ev />
              <div>
                <h3 className="text-title leading-none mb-4">EV charging</h3>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
