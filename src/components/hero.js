import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import { gql } from "@apollo/client";
import Client from "../client";

import Slideshow from "./slideshow";
import Button from "../components/button";
import placeholder from "../assets/placeholder.png";
import img from "../assets/hero.jpg";

export default function Hero({ contactRef, scrollSmoothHandler }) {
  const [heroHeight, setHeroHeight] = useState(0);
  const [heroImgHeight, setHeroImgHeight] = useState(0);
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    setHeroHeight(heroRef.current.clientHeight);
    setHeroImgHeight(heroImgRef.current.clientHeight);
  }, [heroImgHeight, heroHeight]);

  const [slideshow, setSlideshow] = useState({ data: {}, loading: true, networkStatus: 0 });

  useEffect(() => {
    Client.query({
      query: gql`
        {
          heroSlideshow(id: "pyHuIAc8KFiKeoLS595PN") {
            slideCollection {
              items {
                url
              }
            }
          }
        }
      `,
    }).then((result) => {
      setSlideshow(result);
    });
  }, []);

  // TODO: implement slideshow
  return (
    <div className="w-full relative">
      <div
        className="bg-rokSMP w-full relative flex items-center justify-center"
        style={{
          height: heroHeight - heroImgHeight / 2 + "px",
          marginBottom: heroImgHeight / 2 + "px",
        }}
      >
        <div
          style={{
            background: `url(${img}) #385197`,
            backgroundBlendMode: "multiply",
            backgroundPosition: "bottom center",
            width: "100%",
            height: "100%",
            opacity: "20%",
            position: "absolute",
          }}
        />
      </div>
      <div
        className="absolute top-0 pt-32 flex flex-col items-center justify-center w-full px-4 md:px-16"
        ref={heroRef}
      >
        <h1 className="text-3xl 425:text-4xl sm:text-6xl font-black text-white-cahaya max-w-2xl text-center">
          Setulus Hati Menyehatkan Negeri
        </h1>
        <div className="flex flex-col sm:flex-row mt-6 w-52 sm:w-auto mb-12">
          <Button
            onClick={() => scrollSmoothHandler(contactRef)}
            variant="primary"
            className="mb-3 sm:mb-0 sm:mr-3"
          >
            Hubungi Kami
          </Button>
          <Button onClick={() => history.push("/profil")} variant="secondary-l">
            Tentang Kami
          </Button>
        </div>
        <div ref={heroImgRef} className="w-full lg:w-2/3 xl:w-7/12 mx-auto ">
          {/* <img
            src={img}
            alt="slideshow"
            className="rounded-3xl w-full lg:w-2/3 xl:w-7/12 border-4 md:border-8 border-white-cahaya"
          /> */}
          {!slideshow.loading ? (
            <Slideshow slides={slideshow.data.heroSlideshow.slideCollection.items} />
          ) : (
            <img
              src={placeholder}
              alt="slideshow"
              className="animate-pulse rounded-3xl w-full border-4 md:border-8 border-white-cahaya"
            />
          )}
        </div>
      </div>
    </div>
  );
}
