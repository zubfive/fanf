"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Flower, ShoppingCart, Phone } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Events", href: "#events" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Flower className={`w-8 h-8 ${isScrolled ? "text-purple-600" : "text-white"}`} />
            <span className={`text-2xl font-bold ${isScrolled ? "text-purple-900" : "text-white"}`}>
              Ficus & Flowers
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className={`text-lg font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                    isScrolled 
                      ? "text-purple-900 hover:bg-purple-50" 
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
                <motion.div
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-purple-600" : "bg-white"
                  }`}
                  initial={false}
                />
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-purple-600 text-white hover:bg-purple-700">
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-purple-900" />
            ) : (
              <Menu className="w-6 h-6 text-purple-900" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative group"
                >
                  <Link 
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-purple-900 hover:bg-purple-50 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"
                    initial={false}
                  />
                </motion.div>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Contact Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-6 z-50 md:hidden"
        style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <motion.a
          href="tel:+1234567890"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-14 h-14 bg-purple-600 text-white rounded-full shadow-lg"
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </motion.nav>
  );
}
