"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const subscriptionPlans = ["Home", "Restaurants", "Hotels"];

export default function ServicesSection() {
  return (
    <section className="py-20 px-10 bg-purple-100">
      <h2 className="text-4xl font-semibold text-center text-purple-800 mb-10">
        Our Subscription Plans
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {subscriptionPlans.map((type, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-xl border border-purple-300 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold text-purple-700">{type} Plan</h3>
            <p className="text-purple-600 mt-3">
              Fresh flowers delivered weekly to enhance your space.
            </p>
            <Button className="mt-4 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700">
              Subscribe
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
