import Marquee from "react-fast-marquee";

type TypeCardBack = {
  isHover?: boolean;
  index?: number;
  name?: string;
  services?: { service: string }[];
};

const CardBack = ({ isHover, services, name, index = 0 }: TypeCardBack) => {
  return (
    <div className="backface-hidden duration-500 transform transition w-full h-full absolute group-hover:rotate-y-0 rotate-y-180 border-2 rounded-xl border-black overflow-hidden">
      <div className="bg-black flex h-1/2 sm:h-1/4 ">
        <div className="font-babas text-[60vw] sm:text-[12vw] text-white leading-[0.9] text-left font-bebas">
          {index < 10 ? `0${index + 1}` : index}
        </div>
        <div className="font-bebas text-white text-xl">
          <p>{name}</p>
        </div>
      </div>
      <div className="font-babas  bg-white overflow-hidden h-1/2 sm:h-3/4 text-black">
        <Marquee
          play={isHover}
          loop={30}
          speed={60}
          className="text-xl py-2 font-bold flex justify-center items-center"
        >
          {services?.map((service, index) => (
            <p
              key={index}
              className="px-6 uppercase py-1 text-2xl border-2 rounded-full"
            >
              {service.service}
            </p>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default CardBack;
