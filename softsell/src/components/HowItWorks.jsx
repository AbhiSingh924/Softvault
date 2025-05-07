import React from 'react';

const steps = [
  {
    title: '1. Upload License',
    desc: 'Submit your unused software license details via our secure form.',
    icon: '📤',
  },
  {
    title: '2. Get Valuation',
    desc: 'We evaluate your license and give you the best market offer.',
    icon: '💰',
  },
  {
    title: '3. Get Paid',
    desc: 'Once approved, receive your payment via your preferred method.',
    icon: '🏦',
  },
];

function HowItWorks() {
  return (
    <section className="py-16 bg-white text-center">
      <h3 className="text-3xl font-semibold text-indigo-700 mb-8">How It Works</h3>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h4 className="text-xl font-bold text-indigo-600">{step.title}</h4>
            <p className="text-gray-700 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
