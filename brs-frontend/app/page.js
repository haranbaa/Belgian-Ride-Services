import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <Hero />
      <Footer/>
    </main>
    </>
  );
}
