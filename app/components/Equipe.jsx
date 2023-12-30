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
    <div className="flex bg-bgcolor min-h-screen  overflow-hidden">
      <div
        className="absolute w-full h-full bg-no-repeat bg-contain bg-center z-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 80%, #194659 100%),linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, #194659 100%),  url(/intro/logo.svg)",
          backgroundPosition: "left -100px center",
        }}
      ></div>
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center">
        {/* TÍTULO */}
        <div className="text-center mb-16">
          <MdKeyboardDoubleArrowRight className="text-7xl font-bold text-colorLogo inline-block" />

          <span className="text-6xl font-bold text-bgvertical">Equipe </span>
          <span className="text-6xl font-bold text-colorLogo">BG</span>
        </div>
        {/* EQUIPE */}
        <div className="flex flex-wrap justify-center items-center text-colorLogo w-full px-4">
          {equipe.map((membro, index) => (
            <div
              key={index}
              className="p-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 text-center"
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
    </div>
  );
};
export default Equipe;
