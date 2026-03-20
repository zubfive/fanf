"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const eventThemes = [
  {
    id: 1,
    name: "Birthday",
    image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/events/birthday_new.jpg",
    slug: "birthday",
    subtitle: "Unforgettable Celebrations",
  },
  {
    id: 2,
    name: "Anniversary",
    image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/events/anniversary_new.jpg",
    slug: "anniversary",
    subtitle: "Timeless Elegance",
  },
  {
    id: 3,
    name: "Wedding",
    image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/events/wedding_new.jpg",
    slug: "wedding",
    subtitle: "Your Perfect Day",
  },
  {
    id: 5,
    name: "Romance",
    image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/events/romance_new.jpg",
    slug: "romance",
    subtitle: "Expressions of Love",
  },
  {
    id: 6,
    name: "Celebration",
    image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/events/celebration_new.jpg",
    slug: "celebration",
    subtitle: "Every Moment Matters",
  },
];

export default function EventsGrid() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
            Occasions
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-forest mt-4 mb-6">
            Flowers for Every Moment
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold/60" />
            <div className="h-px w-16 bg-gold/40" />
          </div>
          <p className="text-sage mt-6 max-w-xl mx-auto text-base md:text-lg font-light">
            Discover beautiful floral arrangements crafted for life&apos;s most precious occasions
          </p>
        </motion.div>

        {/* Bento-style Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {eventThemes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-sm ${
                index === 0 || index === 3
                  ? "lg:row-span-2 aspect-[3/4] lg:aspect-auto"
                  : "aspect-[4/3]"
              }`}
            >
              <Link href={`/events/${theme.slug}`} className="block h-full w-full">
                <div className="relative h-full w-full">
                  <Image
                    src={theme.image}
                    alt={theme.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index <= 2}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent transition-all duration-500 group-hover:from-forest/80" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-10">
                    <div className="transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                      <span className="text-gold text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">
                        {theme.subtitle}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-medium text-white mt-1">
                        {theme.name}
                      </h3>
                      <div className="h-px w-8 bg-gold/60 mt-3 transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
