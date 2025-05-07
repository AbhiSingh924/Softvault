import React from 'react';

function Hero() {
  return (
    <section className="text-center py-20 bg-indigo-50">
      <h2 className="text-4xl font-bold mb-4 text-indigo-700">
        Turn Unused Software Licenses into Cash
      </h2>
      <p className="text-lg mb-6 text-gray-700">
        SoftVault helps businesses sell old or extra software licenses securely and quickly.
      </p>
      <a
        href="#contact"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
      >
        Get a Quote
      </a>
    </section>
  );
}

export default Hero;
