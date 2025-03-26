"use client"
import { useEffect } from "react";
import ContactForm from "./_components/contact";
import Testimonials from "./_components/testimonials";
import HeroSection from "./_components/hero";
import ServicesSection from "./_components/service";
import OurProducts from "./_components/products";

export default function Home() {
  useEffect(() => {
    document.title = "Ficus and Flowers | Elegant Floral Subscriptions";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <HeroSection/>

      <ServicesSection/>

      <OurProducts/>

     <Testimonials/>

      {/* Contact Us Section */}
      <ContactForm/>

      {/* Footer */}
      <footer className="bg-purple-100 text-purple-800 py-6 text-center">
        <p>© {new Date().getFullYear()} Ficus and Flowers. All rights reserved.</p>
      </footer>
    </div>
  );
}
