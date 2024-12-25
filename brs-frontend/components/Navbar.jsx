"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 shadow-lg" : "bg-black/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Call Us Section */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="text-yellow-400 hover:text-yellow-500 hover:bg-transparent"
              asChild
            >
              <Link href="tel:0032470612053" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="hidden lg:flex flex-col items-start">
                  <span className="text-sm text-gray-300">24/7 Available - Call Us</span>
                  <span className="text-lg font-medium">+32 470 61 20 53</span>
                </span>
              </Link>
            </Button>
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className="text-white text-lg font-medium tracking-wide hover:text-yellow-400 transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/booking"
              className="text-white text-lg font-medium tracking-wide hover:text-yellow-400 transition-colors"
            >
              BOOK A RIDE
            </Link>
            <Link
              href="/#about-us"
              className="text-white text-lg font-medium tracking-wide hover:text-yellow-400 transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/contact-us"
              className="text-white text-lg font-medium tracking-wide hover:text-yellow-400 transition-colors"
            >
              CONTACT US
            </Link>
          </div>

          {/* Logo Section */}
          <div className="flex items-center justify-end">
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <Image
                src="/logo.png"
                alt="Belgian Ride Services Logo"
                width={60}
                height={60}
                className="w-auto h-12 md:h-14"
                priority
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 shadow-lg px-4 py-3">
        <div className="flex justify-around items-center">
          <Link
            href="/"
            className="text-white text-sm font-medium hover:text-yellow-400 transition-colors flex flex-col items-center"
          >
            HOME
          </Link>
          <Link
            href="/booking"
            className="text-white text-sm font-medium hover:text-yellow-400 transition-colors flex flex-col items-center"
          >
            BOOK
          </Link>
          <Link
            href="/#about-us"
            className="text-white text-sm font-medium hover:text-yellow-400 transition-colors flex flex-col items-center"
          >
            ABOUT
          </Link>
          <Link
            href="/contact-us"
            className="text-white text-sm font-medium hover:text-yellow-400 transition-colors flex flex-col items-center"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
