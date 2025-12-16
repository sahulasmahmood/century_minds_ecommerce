'use client';

import Link from 'next/link';
import ProductCard from './ProductCard';
import { getAllProducts } from '@/MockData/ProductData';

export default function TrendingProducts() {
  const allProducts = getAllProducts();
  // Get products with best discounts
  const trendingProducts = [...allProducts]
    .sort((a, b) => {
      const discountA = a.variants[0]?.discount || 0;
      const discountB = b.variants[0]?.discount || 0;
      return discountB - discountA;
    })
    .slice(0, 10);

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Trending Products</h2>
            <p className="text-gray-500 text-sm">Best deals with maximum savings</p>
          </div>
          <Link 
            href="/product" 
            className="text-[#84c225] font-medium hover:underline"
          >
            View All →
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
