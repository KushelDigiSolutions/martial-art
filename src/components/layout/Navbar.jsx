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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505] text-white px-6 lg:px-8 py-4 lg:py-6 border-b border-brand-gray">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl lg:text-4xl font-black tracking-tighter uppercase font-display"
          >
            <span className="text-white">B</span><span className="text-brand-red">UDO.</span>
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
