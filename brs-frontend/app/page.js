import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import FeaturesSection from "@/components/FeaturesSection"; // Import the FeaturesSection component

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <FeaturesSection /> {/* Add the FeaturesSection component here */}
        <AboutUs />
        <Footer />
      </main>
    </>
  );
}