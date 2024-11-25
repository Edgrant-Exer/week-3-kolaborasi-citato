import React from 'react';

function Layanan() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 py-16">
      <h1 className="text-center text-3xl font-bold mb-8">
        Kami membangun layanan untuk membantumu melewati halangan
      </h1>
      <div className="flex justify-center items-center mb-8">
        <div className="bg-[#00AA13] hover:bg-[#00aa14db] px-8 py-2 rounded-3xl cursor-pointer">
          <p className="text-center">Lihat semua layanan</p>
        </div>
      </div>  
      <div className="flex flex-row gap-8">
        <div className="w-full md:w-1/4 rounded-lg bg-[#00AA13] p-8">
          <h2 className="text-xl font-bold mb-4">Transportasi & Logistik</h2>
          <ul className="list-disc pl-4">
            <li>gobox</li>
            <li>goride</li>
            <li>gobluebird</li>
            <li>gosend</li>
            <li>gocar</li>
          </ul>
          <p className="mt-4">
            Mitra Driver kami sudah melakukan lebih dari 13.000 kali perjalanan
            bolak-balik antara bumi dan bulan.
          </p>
        </div>
        <div className="w-full md:w-1/4 rounded-lg bg-[#00AED6] p-8">
          <h2 className="text-xl font-bold mb-4">Pembayaran</h2>
          <ul className="list-disc pl-4">
            <li>gopay</li>
            <li>gosure</li>
            <li>gopaylater</li>
            <li>gotagıhan</li>
          </ul>
          <p className="mt-4">
            Dari belanja sampai donasi, kami bikin transaksi jadi mudah dan aman.
          </p>
        </div>
        <div className="w-full md:w-1/4 rounded-lg bg-[#EE2737] p-8">
          <h2 className="text-xl font-bold mb-4">Pesan makanan & belanja</h2>
          <ul className="list-disc pl-4">
            <li>gomed</li>
            <li>goshop</li>
            <li>gofood</li>
            <li>gomart</li>
          </ul>
          <p className="mt-4">
            Nikmati kemudahan memesan makanan dan belanja dengan layanan kami.
          </p>
        </div>
        <div className="w-full md:w-1/4 rounded-lg bg-[#93328E] p-8">
          <h2 className="text-xl font-bold mb-4">Bisnis</h2>
          <ul className="list-disc pl-4">
            <li>midtrans</li>
            <li>gostore</li>
            <li>moka</li>
            <li>gobiz</li>
            <li>selly</li>
          </ul>
          <p className="mt-4">
            Kami memberikan alat untuk manajemen, iklan, dan promosi bagi bisnis Anda.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mb-8 mt-8">
        <div className="bg-[#00AA13] hover:bg-[#00aa14db] px-8 py-2 rounded-3xl cursor-pointer">
          <p className="text-center text-">Lihat semua layanan</p>
        </div>
      </div> 
    </div>
  );
}

export default Layanan;
