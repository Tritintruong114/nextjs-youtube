import { Renewable, SaveEnergy, User } from "@/components";

export const Metrics = () => {
  return (
    <section className="py-48 bg-[#FFF7ED] rounded-3xl">
      <div className="container">
        <div className="flex items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4">
          <span className="h-3 w-3 bg-primary-300 block rounded-full" />
          <span>Metrics</span>
        </div>

        <div>
          <div className="mb-12 sm:mb-24">
            <h2 className="text-section leading-none">Key to clean future</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6 items-start p-8 bg-primary-300 rounded-3xl">
              <Renewable />
              <div className="flex flex-col gap-6">
                <h3 className="text-title leading-none">5,000 Mwh</h3>
                <h4 className="text-sub-title">Renewable Energy Generated</h4>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <div className="flex gap-6 p-8 bg-primary-300 rounded-3xl">
                <User />
                <div>
                  <h3 className="text-title leading-none">5,000 Mwh</h3>
                  <h4 className="text-sub-title leading-none mt-4">
                    Renewable Energy Generated
                  </h4>
                </div>
              </div>
              <div className="flex gap-6 p-8 bg-primary-300 rounded-3xl">
                <SaveEnergy />
                <div>
                  <h3 className="text-title leading-none">5,000 Mwh</h3>
                  <h4 className="text-sub-title leading-none mt-4">
                    Renewable Energy Generated
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
