import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
        <div className=" bg-black flex justify-between items-center px-4 py-2">
          <div className="text-white text-2xl font-bold  hover:text-yellow-500  "><Link href="/">BSR</Link></div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white text-lg hover:underline hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 ">
              HOME
            </Link>
            <Link href="/booking" className="text-white text-lg  hover:underline hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-105">
              BOOK A RIDE
            </Link>
            <Link href="/#about-us" className="text-white text-lg  hover:underline hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-105">
              ABOUT
            </Link>
            <Link href="/contact-us" className="text-white text-lg hover:underline hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-105">
              CONTACT US
            </Link>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;