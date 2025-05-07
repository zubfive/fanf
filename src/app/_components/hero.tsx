"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flower } from "lucide-react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    // Only access window in client-side
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Set initial size
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create an array of flower elements with proper typing
  const renderFlowers = () => {
    const flowers = [];
    for (let i = 0; i < 20; i++) {
      flowers.push(
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            rotate: Math.random() * 360,
            scale: 0.5 + Math.random() * 0.5
          }}
          animate={{
            y: [0, -100, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        >
          <Flower className="w-8 h-8 text-white/20" />
        </motion.div>
      );
    }
    return flowers;
  };

  return (
    <motion.section 
      ref={ref}
      className="relative h-screen flex flex-col justify-center items-center text-center px-5 bg-green-100 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/hero3.jpg')" }}
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      {/* Animated Background Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Floating Flowers Animation */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y, opacity }}
      >
        {renderFlowers()}
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
          >
            Call or WhatsApp: +91 97040 69531
          </motion.div>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Fresh Flowers, Delivered to Your Door
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Experience the elegance of nature with our tailor-made floral subscriptions and event management services.
        </motion.p>
        
        {/* Main Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-purple-600 text-white text-lg px-8 py-6 rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('flowers')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Flowers
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-white text-purple-600 text-lg px-8 py-6 rounded-full hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Events
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Contact Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <FaPhone className="text-white" />
            <span>Contact Us</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-green-600/80 backdrop-blur-sm hover:bg-green-600/90 text-white px-4 py-2 rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <FaWhatsapp className="text-white" />
            <span>Message Us</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      {/* <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </motion.div> */}
    </motion.section>
  );
}
