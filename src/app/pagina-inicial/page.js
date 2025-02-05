import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoBackground from "../components/VideoBackground";
import HeroSection from "../components/HeroSection";
import NavegueSection from "../components/NavegueSection";
import ImagensDecorativas from "../components/ImagensDecorativas";
import TeamSection from "../components/TeamSection";
import TestButton from "../components/TestButton";

const Page = () => {
  return (
    <div className=" min-h-screen flex flex-col bg-pink-0 relative ">
      <Navbar />
      <VideoBackground />
      <HeroSection />
      <NavegueSection />
      <TeamSection />
      <TestButton />
      <ImagensDecorativas />
      <Footer />
    </div>
  );
};

export default Page;
