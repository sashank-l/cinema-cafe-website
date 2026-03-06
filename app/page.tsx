import Navbar from "@/components/Navbar";
import HeroSection from "@/app/sections/HeroSection";
import SignatureMenuSection from "@/app/sections/SignatureMenuSection";
import AboutSection from "@/app/sections/AboutSection";
import GallerySection from "@/app/sections/GallerySection";
import InteractiveMenuSection from "@/app/sections/InteractiveMenuSection";
import ReviewsSection from "@/app/sections/ReviewsSection";
import ContactSection from "@/app/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SignatureMenuSection />
        <AboutSection />
        <InteractiveMenuSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
