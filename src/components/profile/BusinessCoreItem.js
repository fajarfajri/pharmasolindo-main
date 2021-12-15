import React from "react";

export default function BusinessCoreItem({ title, text }) {
  return (
    <div>
      <h5 key={title} className="text-2xl font-medium text-rokSMP">{title}</h5>
      <p className="text-justify">{text}</p>
    </div>
  );
}
