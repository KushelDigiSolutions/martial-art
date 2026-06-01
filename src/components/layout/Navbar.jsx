import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-brand-red text-2xl font-bold tracking-tighter">
            <span className="text-white">G</span>ELUD<span className="text-brand-red">.</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wider">
          <Link href="#" className="hover:text-brand-red transition-colors">HOME</Link>
          <Link href="#" className="hover:text-brand-red transition-colors">CLASSES</Link>
          <Link href="#" className="hover:text-brand-red transition-colors">TRAINERS</Link>
          <Link href="#" className="hover:text-brand-red transition-colors">BLOG</Link>
          <Link href="#" className="hover:text-brand-red transition-colors">CONTACT</Link>
        </div>

        {/* Action Area */}
        <div className="flex items-center space-x-6">
          <button className="hidden lg:flex px-6 py-3 bg-brand-red text-white text-sm font-bold tracking-wider hover:bg-white hover:text-brand-red transition-colors">
            JOIN CLASS
          </button>
          <div className="relative cursor-pointer hover:text-brand-red transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-brand-red text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
