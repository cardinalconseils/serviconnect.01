'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FaCheckCircle } from 'react-icons/fa';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { auth, db, createUserWithEmailAndPassword, setDoc, doc } from '@/lib/firebase-client';

export default function HomeownerSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [error, setError] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      setError('reCAPTCHA not available');
      return;
    }
    setError('');

    try {
      const token = await executeRecaptcha('homeowner_signup');
      if (!token) {
        setError('Failed to execute reCAPTCHA');
        return;
      }
      router.push('/dashboard');
      // Verify the token on the server-side
      const response = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      const result = await response.json();
      if (!result.success) {
        setError('reCAPTCHA verification failed');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await setDoc(doc(db, "homeowners", user.uid), {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
        },
        createdAt: new Date().toISOString(),
      });

      router.push('/dashboard');
    } catch (error) {
      setError('Failed to create an account. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg flex">
          <div className="w-1/2 pr-8 relative">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('/images/home-repair.jpg')"}}></div>
            <div className="relative z-10 bg-white bg-opacity-90 p-6 rounded-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Join ServiConnect
              </h2>
              <p className="text-gray-600 mb-4">
                Sign up now to get immediate access to our network of trusted service providers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span className="text-gray-800">Faster insurance claims processing</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span className="text-gray-800">Quick emergency response</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span className="text-gray-800">Access to vetted service providers</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span className="text-gray-800">24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2">
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                name="phoneNumber"
                type="tel"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <input
                name="street"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Street address"
                value={formData.street}
                onChange={handleChange}
              />
              <div className="flex space-x-4">
                <input
                  name="city"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
                <input
                  name="state"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                />
                <input
                  name="zipCode"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Zip Code"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </div>
              <input
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <input
                name="firstName"
                type="text"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                name="lastName"
                type="text"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-4">
              <GoogleReCaptcha onVerify={token => setCaptchaToken(token)} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
