"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Cake, Heart, HeartPulse, Flower2, Sparkles, Gavel, GraduationCap, Baby, Trophy, Palette, Briefcase, CalendarCheck } from 'lucide-react';

const eventThemes = [
  {
    id: 1,
    name: 'Birthday',
    image: '/images/events/birthday.png',
    slug: 'birthday',
    link: '/products?occasion=birthday',
    description: 'Make their special day unforgettable with our stunning birthday flower arrangements. Perfect for any age and style.'
  },
  {
    id: 2,
    name: 'Anniversary',
    image: '/images/events/anniversary.jpg',
    slug: 'anniversary',
    link: '/products?occasion=anniversary',
    description: 'Celebrate love and togetherness with our romantic anniversary flower arrangements.'
  },
  {
    id: 3,
    name: 'Wedding',
    image: '/images/events/wedding.jpg',
    slug: 'wedding',
    link: '/products?occasion=wedding',
    description: 'Make your special day perfect with our exquisite wedding flower arrangements and decorations.'
  },
  {
    id: 4,
    name: 'Diwali',
    image: '/images/events/diwali.png',
    slug: 'diwali',
    link: '/products?occasion=diwali',
    description: 'Celebrate the festival of lights with our beautiful Diwali home decor and flower arrangements. We provide everything you need for a perfect Diwali celebration.'
  },
  {
    id: 5,
    name: 'Romance',
    image: '/images/events/romance.jpg',
    slug: 'romance',
    link: '/products?occasion=romance',
    description: 'Express your love with our romantic flower arrangements and surprise your special someone.'
  },
  {
    id: 6,
    name: 'Celebration',
    image: '/images/events/celebration.png',
    slug: 'celebration',
    link: '/products?occasion=celebration',
    description: 'Make any celebration special with our vibrant and cheerful flower arrangements.'
  },
  {
    id: 7,
    name: 'Thank You',
    image: '/images/events/thankyou.jpg',
    slug: 'thank-you',
    link: '/products?occasion=thankyou',
    description: 'Show your appreciation with our beautiful thank you flower arrangements.'
  },
  {
    id: 8,
    name: 'Housewarming',
    image: '/images/events/housewarming.jpg',
    link: '/products?occasion=housewarming',
    description: 'Welcome someone to their new home with our beautiful housewarming flower arrangements.'
  }
];

export default function EventsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Skeleton loader component
  const SkeletonCard = () => (
    <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-48 w-full bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 flex items-end p-4">
          <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <div className="p-4">
        <div className="h-4 w-3/4 bg-gray-200 rounded-full mb-2"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-800">Event Themes</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            Array(8).fill(0).map((_, index) => (
              <SkeletonCard key={`skeleton-${index}`} />
            ))
          ) : (eventThemes.map((theme) => (
            <motion.div
              key={theme.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              style={{
                backdropFilter: 'blur(10px)',
              }}
            >
              <Link href={`/events/${theme.slug}`} className="block group">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 flex items-end p-4">
                    <div className="flex items-center gap-2 text-white">
                      {theme.slug === 'birthday' && <Cake className="w-6 h-6 text-pink-400" />}
                      {theme.slug === 'anniversary' && <Heart className="w-6 h-6 text-red-400" />}
                      {theme.slug === 'wedding' && <Sparkles className="w-6 h-6 text-yellow-300" />}
                      {theme.slug === 'diwali' && <Sparkles className="w-6 h-6 text-yellow-400" />}
                      {theme.slug === 'romance' && <Heart className="w-6 h-6 text-red-500" />}
                      {theme.slug === 'graduation' && <GraduationCap className="w-6 h-6 text-purple-400" />}
                      {theme.slug === 'baby-shower' && <Baby className="w-6 h-6 text-blue-300" />}
                      {theme.slug === 'congratulations' && <Trophy className="w-6 h-6 text-yellow-400" />}
                      {theme.slug === 'get-well' && <Flower2 className="w-6 h-6 text-green-400" />}
                      {theme.slug === 'thank-you' && <Heart className="w-6 h-6 text-pink-400" />}
                      {theme.slug === 'corporate' && <Briefcase className="w-6 h-6 text-gray-400" />}
                      {theme.slug === 'special-occasion' && <CalendarCheck className="w-6 h-6 text-indigo-400" />}
                      <h3 className="text-xl font-semibold">{theme.name}</h3>
                    </div>
                  </div>
                  <Image
                    src={theme.image}
                    alt={theme.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>
              </Link>
            </motion.div>
          )))}
        </div>
      </div>
    </div>
  );
}
