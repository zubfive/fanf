"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";

// Sample product data (Replace with dynamic API data later)
const products = [
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
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 px-10 bg-purple-100 overflow-hidden">
      <h2 className="text-4xl font-semibold text-center text-purple-800 mb-10">
        Our Products
      </h2>

      <motion.div className="cursor-grab overflow-hidden" ref={scrollRef}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -((products.length - 2) * 320) }} // Adjust drag range dynamically
          className="flex gap-8 w-max"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 text-center min-w-[300px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
                priority
              />
              <h3 className="text-2xl font-bold text-purple-700 mt-4">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-3">{product.description}</p>
              <Button className="mt-4 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700">
                Buy Now
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
