import React, { forwardRef } from "react";
import phone from "../assets/icons/phone.svg";
import location from "../assets/icons/location.svg";
import mail from "../assets/icons/mail.svg";

const Hubungi = forwardRef((props, ref) => {
  return (
    <div className="bg-white-hvs w-full" ref={ref}>
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-matiLampu text-center mb-6">Hubungi Kami</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-x md:divide-y-0 divide-solid divide-matiLampu divide-opacity-20 text-matiLampu">
          <div className="flex flex-col items-center py-4 px-2 md:px-1">
            <img src={phone} alt="phone" />
            <div className="text-xl mb-2">Telepon</div>
            <div>021 - 4608970</div>
            <div>021 - 4608972 (fax)</div>
          </div>
          <div className="flex flex-col items-center py-4 px-2 md:px-1">
            <img src={mail} alt="mail" />
            <div className="text-xl mb-2">E-Mail</div>
            <div>support@pharmasolindo.com</div>
          </div>
          <div className="flex flex-col items-center py-4 px-2 md:px-1">
            <img src={location} alt="location" />
            <div className="text-xl mb-2">Alamat</div>
            <div className="text-center">
              Jl. Pulokambing Raya Blok II J No. 15
              <br />
              Kawasan Industri Pulogadung
              <br />
              Jakarta Timur
              <br />
              13920
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default Hubungi;
