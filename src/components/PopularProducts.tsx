'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { getAllProducts } from '@/MockData/ProductData';
import { categories } from '@/MockData/CategoryData';

export default function PopularProducts() {
  const [activeCategory, setActiveCategory] = useState(0);
  const allProducts = getAllProducts();
  
  const filteredProducts = activeCategory === 0 
    ? allProducts.slice(0, 10)
    : allProducts.filter(p => p.categoryId === activeCategory).slice(0, 10);

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Best Sellers</h2>
            <p className="text-gray-500 text-sm">Most popular products near you</p>
          </div>
          <Link 
            href="/product" 
            className="text-[#84c225] font-medium hover:underline"
          >
            View All →
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveCategory(0)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === 0
                ? 'bg-[#84c225] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.slice(0, 6).map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-[#84c225] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
