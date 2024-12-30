"use client";

import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen w-full bg-cover bg-center bg-fixed flex items-center justify-center overflow-hidden animate-in fade-in duration-1000"
      style={{
        backgroundImage: `url('/Hero3.jpg')`,
      }}
    >
      {/* Improved gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Main content */}
      <div className="relative z-10 text-center text-white p-6 translate-y-0 transition-all duration-700 ease-out">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight [text-shadow:_0_2px_4px_rgb(0_0_0_/_30%)]">
            BELGIAN RIDE{" "}
            <span className="text-yellow-400 drop-shadow-xl inline-block hover:scale-105 transition-transform duration-300">
              SERVICES
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto text-gray-200">
            Professional and Reliable Transportation Services for Every Journey
          </p>

          <div className="transform hover:scale-105 transition-all duration-300">
            <Link href="/booking" className="inline-block">
              <Button 
                className="
                  relative px-8 py-6 
                  bg-gradient-to-r from-yellow-500 to-yellow-400 
                  hover:from-yellow-400 hover:to-yellow-500
                  text-gray-900 text-lg font-bold 
                  rounded-full 
                  shadow-[0_8px_16px_rgb(0_0_0_/_25%)]
                  hover:shadow-[0_8px_20px_rgb(250_204_21_/_20%)]
                  transition-all duration-300 
                  group
                  border-2 border-yellow-300/20
                  overflow-hidden
                "
              >
                <span className="relative z-10 flex items-center">
                  BOOK YOUR RIDE
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  );
};

export default Hero;

