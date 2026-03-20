"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Rose Bouquet", description: "A fresh collection of premium red roses, perfect for expressing love and affection.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/rose-bouquet.jpeg" },
  { id: 2, name: "White Chamanthi", description: "Elegant white chrysanthemum flowers arranged beautifully for any occasion.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/white-chamanthi2.jpeg" },
  { id: 3, name: "Yellow Marigold", description: "Bright yellow marigolds, a symbol of auspiciousness for traditional celebrations.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/yellowmarigold.jpeg" },
  { id: 4, name: "Pink Chrysanthemum", description: "Classic pink chrysanthemums that add grace and charm to any setting.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/pinkcrysanthamum.jpeg" },
  { id: 5, name: "White Lotus", description: "Sacred and serene white lotus flowers symbolizing purity and enlightenment.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/whitelotus.jpeg" },
  { id: 6, name: "Pink Lotus", description: "Beautiful pink lotus flowers representing divine beauty and spiritual awakening.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/pinklotus.jpeg" },
  { id: 7, name: "Gypsy Flowers", description: "Vibrant and colorful gypsy flowers that bring joy and energy to any space.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/GypsyFlowers.jpeg" },
  { id: 8, name: "Banti Mala", description: "Traditional marigold garlands perfect for pujas, weddings, and festive occasions.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/banti-mala.jpeg" },
  { id: 9, name: "Bullet Rose", description: "Premium bullet roses with a unique pointed shape, ideal for elegant arrangements.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/bullet-rose.jpeg" },
  { id: 10, name: "Malabar Rose", description: "Exotic Malabar roses known for their rich fragrance and deep color.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/malabarrose.jpeg" },
  { id: 11, name: "Mogra (Jasmine)", description: "Fragrant mogra jasmine flowers, beloved for their intoxicating sweet scent.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/mogra.jpeg" },
  { id: 12, name: "Orange Marigold", description: "Vibrant orange marigolds that add warmth and festivity to decorations.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/orangemarigold.jpeg" },
  { id: 13, name: "Chrysanthemum Mix", description: "A colorful mix of chrysanthemums in various shades for stunning arrangements.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/crysanthamum.jpeg" },
  { id: 14, name: "Sitamma Jadalu", description: "Traditional South Indian flower variety perfect for hair decoration and garlands.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/sitammajada.jpeg" },
  { id: 15, name: "Sunflower", description: "Bright and cheerful sunflowers that symbolize happiness, loyalty, and longevity.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/sunflower.jpeg" },
  { id: 16, name: "Yellow Chamanthi", description: "Sunny yellow chrysanthemums that bring brightness to any floral arrangement.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/yellow-chamanti2.jpeg" },
  { id: 17, name: "Golden Chamanthi", description: "Rich golden chrysanthemums with a luxurious appearance for special occasions.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/yellowchamanthi.jpeg" },
  { id: 18, name: "Yellow Rose", description: "Beautiful yellow roses symbolizing friendship, joy, and new beginnings.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/yellowrose.jpeg" },
  { id: 19, name: "Premium Bullet Rose", description: "Exquisite premium bullet roses, the crown jewel of any floral collection.", image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/products/bulletrose.jpeg" },
];

export default function OurProducts() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 bg-ivory px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
            Our Collection
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-forest mt-4 mb-6">
            Fresh From the Garden
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold/60" />
            <div className="h-px w-16 bg-gold/40" />
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 8) * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-white rounded-sm shadow-sm">
                {/* Image */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-all duration-500" />
                </div>

                {/* Info */}
                <div className="p-3 md:p-4">
                  <h3 className="font-serif text-sm md:text-base font-medium text-forest group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-xs text-sage mt-1 line-clamp-2 hidden md:block">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inquire CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <button
            onClick={scrollToContact}
            className="px-10 py-4 bg-forest hover:bg-forest-light text-white text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:shadow-lg"
          >
            Inquire Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
