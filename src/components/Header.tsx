'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { 
  IconChevronDown,
  IconSearch,
  IconShoppingCart,
  IconUser,
  IconMapPin,
  IconMenu2,
} from '@tabler/icons-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categories } from '@/MockData/CategoryData';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Main Header */}
      <div className="bg-[#e63946]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                <Image 
                  src="/WhatsApp Image 2025-12-16 at 10.11.01 (1).jpeg"
                  alt="Leats Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-white">Leats</span>
            </Link>

            {/* Shop by Category Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="bg-[#c1121f] text-white px-4 py-2.5 rounded-md flex items-center gap-2 hover:bg-[#a01018] focus:outline-none font-medium transition-colors active:scale-95">
                  <IconMenu2 size={20} />
                  Shop by Category
                  <IconChevronDown size={18} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.id} asChild>
                    <Link 
                      href={`/category/${category.slug}`} 
                      className="cursor-pointer flex items-center gap-3 py-2"
                    >
                      <span className="text-xl">{category.icon}</span>
                      <span>{category.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center bg-white rounded-md overflow-hidden">
                <div className="px-3">
                  <IconSearch size={20} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search for Products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-2 py-2.5 focus:outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-white cursor-pointer hover:opacity-90">
              <IconMapPin size={20} />
              <div className="text-sm">
                <p className="text-xs opacity-80">Deliver to</p>
                <p className="font-medium">Select Location</p>
              </div>
              <IconChevronDown size={16} />
            </div>

            {/* Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-white hover:opacity-90 focus:outline-none">
                  <IconUser size={22} />
                  <div className="text-sm text-left">
                    <p className="text-xs opacity-80">Sign In</p>
                    <p className="font-medium">My Account</p>
                  </div>
                  <IconChevronDown size={16} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/login" className="cursor-pointer">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register" className="cursor-pointer">Register</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/order-tracking" className="cursor-pointer">My Orders</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Link href="/cart" className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity">
              <div className="relative">
                <IconShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-[#ffc300] text-gray-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  0
                </span>
              </div>
              <div className="text-sm">
                <p className="text-xs opacity-80">My Cart</p>
                <p className="font-medium">₹0.00</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 py-2 overflow-x-auto">
            {categories.map((category) => (
              <Link 
                key={category.id}
                href={`/category/${category.slug}`}
                className="flex items-center gap-2 text-gray-700 hover:text-[#e63946] whitespace-nowrap text-sm font-medium py-1 transition-colors"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
