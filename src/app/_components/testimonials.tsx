"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Absolutely love the flowers! They brighten up my home every week. The quality and freshness are unmatched.",
    name: "Priya Sharma",
    role: "Loyal Customer",
    image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/clients/client1.jpeg",
  },
  {
    id: 2,
    text: "The best flower arrangements I have ever seen. Fresh, unique, and always delivered on time. Highly recommended!",
    name: "Rajesh Kumar",
    role: "Event Client",
    image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/clients/client2.jpeg",
  },
  {
    id: 3,
    text: "Ficus & Flowers transformed our wedding venue into a dreamscape. The attention to detail was extraordinary.",
    name: "Ananya Reddy",
    role: "Wedding Client",
    image: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/clients/client3.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
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
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-forest mt-4 mb-6">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold/60" />
            <div className="h-px w-16 bg-gold/40" />
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-ivory p-8 md:p-10 rounded-sm group hover:shadow-lg transition-all duration-500 border border-transparent hover:border-gold/10"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold/30 mb-6" />

              {/* Quote text */}
              <p className="text-forest/80 text-base md:text-lg leading-relaxed mb-8 font-light italic">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-forest">
                    {item.name}
                  </h4>
                  <p className="text-xs text-sage">{item.role}</p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/10 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
