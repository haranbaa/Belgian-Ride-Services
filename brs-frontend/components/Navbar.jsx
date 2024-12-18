import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
        <div className=" bg-black flex justify-between items-center px-4 py-2">
          <div className="text-white text-lg font-bold">BSR</div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white text-lg hover:underline">
              Home
            </Link>
            <Link href="/Book-A-Ride" className="text-white text-lg  hover:underline">
              Book A Ride
            </Link>
            <Link href="/about" className="text-white text-lg  hover:underline">
              About
            </Link>
            <Link href="/contact-us" className="text-white text-lg hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;