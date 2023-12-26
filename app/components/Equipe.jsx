import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const equipe = [
  {
    img: "./equipe/barba.png",
    nome: "Barba",
    Profissão: "Desenvolvedor Web3",
    x: "https://x.com/i3arba",
    GitHub: "https://github.com/i3arba",
    Linkedin: "https://in.com/carneiro-patrick77",
  },
  {
    img: "./equipe/Raffa.png",
    nome: "Raffa",
    Profissão: "Cientista de Dados",
    x: "https://x.com/loffredods",
    GitHub: "https://github.com/raffaloffredo",
    Linkedin: "https://www.linkedin.com/in/raffaela-loffredo/",
  },
  {
    img: "./equipe/SubZero.png",
    nome: "SubZero",
    Profissão: "Moderador",
    x: "https://x.com/renatocec1921",
    GitHub: "",
    Linkedin: "",
  },
];

const Equipe = () => {
  return (
    <div
      className="hero min-h-screen flex flex-col justify-start"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #40366E 95%, #194659 100%), url(./intro/equipe.jpg)",
      }}
    >
      <div className="flex text-center mt-32 mb-16">
        <MdKeyboardDoubleArrowRight className="text-7xl font-bold text-colorLogo" />

        <span className="text-6xl font-bold text-bgvertical">Equipe </span>
        <span className="text-6xl font-bold text-colorLogo ml-2">BG</span>
      </div>
      <div className="flex flex-wrap w-3/5 justify-center items-center text-colorLogo">
        {equipe.map((membro, index) => (
          <div
            key={index}
            className="p-2 md:w-1/3 lg:w-1/4 xl:w-1/5 text-center"
          >
            <img
              src={membro.img}
              alt={membro.nome}
              className="w-40 h-40 mx-auto rounded-full"
            />
            <h3 className="text-xl font-bold mt-2">{membro.nome}</h3>
            <p className="text-md">{membro.Profissão}</p>
            <div className="flex justify-center mt-2 space-x-4">
              {membro.x && (
                <a href={membro.x} target="_blank" rel="noopener noreferrer">
                  <RiTwitterXLine className="h-6 w-6 opacity-30 hover:opacity-100 transition-opacity duration-300" />
                </a>
              )}
              {membro.GitHub && (
                <a
                  href={membro.GitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-6 w-6 opacity-30 hover:opacity-100 transition-opacity duration-300" />
                </a>
              )}
              {membro.Linkedin && (
                <a
                  href={membro.Linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-6 w-6 opacity-30 hover:opacity-100 transition-opacity duration-300" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Equipe;
