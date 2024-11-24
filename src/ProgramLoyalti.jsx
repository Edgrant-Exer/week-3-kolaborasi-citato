import MenuFooter from "./MenuFooter.jsx"

function ProgramLoyalti() {
  return (
    <div>
      {/* PART 1 */}
      <div className="bg-gray-950 py-9 md:py-9 px-32">
        <div className="overflow-hidden  my-10">
          <div className="flex flex-col-reverse gap-y-4 md:gap-x-30 md:flex-row-reverse">
            {/*Teks */}
            <div className="w-full flex flex-col justify-center text-white md:w-1/2">
              <div>
                <h2 className="text-4xl font-bold m-5 mb-7">
                  Program Loyalti Gojek
                </h2>
                <p className="text-lg m-5 mb-5">
                  Banyakin transaksi, dapetin banyak hadiahnya
                </p>
                <div className="flex justify-start md:justify-center gap-4 w-full lg:w-fit">
                  <div className="mt-1 m-5">
                    <button
                      onClick={() => (window.location.href = 'https://www.gojek.com/id-id')}
                      className="bg-[#167c15] text-white py-2 px-5 rounded-full text-lg font-semibold"
                    >
                      Cek Benefit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*Gambar*/}
            <div className="mx-10">
              <img
                className="w-11/12 my-auto"
                width="545"
                height="409"
                src="https://cdn-site.gojek.com/uploads/home_spot_image_goclub_0555c2c8fe.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PART2 */}
      <div className="bg-gray-800 md:py-20 relative">
        <img
          alt="hero image"
          className="h-screen w-full object-cover absolute top-0 left-0 z-0"
          src="https://cdn-site.gojek.com/uploads/download_desktop_ccdc61425a.png"
        />
        <div className="container ml-32 mt-20 mb-10 w-[500px] h-[300px] px-5 flex flex-col relative z-10">
          <h1 className="text-left text-4xl font-bold text-white my-8">
            Belum punya aplikasi Gojek? Yuk, unduh sekarang juga.
          </h1>

          <div className="flex items-center gap-4">
            {/* Button App Store */}
            <a
              target="_self"
              className="text-base font-semibold rounded-full px-6 py-3 bg-white text-black shadow hover:bg-gray-200 transition"
              href="https://apps.apple.com/id/app/gojek/id944875099"
            >App Store
            </a>

            {/* Button Play Store */}
            <a
              target="_self"
              className="text-base font-semibold rounded-full px-6 py-3 bg-white text-black shadow hover:bg-gray-200 transition"
              href="https://play.google.com/store/apps/details?id=com.gojek.app"
            >Play Store
            </a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-black md:py-24">
        <div>
          {/* Logo Gojek */}
          <img
            className="mb-8 ml-14"
            src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg"
            alt="Gojek Logo"
          />
        </div>

        {/* Menu Footer */}
        <div className="flex justify-start">
          <MenuFooter title="Perusahaan" point1="Tentang" point2="Produk" point3="Blog" />
          <MenuFooter title="Gabung" point1="Mitra Driver" point2="Mitra Usaha" />
          <MenuFooter title="Karir" point1="Pelajar" point2="Professional" />
          <MenuFooter title="Hubungi kami" point1="Bantuan" point2="Lokasi Kami" />
        </div>
      </div>

    </div>
  );
}

export default ProgramLoyalti;
