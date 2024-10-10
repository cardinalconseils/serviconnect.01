import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Emergency Services at Your Fingertips</h1>
          <p className="text-xl mb-8">ServiConnect connects you with reliable service providers quickly and efficiently.</p>
          <div className="flex space-x-4">
            <Link href="/request-service" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
              Request Service
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Request Service", description: "Describe your emergency and location", icon: "🆘" },
              { title: "Get Matched", description: "We'll connect you with available providers", icon: "🤝" },
              { title: "Problem Solved", description: "Your emergency is handled quickly", icon: "✅" }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "New Feature: AI-powered Dispatch", date: "June 1, 2023", image: "/update1.jpg" },
              { title: "ServiConnect expands to new regions", date: "May 15, 2023", image: "/update2.jpg" },
              { title: "Customer Satisfaction hits all-time high", date: "April 30, 2023", image: "/update3.jpg" }
            ].map((update, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                <Image src={update.image} alt={update.title} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
                  <p className="text-gray-600">{update.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8">Join ServiConnect today and experience peace of mind.</p>
          <Link href="/user-signup" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
}