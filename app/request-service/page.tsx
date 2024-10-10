'use client';

import { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Loading from '../../components/Loading';

interface FormData {
  name: string;
  email: string;
  phone: string;
  providerType: string;
  expertise: string;
  region: string;
  mrc: string;
  city: string;
  description: string;
  latitude: number | null;
  longitude: number | null;
}

export default function RequestService() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    providerType: '',
    expertise: '',
    region: '',
    mrc: '',
    city: '',
    description: '',
    latitude: null,
    longitude: null,
  });
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "serviceRequests"), {
        ...formData,
        createdAt: new Date().toISOString(),
        status: 'pending'
      });
      alert('Service request submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        providerType: '',
        expertise: '',
        region: '',
        mrc: '',
        city: '',
        description: '',
        latitude: null,
        longitude: null,
      });
      setStep(1);
    } catch (error) {
      console.error("Error submitting service request: ", error);
      alert('An error occurred while submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Request Emergency Service</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <>
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <button type="button" onClick={nextStep} className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label htmlFor="providerType" className="block mb-1">Provider Type</label>
              <select
                id="providerType"
                name="providerType"
                value={formData.providerType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Select a provider type</option>
                <option value="plumber">Plumber</option>
                <option value="electrician">Electrician</option>
                <option value="hvac">HVAC Technician</option>
                {/* Add more provider types as needed */}
              </select>
            </div>
            <div>
              <label htmlFor="expertise" className="block mb-1">Specific Expertise (if any)</label>
              <input
                type="text"
                id="expertise"
                name="expertise"
                value={formData.expertise}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <button type="button" onClick={prevStep} className="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 mb-2">
              Previous
            </button>
            <button type="button" onClick={nextStep} className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Next
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <div>
              <label htmlFor="region" className="block mb-1">Region</label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Select a region</option>
                {/* Add regions here */}
              </select>
            </div>
            <div>
              <label htmlFor="mrc" className="block mb-1">MRC</label>
              <select
                id="mrc"
                name="mrc"
                value={formData.mrc}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Select an MRC</option>
                {/* Add MRCs here based on selected region */}
              </select>
            </div>
            <div>
              <label htmlFor="city" className="block mb-1">City</label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Select a city</option>
                {/* Add cities here based on selected MRC */}
              </select>
            </div>
            <button type="button" onClick={prevStep} className="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 mb-2">
              Previous
            </button>
            <button type="button" onClick={nextStep} className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Next
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <div>
              <label htmlFor="description" className="block mb-1">Description of the Emergency</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
                rows={4}
              ></textarea>
            </div>
            <button type="button" onClick={prevStep} className="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 mb-2">
              Previous
            </button>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loading /> : 'Submit Request'}
            </button>
          </>
        )}
      </form>
    </div>
  );
}