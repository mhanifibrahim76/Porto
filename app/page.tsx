import AboutSection from "./Components/AboutSection";
import MegaMendungTapestry from "./Components/Batik/MegaMendungTapestry";
import ContactSection from "./Components/ContactSection";
import ExperienceSection from "./Components/ExperienceSection";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ShowcaseSection from "./Components/ShowcaseSection";

export default function Home() {
  return (
    <div className="relative isolate pb-24 lg:pb-0">
      <MegaMendungTapestry />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ShowcaseSection />
        <ContactSection />
      </main>
    </div>
  );
}
