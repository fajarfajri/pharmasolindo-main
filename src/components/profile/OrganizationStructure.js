import React, { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { gql } from "@apollo/client";
import Client from "../../client";
import Button from "../button";

export default function OrganizationStructure() {
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    Client.query({
      query: gql`
        {
          asset(id: "68ijj5FklTUUtdfm0JI57X") {
            url
          }
        }
      `,
    }).then((result) => {
      const dataImageUrl = result.data.asset.url;
      setImageUrl(dataImageUrl);
    });
  }, []);

  useEffect(() => {
    showModal && (document.body.style.overflow = "hidden");
    !showModal && (document.body.style.overflow = "unset");
  }, [showModal]);

  return (
    <div className="mt-4 px-4 container mx-auto">
      <Button
        variant="secondary"
        className="max-w-xl w-full mx-auto"
        onClick={() => setShowModal(true)}
      >
        Struktur Organisasi
      </Button>

      {/* Modal */}
      {showModal && (
        <div className="flex flex-col justify-center items-center my-auto px-2 md:px-6  overflow-x-hidden fixed inset-0  top-16 z-20 outline-none focus:outline-none">
          <div
            className="opacity-25 fixed inset-0 z-10 bg-matiLampu"
            onClick={() => setShowModal(false)}
          />
          <div className="relative w-full my-2 md:my-6 mx-auto max-w-screen-lg z-20 flex-1 md:flex-none">
            <div className="rounded-modal p-2 md:p-6 lg:p-8 bg-white-hvs shadow-lg h-full flex flex-col">
              <div className="relative flex-1 flex flex-col w-full outline-none focus:outline-none">
                <button
                  className="absolute right-0 top-0 z-10 ml-auto bg-white-hvs rounded-bl-lg border-0 flex items-center justify-center outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-matiLampu h-6 w-6 text-2xl md:text-3xl font-semibold flex items-center justify-center leading-none outline-none focus:outline-none">
                    ×
                  </span>
                </button>
                <div className="absolute top-0 left-0 text-sm bg-rokSMP-bleached bg-opacity-50 text-white-cahaya py-1 px-2 rounded-modal">
                  Scroll/Pinch to Zoom
                </div>
                <div className="relative flex-1 flex flex-col">
                  <TransformWrapper centerOnInit>
                    <TransformComponent wrapperClass="flex-1">
                      <img src={imageUrl} alt="Bagan Struktur Organisasi" />
                    </TransformComponent>
                  </TransformWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
