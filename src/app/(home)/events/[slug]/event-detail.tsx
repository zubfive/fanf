'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { api } from '@/trpc/react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart, Heart, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

interface EventOption {
  title: string;
  description: string;
  features: string[];
  image?: string;
}

interface EventDetailProps {
  event: {
    id: number;
    name: string;
    slug: string;
    image: string;
    description: string;
    services: string[];
    organizationOptions: EventOption[];
  };
}

export default function EventDetail({ event }: EventDetailProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const createEvent = api.contact.createEvent.useMutation({
    onSuccess: () => {
      toast.success('Event booking submitted successfully!');
      setIsModalOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: ''
      });
      router.refresh();
    },
    onError: (error) => {
      toast.error('Failed to submit booking. Please try again.');
      console.error('Error submitting event:', error);
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare the event data
    const eventData = {
      name: formData.name,
      slug: `${event.slug}-${Date.now()}`, // Create a unique slug
      image: event.image,
      description: formData.message || 'No additional details provided',
      services: JSON.stringify(event.services), // Convert array to string for storage
      phone: formData.phone, // Store phone in its own column
      organizationOptions: JSON.stringify({
        contact: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventDate: formData.date
        }
      })
    };

    // Submit the event data
    createEvent.mutate(eventData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{event.name}</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-12">{event.description}</p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            {/* Services Section */}
            <div className="text-center mb-12">
              <div className="inline-block mb-2 px-4 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                What We Offer
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our {event.name} Services</h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {event.services.map((service, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full">
                        <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{service}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-6 px-10 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Book Now
              </Button>
              <Button 
                variant="outline" 
                className="py-6 px-10 text-lg font-medium border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
              >
                <Heart className="mr-2 h-5 w-5" />
                Save for Later
              </Button>
            </div>

        {/* Section 2: Event Details */}
        <section>

            {/* Booking Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">Book {event.name}</h2>
                      <button 
                        onClick={() => setIsModalOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name">Full Name *</label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email">Email *</label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="john@example.com"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="phone">Phone Number *</label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="date">Event Date *</label>
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        
                        <div className="md:col-span-2 space-y-2">
                          <label htmlFor="eventType">Event Type</label>
                          <Input
                            id="eventType"
                            name="eventType"
                            value={event.name}
                            readOnly
                            className="bg-gray-100"
                          />
                        </div>
                        
                        <div className="md:col-span-2 space-y-2">
                          <label htmlFor="message">Additional Details</label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us more about your event..."
                            rows={4}
                          />
                        </div>
                      </div>
                      
                      <div className="pt-4 flex justify-end space-x-3">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setIsModalOpen(false)}
                          disabled={createEvent.isPending}
                        >
                          Cancel
                        </Button>
                        <Button 
                          type="submit" 
                          className="bg-purple-600 hover:bg-purple-700"
                          disabled={createEvent.isPending}
                        >
                          {createEvent.isPending ? 'Submitting...' : 'Submit Booking'}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-purple-50 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-900 text-center mb-4">How We Can Organize Your {event.name}</h2>
                <p className="text-lg text-purple-700 text-center max-w-3xl mx-auto mb-12">Choose the perfect package for your special day with our expert planning services</p>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {event.organizationOptions.map((option, index) => {
                    const isPremium = index === 1; // Assuming the second package is premium
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative rounded-2xl p-8 transition-all duration-300 ${
                          isPremium 
                            ? 'bg-white text-purple-900 shadow-lg border-2 border-purple-500 transform scale-[1.02]' 
                            : 'bg-white text-purple-900 border border-purple-100 hover:shadow-md hover:border-purple-200'
                        }`}
                      >
                        {isPremium && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-purple-900 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                            MOST POPULAR
                          </div>
                        )}
                        
                        <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 mx-auto shadow-md">
                          <svg 
                            className={`w-8 h-8 ${isPremium ? 'text-purple-600' : 'text-purple-600'}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d={index === 0 ? "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" : "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"} 
                            />
                          </svg>
                        </div>
                        
                        <h3 className={`text-2xl font-bold text-center mb-3 ${isPremium ? 'text-purple-900' : 'text-purple-900'}`}>
                          {option.title}
                        </h3>
                        
                        <p className={`text-center mb-6 ${isPremium ? 'text-purple-700' : 'text-purple-700'}`}>
                          {option.description}
                        </p>
                        
                        <ul className="space-y-3 mb-8">
                          {option.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className={`w-2 h-2 rounded-full mt-2 mr-2 flex-shrink-0 ${isPremium ? 'bg-purple-400' : 'bg-purple-400'}`}></span>
                              <span className={isPremium ? 'text-purple-700' : 'text-purple-700'}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button 
                          className={`w-full mt-4 py-6 text-lg ${isPremium ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}
                          onClick={() => setIsModalOpen(true)}
                        >
                          Choose {option.title}
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
                
                <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm border border-purple-100 max-w-3xl mx-auto">
                  <p className="text-purple-800 font-medium">Customize Your Event</p>
                  <p className="text-sm text-purple-700 mt-1">Contact us to create a personalized {event.name.toLowerCase()} experience tailored to your preferences</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us for Your {event.name}?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg mb-2">Experienced Planners</h3>
                  <p className="text-gray-600">Our team has years of experience creating memorable events tailored to your vision.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg mb-2">Custom Solutions</h3>
                  <p className="text-gray-600">We work closely with you to design an event that reflects your unique style and preferences.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg mb-2">Stress-Free Experience</h3>
                  <p className="text-gray-600">From planning to execution, we handle every detail so you can enjoy your special day.</p>
                </div>
              </div>
            </div>
          </section>
          </div>
          </div>
        </main>
      </div>
    );
  }
