import AboutUs from "@/components/AboutUs";
import Benefits from "@/components/Benefits";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Members from "@/components/Members";
import MobApp from "@/components/MobApp";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Benefits />
      <Services />
      <Stats />
      <Feedback />
      <Members />
      <MobApp />
      <Footer />
    </>
  );
}
