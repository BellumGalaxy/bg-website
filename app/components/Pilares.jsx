import { MdKeyboardDoubleArrowRight } from "react-icons/md";

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
  return (
    <div
      className="hero min-h-screen flex flex-col justify-start"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 80%, #194659 100%), url(./intro/sobre-pilares.jpg)",
      }}
    >
      <div className="flex text-center mt-32 mb-16">
        <MdKeyboardDoubleArrowRight className="text-7xl font-bold text-colorLogo ml-4" />

        <span className="text-6xl font-bold text-bgvertical">
          Os Pilares da Nossa Criação
        </span>
      </div>
      <div className="carousel carousel-center max-w-xl p-4 space-x-4 bg-neutral rounded-box opacity-80">
        {carrossel.map((item, index) => (
          <div key={index} className="carousel-item">
            <img
              src={item.img}
              className="w-full"
              alt={`Imagem ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Pilares;
