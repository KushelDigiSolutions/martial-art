"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about-us' },
    { name: 'PROGRAMS', href: '/programs' },
    { name: 'CONTACT US', href: '/contact-us' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-md text-white px-8 py-6 border-b border-brand-gray">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 z-50 relative">
          <div className="text-brand-red text-4xl font-black tracking-tighter uppercase font-display">
            <span className="text-white">B</span>UDO<span className="text-brand-red">.</span>
          </div>
        </div>

        {/* Action Area (Desktop) - with navigation links */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold tracking-wider font-sans uppercase">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-brand-red transition-colors duration-300 cursor-pointer">
                {link.name}
              </Link>
            ))}
          </div>
          <button className="hidden lg:flex px-6 py-3 bg-brand-red text-white text-sm font-bold tracking-wider hover:bg-white hover:text-brand-red transition-colors duration-300 uppercase cursor-pointer">
            <a href="tel:8800844647" className="no-underline text-white hover:text-brand-red">CALL NOW</a>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center z-50 relative ml-6">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-brand-red transition-colors cursor-pointer">
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-dark bg-opacity-95 z-40 transition-transform duration-300 flex flex-col justify-center items-center space-y-8 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} lg:hidden`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className="text-2xl font-bold tracking-wider hover:text-brand-red transition-colors font-display uppercase"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <button className="px-8 py-4 bg-brand-red text-white text-lg font-bold tracking-wider hover:bg-white hover:text-brand-red transition-colors mt-8 uppercase font-sans cursor-pointer">
          <a href="tel:8800844647" className="no-underline text-white hover:text-brand-red">CALL NOW</a>
        </button>
      </div>
    </nav>
  );
}
