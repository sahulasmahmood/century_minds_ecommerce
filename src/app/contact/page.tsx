'use client';

import Header from '@/components/Header';
import Footer01 from '@/components/Footer01';
import Footer02 from '@/components/Footer02';
import { IconMapPin, IconPhone, IconMail } from '@tabler/icons-react';
import { useState } from 'react';

const locations = [
  {
    id: 1,
    title: 'Head Office',
    address: '205 North Michigan Avenue, Suite 810, Chicago, 60601, USA',
    phone: '(+01) 234 567',
    email: 'office@botble.com',
  },
  {
    id: 2,
    title: 'Our Studio',
    address: '205 North Michigan Avenue, Suite 810, Chicago, 60601, USA',
    phone: '(+01) 234 567',
    email: 'studio@botble.com',
  },
  {
    id: 3,
    title: 'Our Shop',
    address: '205 North Michigan Avenue, Suite 810, Chicago, 60601, USA',
    phone: '(+01) 234 567',
    email: 'shop@botble.com',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    subject: '',
    message: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="text-green-600 hover:underline">Home</a>
            <span>›</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-[85%] h-[400px] bg-gray-200 rounded-md relative mx-auto mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.3150579827285!2d-87.62979368455385!3d41.88663797922145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34afe61%3A0x6caeb5f721ca846!2s205%20N%20Michigan%20Ave%2C%20Chicago%2C%20IL%2060601%2C%20USA!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Location Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-24 relative z-10">
          {locations.map((location) => (
            <div key={location.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{location.title}</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-start gap-3">
                  <IconMapPin size={20} className="text-green-600 flex-shrink-0 mt-1" />
                  <span>{location.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <IconPhone size={20} className="text-green-600 flex-shrink-0" />
                  <span>Phone: {location.phone}</span>
                </p>
                <p className="flex items-center gap-3">
                  <IconMail size={20} className="text-green-600 flex-shrink-0" />
                  <span>Email: {location.email}</span>
                </p>
              </div>
              <button className="mt-6 text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1">
                View map
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Drop Us a Line</h2>
            <p className="text-gray-600">Contact Us For Any Questions</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />

            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-4 border border-gray-200 rounded-lg bg-gray-50">
                <span className="text-2xl">🇮🇳</span>
                <span className="text-gray-700">+91</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              required
            ></textarea>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                required
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                I agree to the Terms and Privacy Policy
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-800 text-white px-12 py-4 rounded-lg hover:bg-gray-900 transition-colors font-medium"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer01 />
      <Footer02 />
    </div>
  );
}