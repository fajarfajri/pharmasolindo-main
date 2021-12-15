import React from "react";

export default function MissionItem({ image, text }) {
  return (
    <div
      className="bg-white-hvs hover:shadow-lg rounded-xl w-full transition duration-500 ease-in-out"
      key={image}
    >
      <div className="w-full aspect-w-16 aspect-h-9 relative">
        <img src={image} alt="misi" className="rounded-t-xl border-white-hvs w-full object-cover" />
        <div className="rounded-t-xl w-full h-full top-0 left-0 bg-jeruk mix-blend-hue transition duration-500 ease-in-out hover:opacity-0" />
      </div>
      <div className="flex place-content-center w-full">
        <p className="text-center px-6 py-8">{text}</p>
      </div>
    </div>
  );
}
