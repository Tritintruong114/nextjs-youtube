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
    >
      <div className="w-full">
        <Image
          src="/images/hero1.png"
          alt="About Us Image"
          width={420}
          className="w-full object-cover"
          height={530}
        />
      </div>
      <div className="w-full">
        <Image
          src="/images/hero1.png"
          alt="About Us Image"
          width={420}
          className="w-full object-cover"
          height={530}
        />
      </div>
      <div className="w-full">
        <Image
          src="/images/hero1.png"
          alt="About Us Image"
          width={420}
          className="w-full object-cover"
          height={530}
        />
      </div>
    </Carousel>
  );
}

export default AboutUsCarousel;
