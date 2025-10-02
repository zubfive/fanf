"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const [showSuccess, setShowSuccess] = useState(false);

  const createQuestion = api.contact.create.useMutation({
    onSuccess: async () => {
      setShowSuccess(true);
      reset();
      setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Submitted:", data);
    createQuestion.mutate(data);
  };

  return (
    <div className="relative max-w-full mx-auto flex flex-col md:flex-row bg-white shadow-md overflow-hidden">
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl"
            >
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-4">
                  <FaCheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Successfully Submitted</h3>
                <p className="text-gray-600 mb-6">Your query has been received. We&apos;ll get back to you soon!</p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Contact Details (Left Side) */}
      <div className="w-full md:w-1/3 bg-purple-900 text-white p-8 flex flex-col">
        {/* Title at the top */}
        <h2 className="text-2xl font-bold mb-6 self-start">Contact Us</h2>

        {/* Centered Contact Details */}
        <div className="flex flex-col items-start justify-center flex-grow space-y-6">
          <p className="text-lg text-left">Have any questions? Feel free to reach out!</p>

          {/* Phone Number Highlight Section */}
          <div className="w-full py-4 px-3 bg-purple-800 rounded-lg border border-purple-600">
            <p className="text-purple-200 text-sm mb-2">Call or message us directly:</p>
            <h3 className="text-2xl font-bold text-white mb-3">+91 97040 69531</h3>
            
            <div className="flex space-x-3 mt-2">
              {/* Call Button */}
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919704069531" 
                className="flex-1 flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                <FaPhone className="text-white" />
                <span>Call Now</span>
              </motion.a>
              
              {/* WhatsApp Button */}
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/+919704069531" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                <FaWhatsapp className="text-white" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-2xl text-white" />
            <p className="text-lg font-semibold">Aparna Serenity, Kompally</p>
          </div>
        </div>
      </div>

      {/* Contact Form (Right Side) */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Ask a Question</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Name Input */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-purple-300"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              {...register("email", { 
                required: "Email is required", 
                pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" } 
              })}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-purple-300"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Phone Number Input */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              {...register("phoneNumber", { 
                required: "Phone number is required", 
                pattern: { value: /^[0-9+-]+$/, message: "Invalid phone number" },
                minLength: { value: 10, message: "Phone number must be at least 10 digits" },
                maxLength: { value: 15, message: "Phone number must be at most 15 digits" }
              })}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-purple-300"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
          </div>

          {/* Question Input */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Your Question</label>
            <textarea
              {...register("question", { required: "Please enter your question" })}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-purple-300"
              rows={4}
            ></textarea>
            {errors.question && <p className="text-red-500 text-sm">{errors.question.message}</p>}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
