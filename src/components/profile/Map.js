import React from "react";

import mapImg from "../../assets/map.svg";

export default function Map() {
  return (
    <div className="mt-12 py-16 md:py-8 w-full flex flex-col items-center justify-center relative bg-white-hvs bg-map bg-no-repeat bg-center bg-cover md:bg-none backdrop-filter backdrop-blur-none">
      <img
        src={mapImg}
        alt="Peta Pembagian Wilayah"
        className="invisible md:visible md:object-contain"
      />
      <div className="bg-white-cahaya bg-opacity-60 backdrop-filter backdrop-blur-md max-w-screen-md mx-4 md:mx-6 rounded-modal p-4 text-sm md:text-base absolute text-center text-matiLampu">
        We have strong Marketing Team throughout Indonesia, they are split into
        8 Regional for easily reach all over nation. They include Sales
        Management Team &amp; Product Management Team and supported by the Support
        Team at the Head Office. Our Human Resources commited to grow and
        develop in order to expand the Principal Product Market.
      </div>
    </div>
  );
}
