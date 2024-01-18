/* eslint-disable react/no-unescaped-entities */
const HomepageValue = () => {
  return (
    <section
      data-comp="section"
      className="sm:pb-base pt-xxl h-screen relative bg-bruno-white text-bruno-dark-grey"
    >
      <div data-comp="container" className="sm:mx-auto px-base h-full">
        <div className="my-base">
          <h2 className="text-fluid-display-xl font-bebas text-center flex items-center justify-center flex-col leading-none">
            <span className="block text-fluid-display-3xl">Let's Do</span>
            <span className="block text-fluid-display-m">Something</span>
            <span className="flex">Amazing</span>
            <span className="block text-fluid-display-3xl">Together</span>
          </h2>
        </div>
        <div className="w-full flex justify-center items-center relative">
          <button className="py-base px-32 group bg-bruno-ximen rounded-full relative overflow-hidden text-bruno-white font-bebas text-fluid-body-xxl">
            <span className="bg-bruno-yellow -bottom-96 right-0 rounded-full w-full h-full absolute group-hover:bottom-0 duration-150"></span>
            <span className="relative group-hover:text-bruno-black duration-500">
              Book a call
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomepageValue;
