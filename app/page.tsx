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
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-image.jpg"
            alt="Emergency service"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 py-10 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Solve Your Emergency in One Call</h1>
            <p className="text-xl mb-8">ServiConnect: Your One-Call Wonder for Emergencies</p>
            <div className="flex space-x-4">
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="px-4 py-2 rounded-lg text-gray-900 w-64"
              />
              <button className="bg-[#A52525] hover:bg-[#8B1E1E] text-white font-bold py-2 px-6 rounded-lg transform transition duration-300 hidden md:block">
                Get a Call Back
              </button>
              <a href="tel:18889018998" className="bg-[#A52525] hover:bg-[#8B1E1E] text-white font-bold py-2 px-6 rounded-lg transform transition duration-300 md:hidden">
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Montreal', 'North Shore', 'South Shore', 'Basse Laurentians', 'High Laurentians', 'Quebec'].map((region, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="font-semibold text-gray-800">{region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Our Services</h2>
          <p className="text-xl text-center mb-12 text-gray-700">We cover a wide range of emergency services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Plumbing', icon: 'M14.25 6c.41 0 .75.34.75.75s-.34.75-.75.75h-1.5v1.5h1.5c.41 0 .75.34.75.75s-.34.75-.75.75h-1.5v3h-1.5v-12h3zm-7.5 0v12h-1.5v-12h1.5zm12 0v12h-1.5v-12h1.5z' },
              { name: 'Electrical', icon: 'M7 2v11h3v9l7-12h-4l4-8z' },
              { name: 'HVAC', icon: 'M12 16c1.1 0 2 .9 2 2s-.9 2-2 2-2 -.9-2 2 .9 2 2 2zm6 6c1.1 0 2 .9 2 2s-.9 2-2 2-2 .9-2 2 .9 2 2 2zm12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2V10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z' },
              { name: 'Roofing', icon: 'M12 3L4 9v12h16V9l-8-6zm0 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' },
              { name: 'General Repairs', icon: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z' },
            ].map((service, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center">
                <ServiceIcon d={service.icon} />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
                  <p className="text-gray-600">24/7 emergency {service.name.toLowerCase()} services available.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ... (remaining sections unchanged) ... */}
      <Footer />
    </div>
  );
}
