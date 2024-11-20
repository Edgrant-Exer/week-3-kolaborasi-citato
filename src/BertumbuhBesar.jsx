function BertumbuhBesar() {
  return (
    <div className="bg-white py-16 px-8 text-left">
      <h1 className="text-3xl font-bold text-black mb-12 text-center">
        Bertumbuh besar bersama Gojek
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card imgSrc="https://cdn-site.gojek.com/uploads/employees_fef08f1b0f.svg" title="Gabung jadi GoTroops, yuk!" description="Di belakang startup dengan pertumbuhan paling tinggi di Asia Tenggara, terdapat talenta yang memiliki ide-ide cemerlang."/>
        <Card imgSrc="https://cdn-site.gojek.com/uploads/driver_partner_166faab31a.svg" title="Gabung jadi Mitra Driver" description="Kami adalah rumah bagi lebih dari 2 juta mitra driver di Asia Tenggara, yang mendapat jaminan finansial dan fasilitas kesehatan."/>
        <Card imgSrc="https://cdn-site.gojek.com/uploads/merchant_partner_57c8629626.svg" title="Gabung jadi Mitra Usaha" description="Kami membantu 500.000+ Mitra Usaha melipatgandakan penjualan, meluaskan jangkauan, dan berkembang dengan teknologi baru."
        />
      </div>
    </div>
  );
}

const Card = ({ imgSrc, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
    <div className="flex justify-left mb-4">
      <img src={imgSrc || "/icons/default-icon.png"} alt={title} className="h-12 w-12" />
    </div>
    <h2 className="text-xl font-semibold text-black mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="bg-green-600 text-white px-6 py-2 rounded-3xl hover:bg-green-700">
      Selengkapnya
    </button>
  </div>
);

export default BertumbuhBesar;
