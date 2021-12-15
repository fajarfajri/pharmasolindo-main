import React, { forwardRef } from "react";

const Description = forwardRef((props, ref) => {
  return (
    <div className="bg-white-hvs" ref={ref}>
      <div className="container mx-auto py-8 px-4 md:py-16 md:px-8 lg:px-12">
        <h4
          className="
            text-xl text-jeruk font-bold mb-1
            md:text-3xl
          "
        >
          PT. Pharmasolindo
        </h4>
        <h3
          className="
            text-3xl text-matiLampu font-bold
            md:text-5xl
          "
        >
          Perusahaan jasa pemasaran dan distributor produk kesehatan dan estetika
        </h3>
      </div>
    </div>
  );
});

export default Description;
