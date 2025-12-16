'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Fresh Vegetables',
      subtitle: 'Delivered in 10 Minutes',
      description: 'Get farm-fresh vegetables at your doorstep',
      discount: 'Up to 40% OFF',
      bgColor: 'bg-gradient-to-r from-[#84c225] to-[#6ba31a]',
      imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Daily Essentials',
      subtitle: 'Grocery at Best Prices',
      description: 'Atta, Rice, Dal & more at lowest prices',
      discount: 'Save ₹200 on first order',
      bgColor: 'bg-gradient-to-r from-[#f97316] to-[#ea580c]',
      imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Fresh Fruits',
      subtitle: 'Handpicked Quality',
      description: 'Premium fruits from trusted farms',
      discount: 'Flat 25% OFF',
      bgColor: 'bg-gradient-to-r from-[#d23f57] to-[#be123c]',
      imageUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=400&fit=crop',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          {/* Main Banner Slider */}
          <div className="col-span-8 relative rounded-xl overflow-hidden h-[320px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className={`${slide.bgColor} h-full flex items-center`}>
                  <div className="p-8 flex-1">
                    <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full mb-3">
                      {slide.discount}
                    </span>
                    <h2 className="text-4xl font-bold text-white mb-2">{slide.title}</h2>
                    <p className="text-xl text-white/90 mb-1">{slide.subtitle}</p>
                    <p className="text-white/80 mb-4">{slide.description}</p>
                    <Link 
                      href="/product"
                      className="inline-block bg-white text-gray-800 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      Shop Now
                    </Link>
                  </div>
                  <div className="w-1/2 h-full relative">
                    <Image
                      src={slide.imageUrl}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            ))}
            
            {/* Dots */}
            <div className="absolute bottom-4 left-8 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Side Banners */}
          <div className="col-span-4 flex flex-col gap-4">
            <Link href="/category/dairy-bread-eggs" className="relative rounded-xl overflow-hidden h-[152px] group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400">
                <div className="p-4 h-full flex flex-col justify-center">
                  <span className="text-xs font-medium text-white/80">DAIRY PRODUCTS</span>
                  <h3 className="text-xl font-bold text-white mb-1">Fresh Milk & Curd</h3>
                  <p className="text-sm text-white/90">Starting ₹25</p>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-1/2 h-full">
                <Image
                  src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&h=200&fit=crop"
                  alt="Dairy"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform"
                />
              </div>
            </Link>
            
            <Link href="/category/snacks-beverages" className="relative rounded-xl overflow-hidden h-[152px] group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500">
                <div className="p-4 h-full flex flex-col justify-center">
                  <span className="text-xs font-medium text-white/80">SNACKS & DRINKS</span>
                  <h3 className="text-xl font-bold text-white mb-1">Munchies Time</h3>
                  <p className="text-sm text-white/90">Up to 30% OFF</p>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-1/2 h-full">
                <Image
                  src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=200&h=200&fit=crop"
                  alt="Snacks"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
