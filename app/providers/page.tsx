import React from 'react';
import Link from 'next/link';

const ProvidersPage = () => {
  const providerCategories = [
    'Plumbers',
    'Electricians',
    'HVAC Technicians',
    'Locksmiths',
    'Roofers',
    'General Contractors',
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Service Providers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {providerCategories.map((category, index) => (
          <Link key={index} href={`/providers/${category.toLowerCase()}`} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{category}</h2>
            <p className="text-gray-600">Find reliable {category.toLowerCase()} in your area.</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProvidersPage;