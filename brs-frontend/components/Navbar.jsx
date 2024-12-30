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
        isScrolled ? "bg-black/95 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 lg:px-8 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <Image
              src="/logo2.png"
              alt="Belgian Ride Services Logo"
              width={50}
              height={50}
              className="w-auto h-10 md:h-12"
              priority
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white text-lg font-semibold tracking-wider hover:text-yellow-400 transition-colors hover:underline"
            >
              HOME
            </Link>
            <Link
              href="/booking"
              className="text-white text-lg font-semibold tracking-wider hover:text-yellow-400 transition-colors hover:underline"
            >
              BOOK A RIDE
            </Link>
            <Link
              href="/#about-us"
              className="text-white text-lg font-semibold tracking-wider hover:text-yellow-400 transition-colors hover:underline"
            >
              ABOUT
            </Link>
            <Link
              href="/contact-us"
              className="text-white text-lg font-semibold tracking-wider hover:text-yellow-400 transition-colors hover:underline"
            >
              CONTACT US
            </Link>
          </div>

          {/* Contact Information */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hover:bg-transparent"
              asChild
            >
              <Link href="tel:0032470612053" className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-yellow-400" />
                <div className="flex flex-col items-start space-y-0">
                  <span className="text-2xl font-semibold text-yellow-400">
                    +32 470 61 20 53
                  </span>
                </div>
              </Link>
            </Button>
          </div>

          {/* Mobile Contact Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-yellow-400 hover:text-yellow-500 hover:bg-transparent"
              asChild
            >
              <Link href="tel:0032470612053">
                <Phone className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
