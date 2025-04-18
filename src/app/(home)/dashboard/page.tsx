"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const occasionCategories = [
  {
    id: 1,
    name: 'Birthday',
    image: '/images/flowers/birthday.jpg',
    link: '/products?occasion=birthday'
  },
  {
    id: 2,
    name: 'Anniversary',
    image: '/images/flowers/anniversary.jpg',
    link: '/products?occasion=anniversary'
  },
  {
    id: 3,
    name: 'Wedding',
    image: '/images/flowers/wedding.jpg',
    link: '/products?occasion=wedding'
  },
  {
    id: 4,
    name: 'Sympathy',
    image: '/images/flowers/sympathy.jpg',
    link: '/products?occasion=sympathy'
  },
  {
    id: 5,
    name: 'Romance',
    image: '/images/flowers/romance.jpg',
    link: '/products?occasion=romance'
  },
  {
    id: 6,
    name: 'Celebration',
    image: '/images/flowers/celebration.jpg',
    link: '/products?occasion=celebration'
  },
  {
    id: 7,
    name: 'Thank You',
    image: '/images/flowers/thankyou.jpg',
    link: '/products?occasion=thankyou'
  },
  {
    id: 8,
    name: 'Housewarming',
    image: '/images/flowers/housewarming.jpg',
    link: '/products?occasion=housewarming'
  }
];

const trendingFlowers = [
  {
    id: 1,
    name: 'Premium Rose Bouquet',
    image: '/images/flowers/premium-roses.jpg',
    rating: 4.3,
    deliveryTime: '35-40',
    categories: ['Roses', 'Premium', 'Bouquet'],
    location: 'Available Nationwide',
    price: '₹1299',
    discount: 'ITEMS AT ₹1299'
  },
  {
    id: 2,
    name: 'Mixed Seasonal Arrangement',
    image: '/images/flowers/mixed-seasonal.jpg',
    rating: 4.3,
    deliveryTime: '35-40',
    categories: ['Mixed', 'Seasonal', 'Arrangement'],
    location: 'Available Nationwide',
    price: '₹1499',
    discount: null
  },
  {
    id: 3,
    name: 'Exotic Orchid Collection',
    image: '/images/flowers/exotic-orchids.jpg',
    rating: 4.2,
    deliveryTime: '45-50',
    categories: ['Orchids', 'Exotic', 'Premium'],
    location: 'Select Locations',
    price: '₹2349',
    discount: '₹125 OFF ABOVE ₹349'
  },
  {
    id: 4,
    name: 'Celebration Basket',
    image: '/images/flowers/celebration-basket.jpg',
    rating: 4.1,
    deliveryTime: '45-50',
    categories: ['Mixed', 'Basket', 'Celebration'],
    location: 'Metro Cities',
    price: '₹1299',
    discount: '₹50 OFF ABOVE ₹129'
  },
  {
    id: 5,
    name: 'Luxury Lily Bouquet',
    image: '/images/flowers/luxury-lily.jpg',
    rating: 4.5,
    deliveryTime: '35-40',
    categories: ['Lily', 'Luxury', 'Bouquet'],
    location: 'Premium Delivery',
    price: '₹1899',
    discount: null
  }
];

export default function Dashboard() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 7; // Number of items visible at once

  const handleNext = () => {
    setStartIndex((prev) => 
      prev + 1 >= occasionCategories.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) => 
      prev - 1 < 0 ? occasionCategories.length - 1 : prev - 1
    );
  };

  // Create a circular array for smooth infinite scrolling
  const getVisibleCategories = () => {
    const result = [];
    for (let i = 0; i < visibleItems; i++) {
      const index = (startIndex + i) % occasionCategories.length;
      result.push(occasionCategories[index]);
    }
    return result;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">What's on your mind?</h2>
        <div className="flex space-x-2">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Previous category"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Next category"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <motion.div 
          className="flex justify-between"
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {getVisibleCategories().map((category) => (
            category && (
              <Link 
                href={category.link || '#'} 
                key={category.id}
                className="flex flex-col items-center group"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-2 border-2 border-transparent group-hover:border-purple-500 transition-all duration-300">
                  <div className="relative w-full h-full">
                    <Image
                      src={category.image || '/images/placeholder.jpg'}
                      alt={category.name || 'Flower category'}
                      fill
                      sizes="(max-width: 768px) 96px, 112px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-center group-hover:text-purple-600 transition-colors">
                  {category.name || 'Category'}
                </p>
              </Link>
            )
          ))}
        </motion.div>
      </div>
      
      {/* Trending Flowers Section */}
      <div className="mt-10 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Trending Flowers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {trendingFlowers.map((flower) => (
            <Link href={`/products/${flower.id}`} key={flower.id} className="block">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={flower.image || '/images/placeholder.jpg'}
                    alt={flower.name}
                    fill
                    className="object-cover"
                  />
                  {flower.discount && (
                    <div className="absolute bottom-3 left-3 bg-black/75 text-white text-xs font-medium px-2 py-1 rounded">
                      {flower.discount}
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-lg text-gray-900">{flower.name}</h3>
                  
                  <div className="flex items-center mt-1">
                    <div className="flex items-center text-purple-600">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{flower.rating}</span>
                    </div>
                    <div className="flex items-center ml-3 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span className="ml-1 text-sm">{flower.deliveryTime} mins</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 text-sm text-gray-500">
                    {flower.categories.slice(0, 3).join(', ')}
                  </div>
                  
                  <div className="mt-1 text-sm text-gray-500">{flower.location}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="mt-10 border-t border-gray-200 pt-10">
        <h3 className="text-xl font-semibold mb-6">Featured Collections</h3>
        {/* Placeholder for additional content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-medium text-lg mb-2">Seasonal Favorites</h4>
            <p className="text-gray-600">Explore our curated selection of seasonal flowers.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-medium text-lg mb-2">Gift Bouquets</h4>
            <p className="text-gray-600">Perfect arrangements for every occasion.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-medium text-lg mb-2">Monthly Subscriptions</h4>
            <p className="text-gray-600">Fresh flowers delivered to your door every month.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
