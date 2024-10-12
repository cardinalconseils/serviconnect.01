'use client';

import React from 'react';
import { useState, useEffect } from 'react';
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
    <header className={`bg-[#0D92F4] text-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-md' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="ServiConnect Logo" width={40} height={40} className="mr-2" />
            <span className="text-2xl font-bold">ServiConnect</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/how-it-works" className="hover:text-gray-200">How It Works</Link>
            <Link href="/services" className="hover:text-gray-200">Services</Link>
            <Link href="/providers" className="hover:text-gray-200">Providers</Link>
            <Link href="/emergency-resources" className="hover:text-gray-200">Emergency Resources</Link>
          </nav>
          <div className="hidden md:flex space-x-4 items-center">
            <button 
              onClick={() => setIsPopupOpen(true)}
              className={`bg-[#C62E2E] hover:bg-[#A52525] text-white font-bold py-2 px-4 rounded transition-all duration-300 ${isScrolled ? 'scale-90' : ''}`}
            >
              Get Help Now
            </button>
          </div>
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
      {isMenuOpen && (
        <div className="md:hidden bg-[#0D92F4] py-2">
          <Link href="/how-it-works" className="block px-4 py-2 hover:bg-[#0A7AC9]">How It Works</Link>
          <Link href="/services" className="block px-4 py-2 hover:bg-[#0A7AC9]">Services</Link>
          <Link href="/providers" className="block px-4 py-2 hover:bg-[#0A7AC9]">Providers</Link>
          <Link href="/emergency-resources" className="block px-4 py-2 hover:bg-[#0A7AC9]">Emergency Resources</Link>
          <button 
            onClick={() => {
              setIsPopupOpen(true);
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-2 bg-[#C62E2E] hover:bg-[#A52525]"
          >
            Get Help Now
          </button>
        </div>
      )}
      {isPopupOpen && <ContactPopup onClose={() => setIsPopupOpen(false)} />}
    </header>
  );
};

export default Header;
