"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Flowers", href: "#flowers" },
    { name: "Events", href: "#events" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  return (
    <header className="fixed top-0 p-1 left-0 right-0 z-50 w-full bg-purple-100 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 gap-4">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo/logo.png" 
                alt="Ficus & Flowers Logo" 
                width={50} 
                height={50} 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-purple-800 ml-1">
                Ficus & Flowers
              </span>
            </Link>
          </div>

          {/* Search Bar - Desktop (Center) */}
          <div className="hidden md:flex flex-1 max-w-md mx-auto">
            <form onSubmit={handleSearch} className="relative w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-purple-400" />
                </div>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 text-sm text-purple-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 focus:bg-white"
                  placeholder="Search flowers..."
                  aria-label="Search flowers"
                />
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 shrink-0">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="text-base font-medium text-purple-700 hover:text-black transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-purple-700" />
            ) : (
              <Menu className="w-6 h-6 text-purple-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-md border-t"
          >
            {/* Search Bar - Mobile */}
            <div className="px-4 pt-4 pb-2">
              <form onSubmit={handleSearch} className="relative w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-4 h-4 text-purple-400" />
                  </div>
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-2 pl-10 pr-4 text-sm text-purple-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 focus:bg-white"
                    placeholder="Search flowers..."
                    aria-label="Search flowers"
                  />
                </div>
              </form>
            </div>
            
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="py-1"
                >
                  <Link 
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-purple-700 hover:text-black hover:bg-purple-50 rounded-md transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
