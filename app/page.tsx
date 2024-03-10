"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="no-scrollbar w-screen">
      <section className="py-6 sm:py-24 max-h-[460px] h-screen sm:max-h-screen relative w-full justify-center flex items-center">
        <div className=" px-6 sm:px-24 w-full h-full">
          <Image
            src="https://img.freepik.com/free-photo/green-empty-room-authentic-interior-design_53876-111112.jpg?w=1380&t=st=1710089237~exp=1710089837~hmac=89fc17b524e081300f075d28395ade9ebbc3c50b5ffff2868564b09e0638b6f1"
            alt="Hero Background cover"
            fill
            className="w-full h-full object-cover absolute"
          />
          <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 sm:gap-0 sm:justify-between w-full relative bottom-0 h-full">
            <button className="border-2 text-white hover:bg-white hover:text-black text-lg duration-300 border-white rounded-full px-9 py-1">
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
    </main>
  );
}
