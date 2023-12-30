const parceiros = [
  { img: "./parceiros/parceiro1.png" },
  { img: "./parceiros/parceiro2.png" },
  { img: "./parceiros/parceiro3.png" },
  { img: "./parceiros/parceiro4.png" },
  { img: "./parceiros/parceiro5.png" },
  { img: "./parceiros/parceiro6.png" },
  { img: "./parceiros/parceiro7.png" },
  { img: "./parceiros/parceiro8.png" },
];

const Parceiros = () => {
  return (
    <div
      className="hero min-h-screen flex flex-col justify-start bg-bgcolor"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, 90%, #194659 100%), url(./imagens/parceiros.jpg)",
      }}
    >
      <div className="flex text-center mt-32">
        <span className="text-[100px] font-bold text-bgvertical">
          PARCEIROS
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {parceiros.map((parceiro, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={parceiro.img}
              alt={`Parceiro ${index + 1}`}
              className="object-contain h-48 w-48"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Parceiros;
