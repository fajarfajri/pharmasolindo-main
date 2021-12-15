import React, { forwardRef, useEffect, useState } from "react";

import { gql } from "@apollo/client";
import Client from "../../client";

import DirectorCard from "./DirectorCard";

const Team = forwardRef((props, ref) => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    Client.query({
      query: gql`
        {
          boardOfDirectorsCollection(order: orderNumber_ASC) {
            items {
              name
              position
              photo {
                url
              }
              bio {
                json
              }
              isPrioritized
            }
          }
        }
      `,
    }).then((result) => {
      const directorItems = result.data.boardOfDirectorsCollection.items;
      const directorItemsSanitized = directorItems.map((directorItem) => {
        const paragraphs = directorItem.bio.json.content.map((content) => content.content[0].value);

        return {
          name: directorItem.name,
          position: directorItem.position,
          isHorizontal: !!directorItem.isPrioritized,
          image: directorItem.photo.url,
          description: paragraphs.join("\n"),
        };
      });

      setDirectors(directorItemsSanitized);
    });
  }, []);

  return (
    <div className="px-4 container mx-auto" ref={ref}>
      <div className="mx-auto mb-10">
        <h2 className="text-4xl text-matiLampu font-bold text-center">Tim Kami</h2>
      </div>

      <div>
        <div>
          {directors
            .filter((director) => !!director.isHorizontal)
            .map((director) => (
              <DirectorCard key={director.name} {...director} />
            ))}
        </div>
        <div className="flex flex-wrap justify-center">
          {directors
            .filter((director) => !director.isHorizontal)
            .map((director) => (
              <DirectorCard key={director.name} {...director} />
            ))}
        </div>
      </div>
    </div>
  );
});

export default Team;
