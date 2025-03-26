"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <motion.section 
      className="relative h-screen flex flex-col justify-center items-center text-center px-5 bg-green-100 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero3.jpg')" }}
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      {/* Overlay for Opacity Effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        <h2 className="text-7xl font-bold text-purple-50 mb-5">
          Fresh Flowers, Delivered to Your Door
        </h2>
        <p className="text-xl text-purple-50 max-w-7xl">
          Experience the elegance of nature with our tailor-made floral subscriptions for homes, restaurants, and hotels.
        </p>
        <Button className="mt-6 bg-purple-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-purple-800">
          Explore Flowers
        </Button>
      </div>
    </motion.section>
  );
}
