"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flower, Calendar, Building2, Home, Utensils, Hotel } from "lucide-react";

const services = [
  {
    title: "Home Subscriptions",
    description: "Weekly fresh flower deliveries to brighten your living space. Customizable arrangements based on your preferences.",
    icon: Home,
    features: ["Weekly Deliveries", "Custom Arrangements", "Flexible Scheduling"],
    price: "From $49/week"
  },
  {
    title: "Restaurant & Cafe",
    description: "Elevate your dining experience with our premium floral arrangements. Perfect for creating an inviting atmosphere.",
    icon: Utensils,
    features: ["Weekly Updates", "Seasonal Designs", "Bulk Discounts"],
    price: "From $99/week"
  },
  {
    title: "Hotel & Venue",
    description: "Professional floral services for hotels and event venues. Large-scale arrangements and regular maintenance.",
    icon: Hotel,
    features: ["Daily Maintenance", "Event Support", "Custom Designs"],
    price: "Custom Quote"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Choose from our range of floral services designed to meet your specific needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-purple-700 text-center mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-purple-600">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <p className="text-xl font-semibold text-purple-900 mb-4">
                  {service.price}
                </p>
                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300">
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-purple-700 mb-6">
            We offer personalized floral services for special events and unique requirements
          </p>
          <Button className="bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
