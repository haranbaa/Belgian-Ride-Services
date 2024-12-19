import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
        <div className=" bg-black flex justify-between items-center px-4 py-2">
          <div className="text-white text-lg font-bold">BSR</div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white text-lg hover:underline">
              HOME
            </Link>
            <Link href="/booking" className="text-white text-lg  hover:underline">
              BOOK A RIDE
            </Link>
            <Link href="/about" className="text-white text-lg  hover:underline">
              ABOUT
            </Link>
            <Link href="/contact-us" className="text-white text-lg hover:underline">
              CONTACT US
            </Link>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;