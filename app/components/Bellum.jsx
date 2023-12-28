import { PiPlanetBold } from "react-icons/pi";

const Intro = () => {
  return (
    <div className="flex flex-col-2  bg-bgcolor">
      <div
        className="hero h-tablet"
        style={{
          backgroundImage: "url(/intro/logo.svg)",
        }}
      ></div>
      <div className="hero-content text-colorLogo justify-start">
        <div className="w-9/12 text-left">
          <h1 className="mb-5 text-6xl font-bold">Bellum Galaxy</h1>
          <p className="mb-5 text-3xl">
            Na Bellum Galaxy, unimos as estrelas da ciência e da tecnologia para
            forjar o futuro.
          </p>
          <p className="mb-5 text-3xl">
            Permita-nos ajudá-lo a alcançar seu verdadeiro potencial
            transformando aspirações em realizações estelares.
          </p>
          <div className="grid grid-cols-2">
            <ul className="text-1xl font-bold space-y-2">
              <li className="flex items-center">
                <PiPlanetBold className="text-bgvertical w-6 h-6 mr-2" />
                <span>Participe das Atividades.</span>
              </li>
              <li className="flex items-center">
                <PiPlanetBold className="text-bgvertical w-6 h-6 mr-2" />
                <span>Compartilhe Experiências.</span>
              </li>
              <li className="flex items-center">
                <PiPlanetBold className="text-bgvertical w-6 h-6 mr-2" />
                <span>Crie Projetos Próprios.</span>
              </li>
              <li className="flex items-center">
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
export default Intro;
