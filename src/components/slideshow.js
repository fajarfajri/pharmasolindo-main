import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function slideshow({ slides }) {
  const settings = {
    autoplay: true,
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((img) => (
        <div key={img.url} className="aspect-w-16 aspect-h-9">
          <img
            src={img.url}
            alt="slideshow"
            className="w-full rounded-3xl border-4 md:border-8 border-white-cahaya object-cover"
          />
        </div>
      ))}
    </Slider>
  );
}
