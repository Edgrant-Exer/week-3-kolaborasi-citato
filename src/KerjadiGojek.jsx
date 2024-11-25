import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";


const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="custom-prev"
        style={{ left: '10px', position: 'absolute', top: '50%', zIndex: '1000', fontSize: '20px', backgroundColor: 'gray', borderRadius: '10px', padding: '10px' }}
        onClick={onClick}
      >
        ←
      </button>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="custom-next"
        style={{ right: '10px', position: 'absolute', top: '50%', zIndex: '1000', fontSize: '20px', backgroundColor: 'gray', borderRadius: '10px', padding: '10px' }}
        onClick={onClick}
      >
        →
      </button>
    );
  };

function KerjadiGojek() {
  const slides = [
    {
      imgSrc: "https://cdn-site.gojek.com/uploads/Slack_Image_1366_834d7aec02.webp",
      title: "Asuransi Kesehatan Buat Ayah Ibu",
      text: "Subsidi asuransi kesehatan buat kedua orang tuamu",
    },
    {
      imgSrc: "https://cdn-site.gojek.com/uploads/62ac3b0465bd61d4f71f1920238467bc_webp_1366_912_Slack_Image_1366x912_aa074976e0.webp",
      title: "Bermacam-macam subsidi",
      text: "Mau beli buku, daftar gym membership, isi pulsa? Gojek kasih subsidi ;).",
    },
    {
      imgSrc: "https://cdn-site.gojek.com/uploads/Slack_Image_1366x912_9ff18d7b2b.webp",
      title: "Kolaborasi antar budaya",
      text: "Bisa bekerja sama dengan GoTroops dari berbagai negara!",
    },
    {
      imgSrc: "https://cdn-site.gojek.com/uploads/0c6106ede99edb7281ac73e4bc5e8f4e_74737762b5.webp",
      title: "Peduli Kesehatan Mental",
      text: "Konseling gratis untukmu dan keluargamu",
    },
  ];

  const settings = {
    dots: true,              
    infinite: true,         
    speed: 500,              
    slidesToShow: 2,         
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,      
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <div className="bg-white pt-20 pb-10 font-sans font-bold text-3xl flex justify-center items-center">
        Kerja di Gojek itu beda karena...
      </div>

      <div className="relative">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col items-center px-4">
              <img
                src={slide.imgSrc}
                alt={slide.title}
                className="m-4 rounded-xl w-full object-cover"
              />
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold">{slide.title}</h3>
                <p className="text-gray-500">{slide.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default KerjadiGojek;
