/* eslint-disable no-unused-vars */
import React, { useEffect, useState, forwardRef } from "react";

import { gql } from "@apollo/client";
import Client from "../../client";

import img from "../../assets/mikroskop.jpg";
import Produk from "./product";
import Pagination from "./pagination";

const extractCategories = (products) => {
  const categories = new Set();
  products.forEach((product) => categories.add(product.category));
  return Array.from(categories);
};

const splitArray = (arr, size) => {
  if (size === 0) return [];

  const splittedArray = arr.reduce((split, element, index) => {
    index % size === 0 ? split.push([element]) : split[Math.floor(index / size)].push(element);
    return split;
  }, []);

  return splittedArray;
};

const Index = forwardRef((props, ref) => {
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState([]);
  const [pageOnDisplay, setPageOnDisplay] = useState(0);

  useEffect(() => {
    Client.query({
      query: gql`
        {
          productCollection {
            items {
              name
              img {
                url
              }
              category
            }
          }
        }
      `,
    }).then((result) => {
      const productItems = result.data.productCollection.items;
      setProducts([...productItems]);
      setFilteredProducts(splitArray([...productItems], 8));
      setCategories(extractCategories(productItems));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterChangeHandler = (e) => {
    const selectedFilter = e.target.value;
    const newlyFiltered = products.filter(function (product) {
      return selectedFilter !== "all" ? product.category === selectedFilter : product;
    });

    setPageOnDisplay(0);
    setFilteredProducts(splitArray(newlyFiltered, 8));
  };

  return (
    <div className="w-full bg-rokSMP-bleached relative" ref={ref}>
      <div
        style={{
          background: `url(${img}) #6074AC`,
          backgroundBlendMode: "luminosity",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          opacity: "20%",
          position: "absolute",
        }}
      />
      <div className="container mx-auto flex flex-col items-center px-4 py-12 relative z-10">
        <h1 className="font-bold text-center text-4xl text-white-cahaya mb-10">Produk Kami</h1>

        <div className="relative inline-flex self-start">
          <svg
            className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none fill-current text-matiLampu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232"
          >
            <path
              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
              fill="#648299"
            />
          </svg>
          {/* <select
            className="border-none rounded-lg text-matiLampu h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            onChange={filterChangeHandler}
          >
            <option value="all">Filter: Semua</option>
            {categories &&
              categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select> */}
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-5 mt-6">
          {filteredProducts &&
            filteredProducts[pageOnDisplay].map((product, i) => (
              <Produk key={product.name + i} product={product} />
            ))}
        </div>
        {filteredProducts && (
          <Pagination {...{ filteredProducts, setPageOnDisplay, pageOnDisplay }} />
        )}
      </div>
    </div>
  );
});

export default Index;
