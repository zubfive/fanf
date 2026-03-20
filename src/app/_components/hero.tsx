"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.section
      ref={ref}
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{ height: "100vh", minHeight: "100vh" }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/hero/shutterstock_2502729023-min-1080x721.jpg)" }}
        />
        {/* Dark gradient overlay for luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/30 to-forest/70" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center"
      >
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-12 bg-gold/60" />
          <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
            Premium Floral Studio
          </span>
          <div className="h-px w-12 bg-gold/60" />
        </motion.div>

        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Fresh Flowers,
          <br />
          <span className="italic text-blush-light">Delivered with Love</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/75 leading-relaxed mb-10 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Experience the elegance of nature with our curated floral arrangements
          and bespoke event decoration services.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <button
            onClick={() =>
              document.getElementById("flowers")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 bg-gold hover:bg-gold-dark text-white text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Explore Collection
          </button>
          <button
            onClick={() =>
              document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 border border-white/30 text-white text-sm font-medium tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
          >
            Our Events
          </button>
        </motion.div>

        {/* Contact quick-actions */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <a
            href="tel:+919704069531"
            className="flex items-center gap-2 px-6 py-3 bg-white text-forest text-sm font-semibold hover:bg-gold hover:text-white transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
          >
            <FaPhone className="text-xs" />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/+919704069531"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp className="text-base" />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      </motion.div>


    </motion.section>
  );
}
