import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <section data-comp="section" className="pt-xxxl h-screen overflow-hidden">
      <div data-comp="container" className="sm:mx-auto px-base h-full ">
        <div
          data-comp="hero"
          className="grid grid-cols-1  sm:grid-cols-4 gap-base h-full"
        >
          <div className="sticky sm:col-span-3 top-0 text-center flex justify-center items-center flex-col border border-bruno-yellow">
            <h1 className="font-bebas text-fluid-display-2xl leading-normal">
              Bruno Truong
            </h1>
          </div>
          <div className="sm:col-span-1 bg-bruno-yellow flex justify-center items-center font-bold text-fluid-body-xl">
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
          <div className="sm:col-span-4 py-base my-auto bg-bruno-yellow text-fluid-body-xxl font-bebas text-bruno-black col-span-1">
            <Marquee autoFill speed={30}>
              <p className="sm:px-base text-center">Creative</p>
              <p className="sm:px-base text-center">Passionate</p>
              <p className="sm:px-base text-center">Visionary</p>
              <p className="sm:px-base text-center">Soulful</p>
            </Marquee>
          </div>

          <div className="sm:col-span-1 border-bruno-yellow border">
            <ul className="flex flex-col justify-between h-full">
              <li>Wooder</li>
              <li>Hyrbase</li>
              <li>One cycle</li>
              <li>Cryptoflow</li>
              <li>Maison De Villa</li>
              <li>Manh Hieu Photography</li>
            </ul>
          </div>
          <div className="sm:col-span-3 bg-white w-full h-full">
            <div>A</div>
          </div>
        </div>
      </div>
    </section>
  );
}
