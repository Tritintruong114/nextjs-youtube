import Container from "@/components/layouts/container/container";
import Section from "@/components/layouts/section/section";

const BlogPage = () => {
  return (
    <Section className="bg-bruno-grey">
      <Container>
        <div className="w-full justify-center items-center flex">
          <h1 className="text-fluid-display-2xl font-bebas">Blog</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-base">
          <div className="col-span-1 bg-bruno-yellow p-base h-[350px] flex-col justify-between flex">
            <div>
              <p className="font-bold font-manrope text-fluid-body-sm">
                Ho Chi Minh
              </p>
            </div>
            <div className="flex-grow flex flex-col justify-between py-base">
              <h3 className="text-fluid-body-xxl font-bebas font-bold">
                Blog 1
              </h3>
              <div className="flex gap-base">
                <p>Next JS</p>
                <p>Swell JS</p>
              </div>
            </div>
            <div className="pt-base border-t border-bruno-black flex justify-between w-full items-center">
              <p>Date</p>
              <button>More</button>
            </div>
          </div>
          <div className="col-span-1 bg-bruno-dark-grey text-white p-base h-[350px] flex-col justify-between flex">
            <div>
              <p className="font-bold font-manrope text-fluid-body-sm">
                Ho Chi Minh
              </p>
            </div>
            <div className="flex-grow flex flex-col justify-between py-base">
              <h3 className="text-fluid-body-xxl font-bebas font-bold">
                Blog 1
              </h3>
              <div className="flex gap-base">
                <p>Next JS</p>
                <p>Swell JS</p>
              </div>
            </div>
            <div className="pt-base border-t border-bruno-black flex justify-between w-full items-center">
              <p>Date</p>
              <button>More</button>
            </div>
          </div>
          <div className="col-span-1 bg-bruno-white p-base h-[350px] flex-col justify-between flex">
            <div>
              <p className="font-bold font-manrope text-fluid-body-sm">
                Ho Chi Minh
              </p>
            </div>
            <div className="flex-grow flex flex-col justify-between py-base">
              <h3 className="text-fluid-body-xxl font-bebas font-bold">
                Blog 1
              </h3>
              <div className="flex gap-base">
                <p>Next JS</p>
                <p>Swell JS</p>
              </div>
            </div>
            <div className="pt-base border-t border-bruno-black flex justify-between w-full items-center">
              <p>Date</p>
              <button>More</button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BlogPage;
