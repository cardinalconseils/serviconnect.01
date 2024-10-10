import React from 'react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      features: [
        'Access to emergency service providers',
        'Basic user profile',
        'Standard response times',
      ],
    },
    {
      name: 'Premium',
      price: '$9.99/month',
      features: [
        'Priority access to top-rated providers',
        'Enhanced user profile',
        'Faster response times',
        '24/7 customer support',
      ],
    },
    {
      name: 'Business',
      price: 'Custom',
      features: [
        'Dedicated account manager',
        'Multiple property management',
        'Custom reporting',
        'API access',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;