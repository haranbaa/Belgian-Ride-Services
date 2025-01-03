"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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
              href="/contact"
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
              <Link href="https://wa.me/32470612053" className="flex items-center space-x-3">
                <FaWhatsapp style={{ height: '30px', width: '30px', color: 'green' }} />
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
              className="text-green-500 hover:text-green-800 hover:bg-transparent"
              asChild
            >
              <Link href="https://wa.me/32470612053">
                <FaWhatsapp style={{ height: '30px', width: '30px', color: 'green' }} />
              </Link>
            </Button>
          </div>

          {/* Burger Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-3xl text-white">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-black/95 w-full shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link href="/" onClick={closeMenu} className="text-white text-lg font-semibold hover:text-yellow-400">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/booking" onClick={closeMenu} className="text-white text-lg font-semibold hover:text-yellow-400">
                  BOOK A RIDE
                </Link>
              </li>
              <li>
                <Link href="/#about-us" onClick={closeMenu} className="text-white text-lg font-semibold hover:text-yellow-400">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeMenu} className="text-white text-lg font-semibold hover:text-yellow-400">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;