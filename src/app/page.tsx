"use client";

import { useEffect } from "react";
import ContactForm from "./_components/contact";
import Testimonials from "./_components/testimonials";
import HeroSection from "./_components/hero";
import OurProducts from "./_components/products";
import EventsSection from "./_components/events";
import EventsGrid from "./_components/events-grid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    document.title =
      "Ficus & Flowers | Premium Floral Arrangements & Events";
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-forest">
      <HeroSection />

      <div id="events">
        <EventsGrid />
      </div>

      <div id="flowers">
        <OurProducts />
      </div>

      <div>
        <EventsSection />
      </div>

      {/* Pushpa Feature Image */}
      <section className="relative overflow-hidden bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          className="w-full"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <Image
              src="https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/hero/pushpa.png"
              alt="Floral Arrangement"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[70vh] object-contain mx-auto"
            />
          </div>
        </motion.div>
      </section>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="contact">
        <ContactForm />
      </div>

      {/* Footer */}
      <footer className="bg-forest text-white">
        {/* Top divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-4 gap-10 md:gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <div className="mb-4">
                <Image
                  src="https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/logo/f&f-logo.png"
                  alt="Ficus & Flowers"
                  width={180}
                  height={60}
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                Bringing nature&apos;s finest beauty to your doorstep and special
                occasions since day one.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Home", "Flowers", "Events", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {item === "Home" ? "Home" : item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Fresh Arrangements",
                  "Event Decoration",
                  "Custom Bouquets",
                  "Wedding Florals",
                  "Corporate Events",
                ].map((item) => (
                  <li key={item}>
                    <span className="text-sm text-white/50">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: FaInstagram, label: "Instagram" },
                  { icon: FaFacebookF, label: "Facebook" },
                  { icon: FaPinterestP, label: "Pinterest" },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 hover:text-gold hover:border-gold/30 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-xs text-white/30 tracking-widest uppercase mb-1">
                  Location
                </p>
                <p className="text-sm text-white/50">
                  Aparna Serenity, Kompally
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Ficus & Flowers. All rights
              reserved.
            </p>
            <p className="text-xs text-white/20">
              Crafted with love in Hyderabad
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
