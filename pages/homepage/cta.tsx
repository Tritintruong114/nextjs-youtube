import { homepage } from "@/data/homepage.json";
import Image from "next/image";
import { useState } from "react";

const HomepageCta = () => {
  const { hero } = homepage;
  const [projectTitle, setProjectTitle] = useState("");

  return (
    <section
      data-comp="section"
      className=" py-xxl h-fit  bg-bruno-black sticky top-0"
    >
      <div data-comp="container" className="sm:mx-auto px-base h-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 ">
          <div className="col-span-1 my-auto">
            <h2 className="font-bebas w-full text-center xl:text-right text-fluid-display-m leading-none text-bruno-white">
              Driven by a passion for captivating design, I transform
              inspiration into reality.
            </h2>
          </div>
          <div className="col-span-1 xl:relative xl:grid xl:-my-xxl">
            <div className="col-span-1 grid w-full relative place-items-center">
              <span className="w-1/3 h-full row-span-full col-start-1 col-span-full  bg-bruno-yellow block"></span>

              <Image
                src="/images/bruno1.png"
                alt=""
                height={450}
                width={450}
                className=" bottom-0 object-cover row-span-full col-start-1 col-span-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageCta;
