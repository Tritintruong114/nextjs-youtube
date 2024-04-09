"use client";
import { useState } from "react";
import CardBack from "./card-back";
import CardFront from "./card-front";
import cardData from "./mock.json";
const Card = () => {
  const [isHover, setIsHover] = useState(false);
  const { cardMockData } = cardData;
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="perspective-800 shrink-0 h-[450px] sm:h-full group relative text-center flex justify-center items-center"
    >
      {cardMockData.map((data, index) => {
        return (
          <>
            <CardFront {...data} index={index} />
            <CardBack isHover={isHover} {...data} index={index} />
          </>
        );
      })}
    </div>
  );
};

export default Card;
