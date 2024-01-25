/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/layouts/container/container";
import Section from "@/components/layouts/section/section";

const HomepageExpertise = () => {
  return (
    <Section className="bg-bruno-white">
      <Container>
        <div className=" h-full flex items-center justify-center flex-col">
          <div className="text-center flex justify-center items-center w-full flex-col mb-base">
            <h2 className="text-fluid-display-xl font-bebas text-center leading-none">
              Expertise
            </h2>
            <p className="text-center sm:w-1/2 w-full font-manrope text-fluid-body-xl  font-bold">
              Idea to reality. Let's make it happen.{" "}
            </p>
          </div>
          <div className="gap-base grid grid-cols-3 py-xs w-full h-full">
            <div className="h-full w-full  group relative hover:text-bruno-yellow duration-300 bg-bruno-grey flex">
              <span className="bg-bruno-yellow group-hover:w-full w-0 h-full duration-300 block absolute"></span>
              <div>
                <h3 className="text-fluid-body-xxl group-hover:text-bruno-ximen duration-300 font-bebas relative px-base pt-base">
                  Creative Front-end
                </h3>
              </div>
            </div>

            <div className="h-full w-full  group relative hover:text-bruno-yellow duration-300 bg-bruno-grey flex">
              <span className="bg-bruno-yellow group-hover:w-full w-0 h-full duration-300 block absolute"></span>
              <h3 className="text-fluid-body-xxl group-hover:text-bruno-ximen duration-300 font-bebas relative px-base pt-base">
                CMS Intergration
              </h3>
            </div>
            <div className="h-full w-full  group relative hover:text-bruno-yellow duration-300 bg-bruno-grey flex">
              <span className="bg-bruno-yellow group-hover:w-full w-0 h-full duration-300 block absolute"></span>
              <h3 className="text-fluid-body-xxl group-hover:text-bruno-ximen duration-300 font-bebas relative px-base pt-base">
                SEO Optimization
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HomepageExpertise;
