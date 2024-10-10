'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">ServiConnect</Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/providers" className="hover:underline">Providers</Link>
          <Link href="/emergency-resources" className="hover:underline">Emergency Resources</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
          {user ? (
            <>
              <Link href="/dashboard" className="hover:underline">Dashboard</Link>
              <button onClick={logout} className="hover:underline">Logout</button>
            </>
          ) : (
            <Link href="/login" className="hover:underline">Sign Up / Log In</Link>
          )}
        </div>
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <Link href="/" className="block py-2 hover:bg-blue-700">Home</Link>
          <Link href="/providers" className="block py-2 hover:bg-blue-700">Providers</Link>
          <Link href="/emergency-resources" className="block py-2 hover:bg-blue-700">Emergency Resources</Link>
          <Link href="/pricing" className="block py-2 hover:bg-blue-700">Pricing</Link>
          <Link href="/about" className="block py-2 hover:bg-blue-700">About Us</Link>
          <Link href="/contact" className="block py-2 hover:bg-blue-700">Contact Us</Link>
          {user ? (
            <>
              <Link href="/dashboard" className="block py-2 hover:bg-blue-700">Dashboard</Link>
              <button onClick={logout} className="block w-full text-left py-2 hover:bg-blue-700">Logout</button>
            </>
          ) : (
            <Link href="/login" className="block py-2 hover:bg-blue-700">Sign Up / Log In</Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;