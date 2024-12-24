import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import FeaturesSection from "@/components/FeaturesSection";
import BusinessSection from "@/components/BusinessSection"; // Import the BusinessSection component
import EcoFriendlyFleet from "@/components/EcoFriendlyFleet";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <FeaturesSection />
        <BusinessSection /> {/* Add the BusinessSection component here */}
        <EcoFriendlyFleet />
        <Footer />
      </main>
    </>
  );
}