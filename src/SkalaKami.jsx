import React from "react";

function SkalaKami() {
return (
    <div className="bg-white py-16 px-8 text-center">
        <div className="text-center py-10">
            <h1 className="text-3xl font-bold">Skala kami</h1>
            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
            Gabung
            </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
            <StatCard bg="bg-green-100" imgSrc="https://cdn-site.gojek.com/uploads/170_mil_340e5c5603.png" value="190 juta+" description="jumlah install aplikasi kami." />
            <StatCard bg="bg-purple-100" imgSrc="https://cdn-site.gojek.com/uploads/2_million_04b50bc75a.png" value="2 juta+" description="mitra Driver yang sudah bergabung dengan kami" />
            <StatCard bg="bg-orange-100" imgSrc="https://cdn-site.gojek.com/uploads/50_million_c34b6365a4.png" value="900.000+" description="jumlah mitra GoFood"/>
            <StatCard bg="bg-blue-100" imgSrc="https://cdn-site.gojek.com/uploads/12x_growth_cc1a49b8c3.png" value="2.448x" description="lipat kenaikan pengunduhan aplikasi Gojek dari 2015 sampai 2020"/>
        </div>
    </div>
);
}


const StatCard = ({ bg, imgSrc, value, description }) => {
    return (
        <div className={`${bg} p-6 rounded-3xl flex flex-col items-center shadow-lg min-h-[420px]`}>
        <div className="flex justify-center mb-6">
            <img src={imgSrc} alt="Stat Icon"/>
        </div>
            <h2 className="text-3xl font-bold mb-2">{value}</h2>
            <p className="text-gray-700 text-center">{description}</p>
        </div>
    );
};


export default SkalaKami;
