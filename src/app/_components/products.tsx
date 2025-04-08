"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + cardsPerView >= products.length ? 0 : prevIndex + cardsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - cardsPerView < 0 ? products.length - cardsPerView : prevIndex - cardsPerView
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className="py-20 bg-purple-100 px-10">
      <h2 className="text-4xl font-semibold text-center text-purple-800 mb-10">
        Our Flowers
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-purple-50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-purple-600" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-purple-50 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-purple-600" />
        </motion.button>

        {/* Products Container */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visibleProducts.map((product) => (
                <Card key={product.id} className="p-6 bg-white rounded-3xl shadow-lg shadow-purple-300 border border-purple-300">
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
                    <Link href="/products">
                      <Button className="mt-4 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700">
                        View All Products
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(products.length / cardsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * cardsPerView)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === Math.floor(currentIndex / cardsPerView) ? "bg-purple-600 w-4" : "bg-purple-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
