'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';

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
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        {/* <div className="container mx-auto px-4 py-6">
          <Link href="/events" className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Events
          </Link>
        </div> */}
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.name}</h1>
            <p className="text-lg text-gray-600 mb-6">{event.description}</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Our {event.name} Services Include:</h2>
              <ul className="space-y-3">
                {event.services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white py-6 px-8 text-lg">
                Book Now
              </Button>
              <Button variant="outline" className="py-6 px-8 text-lg border-purple-600 text-purple-600 hover:bg-purple-50">
                Save for Later
              </Button>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Can Organize Your {event.name}</h2>
              <div className="space-y-6">
                {event.organizationOptions.map((option, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <ul className="space-y-2">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                <p className="text-purple-800 font-medium">Customize Your Event</p>
                <p className="text-sm text-purple-700 mt-1">Contact us to create a personalized {event.name.toLowerCase()} experience tailored to your preferences</p>
              </div>
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
      </main>
    </div>
  );
}
