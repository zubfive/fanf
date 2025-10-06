"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flower, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./hero.module.css";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

const images = [
  "/images/hero3.png",
  "/images/hero/pushpa.png"
  // Add more image paths here as you add them
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Window resize handler
  useEffect(() => {
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
      className={`relative w-full flex flex-col justify-start items-center text-center px-6 sm:px-8 overflow-hidden bg-purple-50 ${styles.heroSection}`}
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      style={{
        height: '100vh',
        minHeight: '100vh',
        maxWidth: '100vw',
        overflowX: 'hidden',
        marginTop: '3rem',
        paddingTop: '3rem' // Height of the navbar
      }}
    >
      {/* Carousel Container */}
      <div className="absolute inset-0 w-full h-full px-4 sm:px-6 md:px-8">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
              borderRadius: '1rem',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: 'calc(100% - 2rem)',
              width: 'calc(100% - 2rem)',
              margin: '1rem',
              maxWidth: '100%'
            }}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? '-100%' : '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on sm and up */}
      <div className="hidden sm:flex absolute inset-0 items-center justify-between px-2 sm:px-4 z-20 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="p-1.5 sm:p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-1.5 sm:p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>
      
      {/* Mobile Navigation Dots */}
      <div className="sm:hidden absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>


      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y, opacity }}
      >
        {renderFlowers()}
      </motion.div>

      {/* Only show content over hero3.jpg */}
      <div 
        className={`${styles.heroContent} ${
          images[currentIndex] === "/images/hero3.png" ? styles.visible : styles.hidden
        }`}
      >
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
    </motion.section>
  );
}