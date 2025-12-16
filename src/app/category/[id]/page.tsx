'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer01 from '@/components/Footer01';
import Footer02 from '@/components/Footer02';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/MockData/ProductData';
import { categories, getCategoryBySlug } from '@/MockData/CategoryData';
import { IconChevronRight, IconChevronLeft, IconFilter } from '@tabler/icons-react';

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('relevance');
  const itemsPerPage = 15;

  // Try to find category by slug first, then by id
  const category = getCategoryBySlug(id) || categories.find(c => c.id === parseInt(id));
  
  if (!category) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Category Not Found</h1>
            <Link href="/" className="text-[#84c225] hover:underline">Return to Home</Link>
          </div>
        </div>
        <Footer01 />
        <Footer02 />
      </>
    );
  }

  let products = getProductsByCategory(category.id);

  // Sort products
  if (sortBy === 'price-low') {
    products = [...products].sort((a, b) => a.variants[0].price - b.variants[0].price);
  } else if (sortBy === 'price-high') {
    products = [...products].sort((a, b) => b.variants[0].price - a.variants[0].price);
  } else if (sortBy === 'discount') {
    products = [...products].sort((a, b) => b.variants[0].discount - a.variants[0].discount);
  }

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-[#84c225]">Home</Link>
              <IconChevronRight size={16} className="text-gray-400" />
              <span className="text-gray-800 font-medium">{category.name}</span>
            </div>
          </div>
        </div>

        {/* Category Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{category.name}</h1>
                <p className="text-gray-500">{category.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-6">
            {/* Sidebar */}
            <div className="w-64 flex-shrink-0">
              <div className="bg-white rounded-lg p-4 sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <IconFilter size={20} className="text-gray-600" />
                  <h3 className="font-semibold text-gray-800">Categories</h3>
                </div>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.slug}`}
                      className={`block px-3 py-2 rounded text-sm ${
                        cat.id === category.id
                          ? 'bg-[#84c225] text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="mr-2">{cat.icon}</span>
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="flex-1">
              {/* Sort Bar */}
              <div className="bg-white rounded-lg p-4 mb-4 flex items-center justify-between">
                <p className="text-gray-600 text-sm">
                  {products.length} products found
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#84c225]"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="discount">Discount</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              {currentProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-12 text-center">
                  <p className="text-gray-500">No products found in this category.</p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded border disabled:opacity-50 hover:bg-gray-100"
                  >
                    <IconChevronLeft size={20} />
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2 rounded ${
                        currentPage === i + 1 ? 'bg-[#84c225] text-white' : 'border hover:bg-gray-100'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded border disabled:opacity-50 hover:bg-gray-100"
                  >
                    <IconChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer01 />
      <Footer02 />
    </>
  );
}
