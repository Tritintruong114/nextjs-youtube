import ArrowIcon from "@/components/elements/icon/arrow";
import Container from "@/components/layouts/container/container";
import Section from "@/components/layouts/section/section";

const HomepageExpertise = () => {
  return (
    <Section className="bg-bruno-white">
      <Container>
        <div className="text-center flex justify-center items-center w-full flex-col mb-base">
          <h2 className="text-fluid-display-xl font-bebas text-center leading-none">
            Expertise
          </h2>
          <p className="text-center sm:w-1/2 w-full font-manrope text-fluid-body-xl  font-bold">
            I am here to help you build a strong and recognizable brand.
            Flexible and customize codebase.
          </p>
        </div>
        <div className="grid gap-base flex-grow py-xs">
          <div className="h-fit py-base group relative hover:text-bruno-yellow duration-300 bg-bruno-grey flex justify-between items-center">
            <span className="bg-bruno-yellow group-hover:h-full w-full h-0 duration-300 block absolute"></span>
            <h3 className="text-fluid-body-xxl group-hover:text-bruno-ximen duration-300 font-bebas relative">
              Creative Development
            </h3>
            <p>
              <ArrowIcon />
            </p>
          </div>
          {/* <div className="h-full rounded-3xl hover:bg-bruno-ximen hover:text-bruno-yellow duration-300 bg-bruno-grey px-xs flex justify-center items-center ">
            <h3 className="text-fluid-body-md font-bebas">
              Front-end Development
            </h3>
            <p></p>
          </div>
          <div className="h-full rounded-3xl hover:bg-bruno-ximen hover:text-bruno-yellow duration-300 bg-bruno-grey px-xs flex justify-center items-center ">
            <h3 className="text-fluid-body-md font-bebas">
              Design System Integration
            </h3>
          </div>
          <div className="h-full rounded-3xl hover:bg-bruno-ximen hover:text-bruno-yellow duration-300 bg-bruno-grey px-xs flex justify-center items-center">
            <h3 className="text-fluid-body-md font-bebas"> SEO Optimization</h3>
          </div>
          <div className="h-full rounded-3xl hover:bg-bruno-ximen hover:text-bruno-yellow duration-300 bg-bruno-grey px-xs flex justify-center items-center ">
            <h3 className="text-fluid-body-md font-bebas"> CMS Integration</h3>
          </div> */}
        </div>
      </Container>
    </Section>
  );
};

export default HomepageExpertise;
