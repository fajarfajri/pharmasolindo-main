import React from "react";

import Hero from "../components/hero";
import TentangKami from "../components/tentangKami";
import Produk from "../components/products";
import Mitra from "../components/mitra";
import Hubungi from "../components/hubungi";

const Index = ({ productRef, contactRef, scrollSmoothHandler }) => {
  return (
    <div className="h-fit-content">
      <Hero {...{ contactRef, scrollSmoothHandler }} />
      <TentangKami />
      <Produk ref={productRef} />
      <Mitra />
      <Hubungi ref={contactRef} />
    </div>
  );
};
export default Index;
