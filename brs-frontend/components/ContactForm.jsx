"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/Hero3.jpg')` }}
    >
      {/* Content positioned at the bottom */}
      <div className="absolute bottom-20 left-0 right-0 mx-auto w-fit bg-black bg-opacity-70 text-white text-center px-8 py-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Welcome to Your Taxi Agency</h1>
        <Link href="#about-us">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-lg font-bold uppercase rounded-full shadow-lg transition-transform transform hover:scale-105">
            Book Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
