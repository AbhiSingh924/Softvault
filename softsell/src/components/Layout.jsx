import React, { useState } from 'react';

function Layout({ children }) {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const toggleHelp = () => {
    setIsHelpOpen(!isHelpOpen);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = () => {
    if (userInput.trim() === '') return;

    const botResponse = `You asked: "${userInput}". Sorry, I am a basic chatbot and cannot provide detailed answers yet.`;

    setChatHistory([...chatHistory, { user: userInput, bot: botResponse }]);
    setUserInput('');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="p-4 shadow-md bg-indigo-600 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">SoftVault</h1>
          <nav className="flex space-x-4">
            <a href="#contact" className="hover:underline">Contact</a>
            <button
              onClick={toggleHelp}
              className="hover:underline focus:outline-none"
            >
              Help
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">{children}</main>

      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} SoftVault. All rights reserved.
      </footer>

      {isHelpOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <button
              onClick={toggleHelp}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <h3 className="text-lg font-semibold mb-4">Chat with Us</h3>
            <div className="h-48 overflow-y-auto border p-2 mb-4 rounded">
              {chatHistory.length === 0 ? (
                <p className="text-gray-500">No messages yet.</p>
              ) : (
                chatHistory.map((chat, index) => (
                  <div key={index} className="mb-2">
                    <p className="text-blue-600 font-semibold">You: {chat.user}</p>
                    <p className="text-gray-700">Bot: {chat.bot}</p>
                  </div>
                ))
              )}
            </div>
            <div className="flex">
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Type your question..."
                className="flex-grow border p-2 rounded-l"
              />
              <button
                onClick={handleSend}
                className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;