import Image from "next/image";

const HomepageProject = () => {
  return (
    <section
      data-comp="section"
      className=" py-xxl sm:h-fit bg-bruno-ximen sticky top-0"
    >
      <div data-comp="container" className="sm:mx-auto px-base h-full">
        <div className="grid h-full">
          <div className=" mb-base sm:mb-0 text-center w-full flex flex-col justify-center items-center">
            <h2 className="text-fluid-display-xl text-bruno-yellow font-bebas leading-none">
              My Works
            </h2>
            <p className="font-bebas text-fluid-body-xl w-1/2 text-bruno-white">
              I am passionate about continuously learning and seeking
              opportunities to contribute to meaningful projects in a
              collaborative environment.
            </p>
          </div>
          <div className="grid w-full h-full py-base">
            <ul className="flex gap-base sm:gap-0 flex-col sm:flex-row h-[450px] relative  justify-center items-center -mb-1">
              <li className="sm:w-1/2 h-full flex items-end  relative group hover:w-full duration-300 grayscale hover:grayscale-0">
                <Image
                  src="/images/crypto.jpg"
                  alt="Crypto"
                  height={450}
                  width={450}
                  className="w-full h-full object-cover  duration-300 group-hover:border-4 group-hover:border-bruno-yellow"
                />
                <h3 className="absolute bottom-0 font-bebas overflow-hidden text-fluid-display-m flex justify-center items-center text-center">
                  <span className="text-bruno-white relative group-hover:bottom-0 duration-300 -bottom-96 leading-none">
                    01. Crypto Flow
                  </span>
                </h3>
              </li>
              <li className="sm:w-1/2 group h-full hover:w-full duration-300 grayscale hover:grayscale-0">
                <Image
                  src="/images/hybrbase.jpg"
                  alt="Crypto"
                  height={450}
                  width={450}
                  className="w-full h-full object-cover  duration-300 group-hover:border-4 group-hover:border-bruno-yellow"
                />
                <h3 className="absolute bottom-0 font-bebas overflow-hidden text-fluid-display-m flex justify-center items-center text-center">
                  <span className="text-bruno-white relative group-hover:bottom-0 duration-300 -bottom-96 leading-none">
                    02. Hybrbase
                  </span>
                </h3>
              </li>
              <li className="sm:w-1/2 group h-full hover:w-full duration-300 grayscale hover:grayscale-0">
                <Image
                  src="/images/wooder.png"
                  alt="Crypto"
                  height={450}
                  width={450}
                  className="w-full h-full object-cover  duration-300 group-hover:border-4 group-hover:border-bruno-yellow"
                />
                <h3 className="absolute bottom-0 font-bebas overflow-hidden text-fluid-display-m flex justify-center items-center text-center">
                  <span className="text-bruno-white relative group-hover:bottom-0 duration-300 -bottom-96 leading-none">
                    03. Wooder
                  </span>
                </h3>
              </li>
              <li className="sm:w-1/2 group h-full hover:w-full duration-300 grayscale hover:grayscale-0">
                <Image
                  src="/images/cfd.jpg"
                  alt="Crypto"
                  height={450}
                  width={450}
                  className="w-full h-full object-cover  duration-300 group-hover:border-4 group-hover:border-bruno-yellow"
                />
                <h3 className="absolute bottom-0 font-bebas overflow-hidden text-fluid-display-m flex justify-center items-center text-center">
                  <span className="text-bruno-white relative group-hover:bottom-0 duration-300 -bottom-96 leading-none">
                    04. CFD Circle
                  </span>
                </h3>
              </li>
              <li className="sm:w-1/2 group h-full hover:w-full duration-300 grayscale hover:grayscale-0">
                <Image
                  src="/images/mh.jpg"
                  alt="Crypto"
                  height={450}
                  width={450}
                  className="w-full h-full object-cover  duration-300 group-hover:border-4 group-hover:border-bruno-yellow"
                />
                <h3 className="absolute bottom-0 font-bebas overflow-hidden text-fluid-display-m flex justify-center items-center text-center">
                  <span className="text-bruno-white relative group-hover:bottom-0 duration-300 -bottom-96 leading-none">
                    05. ManhHieu
                  </span>
                </h3>
              </li>
              <li className="sm:w-1/2 group h-full hover:w-full duration-300 grayscale hover:grayscale-0">
                <Image
                  src="/images/cycle.jpg"
                  alt="Crypto"
                  height={450}
                  width={450}
                  className="w-full h-full object-cover  duration-300 group-hover:border-4 group-hover:border-bruno-yellow"
                />
                <h3 className="absolute bottom-0 font-bebas overflow-hidden text-fluid-display-m flex justify-center items-center text-center">
                  <span className="text-bruno-white relative group-hover:bottom-0 duration-300 -bottom-96 leading-none">
                    06. One Cycle
                  </span>
                </h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-screen bg-bruno-ximen block w-full"></div>
      </div>
    </section>
  );
};

export default HomepageProject;
