import { TfiPalette } from "react-icons/tfi";
import { FaBookJournalWhills } from "react-icons/fa6";
import { AiFillNotification } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";

const IntroInfo = () => {
  return (
    <div
      className="hero min-h-screen grid justify-between pl-20"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, #40366E 95%, #194659 100%), url(./intro/intro-info.png)",
      }}
    >
      <div className="text-left text-neutral-content pl-20">
        <div className="flex items-center">
          <h1 className="mb-5 text-6xl font-bold text-bgvertical">
            Você no controle!
          </h1>
        </div>

        <p className="max-w-xl mb-5 text-3xl">
          Participe das atividades, pontue e troque seus pontos por NFTs,
          cursos, espaços de divulgação e acesso à conteúdos exclusivos!
        </p>
        <div className="grid grid-cols-2">
          <ul className="text-1xl font-bold">
            <li className="flex items-center">
              <TfiPalette className="text-bgvertical w-6 h-6 mr-2" />
              <span>NFTs</span>
            </li>
            <li className="flex items-center mt-3">
              <FaBookJournalWhills className="text-bgvertical w-6 h-6 mr-2" />
              <span>Cursos</span>
            </li>
            <li className="flex items-center mt-3">
              <AiFillNotification className="text-bgvertical w-6 h-6 mr-2" />
              <span>Espaços de divulgação</span>
            </li>
            <li className="flex items-center mt-3">
              <AiFillLock className="text-bgvertical w-6 h-6 mr-2" />
              <span>Acesso à Conteúdos Exclusivos</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default IntroInfo;
