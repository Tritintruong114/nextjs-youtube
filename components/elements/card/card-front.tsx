import Image from "next/image";

type TypeCardFront = {
  index?: number;
  image?: string;
  name?: string;
  services?: { service: string }[];
};
const CardFront = ({ index = 0, image, name, services }: TypeCardFront) => {
  return (
    <div className="bg-white transform-style-3d border-2 rounded-xl overflow-hidden border-black backface-hidden duration-500 transform transition w-full h-full absolute group-hover:-rotate-y-180">
      <div className="font-babas  flex bg-yellow-300 overflow-hidden h-3/4 text-black">
        <div className="w-full h-full relative rotate-30 leading-[0.9] font-bebas">
          <Image
            src={image || ""}
            alt={name || "Image"}
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-black flex h-full">
        <div className="font-babas h-1/4 text-[60vw] sm:text-[12vw] text-white leading-[0.9] text-left font-bebas">
          {index < 10 ? `0${index + 1}` : index}
        </div>
        <div className="font-bebas text-white text-xl">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
