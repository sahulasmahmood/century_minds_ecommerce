'use client';

import Header from '@/components/Header';
import Footer01 from '@/components/Footer01';
import Footer02 from '@/components/Footer02';
import { IconX, IconHeart, IconShoppingCart, IconStar } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Mock data for comparison
const compareProducts = [
  {
    id: 1,
    name: 'Organic Bananas',
    price: 4.99,
    originalPrice: 6.99,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop',
    rating: 4.5,
    reviews: 128,
    brand: 'Fresh Farm',
    availability: 'In Stock',
    category: 'Fruits',
    weight: '1 kg'
  },
  {
    id: 2,
    name: 'Green Apples',
    price: 5.49,
    originalPrice: 7.49,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop',
    rating: 4.6,
    reviews: 156,
    brand: 'Orchard Fresh',
    availability: 'In Stock',
    category: 'Fruits',
    weight: '1.5 kg'
  },
  {
    id: 3,
    name: 'Fresh Oranges',
    price: 6.99,
    originalPrice: 8.99,
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=300&fit=crop',
    rating: 4.7,
    reviews: 203,
    brand: 'Citrus Valley',
    availability: 'In Stock',
    category: 'Fruits',
    weight: '2 kg'
  }
];

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Compare Products</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Compare Products</h1>
          <p className="text-gray-600">Compare features and prices of your selected products</p>
        </div>

        {compareProducts.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <IconShoppingCart size={48} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Products to Compare</h2>
            <p className="text-gray-600 mb-8">You haven't added any products to compare yet.</p>
            <Link 
              href="/shop" 
              className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          /* Comparison Table */
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-left p-6 font-semibold text-gray-900 w-48 border-r">Product</TableHead>
                    {compareProducts.map((product) => (
                      <TableHead key={product.id} className="p-6 w-80 border-r">
                        <div className="relative">
                          <button className="absolute top-0 right-0 p-1 text-gray-400 hover:text-red-500">
                            <IconX size={20} />
                          </button>
                          <div className="text-center">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={200}
                              height={200}
                              className="mx-auto mb-4 rounded-lg"
                            />
                            <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                            <div className="flex items-center justify-center gap-2 mb-4">
                              <span className="text-2xl font-bold text-green-600">${product.price}</span>
                              {product.originalPrice && (
                                <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Rating Row */}
                  <TableRow>
                    <TableCell className="p-6 font-medium text-gray-900 border-r">Rating</TableCell>
                    {compareProducts.map((product) => (
                      <TableCell key={product.id} className="p-6 text-center border-r">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <IconStar
                              key={i}
                              size={16}
                              className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                      </TableCell>
                    ))}
                  </TableRow>

                  {/* Brand Row */}
                  <TableRow>
                    <TableCell className="p-6 font-medium text-gray-900 border-r">Brand</TableCell>
                    {compareProducts.map((product) => (
                      <TableCell key={product.id} className="p-6 text-center text-gray-600 border-r">{product.brand}</TableCell>
                    ))}
                  </TableRow>

                  {/* Availability Row */}
                  <TableRow>
                    <TableCell className="p-6 font-medium text-gray-900 border-r">Availability</TableCell>
                    {compareProducts.map((product) => (
                      <TableCell key={product.id} className="p-6 text-center border-r">
                        <span className="text-green-600 font-medium">{product.availability}</span>
                      </TableCell>
                    ))}
                  </TableRow>

                  {/* Category Row */}
                  <TableRow>
                    <TableCell className="p-6 font-medium text-gray-900 border-r">Category</TableCell>
                    {compareProducts.map((product) => (
                      <TableCell key={product.id} className="p-6 text-center text-gray-600 border-r">{product.category}</TableCell>
                    ))}
                  </TableRow>

                  {/* Weight Row */}
                  <TableRow>
                    <TableCell className="p-6 font-medium text-gray-900 border-r">Weight</TableCell>
                    {compareProducts.map((product) => (
                      <TableCell key={product.id} className="p-6 text-center text-gray-600 border-r">{product.weight}</TableCell>
                    ))}
                  </TableRow>

                  {/* Actions Row */}
                  <TableRow>
                    <TableCell className="p-6 font-medium text-gray-900 border-r">Actions</TableCell>
                    {compareProducts.map((product) => (
                      <TableCell key={product.id} className="p-6 border-r">
                        <div className="flex gap-3">
                          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2 flex-1">
                            <IconShoppingCart size={16} />
                            Add to Cart
                          </button>
                          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 flex-1">
                            <IconHeart size={16} />
                            Add to Wishlist
                          </button>
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </main>

      <Footer01 />
      <Footer02 />
    </div>
  );
}