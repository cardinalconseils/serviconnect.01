import React from 'react';
import Link from 'next/link';

const EmergencyResourcesPage = () => {
  const resources = [
    { title: 'Water Leak Emergency Guide', link: '/emergency-resources/water-leak' },
    { title: 'Electrical Safety Tips', link: '/emergency-resources/electrical-safety' },
    { title: 'HVAC Troubleshooting', link: '/emergency-resources/hvac-troubleshooting' },
    { title: 'Home Security Measures', link: '/emergency-resources/home-security' },
    { title: 'Fire Safety and Prevention', link: '/emergency-resources/fire-safety' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Emergency Resources</h1>
      <div className="space-y-4">
        {resources.map((resource, index) => (
          <Link key={index} href={resource.link} className="block bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold">{resource.title}</h2>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>How quickly can I expect a service provider to respond?</li>
          <li>What should I do in case of a major emergency?</li>
          <li>How are service providers vetted?</li>
          <li>Can I request a specific provider for my emergency?</li>
        </ul>
      </div>
    </div>
  );
};

export default EmergencyResourcesPage;