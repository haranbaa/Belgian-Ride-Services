import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <Hero />
      <AboutUs />
      <Footer/>
    </main>
    </>
  );
}
