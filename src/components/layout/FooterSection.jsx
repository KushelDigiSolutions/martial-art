import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-[#050505] text-white py-8 px-4 sm:px-8 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="text-brand-red text-4xl font-black tracking-tighter font-display uppercase">
            <span className="text-white">B</span>UDO<span className="text-brand-red">.</span>
          </div>
          <p className="text-brand-light-gray text-base leading-relaxed max-w-sm font-sans font-light">
            We are dedicated to providing the highest quality martial arts instruction in a safe and positive environment. Our goal is to empower our students to achieve their full potential.
          </p>
          <div className="flex space-x-6 text-brand-light-gray font-display font-bold tracking-widest text-sm">
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors pb-1 border-b border-transparent hover:border-brand-red">Fb.</Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors pb-1 border-b border-transparent hover:border-brand-red">Tw.</Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors pb-1 border-b border-transparent hover:border-brand-red">In.</Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-black mb-8 tracking-wider font-display uppercase">OUR PAGES</h4>
          <ul className="space-y-4 text-sm text-brand-light-gray font-sans font-medium uppercase">
            <li><Link href="/" className="hover:text-brand-red transition-colors flex items-center space-x-2 cursor-pointer"><span className="text-brand-red opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0"></span><span>Home</span></Link></li>
            <li><Link href="/about" className="hover:text-brand-red transition-colors flex items-center space-x-2 cursor-pointer"><span className="text-brand-red opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0"></span><span>About</span></Link></li>
            <li><Link href="/programs" className="hover:text-brand-red transition-colors flex items-center space-x-2 cursor-pointer"><span className="text-brand-red opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0"></span><span>Programs</span></Link></li>
            <li><Link href="/contact-us" className="hover:text-brand-red transition-colors flex items-center space-x-2 cursor-pointer"><span className="text-brand-red opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0"></span><span>Contact</span></Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-black mb-8 tracking-wider font-display uppercase cursor-pointer hover:text-brand-red transition-colors">CONTACT</h4>
          <ul className="space-y-4 text-sm text-brand-light-gray font-sans font-light">
            <li className="leading-relaxed flex items-start space-x-3">
              <a
                href="https://maps.google.com/?q=Vasundhara+Enclave+Delhi+110096"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-brand-red transition-colors group"
              >
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span>Vasundhara Enclave,<br/>Delhi - 110096<br/>Beside Dharamshila Cancer Hospital</span>
              </a>
            </li>
            <li className="mt-4 flex items-center space-x-3">
              <a href="tel:+918800844647" className="flex items-center space-x-3 text-white font-medium hover:text-brand-red transition-colors group">
                <Phone className="w-5 h-5 text-brand-red flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 88008 44647</span>
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <a href="mailto:budomartialarts69@gmail.com" className="flex items-center space-x-3 text-white font-medium hover:text-brand-red transition-colors group">
                <Mail className="w-5 h-5 text-brand-red flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>budomartialarts69@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-brand-gray flex flex-col md:flex-row justify-between items-center text-xs text-brand-light-gray font-sans font-light tracking-wide">
        <p>Copyright © {new Date().getFullYear()} Budo Martial Arts</p>
        <p className="mt-4 md:mt-0">Powered by Budo Martial Arts</p>
      </div>
    </footer>
  );
}
