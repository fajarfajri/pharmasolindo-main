import React from "react";

export default function pagination({ filteredProducts, pageOnDisplay, setPageOnDisplay }) {
  const nextPageHandler = () => {
    const next = pageOnDisplay === 0 ? 0 : pageOnDisplay - 1;
    setPageOnDisplay(next);
  };

  const prevPageHandler = () => {
    const prev = pageOnDisplay === filteredProducts.length - 1 ? pageOnDisplay : pageOnDisplay + 1;
    setPageOnDisplay(prev);
  };

  return (
    <div className="flex flex-col items-center my-12">
      <div className="flex text-gray-700">
        <Chevron left isDisabled={pageOnDisplay === 0} onClick={nextPageHandler} />
        <div className="flex h-8 font-medium rounded-full">
          {filteredProducts.map((_, i) => (
            <div
              className={`w-8 mx-1.5 flex justify-center items-center cursor-pointer rounded-full ${
                i === pageOnDisplay
                  ? "bg-white-cahaya text-matiLampu"
                  : "border border-white-cahaya text-white-cahaya"
              }`}
              onClick={() => setPageOnDisplay(i)}
              key={i}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <Chevron
          right
          isDisabled={pageOnDisplay === filteredProducts.length - 1}
          onClick={prevPageHandler}
        />
      </div>
    </div>
  );
}

const Chevron = ({ right, isDisabled, onClick }) => (
  <div
    className={`${
      isDisabled && "opacity-20"
    } h-8 w-8 mr-1 flex justify-center items-center rounded-full cursor-pointer text-white-cahaya`}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <polyline points={right ? "9 18 15 12 9 6" : "15 18 9 12 15 6"}></polyline>
    </svg>
  </div>
);
