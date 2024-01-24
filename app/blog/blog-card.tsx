import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="col-span-1 bg-bruno-white p-base h-fit flex-col justify-between flex group relative overflow-hidden">
      <div className="bg-bruno-yellow w-full h-full duration-300 absolute z-10 top-0 group-hover:left-0 -left-[100%]">
        <h3 className="font-bebas text-fluid-display-xl w-full absolute right-0 opacity duration-300 px-base">
          Read More
        </h3>
      </div>
      <div className="grid grid-cols-2 fg">
        <div className="col-span-2 relative h-[300px]">
          <Image
            src="https://cdn.dribbble.com/userupload/5164366/file/original-cf7b7cab617cf9b77a8bab555ed9a200.png?resize=1504x1128"
            alt="Next JS"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 my-base">
          <h3 className="text-fluid-body-xxl font-bebas font-bold">Blog 1</h3>
          <div className="flex gap-base w-full">
            <p className="px-base bg-bruno-ximen text-fluid-body-sm text-white py-xs">
              Next
            </p>
            <p className="px-base bg-bruno-ximen text-fluid-body-sm text-white py-xs">
              Swell
            </p>
          </div>
        </div>
      </div>
      <div className="pt-base border-t border-bruno-black flex justify-between w-full items-center">
        <p>Date</p>
        <p className="font-bold font-manrope text-fluid-body-sm">Ho Chi Minh</p>
      </div>
    </div>
  );
};

export default BlogCard;
