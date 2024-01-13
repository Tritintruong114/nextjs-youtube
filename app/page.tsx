"use client";
import Button from "@/components/elements/button/button";
import ShapeOne from "@/public/shape-one";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { homepage } from "@/data/homepage.json";
export default function Home() {
  const { hero } = homepage;
  const [projectTitle, setProjectTitle] = useState("");

  return (
    <>
      <section
        data-comp="section"
        className="sm:pb-base pt-xxl h-screen sm:overflow-hidden"
      >
        <div data-comp="container" className="sm:mx-auto px-base h-full">
          <div data-comp="hero" className="flex flex-col h-full">
            <div className="gap-base h-fit grid-cols-1 sm:grid-cols-4 grid">
              <div className=" sm:col-span-3 h-fit text-center flex justify-center items-center flex-col border border-bruno-yellow">
                <h1 className="font-bebas text-fluid-display-2xl leading-normal">
                  Bruno Truong
                </h1>
              </div>
              <div className="sm:col-span-1 h-full bg-bruno-yellow flex justify-center items-center font-bold text-fluid-body-lg">
                <div className="text-bruno-black">
                  <p>
                    Locate: <span className="font-normal">Viet Nam 🇻🇳</span>
                  </p>
                  <p>
                    Passsionate:{" "}
                    <span className="font-normal">Build Crazy Stuff</span>
                  </p>
                  <p>
                    Expertise:{" "}
                    <span className="font-normal">Creative Development</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-4 py-base my-base flex sm:h-fit justify-center items-center  bg-bruno-yellow text-fluid-body-xxl font-bebas text-bruno-black col-span-1">
              <Marquee pauseOnHover autoFill speed={30}>
                <ShapeOne />
                <span className="px-base pt-1 text-center flex items-center justify-center">
                  Creative
                </span>
                <ShapeOne />

                <span className="px-base pt-1 text-center">Passionate</span>
                <ShapeOne />

                <span className="px-base pt-1 text-center">Visionary</span>
                <ShapeOne />

                <span className="px-base pt-1 text-center">Soulful</span>
              </Marquee>
            </div>

            <div className=" gap-base col-span-1 sm:col-span-4 grow grid grid-cols-1 sm:grid-cols-4">
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
              <div className="sm:col-span-3 border-2 p-3 border-bruno-yellow w-full">
                <div className=" h-full w-full  relative overflow-hidden">
                  {projectTitle ? (
                    hero.projects.map((project, index) => {
                      return (
                        <div
                          key={index}
                          className="project_card cursor-pointer"
                        >
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
                          <h3 className="project_tilte ml-3 duration-500 relative z-10 text-start font-bebas text-fluid-body-xxl">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
