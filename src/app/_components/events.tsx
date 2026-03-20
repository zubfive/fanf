"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Flower, Sparkles, Utensils, Music, Camera, Wifi, Car, MapPin } from "lucide-react";

const eventServices = [
  {
    title: "Weddings",
    description: "Comprehensive wedding planning and decoration services to make your special day unforgettable.",
    icon: Flower,
    features: ["Bridal & Bridesmaid Bouquet", "Ceremony & Reception Decor", "Mandap Decoration", "Stage & Aisle Decor", "Table Centerpieces"],
  },
  {
    title: "Catering",
    description: "Delicious and diverse catering options for all types of events and cuisines.",
    icon: Utensils,
    features: ["Wedding & Reception Menus", "Corporate Catering", "Cocktail & Appetizers", "Dessert Stations", "Beverage Services"],
  },
  {
    title: "Corporate Events",
    description: "Professional event solutions for business meetings, conferences, and corporate celebrations.",
    icon: Users,
    features: ["Conference Room Setups", "Branded Decorations", "Stage & Backdrop Design", "Audio-Visual Support", "Networking Areas"],
  },
  {
    title: "Entertainment",
    description: "Complete entertainment solutions to keep your guests engaged and entertained.",
    icon: Music,
    features: ["Live Music & Bands", "DJ Services", "Dance Performances", "MC & Anchoring", "Photo Booth"],
  },
  {
    title: "Photography",
    description: "Professional documentation of your special moments with creative direction.",
    icon: Camera,
    features: ["Pre-Wedding Shoots", "Event Coverage", "Drone Photography", "Cinematic Videos", "Photo Albums"],
  },
  {
    title: "Special Occasions",
    description: "Custom solutions for birthdays, anniversaries, and milestone celebrations.",
    icon: Sparkles,
    features: ["Theme Development", "Venue Selection", "Invitation Design", "Event Coordination", "Gift Registry"],
  },
  {
    title: "Logistics",
    description: "Seamless event logistics and transportation solutions for a smooth experience.",
    icon: Car,
    features: ["Event Transportation", "Venue Selection", "Accommodation", "Parking & Valet", "Equipment Rentals"],
  },
  {
    title: "Technology",
    description: "Reliable event technology and internet solutions to keep your event connected.",
    icon: Wifi,
    features: ["Event Wi-Fi Solutions", "AV Equipment Rentals", "Live Streaming", "Event App Development", "Connectivity"],
  },
  {
    title: "Venue Management",
    description: "Expert venue selection and management services for the perfect event location.",
    icon: MapPin,
    features: ["Venue Selection", "Venue Management", "Catering & Beverages", "Accommodation", "Event Permits"],
  },
];

export default function EventsSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (document.querySelector('script[src="//www.instagram.com/embed.js"]')) return;
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-ivory">
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
            Full-Service
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-forest mt-4 mb-6">
            Event Management
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold/60" />
            <div className="h-px w-16 bg-gold/40" />
          </div>
          <p className="text-sage mt-6 max-w-xl mx-auto text-base md:text-lg font-light">
            From intimate gatherings to grand celebrations, we bring your vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
          {eventServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white rounded-sm p-5 md:p-8 hover:shadow-lg transition-all duration-500 border border-transparent hover:border-gold/20"
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-ivory rounded-full mb-4 md:mb-6 mx-auto group-hover:bg-blush-light transition-colors duration-500">
                <service.icon className="w-5 h-5 md:w-6 md:h-6 text-forest group-hover:text-gold transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-base md:text-xl font-medium text-forest text-center mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="hidden md:block text-sage text-sm text-center mb-5 font-light leading-relaxed">
                {service.description}
              </p>
              <ul className="hidden lg:block space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-sage/80">
                    <span className="w-1 h-1 bg-gold rounded-full mr-2.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Instagram Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-10">
            <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
              Follow Us
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-forest mt-4 mb-4">
              From Our Instagram
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gold/40" />
              <div className="w-2 h-2 rounded-full bg-gold/60" />
              <div className="h-px w-16 bg-gold/40" />
            </div>
          </div>
          <div className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/p/DV-wLJtD4Fu/?igsh=dmxlaGdzbmp0czFh"
              data-instgrm-version="14"
              style={{ maxWidth: "540px", width: "100%" }}
            />
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-forest rounded-sm p-10 md:p-16 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-gold/20 m-6" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-gold/20 m-6" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
              Let&apos;s Create Something Beautiful
            </span>
            <h3 className="font-serif text-2xl md:text-4xl font-medium text-white mt-4 mb-6">
              Ready to Plan Your Event?
            </h3>
            <p className="text-white/60 mb-8 font-light">
              Our team of experts is ready to help you create the perfect floral arrangements for your special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="px-8 py-3.5 bg-gold hover:bg-gold-dark text-white text-sm font-medium tracking-widest uppercase transition-all duration-300"
              >
                Contact Us
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-3.5 border border-white/20 text-white text-sm font-medium tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
