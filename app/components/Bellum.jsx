import { PiPlanetBold } from "react-icons/pi";

const Bellum = () => {
  return (
    <div className="flex bg-bgcolor min-h-screen  overflow-hidden">
      <div
        className="absolute w-full h-full bg-no-repeat bg-contain bg-center z-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 80%, #194659 100%),linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, #194659 100%),  url(/intro/logo.svg)",
          backgroundPosition: "left -100px center",
        }}
      />
      <div className="hero-content text-colorLogo p-4 w-full md:w-1/2 md:ml-auto">
        <div className="text-left">
          <h1 className="mb-5 text-4xl md:text-6xl font-bold">Bellum Galaxy</h1>
          <p className="mb-5 text-xl md:text-3xl">
            Na Bellum Galaxy, unimos as estrelas da ciência e da tecnologia para
            forjar o futuro.
          </p>
          <p className="mb-5 text-xl md:text-3xl">
            Permita-nos ajudá-lo a alcançar seu verdadeiro potencial
            transformando aspirações em realizações estelares.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ul className="text-lg md:text-xl font-bold space-y-2">
              <li className="flex items-center justify-center md:justify-end">
                <PiPlanetBold className="text-bgvertical w-6 h-6 mr-2" />
                <span>Participe das Atividades.</span>
              </li>
              <li className="flex items-center justify-center md:justify-end">
                <PiPlanetBold className="text-bgvertical w-6 h-6 mr-2" />
                <span>Compartilhe Experiências.</span>
              </li>
              <li className="flex items-center justify-center md:justify-end">
                <PiPlanetBold className="text-bgvertical w-6 h-6 mr-2" />
                <span>Crie Projetos Próprios.</span>
              </li>
              <li className="flex items-center justify-center md:justify-end">
                <PiPlanetBold className="text-bgvertical w-6 h-6 mr-2" />
                <span>Ajude-nos a ajudar o próximo!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bellum;
