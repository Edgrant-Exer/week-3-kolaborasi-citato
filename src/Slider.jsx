import React, { useState } from "react";

function Slider() {
const [currentIndex, setCurrentIndex] = useState(0);

const slides = [
    {
        buttonText: "Selengkapnya",
        imgSrc: "https://cdn-site.gojek.com/uploads/Web_Header_Desktop_a827fd9720.jpg",
    },
    {
        imgSrc: "https://cdn-site.gojek.com/uploads/J3_K_desktop_image_87a554b112.jpg",
    },
];

const nextSlide = () => setCurrentIndex((currentIndex + 1) % slides.length);
const prevSlide = () =>
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);

return (
    <div className="relative max-w-6xl mx-auto mt-10 bg-green-900 text-white overflow-hidden rounded-lg shadow-lg">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 flex flex-col lg:flex-row items-center p-8">
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-3xl font-bold mb-4">{slide.title}</h1>
                {slide.buttonText && (
                    <button className="bg-green-700 hover:bg-green-800 px-6 py-3 rounded-full text-sm">
                        {slide.buttonText}
                    </button>
                )}
            </div>
            <div className="lg:w-1/2 flex justify-center">
                <img src={slide.imgSrc || "/icons/default-slide.png"} alt="Slide" className="rounded-lg w-full lg:w-3/4 object-cover"/>
            </div>
            </div>
        ))}
        </div>
        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-3 rounded-full shadow-md hover:bg-green-800">
        ❮
        </button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-3 rounded-full shadow-md hover:bg-green-800">❯</button>

        <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
            <span key={index} onClick={() => setCurrentIndex(index)} className={`indicator w-3 h-3 rounded-full cursor-pointer ${ currentIndex === index ? "bg-green-700" : "bg-gray-400"  }`} />
        ))}
        </div>
    </div>
);
}

export default Slider;