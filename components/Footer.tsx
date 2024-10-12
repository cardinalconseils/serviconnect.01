import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="hover:text-gray-300">How It Works</Link></li>
              <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
              <li><Link href="/providers" className="hover:text-gray-300">Providers</Link></li>
              <li><Link href="/emergency-resources" className="hover:text-gray-300">Emergency Resources</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-gray-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="mb-2">Phone: 1 (888) 901-8998</p>
            <p className="mb-4">Email: support@serviconnect.com</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300"><span className="sr-only">Facebook</span><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white hover:text-gray-300"><span className="sr-only">Twitter</span><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-gray-300"><span className="sr-only">Instagram</span><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {currentYear} ServiConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;