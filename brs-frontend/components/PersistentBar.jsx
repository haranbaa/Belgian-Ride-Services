"use client";

import { Button } from "./ui/button";
import Link from "next/link";

const PersistentBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-90 text-white flex justify-between items-center p-4 shadow-lg z-50">
      <h2 className="text-lg font-bold pl-4">Welcome to Your Taxi Agency</h2>
      <div className="pr-4">
        <Link href="#booking">
          <Button className="px-6 py-2 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PersistentBar;
