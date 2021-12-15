import React from "react";

export default function product({ product }) {
  return (
    <div className="w-full rounded-lg bg-white-cahaya flex flex-col transform hover:shadow-lg hover:-translate-y-1 transition ease-in-out">
      <div className="w-full aspect-w-4 aspect-h-3">
        <img src={product.img.url} alt="" className="w-full rounded-lg object-cover" />
      </div>
      {/* <div
        key={product.category}
        className="border border-matiLampu rounded-lg px-2 py-1 text-sm m-2 self-end"
      >
        {product.category}
      </div> */}
    </div>
  );
}
