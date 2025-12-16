'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconChevronDown, IconPlus, IconMinus } from '@tabler/icons-react';
import { Product } from '@/MockData/ProductData';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [showVariants, setShowVariants] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const currentVariant = product.variants[selectedVariant];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity(1);
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group relative">
      {/* Badge */}
      {product.badge && (
        <span className={`absolute top-2 right-2 ${product.badgeColor} text-white text-xs px-2 py-0.5 rounded-full z-10 flex items-center gap-1`}>
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          {product.badge}
        </span>
      )}

      {/* Product Image */}
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square bg-gray-50 p-4">
          <Image 
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-2"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-3">
        {/* Brand */}
        <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
        
        {/* Product Name */}
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 h-10 hover:text-[#84c225]">
            {product.name}
          </h3>
        </Link>

        {/* Weight Selector */}
        <div className="relative mb-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowVariants(!showVariants);
            }}
            className="w-full flex items-center justify-between px-3 py-2 bg-gray-100 rounded text-sm text-gray-700 hover:bg-gray-200"
          >
            <span>{currentVariant.weight}</span>
            <IconChevronDown size={16} className={`transition-transform ${showVariants ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Variants Dropdown */}
          {showVariants && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
              {product.variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedVariant(index);
                    setShowVariants(false);
                  }}
                  className={`w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center justify-between ${selectedVariant === index ? 'bg-green-50' : ''}`}
                >
                  <div>
                    <p className="text-sm font-medium">{variant.weight}</p>
                    <div className="flex items-center gap-2">
                      {variant.discount > 0 && (
                        <span className="text-xs text-green-600 font-medium">{variant.discount}% OFF</span>
                      )}
                      <span className="text-sm font-bold">₹{variant.price}</span>
                      {variant.discount > 0 && (
                        <span className="text-xs text-gray-400 line-through">₹{variant.mrp}</span>
                      )}
                    </div>
                  </div>
                  {selectedVariant === index && (
                    <span className="text-green-600">✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">₹{currentVariant.price}</span>
          {currentVariant.discount > 0 && (
            <>
              <span className="text-sm text-gray-400 line-through">₹{currentVariant.mrp}</span>
            </>
          )}
        </div>

        {/* Discount Tag */}
        {currentVariant.discount > 0 && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
              <span className="font-medium">Har Din Sasta!</span>
              <IconChevronDown size={12} />
            </span>
          </div>
        )}

        {/* Add to Cart Button */}
        <div className="flex items-center gap-2">
          {quantity === 0 ? (
            <button
              onClick={handleAddToCart}
              className="flex-1 py-2 px-4 border-2 border-[#d23f57] text-[#d23f57] rounded font-medium hover:bg-[#d23f57] hover:text-white transition-colors"
            >
              Add
            </button>
          ) : (
            <div className="flex-1 flex items-center justify-between border-2 border-[#d23f57] rounded overflow-hidden">
              <button
                onClick={handleDecrement}
                className="px-3 py-2 text-[#d23f57] hover:bg-[#d23f57] hover:text-white transition-colors"
              >
                <IconMinus size={16} />
              </button>
              <span className="font-medium text-[#d23f57]">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="px-3 py-2 text-[#d23f57] hover:bg-[#d23f57] hover:text-white transition-colors"
              >
                <IconPlus size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
