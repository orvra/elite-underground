import React, { useState, useEffect } from "react";
import {
  MdSportsBaseball,
  MdSportsBasketball,
  MdSportsEsports,
  MdSportsFootball,
  MdSportsGolf,
  MdSportsHockey,
  MdSportsMma,
  MdSportsSoccer,
  MdSportsTennis,
} from "react-icons/md";

const IconAnimation = ({ interval }) => {
  const icons = [
    <MdSportsBaseball />,
    <MdSportsBasketball />,
    <MdSportsEsports />,
    <MdSportsFootball />,
    <MdSportsHockey />,
    <MdSportsMma />,
    <MdSportsSoccer />,
    <MdSportsTennis />,
    <MdSportsGolf />,
    <img
      src="elite-underground/images/logo/EUG_v8.png"
      className="w-[83.3px] pt-1 md:w-[108px] md:pt-[5.7px] lg:w-[188px] lg:pt-[10px]"
    />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < icons.length - 1) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, interval);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [currentIndex]);

  // When currentIndex exceeds the number of icons, stop the animation
  /*if (currentIndex >= icons.length) {
    clearInterval(interval);
  }*/
  {
    /*className="w-[83.3px] pt-1 md:w-[108px] md:pt-[5.7px] lg:w-[188px] lg:pt-[10px]"*/
  }
  return (
    <div
      className={
        currentIndex === icons.length - 1
          ? ""
          : "mt-1 text-4xl md:text-5xl lg:text-[82px]"
      }
    >
      {icons[currentIndex]}
    </div>
  );
};

export default IconAnimation;
