import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FeaturesSection from "@/components/FeaturesSection";
import BusinessSection from "@/components/BusinessSection";
import EcoFriendlyFleetgit  from "@/components/EcoFriendlyFleet";
import CourierServiceSection from "@/components/CourierServiceSection"; // Import the CourierServiceSection component

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <FeaturesSection />
        <BusinessSection />
        <CourierServiceSection /> {/* Add the CourierServiceSection component */}
        <EcoFriendlyFleetgit />
        <AboutUs />
      </main>
    </>
  );
}