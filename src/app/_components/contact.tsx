"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "@/trpc/react";
import { FaMapMarkerAlt, FaWhatsapp, FaPhone, FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type Question = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  question: string;
};

type ContactFormData = Omit<Question, "id">;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const [showSuccess, setShowSuccess] = useState(false);

  const createQuestion = api.contact.create.useMutation({
    onSuccess: async () => {
      setShowSuccess(true);
      reset();
      setTimeout(() => setShowSuccess(false), 3000);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    createQuestion.mutate(data);
  };

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
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-forest mt-4 mb-6">
            Let&apos;s Create Together
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold/60" />
            <div className="h-px w-16 bg-gold/40" />
          </div>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid md:grid-cols-5 gap-0 bg-white rounded-sm overflow-hidden shadow-lg">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-forest text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-48 h-48 border-t border-r border-gold/10 m-8" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-gold/10 m-8" />

            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-2">
                Contact Us
              </h3>
              <p className="text-white/50 text-sm font-light mb-10">
                We&apos;d love to hear from you
              </p>

              {/* Phone highlight */}
              <div className="mb-8">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">
                  Call or message us
                </p>
                <h4 className="text-2xl md:text-3xl font-serif font-medium text-white mb-4">
                  +91 97040 69531
                </h4>
                <div className="flex gap-3">
                  <a
                    href="tel:+919704069531"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm transition-colors duration-300 rounded-sm"
                  >
                    <FaPhone className="text-xs" />
                    <span>Call</span>
                  </a>
                  <a
                    href="https://wa.me/+919704069531"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm transition-colors duration-300 rounded-sm"
                  >
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">Aparna Serenity, Kompally</p>
                  <p className="text-white/40 text-xs mt-1">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {/* Bottom decorative text */}
            <p className="relative z-10 text-white/20 text-xs tracking-widest uppercase mt-10">
              Ficus & Flowers
            </p>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3 p-8 md:p-12"
          >
            <h3 className="font-serif text-xl md:text-2xl font-medium text-forest mb-8">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-xs text-sage tracking-widest uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-0 py-3 border-0 border-b border-ivory-dark bg-transparent text-forest placeholder-sage/40 focus:outline-none focus:border-gold transition-colors text-sm"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs text-sage tracking-widest uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-0 py-3 border-0 border-b border-ivory-dark bg-transparent text-forest placeholder-sage/40 focus:outline-none focus:border-gold transition-colors text-sm"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs text-sage tracking-widest uppercase mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: { value: /^[0-9+-]+$/, message: "Invalid phone number" },
                    minLength: { value: 10, message: "Must be at least 10 digits" },
                    maxLength: { value: 15, message: "Must be at most 15 digits" },
                  })}
                  className="w-full px-0 py-3 border-0 border-b border-ivory-dark bg-transparent text-forest placeholder-sage/40 focus:outline-none focus:border-gold transition-colors text-sm"
                  placeholder="+91 XXXXX XXXXX"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs text-sage tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  {...register("question", { required: "Please enter your message" })}
                  className="w-full px-0 py-3 border-0 border-b border-ivory-dark bg-transparent text-forest placeholder-sage/40 focus:outline-none focus:border-gold transition-colors text-sm resize-none"
                  rows={3}
                  placeholder="Tell us about your occasion..."
                />
                {errors.question && (
                  <p className="text-red-500 text-xs mt-1">{errors.question.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-forest hover:bg-forest-light text-white text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:shadow-lg mt-4"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 bg-forest/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-sm p-8 w-full max-w-md shadow-2xl text-center"
            >
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-ivory mb-6">
                <FaCheckCircle className="h-8 w-8 text-forest" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-forest mb-2">
                Thank You
              </h3>
              <p className="text-sage mb-8 font-light">
                Your message has been received. We&apos;ll get back to you soon!
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full py-3 bg-forest text-white text-sm font-medium tracking-widest uppercase hover:bg-forest-light transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
