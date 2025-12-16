'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MidBannerCategory() {
  const banners = [
    {
      title: 'Fresh Fruits',
      subtitle: 'Seasonal & Exotic',
      discount: 'Up to 35% OFF',
      bgColor: 'bg-gradient-to-r from-red-400 to-pink-400',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=250&fit=crop',
      link: '/category/fruits-vegetables'
    },
    {
      title: 'Kitchen Essentials',
      subtitle: 'Oil, Ghee & Masala',
      discount: 'Starting ₹99',
      bgColor: 'bg-gradient-to-r from-amber-400 to-yellow-400',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=250&fit=crop',
      link: '/category/oil-ghee-masala'
    },
    {
      title: 'Personal Care',
      subtitle: 'Beauty & Hygiene',
      discount: 'Buy 1 Get 1',
      bgColor: 'bg-gradient-to-r from-blue-400 to-cyan-400',
      image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&h=250&fit=crop',
      link: '/category/personal-care'
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {banners.map((banner, index) => (
            <Link 
              key={index}
              href={banner.link}
              className={`${banner.bgColor} rounded-xl overflow-hidden relative h-40 group`}
            >
              <div className="absolute inset-0 p-5 flex flex-col justify-center z-10">
                <span className="text-white/80 text-sm">{banner.subtitle}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{banner.title}</h3>
                <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full w-fit">
                  {banner.discount}
                </span>
              </div>
              <div className="absolute right-0 top-0 w-1/2 h-full">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="object-cover opacity-70 group-hover:scale-105 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
