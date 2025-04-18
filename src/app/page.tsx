"use client"
import { useEffect } from "react";
import ContactForm from "./_components/contact";
import Testimonials from "./_components/testimonials";
import HeroSection from "./_components/hero";
import OurProducts from "./_components/products";
import EventsSection from "./_components/events";
import Navbar from "./_components/navbar";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    document.title = "Ficus and Flowers | Premium Floral Arrangements & Events";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      
      <HeroSection />
      
      <div id="flowers">
        <OurProducts />
      </div>
      
      
      <div id="events">
        <EventsSection />
      </div>
      

      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="contact">
        <ContactForm />
      </div>
      
      <footer className="bg-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Ficus and Flowers</h3>
              <p className="text-purple-100">
                Bringing nature&apos;s beauty to your doorstep and events.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Our Offerings</h4>
              <ul className="space-y-2 text-purple-100">
                <li>Fresh Flower Arrangements</li>
                <li>Event Decoration</li>
                <li>Custom Bouquets</li>
                <li>Corporate Events</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-purple-100 hover:text-white"
                >
                  Instagram
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-purple-100 hover:text-white"
                >
                  Facebook
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-purple-100 hover:text-white"
                >
                  Pinterest
                </motion.a>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-100"
          >
            <p>© {new Date().getFullYear()} Ficus and Flowers. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
