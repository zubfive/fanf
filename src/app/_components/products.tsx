"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Sample product data (Replace with dynamic API data later)
const products: Product[] = [
  {
    id: 1,
    name: "Rose Bouquet",
    description: "A fresh collection of premium red roses.",
    image: "/images/products/rose-boquet.jpeg",
  },
  {
    id: 2,
    name: "White Chamanthi",
    description: "Elegant white flowers arranged beautifully for any occasion.",
    image: "/images/products/white-chamanthi2.jpeg",
  },
  {
    id: 3,
    name: "Yellow Marigold",
    description: "Bright yellow marigolds for traditional celebrations.",
    image: "/images/products/yellowmarigold.jpeg",
  },
  {
    id: 4,
    name: "Chrysanthemum",
    description: "Classic chrysanthemums perfect for gifting.",
    image: "/images/products/crysanthamum.jpeg",
  },
  {
    id: 5,
    name: "Lotus Flower",
    description: "Sacred and beautiful lotus flowers for decoration.",
    image: "/images/products/whitelotus.jpeg",
  },
];

export default function OurProducts() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-purple-100 px-10">
      <h2 className="text-4xl font-semibold text-center text-purple-800 mb-10 pt-10">
        Our Flowers
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-6 w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }} // Moves left by half of the content width
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, // Slow smooth scrolling
          }}
        >
          {[...products, ...products].map((product, index) => (
            <Card 
              key={`${product.id}-${index}`} 
              className="p-6 w-80 bg-white rounded-3xl shadow-lg shadow-purple-300 border border-purple-300 flex-shrink-0"
            >
              {/* Product Image */}
              <div className="w-full h-40 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Product Info */}
              <CardContent className="mt-5 text-center">
                <h3 className="text-purple-900 font-bold text-lg">{product.name}</h3>
                <p className="text-purple-800 italic mt-2">{product.description}</p>
                <Button 
                  className="mt-4 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700"
                  onClick={scrollToContact}
                >
                  Inquire Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
