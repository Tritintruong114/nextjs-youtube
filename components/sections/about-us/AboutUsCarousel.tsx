"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function AboutUsCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showArrows={false}
      swipeable
      transitionTime={300}
      useKeyboardArrows
      showThumbs={false}
      interval={3000}
      className="h-full"
    >
      <div className="w-full h-[450px] sm:h-[700px]">
        <Image
          src="/images/hero3.png"
          alt="About Us Image"
          width={420}
          className="w-full object-cover h-full rounded-3xl"
          height={530}
        />
      </div>
      <div className="w-full h-[450px] sm:h-[700px]">
        <Image
          src="/images/hero3.png"
          alt="About Us Image"
          width={420}
          className="w-full object-cover h-full rounded-3xl"
          height={530}
        />
      </div>
      <div className="w-full h-[450px] sm:h-[700px]">
        <Image
          src="/images/hero3.png"
          alt="About Us Image"
          width={420}
          className="w-full object-cover h-full rounded-3xl"
          height={530}
        />
      </div>
    </Carousel>
  );
}

export default AboutUsCarousel;
