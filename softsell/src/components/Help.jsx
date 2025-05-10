import React, { useState } from 'react';
import axios from 'axios';

function Help() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    if (userInput.trim() === '') return;
    const newChatHistory = [...chatHistory, { user: userInput, bot: '...' }];
    setChatHistory(newChatHistory);
    setUserInput('');
    setIsLoading(true);

    try {

      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'deepseek/deepseek-r1:free',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            ...newChatHistory.map((chat) => ({
              role: 'user',
              content: chat.user,
            })),
            { role: 'user', content: userInput },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `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`,
          },
        }
      );

  
      const botResponse = response.data.choices[0].message.content;


      setChatHistory((prev) =>
        prev.map((chat, index) =>
          index === prev.length - 1 ? { ...chat, bot: botResponse } : chat
        )
      );
    } catch (error) {
      console.error('Error fetching OpenAI response:', error);
      setChatHistory((prev) =>
        prev.map((chat, index) =>
          index === prev.length - 1
            ? { ...chat, bot: 'Sorry, something went wrong. Please try again.' }
            : chat
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={togglePopup}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Help
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <button
              onClick={togglePopup}
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
                    <p className="text-gray-700">
                      Bot: {chat.bot || (isLoading && index === chatHistory.length - 1 ? 'Typing...' : '')}
                    </p>
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
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Help;