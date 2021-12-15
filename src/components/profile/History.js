import React, { forwardRef, useEffect, useState } from "react";

import { gql } from "@apollo/client";
import Client from "../../client";

import "../../index.css";

const History = forwardRef((props, ref) => {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    Client.query({
      query: gql`
        {
          sejarahPerusahaanCollection(order: orderNumber_ASC) {
            items {
              time
              event
              extraStyle
            }
          }
        }
      `,
    }).then((result) => {
      const historyItems = result.data.sejarahPerusahaanCollection.items;
      setHistories(historyItems);
    });
  }, []);

  return (
    <div
      className="max-w-screen-md xl:max-w-screen-lg mx-auto px-4 md:px-8 my-12"
      ref={ref}
    >
      <h2 className="text-4xl text-matiLampu font-bold text-center mb-12">
        Sejarah Perusahaan
      </h2>

      <table className="mx-4 table-auto">
        <tbody>
          {histories.map((historyItem, idx) => (
            <tr key={idx} className="history-item items-stretch">
              <td className="hidden md:block pr-2 whitespace-nowrap">
                <p
                  className={`text-right md:text-xl xl:text-2xl text-AB ${historyItem.extraStyle || ''}`}
                >
                  {historyItem.time}
                </p>
              </td>
              <td className="pr-2 relative items-start	align-top">
                <div className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 rounded-full border-4 border-jeruk bg-white-cahaya hover:bg-jeruk transition ease-in-out align-top"></div>
                <div
                  className={`absolute w-1 h-full bg-jeruk left-0 right-2 mx-auto ${
                    idx === histories.length - 1 && "hidden"
                  }`}
                ></div>
              </td>
              <td>
                <p className={`md:hidden block text-AB ${historyItem.extraStyle || ''}`}>
                  {historyItem.time}
                </p>
                <p className={`md:text-xl xl:text-2xl pb-3 md:pb-5 lg:pb-10 ${historyItem.extraStyle || ''}`}>
                  {historyItem.event}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default History;
