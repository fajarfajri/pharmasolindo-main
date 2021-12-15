import React from "react";

export default function Button({ variant, children, onClick, className }) {
  return (
    <div
      className={`px-4 py-2 rounded shadow-lg cursor-pointer flex items-center justify-center transition ease-in-out ${
        variant === "primary" && "bg-jeruk hover:opacity-80 text-white-cahaya"
      } ${
        variant.startsWith("secondary") &&
        `border ${
          variant.endsWith("-l")
            ? "border-white-cahaya text-white-cahaya hover:bg-white-cahaya hover:text-matiLampu"
            : "border-rokSMP text-rokSMP hover:bg-rokSMP hover:text-white-cahaya"
        }`
      } 
       ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
