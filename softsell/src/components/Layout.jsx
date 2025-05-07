import React from 'react';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="p-4 shadow-md bg-indigo-600 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">SoftVault</h1>
          <nav>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">{children}</main>

      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} SoftVault. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;
