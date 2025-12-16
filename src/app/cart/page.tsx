'use client';

import Header from '@/components/Header';
import Footer01 from '@/components/Footer01';
import Footer02 from '@/components/Footer02';
import { IconMinus, IconPlus, IconX, IconShoppingCart, IconHeart } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Mock data for cart
const initialCartItems = [
  {
    id: 1,
    name: 'Organic Bananas',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop',
    quantity: 2,
    inStock: true
  },
  {
    id: 2,
    name: 'Fresh Strawberries',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop',
    quantity: 1,
    inStock: true
  },
  {
    id: 3,
    name: 'Organic Apples',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop',
    quantity: 3,
    inStock: true
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Shopping Cart</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">There are {cartItems.length} products in your cart</p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <IconShoppingCart size={48} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link 
              href="/shop" 
              className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Table Header */}
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-center">Total</div>
                  </div>
                </div>

                {/* Cart Items */}
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        {/* Product Info */}
                        <div className="col-span-6 flex items-center gap-4">
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <IconX size={20} />
                          </button>
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-lg"
                          />
                          <div>
                            <Link href={`/product/${item.id}`}>
                              <h3 className="font-semibold text-gray-900 hover:text-green-600 transition-colors">
                                {item.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-green-600 mt-1">In Stock</p>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="col-span-2 text-center">
                          <span className="font-semibold text-gray-900">${item.price}</span>
                        </div>

                        {/* Quantity */}
                        <div className="col-span-2 flex justify-center">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-50 transition-colors"
                            >
                              <IconMinus size={16} />
                            </button>
                            <span className="px-4 py-2 min-w-[60px] text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-50 transition-colors"
                            >
                              <IconPlus size={16} />
                            </button>
                          </div>
                        </div>

                        {/* Total */}
                        <div className="col-span-2 text-center">
                          <span className="font-semibold text-green-600">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Actions */}
                <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                  <Link 
                    href="/shop" 
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    ← Continue Shopping
                  </Link>
                  <button className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors">
                    Update Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-gray-900">Total</span>
                      <span className="text-lg font-bold text-green-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Shipping Notice */}
                {shipping > 0 && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
                    <p className="text-sm text-yellow-800">
                      Add ${(50 - subtotal).toFixed(2)} more to get free shipping!
                    </p>
                  </div>
                )}

                {/* Checkout Button */}
                <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors font-semibold mb-4">
                  Proceed to Checkout
                </button>

                {/* Additional Actions */}
                <div className="space-y-2">
                  <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <IconHeart size={16} />
                    Save for Later
                  </button>
                </div>

                {/* Security Badge */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500 mb-2">Secure Checkout</p>
                  <div className="flex justify-center gap-2">
                    <Image 
                      src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
                      alt="Visa" 
                      width={32} 
                      height={20}
                      className="object-contain"
                    />
                    <Image 
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
                      alt="Mastercard" 
                      width={32} 
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer01 />
      <Footer02 />
    </div>
  );
}