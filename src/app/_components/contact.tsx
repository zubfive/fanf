"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

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

  const createQuestion = api.contact.create.useMutation({
    onSuccess: async () => {
      alert("Question sent successfully!");
      reset();
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Submitted:", data);
    createQuestion.mutate(data);
  };

  return (
    <div className="max-w-full mx-auto flex flex-col md:flex-row bg-white shadow-md overflow-hidden">
      
      {/* Contact Details (Left Side) */}
      <div className="w-full md:w-1/3 bg-purple-900 text-white p-8 flex flex-col">
        {/* Title at the top */}
        <h2 className="text-2xl font-bold mb-6 self-start">Contact Us</h2>

        {/* Centered Contact Details */}
        <div className="flex flex-col items-start justify-center flex-grow space-y-4">
          <p className="text-lg text-left">Have any questions? Feel free to reach out!</p>

          {/* WhatsApp Contact */}
          <div className="flex items-center space-x-2">
            <FaWhatsapp className="text-2xl text-green-400" />
            <a 
              href="https://wa.me/+919704069531" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:underline"
            >
              +91 97040 69531
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-2xl text-white" />
            <p className="text-lg font-semibold">Aparna Serinity S-505, Kompally</p>
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
