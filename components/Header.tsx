'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import ContactPopup from './ContactPopup';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top row */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <Link href="/homeowner-signup" className="text-[#C62E2E] hover:text-[#A52525] border border-[#C62E2E] px-3 py-1 rounded">Homeowner</Link>
            <Link href="/building-manager-signup" className="text-[#C62E2E] hover:text-[#A52525] border border-[#C62E2E] px-3 py-1 rounded">Building Manager</Link>
            <Link href="/provider-signup" className="text-[#C62E2E] hover:text-[#A52525] border border-[#C62E2E] px-3 py-1 rounded">Provider</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
            <Link href="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className={`bg-[#0D82E4] text-white ${isScrolled ? 'py-2 shadow-md' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="ServiConnect Logo" width={330} height={40} className="w-auto h-auto max-w-[330px]" />
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link href="/how-it-works" className="hover:text-gray-200">How It Works</Link>
              <Link href="/services" className="hover:text-gray-200">Services</Link>
              <Link href="/providers" className="hover:text-gray-200">Providers</Link>
              <Link href="/emergency-resources" className="hover:text-gray-200">Emergency Resources</Link>
            </nav>
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="bg-[#C62E2E] hover:bg-[#A52525] text-white font-bold py-2 px-4 rounded transition-all duration-300"
            >
              Get Help Now
            </button>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0D82E4] py-2">
          <Link href="/how-it-works" className="block px-4 py-2 hover:bg-[#0A7AC9]">How It Works</Link>
          <Link href="/services" className="block px-4 py-2 hover:bg-[#0A7AC9]">Services</Link>
          <Link href="/providers" className="block px-4 py-2 hover:bg-[#0A7AC9]">Providers</Link>
          <Link href="/emergency-resources" className="block px-4 py-2 hover:bg-[#0A7AC9]">Emergency Resources</Link>
        </div>
      )}
      {isPopupOpen && <ContactPopup onClose={() => setIsPopupOpen(false)} />}
    </header>
  );
};

export default Header;
