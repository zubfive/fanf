"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShoppingCart, Heart, Star, Filter, Search } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Rose Bouquet",
    description: "A fresh collection of premium red roses.",
    image: "/images/products/rose-boquet.jpeg",
    price: 49.99,
    rating: 4.8,
    reviews: 128,
    category: "Bouquets"
  },
  {
    id: 2,
    name: "White Chamanthi",
    description: "Elegant white flowers arranged beautifully for any occasion.",
    image: "/images/products/white-chamanthi2.jpeg",
    price: 39.99,
    rating: 4.6,
    reviews: 95,
    category: "Seasonal"
  },
  {
    id: 3,
    name: "Yellow Marigold",
    description: "Bright yellow marigolds for traditional celebrations.",
    image: "/images/products/yellowmarigold.jpeg",
    price: 29.99,
    rating: 4.7,
    reviews: 156,
    category: "Traditional"
  },
  {
    id: 4,
    name: "Chrysanthemum",
    description: "Classic chrysanthemums perfect for gifting.",
    image: "/images/products/crysanthamum.jpeg",
    price: 34.99,
    rating: 4.5,
    reviews: 82,
    category: "Gift Sets"
  },
  {
    id: 5,
    name: "Lotus Flower",
    description: "Sacred and beautiful lotus flowers for decoration.",
    image: "/images/products/whitelotus.jpeg",
    price: 44.99,
    rating: 4.9,
    reviews: 112,
    category: "Decorative"
  },
];

const categories = ["All", "Bouquets", "Seasonal", "Traditional", "Gift Sets", "Decorative"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">Our Products</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : "bg-white text-purple-600 border border-purple-200 hover:bg-purple-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-gray-700">{product.rating}</span>
                  </div>
                  <span className="text-lg font-bold text-purple-600">${product.price}</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button className="flex-1 bg-purple-600 text-white hover:bg-purple-700">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
} 