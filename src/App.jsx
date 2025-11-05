import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Collection from "./components/Collection";
import Introduction from "./components/Introduction";
import FeaturesSection from "./components/Features";
import DownloadSection from "./components/Download";
import Footer2 from "./components/Footer";

function App() {
  const heroIntroRef = useRef(null);

  const scrollToHeroIntro = () => {
    heroIntroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <HeroSection onScrollDown={scrollToHeroIntro} />
      <div ref={heroIntroRef}>
        <Introduction />
      </div>
      <Collection />
      <FeaturesSection />
      <DownloadSection />
      <Footer2 />
    </>
  );
}

export default App;
