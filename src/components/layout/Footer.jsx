import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-darker text-white py-16 px-8 border-t border-brand-gray">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo and Description */}
        <div className="col-span-1 md:col-span-2">
          <div className="text-brand-red text-3xl font-bold tracking-tighter mb-6">
            <span className="text-white">G</span>ELUD<span className="text-brand-red">.</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
            Martial arts is an extensive system of codified practices and traditions of combat, practiced for a variety of reasons.
          </p>
          <div className="flex space-x-4 text-gray-400">
            {/* Minimal social placeholders */}
            <Link href="#" className="hover:text-brand-red transition-colors">Fb.</Link>
            <Link href="#" className="hover:text-brand-red transition-colors">Tw.</Link>
            <Link href="#" className="hover:text-brand-red transition-colors">In.</Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 tracking-wider">QUICK LINKS</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-brand-red transition-colors">Home</Link></li>
            <li><Link href="#" className="hover:text-brand-red transition-colors">Classes</Link></li>
            <li><Link href="#" className="hover:text-brand-red transition-colors">Trainers</Link></li>
            <li><Link href="#" className="hover:text-brand-red transition-colors">Blog</Link></li>
            <li><Link href="#" className="hover:text-brand-red transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 tracking-wider">CONTACT</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="leading-relaxed">
              27 Division St, New York,<br/>NY 10002, USA
            </li>
            <li className="hover:text-brand-red transition-colors cursor-pointer">+1 (800) 123 4567</li>
            <li className="hover:text-brand-red transition-colors cursor-pointer">info@gelud.com</li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-gray flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>Copyright © {new Date().getFullYear()} GELUD Martial Arts</p>
        <p>Powered by GELUD Martial Arts</p>
      </div>
    </footer>
  );
}
