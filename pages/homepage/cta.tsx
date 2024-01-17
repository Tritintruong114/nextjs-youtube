import { homepage } from "@/data/homepage.json";
import Image from "next/image";
import { useState } from "react";

const HomepageCta = () => {
  const { hero } = homepage;
  const [projectTitle, setProjectTitle] = useState("");

  return (
    <section
      data-comp="section"
      className="sm:pb-base pt-xxl h-screen relative  bg-bruno-grey"
    >
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <h2 className="text-fluid-display-2xl font-bebas leading-none">
            <p>Make</p>
            <p>Dope Sh*t.</p>
            <p className="text-right">Get Paid</p>
          </h2>
        </div>
        <div className="col-span-1 grid-cols-1 grid-rows-1 relative grid -mt-xxl">
          <div className="col-span-1 w-full relative flex justify-center items-center">
            <span className="w-1/3 h-full row-span-full col-start-1 row-start-1  bg-bruno-yellow block"></span>
            <Image
              src="/images/bruno1.png"
              alt=""
              height={450}
              width={450}
              className=" bottom-0 object-cover h-full absolute"
            />
          </div>
        </div>
        <div className="bg-bruno-ximen col-span-2 flex-grow h-full">
          <div>a</div>
          <div>v</div>
        </div>
      </div>
    </section>
  );
};

export default HomepageCta;
