"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/Hero3.jpg')`,
      }}
    >
      <div
        className={`sticky top-0 text-center text-white p-6 transition-all duration-300 ${
          scrollY > 200 ? "opacity-75 transform scale-95" : "opacity-100"
        }`}
      >
        <h1 className="text-6xl font-bold drop-shadow-lg mb-4">
          BELGIAN RIDE SERVICES
        </h1>
        <p className="text-2xl italic drop-shadow-lg mb-6">
          Professional and Reliable Transportation Services
        </p>
        <Link href="/booking">
          <Button className="px-16 py-4 bg-yellow-300 text-black text-xl font-bold rounded-lg shadow-lg hover:bg-yellow-500">
            BOOK YOUR RIDE
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
