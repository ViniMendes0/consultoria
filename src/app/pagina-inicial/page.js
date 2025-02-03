import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoBackground from "../components/VideoBackground";
import HeroSection from "../components/HeroSection";
import NavegueSection from "../components/NavegueSection";
import ImagensDecorativas from "../components/ImagensDecorativas";


const Page = () => {
  return (
    <div className=" min-h-screen flex flex-col bg-pink-0 relative ">
      <Navbar />
       <VideoBackground />
      <HeroSection />
      <NavegueSection />
      <ImagensDecorativas />
      <Footer />
    </div>
  );
};

export default Page;
