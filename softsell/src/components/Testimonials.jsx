import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'IT Manager',
    company: 'TechNova Ltd.',
    message: 'SoftVault made it incredibly easy to turn our unused licenses into extra budget. Fast, secure, and professional!',
  },
  {
    name: 'Ravi Mehta',
    role: 'Operations Head',
    company: 'NextGen Systems',
    message: 'We sold over 100 licenses through SoftVault. Their support team is amazing and the process was seamless.',
  },
];

function Testimonials() {
  return (
    <section className="py-16 bg-white text-center">
      <h3 className="text-3xl font-semibold text-indigo-700 mb-8">What Our Clients Say</h3>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300 text-left"
          >
            <p className="text-gray-800 mb-4">“{t.message}”</p>
            <div className="text-sm text-gray-600">
              <strong>{t.name}</strong>, {t.role}, {t.company}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
