import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ShowcaseSection from "./Components/ShowcaseSection";


export default function Home() {
  return (
    <div>
      <Header />
      <main className="">
        <HeroSection />
        <AboutSection />
        <ShowcaseSection />
        <ContactSection />
      </main>
    </div>
  );
}
