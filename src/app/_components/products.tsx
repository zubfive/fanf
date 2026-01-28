"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";


interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Flower product data - All flowers from our collection
const products: Product[] = [
  {
    id: 1,
    name: "Rose Bouquet",
    description: "A fresh collection of premium red roses, perfect for expressing love and affection.",
    image: "/images/products/rose-bouquet.jpeg",
  },
  {
    id: 2,
    name: "White Chamanthi",
    description: "Elegant white chrysanthemum flowers arranged beautifully for any occasion.",
    image: "/images/products/white-chamanthi2.jpeg",
  },
  {
    id: 3,
    name: "Yellow Marigold",
    description: "Bright yellow marigolds, a symbol of auspiciousness for traditional celebrations.",
    image: "/images/products/yellowmarigold.jpeg",
  },
  {
    id: 4,
    name: "Pink Chrysanthemum",
    description: "Classic pink chrysanthemums that add grace and charm to any setting.",
    image: "/images/products/pinkcrysanthamum.jpeg",
  },
  {
    id: 5,
    name: "White Lotus",
    description: "Sacred and serene white lotus flowers symbolizing purity and enlightenment.",
    image: "/images/products/whitelotus.jpeg",
  },
  {
    id: 6,
    name: "Pink Lotus",
    description: "Beautiful pink lotus flowers representing divine beauty and spiritual awakening.",
    image: "/images/products/pinklotus.jpeg",
  },
  {
    id: 7,
    name: "Gypsy Flowers",
    description: "Vibrant and colorful gypsy flowers that bring joy and energy to any space.",
    image: "/images/products/GypsyFlowers.jpeg",
  },
  {
    id: 8,
    name: "Banti Mala",
    description: "Traditional marigold garlands perfect for pujas, weddings, and festive occasions.",
    image: "/images/products/banti-mala.jpeg",
  },
  {
    id: 9,
    name: "Bullet Rose",
    description: "Premium bullet roses with a unique pointed shape, ideal for elegant arrangements.",
    image: "/images/products/bullet-rose.jpeg",
  },
  {
    id: 10,
    name: "Malabar Rose",
    description: "Exotic Malabar roses known for their rich fragrance and deep color.",
    image: "/images/products/malabarrose.jpeg",
  },
  {
    id: 11,
    name: "Mogra (Jasmine)",
    description: "Fragrant mogra jasmine flowers, beloved for their intoxicating sweet scent.",
    image: "/images/products/mogra.jpeg",
  },
  {
    id: 12,
    name: "Orange Marigold",
    description: "Vibrant orange marigolds that add warmth and festivity to decorations.",
    image: "/images/products/orangemarigold.jpeg",
  },
  {
    id: 13,
    name: "Chrysanthemum Mix",
    description: "A colorful mix of chrysanthemums in various shades for stunning arrangements.",
    image: "/images/products/crysanthamum.jpeg",
  },
  {
    id: 14,
    name: "Sitamma Jadalu",
    description: "Traditional South Indian flower variety perfect for hair decoration and garlands.",
    image: "/images/products/sitammajada.jpeg",
  },
  {
    id: 15,
    name: "Sunflower",
    description: "Bright and cheerful sunflowers that symbolize happiness, loyalty, and longevity.",
    image: "/images/products/sunflower.jpeg",
  },
  {
    id: 16,
    name: "Yellow Chamanthi",
    description: "Sunny yellow chrysanthemums that bring brightness to any floral arrangement.",
    image: "/images/products/yellow-chamanti2.jpeg",
  },
  {
    id: 17,
    name: "Golden Chamanthi",
    description: "Rich golden chrysanthemums with a luxurious appearance for special occasions.",
    image: "/images/products/yellowchamanthi.jpeg",
  },
  {
    id: 18,
    name: "Yellow Rose",
    description: "Beautiful yellow roses symbolizing friendship, joy, and new beginnings.",
    image: "/images/products/yellowrose.jpeg",
  },
  {
    id: 19,
    name: "Premium Bullet Rose",
    description: "Exquisite premium bullet roses, the crown jewel of any floral collection.",
    image: "/images/products/bulletrose.jpeg",
  },
];

export default function OurProducts() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-20 bg-purple-100 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-purple-900 mb-8 md:mb-10">
        Our Flowers
      </h2>

      {/* Mobile/Tablet Grid View - Hidden on large screens */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 lg:hidden">
        {products.map((product) => (
          <Card 
            key={product.id} 
            className="p-3 md:p-4 bg-white rounded-xl md:rounded-2xl shadow-md shadow-purple-200 border border-purple-200"
          >
            {/* Product Image */}
            <div className="w-full h-24 md:h-32 bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={160}
                height={160}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <CardContent className="mt-3 text-center p-0">
              <h3 className="text-purple-900 font-bold text-sm md:text-base">{product.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop Carousel - Hidden on mobile/tablet */}
      <div className="hidden lg:block relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-6 w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
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
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Single Inquire Now Button for the whole section */}
      <div className="mt-8 md:mt-12 text-center">
        <Button 
          className="bg-purple-600 text-white px-8 py-4 text-lg rounded-full hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={scrollToContact}
        >
          Inquire Now
        </Button>
      </div>
    </section>
  );
}
