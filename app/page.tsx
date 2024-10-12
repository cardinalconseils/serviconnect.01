import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaBolt, FaCheckCircle } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServiceIcon = ({ d }: { d: string }) => (
  <svg className="w-12 h-12 mb-4 text-[#0D92F4]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d={d} fill="currentColor" />
  </svg>
);

export default function Home() {
  const services = [
    // ... (services array remains unchanged)
  ];

  return (
    <div>
      <Header />
      
      {/* Top Navigation */}
      <nav className="bg-gray-100 py-2">
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
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="Emergency service"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Solve Your Emergency in One Call</h1>
            <p className="text-xl mb-8">ServiConnect: Your One-Call Wonder for Emergencies</p>
            <div className="flex space-x-4">
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="px-4 py-2 rounded-lg text-gray-900 w-64"
              />
              <button className="bg-[#A52525] hover:bg-[#8B1E1E] text-white font-bold py-2 px-6 rounded-lg transform transition duration-300 hover:scale-105 hidden md:block">
                Get a Call Back
              </button>
              <a href="tel:18889018998" className="bg-[#A52525] hover:bg-[#8B1E1E] text-white font-bold py-2 px-6 rounded-lg transform transition duration-300 hover:scale-105 md:hidden">
                Call Now
              </a>
            </div>
            <div className="mt-6 flex space-x-6">
              <div className="flex items-center">
                <span className="text-[#0D92F4] text-2xl mr-2">★★★★★</span>
                <span>Trustpilot</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#0D92F4] text-2xl mr-2">★★★★★</span>
                <span>Google Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaPhone className="text-5xl text-[#0D92F4] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">1. Call Us</h3>
              <p className="text-gray-600">Contact our 24/7 emergency hotline for immediate assistance.</p>
            </div>
            <div className="text-center">
              <FaBolt className="text-5xl text-[#0D92F4] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">2. We Dispatch Help</h3>
              <p className="text-gray-600">Our team quickly sends the right professional to your location.</p>
            </div>
            <div className="text-center">
              <FaCheckCircle className="text-5xl text-[#0D92F4] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">3. Problem Solved</h3>
              <p className="text-gray-600">Your emergency is resolved efficiently and professionally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Regions We Serve</h2>
          <p className="text-xl text-center mb-12 text-gray-700">Our services are available in the following areas</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Greater Montreal', 'Greater Quebec', 'Laval', 'Quebec South Shore', 'Montreal North Shore', 'Montreal South Shore'].map((city, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="font-semibold text-gray-800">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ... (remaining sections unchanged) ... */}
    </div>
  );
}
