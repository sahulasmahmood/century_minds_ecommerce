'use client';

import Header from '@/components/Header';
import Footer01 from '@/components/Footer01';
import Footer02 from '@/components/Footer02';
import { IconHeart, IconShoppingCart, IconX, IconStar } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

// Mock data for wishlist
const wishlistProducts = [
  {
    id: 1,
    name: 'Organic Bananas',
    price: 4.99,
    originalPrice: 6.99,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop',
    rating: 4.5,
    reviews: 128,
    inStock: true,
    discount: 29
  },
  {
    id: 2,
    name: 'Fresh Strawberries',
    price: 8.99,
    originalPrice: 10.99,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop',
    rating: 4.8,
    reviews: 89,
    inStock: true,
    discount: 18
  },
  {
    id: 3,
    name: 'Organic Apples',
    price: 6.99,
    originalPrice: 8.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop',
    rating: 4.3,
    reviews: 156,
    inStock: false,
    discount: 22
  },
  {
    id: 4,
    name: 'Fresh Oranges',
    price: 5.99,
    originalPrice: 7.99,
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=300&fit=crop',
    rating: 4.6,
    reviews: 203,
    inStock: true,
    discount: 25
  }
];

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Wishlist</span>
        </nav>

        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
            <p className="text-gray-600">There are {wishlistProducts.length} products in your wishlist</p>
          </div>
          <button className="text-red-500 hover:text-red-600 text-sm font-medium">
            Clear All
          </button>
        </div>

        {wishlistProducts.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <IconHeart size={48} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Wishlist is Empty</h2>
            <p className="text-gray-600 mb-8">Save your favorite products to your wishlist for easy access later.</p>
            <Link 
              href="/shop" 
              className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          /* Wishlist Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative p-4">
                  {/* Remove Button */}
                  <button className="absolute top-2 right-2 p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <IconX size={20} />
                  </button>
                  
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                      -{product.discount}%
                    </div>
                  )}

                  {/* Product Image */}
                  <Link href={`/product/${product.id}`}>
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-semibold text-gray-900 hover:text-green-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <IconStar
                            key={i}
                            size={14}
                            className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-green-600">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>

                    {/* Stock Status */}
                    <div className="text-sm">
                      {product.inStock ? (
                        <span className="text-green-600 font-medium">In Stock</span>
                      ) : (
                        <span className="text-red-500 font-medium">Out of Stock</span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <button 
                        className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                          product.inStock 
                            ? 'bg-green-600 text-white hover:bg-green-700' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!product.inStock}
                      >
                        <IconShoppingCart size={16} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Continue Shopping */}
        {wishlistProducts.length > 0 && (
          <div className="mt-12 text-center">
            <Link 
              href="/shop" 
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </main>

      <Footer01 />
      <Footer02 />
    </div>
  );
}