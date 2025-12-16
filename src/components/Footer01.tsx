'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';

export default function Footer01() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                <Image 
                  src="/WhatsApp Image 2025-12-16 at 10.11.01 (1).jpeg"
                  alt="Leats Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-white">Leats</span>
            </Link>
            <p className="text-sm mb-4 text-gray-400">
              Your one-stop shop for fresh groceries, daily essentials, and household items. 
              We deliver quality products at the best prices, right to your doorstep.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-colors active:scale-95">
                <IconBrandFacebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-colors active:scale-95">
                <IconBrandTwitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-colors active:scale-95">
                <IconBrandInstagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-colors active:scale-95">
                <IconBrandYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[#e63946] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#e63946] transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-[#e63946] transition-colors">FAQs</Link></li>
              <li><Link href="/order-tracking" className="hover:text-[#e63946] transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shipping" className="hover:text-[#e63946] transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-[#e63946] transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/privacy" className="hover:text-[#e63946] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#e63946] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>123 Main Street, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>1800-123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>support@leats.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
