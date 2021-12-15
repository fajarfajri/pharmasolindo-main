import React, { useEffect, useState } from "react";

import { gql } from "@apollo/client";
import Client from "../client";

export default function Mitra() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    Client.query({
      query: gql`
        {
          partnerCollection {
            items {
              name
              logo {
                url
              }
            }
          }
        }
      `,
    }).then((result) => {
      const partnerItems = result.data.partnerCollection.items.map((item) => ({
        name: item.name,
        img: item.logo.url,
      }))

      setPartners(partnerItems);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="py-8 container px-4 mx-auto">
      <h1 className="text-matiLampu text-4xl font-bold text-center">Mitra Kami</h1>
      <div className="flex flex-wrap justify-center my-6">
        {partners.map((partner, i) => (
          <img key={partner.name + i} src={partner.img} alt={partner.name} className="h-24" />
        ))}
      </div>
    </div>
  );
}
