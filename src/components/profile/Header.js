import React from "react";

import heroImg from "../../assets/hero.jpg";

export const ScrollNav = ({ nav, onClick }) => {
  return (
    <div
      className="cursor-pointer no-underline text-sm text-white-cahaya font-medium whitespace-nowrap md:text-base mx-3 md:mx-7"
      onClick={onClick}
    >
      {nav}
    </div>
  );
};

export default function Header({ profileRefs, scrollSmoothHandler }) {
  return (
    <div className="bg-rokSMP w-full flex justify-center relative h-36">
      <div
        style={{
          background: `url(${heroImg}) #385197`,
          backgroundBlendMode: "multiply",
          backgroundPosition: "center 62%",
          width: "100%",
          height: "100%",
          opacity: "20%",
        }}
      />
      <div className="absolute bottom-6 w-full mx-4 flex justify-center">
        <div className="overflow-x-auto flex scrollbar scrollbar-hidden mx-2">
          <ScrollNav onClick={() => scrollSmoothHandler(profileRefs.businessRef)} nav="Profil" />
          <ScrollNav
            onClick={() => scrollSmoothHandler(profileRefs.visionRef)}
            nav="Visi &#x26; Misi"
          />
          <ScrollNav onClick={() => scrollSmoothHandler(profileRefs.valuesRef)} nav="Core Values" />
          <ScrollNav onClick={() => scrollSmoothHandler(profileRefs.historyRef)} nav="Sejarah" />
          <ScrollNav onClick={() => scrollSmoothHandler(profileRefs.teamRef)} nav="Tim Kami" />
        </div>
      </div>
    </div>
  );
}
