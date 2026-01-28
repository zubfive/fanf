"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flower, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./hero.module.css";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

const images = [
  "/images/hero3.png",

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
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
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
            scale: 0.5 + Math.random() * 0.5,
          }}
          animate={{
            y: [0, -100, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          <Flower className="h-8 w-8 text-white/20" />
        </motion.div>,
      );
    }
    return flowers;
  };

  return (
    <motion.section
      ref={ref}
      className={`relative flex w-full flex-col items-center justify-center overflow-hidden text-center ${styles.heroSection}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        height: "100vh",
        minHeight: "100vh",
        width: "100vw",
        maxWidth: "100vw",
        overflowX: "hidden",
        marginTop: 0,
        paddingTop: 0,
      }}
    >
      {/* Carousel Container - Full Screen */}
      <div className="absolute inset-0 h-full w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
            }}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? "100%" : "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? "-100%" : "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on sm and up */}
      {/* <div className="hidden sm:flex absolute inset-0 items-center justify-between px-2 sm:px-4 z-20 pointer-events-none">
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
       */}
      {/* Mobile Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2 sm:hidden">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
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
          images[currentIndex] === "/images/hero3.png"
            ? styles.visible
            : styles.hidden
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 hidden lg:block"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
          >
            Call or WhatsApp: +91 97040 69531
          </motion.div>
        </motion.div>

        <motion.h1
          className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Fresh Flowers, Delivered to Your Door
        </motion.h1>

        <motion.p
          className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/90 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Experience the elegance of nature with our tailor-made floral
          subscriptions and event management services.
        </motion.p>

        {/* Contact Card - Mobile Friendly */}
        <motion.div
          className="w-full max-w-sm mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="w-full py-4 px-3 bg-purple-800/90 backdrop-blur-sm rounded-lg border border-purple-600">
            <p className="text-purple-200 text-sm mb-2">Call or message us directly:</p>
            <h3 className="text-2xl font-bold text-white mb-3">+91 97040 69531</h3>
            
            <div className="flex space-x-3 mt-2">
              {/* Call Button */}
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919704069531" 
                className="flex-1 flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                <FaPhone className="text-white" />
                <span>Call Now</span>
              </motion.a>
              
              {/* WhatsApp Button */}
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/+919704069531" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                <FaWhatsapp className="text-white" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Main Action Buttons - Desktop: Centered inline, Mobile: Fixed bottom of hero section */}
        {/* Desktop version - hidden on mobile/tablet */}
        <motion.div
          className="mt-4 hidden lg:flex flex-row justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="rounded-full bg-purple-600 px-8 py-6 text-lg text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl"
              onClick={() =>
                document
                  .getElementById("flowers")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Flowers
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="rounded-full bg-white px-8 py-6 text-lg text-purple-600 shadow-lg transition-all duration-300 hover:bg-purple-50 hover:shadow-xl"
              onClick={() =>
                document
                  .getElementById("events")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Events
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile/Tablet version - Bottom of hero section, full width */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 lg:hidden flex w-full z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Button
          className="flex-1 rounded-none bg-purple-600 py-5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 active:bg-purple-800"
          onClick={() =>
            document
              .getElementById("flowers")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore Flowers
        </Button>
        <Button
          className="flex-1 rounded-none bg-white py-5 text-base font-semibold text-purple-600 shadow-lg transition-all duration-300 hover:bg-purple-50 active:bg-purple-100 border-l border-purple-200"
          onClick={() =>
            document
              .getElementById("events")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Book Events
        </Button>
      </motion.div>
    </motion.section>
  );
}
