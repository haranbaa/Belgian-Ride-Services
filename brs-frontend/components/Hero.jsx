"use client";

import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/Hero3.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-center text-white p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          BELGIAN RIDE{" "}
          <span className="text-yellow-400 drop-shadow-lg">SERVICES</span>
        </h1>
        <p className="text-xl md:text-2xl italic mb-10 max-w-2xl mx-auto">
          Professional and Reliable Transportation Services for Every Journey
        </p>
        <Link href="/booking">
          <Button className="px-8 py-4 bg-yellow-500 text-gray-900 text-lg font-bold rounded-full shadow-xl hover:bg-yellow-400 transition-all duration-300 group">
            BOOK YOUR RIDE
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

