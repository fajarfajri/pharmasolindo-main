import React, { useEffect, useState } from "react";

import { gql } from "@apollo/client";
import Client from "../../client";

import MissionItem from "./MissionItem";

export default function Mission() {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    Client.query({
      query: gql`
        {
          visiMisiCollection(order: numberOrder_ASC, where: { isVisi: false }) {
            items {
              statement
              photo {
                url
              }
            }
          }
        }
      `,
    }).then((result) => {
      const sanitizedMissions = result.data.visiMisiCollection.items.map((missionItem) => ({
        image: missionItem.photo.url,
        text: missionItem.statement,
      }));

      setMissions(sanitizedMissions);
    });
  }, []);

  return (
    <div className="container max-w-4xl mx-auto my-12">
      <h2 className="text-4xl text-matiLampu font-bold text-center mb-6 md:my-12">Misi Kami</h2>

      <div className="flex justify-center px-4 md:px-8">
        <div className="md:max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 lg:gap-8">
          {missions.map((misi) => (
            <MissionItem key={misi.text} image={misi.image} text={misi.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
