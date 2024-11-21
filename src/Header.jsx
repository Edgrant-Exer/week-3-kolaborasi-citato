import React from "react";

const Header = () => {
    return (
        <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
            <div className="h-[100px] w-screen px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Gojek</h1>
            
                <nav>
                <ul className="flex space-x-4">
                    <li>
                    <a href="#beranda" className="hover:underline">
                        Beranda
                    </a>
                    </li>
                    <li>
                    <a href="#gabung" className="hover:underline">
                        Gabung jadi mitra
                    </a>
                    </li>
                    <li>
                    <a href="#services" className="hover:underline">
                        GoCorp
                    </a>
                    </li>
                    <li>
                    <a href="#karir" className="hover:underline">
                        Karir
                    </a>
                    </li>
                    <li>
                    <a href="#perusahaan" className="hover:underline">
                        Perusahaan
                    </a>
                    </li>
                    <li>
                    <a href="#produk" className="hover:underline">
                        Produk
                    </a>
                    </li>
                    <li>
                    <a href="#blog" className="hover:underline">
                        Blog
                    </a>
                    </li>
                    <li>
                    <a href="#bantuan" className="hover:underline">
                        Bantuan
                    </a>
                    </li>
                    <li>
                    <a href="#id" className="hover:underline">
                        ID
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
