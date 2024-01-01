"use client";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

const carrossel = [
  {
    img: "./carrossel-sobre/Bellum.png",
  },
  { img: "./carrossel-sobre/Galaxy.png" },
  { img: "./carrossel-sobre/Missão.png" },
  { img: "./carrossel-sobre/Desafio.png" },
  { img: "./carrossel-sobre/Visão.png" },
  { img: "./carrossel-sobre/Valores.png" },
];

const Pilares = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const currentImage = carousel?.children[currentIndex];
    if (currentImage) {
      currentImage.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carrossel.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carrossel.length) % carrossel.length
    );
  };

  return (
    <div
      className="hero min-h-screen flex flex-col justify-start"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 80%, #194659 100%), url(./intro/sobre-pilares.jpg)",
      }}
    >
      <div className="flex text-center mt-48 md:mt-40 mb-8 md:mb-16">
        <MdKeyboardDoubleArrowRight className="text-6xl md:text-7xl font-bold text-colorLogo ml-4" />
        <span className="text-5xl md:text-6xl max-w-md font-bold text-bgvertical">
          Os Pilares da Nossa Criação
        </span>
      </div>
      <div className="flex items-center justify-center">
        <BiSolidLeftArrow
          className="text-colorLogo text-2xl md:text-4xl mr-0 md:mr-2"
          onClick={goToPrevious}
        />
        <div className="carousel carousel-center max-w-sm md:max-w-lg md:p-4 space-x-4 bg-neutral rounded-box opacity-80">
          {carrossel.map((item, index) => (
            <div key={index} className="carousel-item">
              <img
                src={item.img}
                className="max-w-sm md:max-w-lg p-2 md:p-0"
                alt={`Imagem ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <BiSolidRightArrow
          className="text-colorLogo text-2xl md:text-4xl mr-0 md:ml-2"
          onClick={goToNext}
        />
      </div>
    </div>
  );
};
export default Pilares;
