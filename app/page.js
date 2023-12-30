import Hero from "./components/Hero";
import Intro from "./components/Bellum";
import IntroInfo from "./components/Funcionamento";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Intro />
      <IntroInfo/>
    </div>
  );
}
