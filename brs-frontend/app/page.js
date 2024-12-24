import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import FeaturesSection from "@/components/FeaturesSection";
import BusinessSection from "@/components/BusinessSection"; // Import the BusinessSection component

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <AboutUs />
        <FeaturesSection />
        <BusinessSection /> {/* Add the BusinessSection component here */}
        <Footer />
      </main>
    </>
  );
}