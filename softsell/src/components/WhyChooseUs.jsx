import React from 'react';

const features = [
  {
    title: 'Fast Payments',
    desc: 'Receive your money within 24–48 hours after approval.',
    icon: '⚡',
  },
  {
    title: 'Secure Process',
    desc: 'We ensure your license details are handled confidentially.',
    icon: '🔒',
  },
  {
    title: 'Trusted by 1,000+ Clients',
    desc: 'Businesses across the globe trust us with their licenses.',
    icon: '🌍',
  },
  {
    title: 'Expert Support',
    desc: 'Our team is ready to help you at every step.',
    icon: '🛠️',
  },
];

function WhyChooseUs() {
  return (
    <section className="py-16 bg-indigo-50 text-center">
      <h3 className="text-3xl font-semibold text-indigo-700 mb-8">Why Choose SoftVault</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h4 className="text-xl font-bold text-indigo-600">{feature.title}</h4>
            <p className="text-gray-700 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
