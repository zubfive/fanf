"use client"
import { useEffect } from "react";
import ContactForm from "./_components/contact";
import Testimonials from "./_components/testimonials";
import HeroSection from "./_components/hero";
import OurProducts from "./_components/products";
import EventsSection from "./_components/events";
import EventsGrid from "./_components/events-grid";
import Navbar from "./_components/navbar";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    document.title = "Ficus and Flowers | Premium Floral Arrangements & Events";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* <Navbar /> */}
      
      <HeroSection />
      
      <div id="flowers">
        <OurProducts />
      </div>
      
      
      <div id="events">
        <EventsGrid />
        <EventsSection />
    
      </div>
      
      
      {/* Full Width Image Section */}
      <div className="w-full min-h-[50vh] relative overflow-hidden my-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true, margin: '0px 0px -50% 0px' }}
          className="w-full h-full"
        >
          <img
            src="/images/hero/pushpa.png"
            alt="Floral Arrangement"
            className="w-full h-auto max-h-[80vh] object-contain mx-auto"
          />
        </motion.div>
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="contact">
        <ContactForm />
      </div>
      
      <footer className="bg-purple-800 text-white py-12">
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
                <li>
                  <a href="#flowers" className="hover:text-white">Fresh Flower Arrangements</a>
                </li>
                <li>
                  <a href="#events" className="hover:text-white">Event Decoration</a>
                </li>
                <li>
                  <a href="#flowers" className="hover:text-white">Custom Bouquets</a>
                </li>
                <li>
                  <a href="#events" className="hover:text-white">Corporate Events</a>
                </li>
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
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-purple-100 hover:text-white cursor-pointer"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Instagram
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-purple-100 hover:text-white cursor-pointer"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Facebook
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-purple-100 hover:text-white cursor-pointer"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Pinterest
                </motion.div>
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
