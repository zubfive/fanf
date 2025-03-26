"use client";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className=" bg-purple-100 text-white py-4 px-6 md:px-10 flex items-center justify-between shadow-lg">
      <h1 className="text-3xl font-bold text-purple-800 tracking-wide">🌸 Ficus & Flowers</h1>

      {/* Button Group (Subscribe & Login) */}
      <div className="flex space-x-4">
        <Button 
          variant="outline" 
          className="border-white text-purple-800 hover:bg-purple-800 hover:text-white transition duration-300"
        >
          Subscribe Now
        </Button>

        <Button 
          variant="outline" 
          className="border-white text-purple-800 hover:bg-purple-800 hover:text-white transition duration-300"
        >
          Login
        </Button>
      </div>
    </header>
  );
}
