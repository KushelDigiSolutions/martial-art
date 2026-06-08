"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about-us' },
    { name: 'PROGRAMS', href: '/programs' },
    { name: 'CONTACT US', href: '/contact-us' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505] text-white px-6 lg:px-8 py-4 lg:py-6 border-b border-brand-gray">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="relative block w-28 h-12 lg:w-36 lg:h-16">
            <Image 
              src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780908240/budo_martial_art_logo1_vpyrou.png"
              alt="Budo Martial Arts Logo"
              fill
              className="object-contain object-left"
              priority
              quality={100}
              unoptimized
            />
          </Link>

          {/* Desktop nav — lg and above only */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8 text-sm font-semibold tracking-wider font-sans uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-brand-red transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a
              href="tel:+918800844647"
              className="px-6 py-3 bg-brand-red text-white text-sm font-bold tracking-wider hover:bg-white hover:text-brand-red transition-colors duration-300 uppercase whitespace-nowrap"
            >
              CALL NOW
            </a>
          </div>

          {/* Hamburger — mobile/tablet only */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-brand-red transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — full screen overlay, separate from nav so z-index works cleanly */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-start items-center pt-28 gap-5 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-black tracking-wider text-white hover:text-brand-red transition-colors font-display uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+918800844647"
            className="mt-4 px-8 py-3 bg-brand-red text-white text-sm font-black tracking-widest uppercase hover:bg-white hover:text-brand-red transition-colors font-sans"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CALL NOW
          </a>
        </div>
      )}
    </>
  );
}
