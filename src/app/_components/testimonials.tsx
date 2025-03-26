"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    { id: 1, text: "Absolutely love the flowers! They brighten up my home every week.", name: "Happy Customer" },
    { id: 2, text: "The best subscription ever! Fresh and unique floral arrangements.", name: "Floral Enthusiast" },
    { id: 3, text: "Highly recommend! The quality and fragrance are amazing.", name: "Satisfied Client" },
  ];

  return (
    <section className="py-20 bg-purple-100 px-10 overflow-hidden">
      <h2 className="text-4xl font-semibold text-center text-purple-800 mb-10">
        What Our Clients Say
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-6 w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }} // Moves left by half of the content width
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, // Slow smooth scrolling
          }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <Card
              key={index}
              className="p-6 w-80 bg-purple-200 rounded-3xl shadow-lg shadow-purple-300 border border-purple-300 flex-shrink-0"
            >
              {/* Image Placeholder */}
              <div className="w-full h-40 bg-purple-300 rounded-xl flex items-center justify-center">
                <Image
                  src={`/images/client${(index % 3) + 1}.jpeg`}
                  alt="Client"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full shadow-md border-4 border-purple-400"
                />
              </div>

              {/* Text Content */}
              <CardContent className="mt-5 text-center">
                <p className="text-purple-900 italic">
                  &ldquo;{item.text}&rdquo;
                </p>
                <h4 className="text-purple-700 font-bold mt-3">- {item.name}</h4>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
