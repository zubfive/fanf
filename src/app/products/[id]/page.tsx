"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star, Truck, Shield, CreditCard, Calendar, Clock } from "lucide-react";
import { useParams } from "next/navigation";
import { format } from "date-fns";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  longDescription: string;
  features: string[];
  deliveryInfo: string;
}

// Time slots (you can update these times later)
const TIME_SLOTS = [
  { id: "morning", label: "Morning (9:00 AM - 12:00 PM)" },
  { id: "afternoon", label: "Afternoon (2:00 PM - 5:00 PM)" }
];

const products: Product[] = [
  {
    id: 1,
    name: "Rose Bouquet",
    description: "A fresh collection of premium red roses.",
    image: "/images/products/rose-boquet.jpeg",
    price: 49.99,
    rating: 4.8,
    reviews: 128,
    category: "Bouquets",
    longDescription: "Our premium rose bouquet features hand-picked, fresh red roses arranged in a stunning display. Each rose is carefully selected for its perfect bloom and long-lasting freshness.",
    features: [
      "12 premium red roses",
      "Fresh greenery accents",
      "Long-lasting freshness",
      "Hand-tied arrangement",
      "Free delivery"
    ],
    deliveryInfo: "Free delivery on orders over $50. Next-day delivery available."
  },
  // Add other products with similar structure
];

export default function ProductPage() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const product = products.find(p => p.id === Number(params.id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Product not found</p>
      </div>
    );
  }

  const calculatePrice = () => {
    return product.price * quantity;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setSelectedDate(date);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-lg"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-gray-700">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-gray-600">{product.longDescription}</p>

            {/* Features */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery Date and Time Selection */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Select Delivery Date & Time</h3>
              
              {/* Date Selection */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700">
                  <Calendar className="w-5 h-5" />
                  Delivery Date
                </label>
                <input
                  type="date"
                  min={format(new Date(), 'yyyy-MM-dd')}
                  onChange={handleDateChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {selectedDate && (
                  <p className="text-sm text-gray-600">
                    Selected date: {format(selectedDate, 'MMMM d, yyyy')}
                  </p>
                )}
              </div>

              {/* Time Slot Selection */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5" />
                  Delivery Time
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => setSelectedTimeSlot(slot.id)}
                      className={`p-3 rounded-lg border transition-colors ${
                        selectedTimeSlot === slot.id
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-200 hover:border-purple-200"
                      }`}
                    >
                      <span className="text-sm font-medium text-gray-900">{slot.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  >
                    +
                  </button>
                </div>
                <div className="text-xl font-bold text-purple-600">
                  ${calculatePrice().toFixed(2)}
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-purple-600 text-white hover:bg-purple-700"
                  disabled={!selectedDate || !selectedTimeSlot}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  className="flex-1 bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50"
                  disabled={!selectedDate || !selectedTimeSlot}
                >
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Truck className="w-5 h-5" />
                <span>{product.deliveryInfo}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="w-5 h-5" />
                <span>Secure payment with SSL encryption</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CreditCard className="w-5 h-5" />
                <span>Multiple payment options available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 