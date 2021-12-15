import React from "react";

import BusinessCoreItem from "./BusinessCoreItem";

export default function BusinessCores() {
  const coreValueItems = [
    {
      title: "Bisnis Utama",
      text: "Kami memasarkan dan mendistribusikan produk kesehatan dan estetika yang bernilai, mempertahankan hubungan baik dengan pelanggan, serta menyediakan software solution yang inovatif untuk mempermudah monitor tim di lapangan dan menunjang proses pemasaran dan distribusi produk perusahaan.",
    },
    {
      title: "Produk",
      text: "Produk yg dipasarkan adalah produk etikal farmasi, alat kesehatan, makanan/minuman kesehatan dan produk estetika yang berkualitas baik produksi dalam negeri maupun luar negeri.",
    },
    {
      title: "Tim",
      text: "Dengan dukungan SDM yang tersebar di kota-kota besar di indonesia, kami siap menjalin kerjasama dan hubungan baik dengan mitra, prinsipal, distributor, outlet, dan end-user demi memberikan yang terbaik bagi kesehatan masyarakat.",
    },
  ];
  return (
    <div className="flex container py-10 mx-auto px-4 md:px-8 lg:px-12">
      <div className="mx-auto gap-y-5 grid grid-cols-1 grid-rows-none md:grid-rows-1 md:grid-cols-3 md:gap-x-4 lg:gap-x-8">
        {coreValueItems.map((item) => (
          <BusinessCoreItem key={item.title} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}
