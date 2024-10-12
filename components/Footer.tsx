import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-red-600 py-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Need Emergency Help?</h2>
        <p className="mb-4">We're available 24/7 to assist you with any emergency.</p>
        <a href="tel:18889018998" className="inline-block bg-white text-red-600 font-bold py-2 px-6 rounded-full text-lg hover:bg-gray-100 transition duration-300">
          1 (888) 901-8998
        </a>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/providers">Providers</Link></li>
              <li><Link href="/emergency-resources">Emergency Resources</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <p>Phone: 1 (888) 901-8998</p>
            <p>Email: support@serviconnect.com</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4 text-center">
        <p>&copy; 2024 ServiConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
