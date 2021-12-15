import React, { forwardRef } from "react";

import iStarImg from "../../assets/iStar.svg";
import iStarImgMobile from "../../assets/iStar-m.svg";
import heroImg from "../../assets/hero.jpg";

const CoreValues = forwardRef((props, ref) => {
  return (
    <div className="relative wrapper" ref={ref}>
      <div className="mx-auto pt-9 px-4">
        <h2 className="text-4xl text-white-cahaya font-bold text-center mb-4 md:mb-10">
          Core Values
        </h2>
        <img
          className="hidden md:block pb-12 md:pb-24 mx-auto"
          src={iStarImg}
          alt="I STAR, the core values of Pharmasolindo"
        />
        <img
          className="md:hidden pb-12 md:pb-24 mx-auto"
          src={iStarImgMobile}
          alt="I STAR, the core values of Pharmasolindo"
        />
      </div>

      <div
        className="background absolute inset-0"
        style={{
          zIndex: "-5",
        }}
      >
        <div
          className="w-full h-full absolute"
          style={{
            background: `url(${heroImg}) #385197`,
            backgroundBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            opacity: "20%",
          }}
        ></div>
        <div className="bg-rokSMP z-5 w-full h-full"></div>
      </div>
    </div>
  );
});

export default CoreValues;
