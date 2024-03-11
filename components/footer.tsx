const FooterComponent = () => {
  return (
    <footer className="sm:h-screen sm:py-24 h-fit py-6">
      <div id="container" className=" px-6 sm:px-24 w-full h-full">
        <div className="w-full h-full justify-center items-center flex flex-col mb-6 sm:mb-0">
          <p className="font-bebas leading-none text-[50vh]">Watanabe </p>
          <button className=" text-xl font-bebas pt-1 border-2 border-black rounded-full px-6 py-1 text-black hover:bg-black hover:text-white duration-300">
            Contact Us
          </button>{" "}
        </div>
        <ul className="flex flex-col justify-center items-center gap-6">
          <div className="flex gap-6 text-base italic">
            <li>Dribble</li>
            <li>Behance</li>
            <li>Printerest</li>
          </div>
          <li className="flex gap-3 border-2 border-black rounded-full px-3 py-1">
            <p>🇻🇳 Ho Chi Minh</p>
            <p>clock</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterComponent;
