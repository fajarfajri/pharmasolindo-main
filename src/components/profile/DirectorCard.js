import React, { useState, useEffect, memo } from "react";

const DirectorCard = memo(({ name, position, image, description, isHorizontal }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    showModal && (document.body.style.overflow = "hidden");
    !showModal && (document.body.style.overflow = "unset");
  }, [showModal]);

  return (
    <>
      {isHorizontal ? (
        <div
          className={`
            max-w-xs w-4/6 mx-auto bg-white-hvs p-5 rounded-3xl flex flex-col mb-4
            md:flex-row md:max-w-md items-center cursor-pointer
            transition-transform transform hover:-translate-y-3
          `}
          onClick={() => setShowModal(true)}
        >
          <div>
            <img src={image} alt={"foto " + position} className="rounded-full mx-auto flex-1" />
          </div>
          <div className="mt-3 md:mt-0 md:pl-6 flex flex-col flex-1">
            <h3 className="text-2xl sm:text-3xl text-center md:text-left font-bold">{name}</h3>
            <p className="text-center text-lg md:text-xl md:text-left text-rokSMA italic">
              {position}
            </p>
          </div>
        </div>
      ) : (
        <div
          className="p-2 w-3/6 md:w-2/6 lg:w-1/5 transition-transform transform hover:-translate-y-3"
          onClick={() => setShowModal(true)}
        >
          <div
            className={`
              mx-auto bg-white-hvs p-5 rounded-3xl flex flex-col mb-4 flex-1 h-full
              md:max-w-md cursor-pointer
            `}
          >
            <div>
              <img src={image} alt={"foto " + position} className="rounded-full mx-auto flex-1" />
            </div>
            <div className="mt-3 flex flex-col flex-1">
              <h3 className="leading-none md:leading-5 text-sm md:text-lg 2xl:text-2xl text-center font-bold ">
                {name}
              </h3>
              <p className="text-xs md:text-base 2xl:text-xl text-center mt-2 text-rokSMA italic">
                {position}
              </p>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="justify-center md:items-center px-2 md:px-6 flex overflow-x-hidden fixed inset-0 top-16 z-20 outline-none focus:outline-none">
          <div
            className="opacity-25 fixed inset-0 z-10 bg-matiLampu"
            onClick={() => setShowModal(false)}
          />
          <div className="relative w-full my-2 md:my-6 mx-auto max-w-3xl z-20">
            <div className="rounded-modal p-4 md:p-8 lg:p-10 pr-1 md:pr-2 lg:pr-4 bg-white-hvs shadow-lg h-full">
              <div className="overflow-y-auto pr-3 md:pr-6 lg:pr-4 scrollbar scrollbar-width-2 scrollbar-track-white-hvs scrollbar-thumb-white-koran h-full  md:max-h-70vh">
                <div className="relative flex flex-col w-full outline-none focus:outline-none">
                  <button
                    className="sticky right-0 top-0 z-10 ml-auto bg-white-hvs rounded-bl-lg border-0 flex items-center justify-center outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-matiLampu h-6 w-6 text-2xl md:text-3xl font-semibold block leading-none outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                  <div className="relative flex-auto">
                    <div className="md:flex md:items-center md:justify-center">
                      <div>
                        <img
                          src={image}
                          alt={"foto " + position}
                          className="rounded-full mx-auto flex-1 bg-clip-border"
                        />
                      </div>
                      <div className="mt-3 md:mt-0 md:pl-6 flex flex-col">
                        <h3 className="text-2xl md:text-4xl text-center md:text-left font-bold">
                          {name}
                        </h3>
                        <p className="text-center md:text-left text-rokSMA italic">{position}</p>
                      </div>
                    </div>
                    <div className="mt-3 md:mt-7">
                      <p className="whitespace-pre-line text-justify">{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default DirectorCard;
