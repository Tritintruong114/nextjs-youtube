import Image from "next/image";
export default function Home() {
  return (
    <main className="no-scrollbar w-screen">
      <section
        id="section"
        className="py-6 sm:py-24 max-h-[1120px] h-screen sm:max-h-screen relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/54098c96146799.5ea7f6d5a9050.jpg"
            alt="Hero Background cover"
            fill
            className="w-full h-full object-cover absolute"
          />
          <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 sm:gap-0 sm:justify-between w-full relative bottom-0 h-full">
            <button className="border-2 font-bebas pt-1 text-white hover:bg-white hover:text-black text-lg duration-300 border-white rounded-full px-9 py-1">
              Explore
            </button>
            <div className="flex flex-col">
              <h2 className="font-bold text-4xl leading-none font-bebas text-white">
                Furniture For Your Home
              </h2>
              <p className="text-white text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section"
        className="py-6 sm:py-24 h-fit sm:h-[50vh] sm:max-h-screen relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <div className="flex sm:flex-row sm:gap-64 flex-col h-full justify-center items-center">
            <div className="flex flex-col h-full sm:justify-center sm:gap-12 sm:text-center">
              <p className="uppercase text-xl">
                Watanabe Furniture for comfort living
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                eius repellat est enim consequatur.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start sm:gap-9 sm:w-3/4">
              <p className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
                corrupti doloribus est reprehenderit veniam.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                recusandae incidunt consequuntur quis laboriosam, voluptatibus,
                temporibus maiores soluta repellendus cum non quasi voluptates
                autem nulla et provident vero tenetur omnis?
              </p>
              <button className="border-2 hover:bg-black hover:text-white duration-300 font-bebas pt-1 border-black rounded-full px-6 font-bold py-1">
                Detail
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section"
        className=" overflow-hidden h-fit relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <div className="w-full h-fit">
            <h3 className="text-[100vh] leading-none font-bebas tracking-tighter">
              WATANABE
            </h3>
            <Image
              src="https://i.pinimg.com/564x/9e/1d/bb/9e1dbbf9a91a309d14229f7b3dac4d64.jpg"
              alt=""
              width={320}
              height={320}
              className="h-3/4 w-3/4 sm:w-fit sm:right-[25%] top-0 absolute object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="section"
        className=" h-fit sm:h-screen py-6 sm:py-24 relative w-full justify-center flex items-center"
      >
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="w-full relative mb-6 sm:mb-0">
            <button className="sm:absolute top-0 left-0 border-2 border-black rounded-full px-3 py-1 hover:bg-black hover:text-white duration-300 font-bebas">
              See Our Works
            </button>
          </div>
          <div className="w-full flex flex-col gap-6 items-center justify-center">
            <Image
              src="https://i.pinimg.com/564x/9e/1d/bb/9e1dbbf9a91a309d14229f7b3dac4d64.jpg"
              alt=""
              width={320}
              height={320}
              className="h-3/4 sm:w-1/4 sm:right-[33%] top-0 sm:absolute object-cover"
            />
            <Image
              src="https://i.pinimg.com/564x/67/ca/81/67ca81b8b8344d9479b2bf10639aaf35.jpg"
              alt=""
              width={320}
              height={320}
              className="h-3/4 sm:w-1/4  sm:left-0 bottom-0 sm:absolute object-cover"
            />
            <Image
              src="https://i.pinimg.com/564x/c8/7e/91/c87e9121048980c179e8df6e15c1a705.jpg"
              alt=""
              width={320}
              height={320}
              className="h-2/4 sm:w-1/4  sm:right-0 bottom-0 sm:absolute object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
