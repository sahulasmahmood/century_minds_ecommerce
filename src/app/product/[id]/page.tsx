'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconChevronRight, IconMinus, IconPlus, IconHeart, IconShare, IconStarFilled, IconStar, IconTruck, IconShieldCheck, IconRefresh } from '@tabler/icons-react';
import { getProductById, getProductsByCategory } from '@/MockData/ProductData';
import { getCategoryById } from '@/MockData/CategoryData';
import Header from '@/components/Header';
import Footer01 from '@/components/Footer01';
import Footer02 from '@/components/Footer02';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  const productId = parseInt(id);
  const product = getProductById(productId);
  
  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <Link href="/" className="text-[#84c225] hover:underline">Return to Home</Link>
          </div>
        </div>
        <Footer01 />
        <Footer02 />
      </>
    );
  }

  const category = getCategoryById(product.categoryId);
  const currentVariant = product.variants[selectedVariant];
  const relatedProducts = getProductsByCategory(product.categoryId)
    .filter(p => p.id !== product.id)
    .slice(0, 5);

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
              <Link href={`/category/${category?.slug}`} className="text-gray-500 hover:text-[#84c225]">
                {category?.name}
              </Link>
              <IconChevronRight size={16} className="text-gray-400" />
              <span className="text-gray-800 font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="relative">
                {product.badge && (
                  <span className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs px-3 py-1 rounded-full z-10 flex items-center gap-1`}>
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    {product.badge}
                  </span>
                )}
                <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain p-8"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div>
                <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                <h1 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                    <span>{product.rating}</span>
                    <IconStarFilled size={12} />
                  </div>
                  <span className="text-gray-500 text-sm">{product.reviews.toLocaleString()} Ratings</span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">₹{currentVariant.price}</span>
                    {currentVariant.discount > 0 && (
                      <>
                        <span className="text-lg text-gray-400 line-through">₹{currentVariant.mrp}</span>
                        <span className="bg-green-100 text-green-700 text-sm px-2 py-0.5 rounded font-medium">
                          {currentVariant.discount}% OFF
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">(Inclusive of all taxes)</p>
                </div>

                {/* Weight Variants */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">Pack Size</p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedVariant(index)}
                        className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-colors ${
                          selectedVariant === index
                            ? 'border-[#84c225] bg-green-50 text-[#84c225]'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="block">{variant.weight}</span>
                        <span className="block text-xs mt-0.5">₹{variant.price}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border-2 border-gray-200 rounded-lg">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      <IconMinus size={18} />
                    </button>
                    <span className="px-6 py-2 font-semibold border-x-2 border-gray-200">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      <IconPlus size={18} />
                    </button>
                  </div>
                  <button className="flex-1 bg-[#d23f57] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#c13048] transition-colors">
                    Add to Cart - ₹{currentVariant.price * quantity}
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mb-6">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#84c225]">
                    <IconHeart size={20} />
                    <span className="text-sm">Add to Wishlist</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#84c225]">
                    <IconShare size={20} />
                    <span className="text-sm">Share</span>
                  </button>
                </div>

                {/* Delivery Info */}
                <div className="border-t pt-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <IconTruck size={24} className="text-[#84c225]" />
                      <div>
                        <p className="text-sm font-medium">Free Delivery</p>
                        <p className="text-xs text-gray-500">On orders above ₹499</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconShieldCheck size={24} className="text-[#84c225]" />
                      <div>
                        <p className="text-sm font-medium">100% Genuine</p>
                        <p className="text-xs text-gray-500">Quality assured</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconRefresh size={24} className="text-[#84c225]" />
                      <div>
                        <p className="text-sm font-medium">Easy Returns</p>
                        <p className="text-xs text-gray-500">7 days return policy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="bg-white rounded-lg mb-6">
            <div className="border-b">
              <div className="flex gap-8 px-6">
                {['description', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 font-medium capitalize ${
                      activeTab === tab
                        ? 'text-[#84c225] border-b-2 border-[#84c225]'
                        : 'text-gray-600 hover:text-[#84c225]'
                    }`}
                  >
                    {tab === 'reviews' ? `Reviews (${product.reviews})` : tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6">
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Fresh and high quality product</li>
                    <li>Sourced from trusted suppliers</li>
                    <li>Properly stored and handled</li>
                    <li>Best before: Check package for details</li>
                  </ul>
                </div>
              )}
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-800">{product.rating}</div>
                      <div className="flex text-yellow-400 justify-center my-1">
                        {[...Array(5)].map((_, i) => (
                          i < Math.floor(product.rating) 
                            ? <IconStarFilled key={i} size={16} />
                            : <IconStar key={i} size={16} />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">{product.reviews} reviews</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-center">Customer reviews will appear here.</p>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Similar Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer01 />
      <Footer02 />
    </>
  );
}
