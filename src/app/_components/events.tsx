"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Flower, Sparkles, Utensils, Music, Camera, Calendar, Gift, Wifi, Car, MapPin } from "lucide-react";

const eventServices = [
  {
    title: "Weddings",
    description: "Comprehensive wedding planning and decoration services to make your special day unforgettable.",
    icon: Flower,
    features: [
      "Bridal & Bridesmaid Bouquet",
      "Ceremony & Reception Decor",
      "Mandap Decoration",
      "Stage & Aisle Decor",
      "Table Centerpieces"
    ]
  },
  {
    title: "Catering Services",
    description: "Delicious and diverse catering options for all types of events and cuisines.",
    icon: Utensils,
    features: [
      "Wedding & Reception Menus",
      "Corporate Catering",
      "Cocktail & Appetizers",
      "Dessert Stations",
      "Beverage Services"
    ]
  },
  {
    title: "Corporate Events",
    description: "Professional event solutions for business meetings, conferences, and corporate celebrations.",
    icon: Users,
    features: [
      "Conference Room Setups",
      "Branded Decorations",
      "Stage & Backdrop Design",
      "Audio-Visual Support",
      "Networking Areas"
    ]
  },
  {
    title: "Entertainment",
    description: "Complete entertainment solutions to keep your guests engaged and entertained.",
    icon: Music,
    features: [
      "Live Music & Bands",
      "DJ Services",
      "Dance Performances",
      "MC & Anchoring",
      "Photo Booth"
    ]
  },
  {
    title: "Photography & Videography",
    description: "Professional documentation of your special moments with creative direction.",
    icon: Camera,
    features: [
      "Pre-Wedding Shoots",
      "Event Coverage",
      "Drone Photography",
      "Cinematic Videos",
      "Photo Albums"
    ]
  },
  {
    title: "Special Occasions",
    description: "Custom solutions for birthdays, anniversaries, and milestone celebrations.",
    icon: Sparkles,
    features: [
      "Theme Development",
      "Venue Selection",
      "Invitation Design",
      "Event Coordination",
      "Gift Registry"
    ]
  },
  {
    title: "Logistics & Transportation",
    description: "Seamless event logistics and transportation solutions to ensure a smooth event experience.",
    icon: Car,
    features: [
      "Event Transportation",
      "Venue Selection",
      "Accommodation Arrangements",
      "Parking & Valet Services",
      "Event Equipment Rentals"
    ]
  },
  {
    title: "Technology & Internet",
    description: "Reliable event technology and internet solutions to keep your event connected.",
    icon: Wifi,
    features: [
      "Event Wi-Fi Solutions",
      "Audio-Visual Equipment Rentals",
      "Live Streaming Services",
      "Event App Development",
      "Internet Connectivity"
    ]
  },
  {
    title: "Venue Selection & Management",
    description: "Expert venue selection and management services to ensure a perfect event location.",
    icon: MapPin,
    features: [
      "Venue Selection",
      "Venue Management",
      "Catering & Beverage Services",
      "Accommodation Arrangements",
      "Event Permits & Licenses"
    ]
  }
];

export default function EventsSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Event Management Services
          </h2>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Let us transform your events with our professional floral arrangements and decor
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {eventServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-purple-50 rounded-2xl p-8 hover:bg-purple-100 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 mx-auto shadow-md">
                <service.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-purple-700 text-center mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-purple-600">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-purple-900 rounded-3xl p-12 text-center text-white"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Plan Your Event?
            </h3>
            <p className="text-lg text-purple-100 mb-8">
              Our team of experts is ready to help you create the perfect floral arrangements for your special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-purple-900 hover:bg-purple-100"
                onClick={scrollToContact}
              >
                Contact Us
              </Button>
              <Button 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10"
                onClick={scrollToContact}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 