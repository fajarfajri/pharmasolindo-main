import React from "react";
import { useHistory } from "react-router-dom";
import Button from "./button";

export default function TentangKami() {
  const history = useHistory();

  return (
    <div className="max-w-lg mx-auto p-4 text-center flex flex-col items-center">
      <h1 className="text-matiLampu font-bold text-4xl mb-4">Tentang Kami</h1>
      <p>
        PT. Pharmasolindo adalah perusahaan jasa pemasaran dan distribusi produk kesehatan dan estetika
      </p>
      <Button
        variant="secondary"
        className="w-40 mt-6 mb-12"
        onClick={() => history.push("/profil")}
      >
        Lebih lanjut
      </Button>
    </div>
  );
}
