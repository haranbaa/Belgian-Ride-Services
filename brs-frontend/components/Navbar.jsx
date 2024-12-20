import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
        <div className=" bg-black flex justify-between items-center px-4 py-2">
          <div className="text-white text-lg font-bold"><Link href="/">BSR</Link></div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:underline">
              HOME
            </Link>
            <Link href="/booking" className="text-white  hover:underline">
              BOOK A RIDE
            </Link>
            <Link href="/#about-us" className="text-white  hover:underline">
              ABOUT
            </Link>
            <Link href="/contact" className="text-white hover:underline">
              CONTACT US
            </Link>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;