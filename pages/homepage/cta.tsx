import { homepage } from "@/data/homepage.json";
import { useState } from "react";

const HomepageCta = () => {
  const { hero } = homepage;
  const [projectTitle, setProjectTitle] = useState("");

  return (
    <section
      data-comp="section"
      className="sm:pb-base pt-xxl h-screen relative  bg-bruno-grey"
    >
      {/* <div className=" gap-base col-span-1 sm:col-span-4 grow grid grid-cols-1 sm:grid-cols-4">
        <div className="sm:col-span-1">
          <ul className="flex flex-col justify-between h-full">
            {hero.projects.map((project, index) => {
              return (
                <Button key={index} setProjectTitle={setProjectTitle}>
                  {project.projectTitle}
                </Button>
              );
            })}
          </ul>
        </div>
        <div className="sm:col-span-3 border-2 p-3 border-bruno-grey w-full">
          <div className=" h-full w-full  relative overflow-hidden">
            {projectTitle ? (
              hero.projects.map((project, index) => {
                return (
                  <div key={index} className="project_card cursor-pointer">
                    <Image
                      src={project.projectImg}
                      alt=""
                      width={450}
                      height={450}
                      className={`object-cover absolute w-full h-full  duration-500 ${
                        projectTitle === project.projectTitle
                          ? "top-0"
                          : "top-[100%]"
                      }`}
                    />
                    <h3 className="project_tilte ml-3 duration-500 relative z-10 text-start font-bebas text-fluid-body-xxl text-bruno-grey">
                      {projectTitle === project.projectTitle
                        ? project.projectTitle
                        : ""}
                    </h3>
                  </div>
                );
              })
            ) : (
              <div className="project_card cursor-pointer">
                <Image
                  src="/images/maison.png"
                  alt=""
                  width={450}
                  height={450}
                  className={`object-cover absolute w-full h-full  duration-500`}
                />
                <h3 className="project_tilte ml-3 duration-500 relative z-10 text-start font-bebas text-fluid-body-xxl">
                  Maison De Villa
                </h3>
              </div>
            )}
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HomepageCta;
