import React, { forwardRef, useEffect, useState } from "react";

import { gql } from "@apollo/client";
import Client from "../../client";

import microscopeImg from "../../assets/microscope.png";

const Vision = forwardRef((props, ref) => {
  const [visionText, setVisionText] = useState("");

  useEffect(() => {
    Client.query({
      query: gql`
        {
          visiMisi(id: "3X7r7lm1bQVMA3RJtbfA4o") {
            statement
          }
        }
      `,
    }).then((result) => {
      setVisionText(result.data.visiMisi.statement);
    });
  }, []);

  return (
    <div className="relative wrapper px-4" ref={ref}>
      <div className="max-w-screen-md	mx-auto py-12 md:py-16">
        <h2 className="text-white-cahaya font-bold text-center mb-4 text-4xl">Visi Kami</h2>
        <p className="text-lg md:text-xl text-center text-white-cahaya">{visionText}</p>
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
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${microscopeImg})`,
            backgroundColor: "#6074AC",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            opacity: "20%",
          }}
        ></div>
        <div className="bg-rokSMP-bleached z-5 w-full h-full"></div>
      </div>
    </div>
  );
});

export default Vision;
