import Link from "next/link";

const parceiros = [
  { img: "./parceiros/Web3Dev.jpg", site: "https://pt.w3d.community" },
  { img: "./parceiros/RecycleMinds.jpg", site: "https://www.recycleminds.xyz" },
  { img: "./parceiros/iBeed.png", site: "https://ibeed.xyz/" },
  { img: "./parceiros/seja-parceiro.png", site: "https://discord.gg/H2UpdzbbRJ"  },
  { img: "./parceiros/logo.svg", site: "www.bellumgalaxy.com"  },
  { img: "./parceiros/jornada.png", site: "https://discord.gg/H2UpdzbbRJ"  },
  // { img: "./parceiros/parceiro7.png" },
  // { img: "./parceiros/seja-parceiro.png" },
];

const Parceiros = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bgcolor overflow-hidden">
      <div
        className="hero flex flex-col justify-center items-center min-h-screen"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, #194659 90%), url(./imagens/parceiros.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <span className="text-6xl md:text-[100px] font-bold text-bgvertical">
            PARCEIROS
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mt-6">
          {parceiros.map((parceiro, index) => (
            <div key={index} className="flex justify-center">
              <Link href={parceiro.site}>
              <img
                src={parceiro.img}
                alt={`Parceiro ${index + 1}`}
                className="object-contain h-48 w-48"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Parceiros;
