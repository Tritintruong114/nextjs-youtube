import Image from "next/image";

const PlaygroundCard = () => {
  return (
    <div className="shrink h-fit p-base border  bg-[#ffffff]">
      <div className="relative h-[300px] w-full">
        <Image
          src="https://cdn.dribbble.com/userupload/5934311/file/original-9dd868a288cb625c2915941f021aacac.jpg?resize=2048x1536"
          fill
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col items-start pt-base">
        <h3 className="text-fluid-h3">Svg mask</h3>
        <p className="text-fluid-body-lg my-3">
          Mordern svg technique with Next JS, Tailwind, Gsap
        </p>
        <button className="px-6 py-1 bg-bruno-grey text-bruno-white">
          More
        </button>
      </div>
    </div>
  );
};

export default PlaygroundCard;
