import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import FeaturesSection from "@/components/FeaturesSection";
import BusinessSection from "@/components/BusinessSection";
import EcoFriendlyFleetgit  from "@/components/EcoFriendlyFleet";
import CourierServiceSection from "@/components/CourierServiceSection"; // Import the CourierServiceSection component

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <FeaturesSection />
        <BusinessSection />
        <CourierServiceSection /> {/* Add the CourierServiceSection component */}
        <EcoFriendlyFleetgit />
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}