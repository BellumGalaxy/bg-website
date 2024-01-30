import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const social = [
  { img: "/social/Discord.svg", url: "https://discord.gg/H2UpdzbbRJ" },
  {
    img: "/social/Github.svg",
    url: "https://github.com/BellumGalaxy/",
  },
  {
    img: "/social/Instagram.svg",
    url: "https://www.instagram.com/bellumgalaxy/",
  },
  {
    img: "/social/Linkedin.svg",
    url: "https://www.linkedin.com/company/bellum-galaxy/",
  },
  {
    img: "/social/OpenSea.svg",
    url: "https://opensea.io/BellumGalaxy",
  },
  { img: "/social/X.svg", url: "https://x.com/bellumgalaxy" },
];

const Hero = () => {
  return (
    <div
      className="hero min-h-screen grid justify-between"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #40366E 95%, #194659 100%), url(./imagens/hero.png)",
      }}
    >
      <div className="text-left text-neutral-content pl-4 md:pl-8 lg:pl-20">
        <div className="flex items-center">
          <MdKeyboardDoubleArrowRight className="text-4xl md:text-6xl lg:text-7xl font-bold text-bgvertical" />
          <h1 className="text-4xl md:text-6xl mb-5 font-bold text-colorLogo">
            Olá, desbravador!
          </h1>
        </div>
        <p className="max-w-xl sm:ml-10 text-4xl md:ml-16 md:text-5xl lg:ml-20 lg:text-6xl mb-5 font-bold text-bgvertical">
          Você está pronto para uma nova jornada?
        </p>

        <p className="sm:max-w-md sm:ml-10 text-md md:max-w-xl md:ml-16 md:text-2xl lg:max-w-xl lg:ml-20 mb-5 text-colorLogo">
          Junte-se a nós e embarque em uma busca incansável pelo conhecimento!
        </p>
      </div>
      <div className="w-full flex justify-around items-center pb-4 absolute bottom-0">
        {social.map((network, index) => (
          <a
            key={index}
            href={network.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={network.img}
              alt={network.url}
              className="h-8 w-8 md:h-14 md:w-14 opacity-30 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Hero;
