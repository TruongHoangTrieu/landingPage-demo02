
import { useRef } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import DownloadSection from "../components/Download";
import Introduction from "../components/Introduction";
import Collection from "../components/Collection";
import FeaturesSection from "../components/Features";
import Footer2 from "../components/Footer";

function HomePage() {
  const heroIntroRef = useRef(null);

  const scrollToHeroIntro = () => {
    heroIntroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      
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

export default HomePage;
