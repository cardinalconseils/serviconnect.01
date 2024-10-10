import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About ServiConnect</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            ServiConnect is a revolutionary platform connecting homeowners and businesses with reliable emergency service providers. Our mission is to make the world of emergency services work better for people, ensuring quick and efficient solutions to urgent problems.
          </p>
          <p className="mb-4">
            Founded in 2023, ServiConnect has quickly become a trusted name in the industry, known for our commitment to quality, reliability, and customer satisfaction.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="mb-4">
            We envision a world where every home and business has instant access to qualified professionals for any emergency, big or small. By leveraging technology and a network of vetted service providers, we&apos;re making this vision a reality.
          </p>
        </div>
        <div>
          <Image
            src="/about-image.jpg"
            alt="ServiConnect Team"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
          <h2 className="text-2xl font-semibold mt-4 mb-2">Our Team</h2>
          <p>
            ServiConnect is powered by a diverse team of professionals passionate about technology, customer service, and problem-solving. From our developers to our customer support specialists, every team member is committed to delivering the best possible experience for our users and service providers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;