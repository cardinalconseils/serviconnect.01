'use client';

import { useState } from 'react';
import { FaPhone, FaComments, FaCircleInfo } from 'react-icons/fa6';

interface ContactPopupProps {
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    console.log(`Selected option: ${option}`);
    setTimeout(onClose, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full text-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-white">Get Help Now</h2>
        <div className="space-y-4">
          <button 
            onClick={() => handleOptionSelect('call')}
            className={`w-full p-4 text-left flex items-center ${selectedOption === 'call' ? 'bg-green-800' : 'bg-gray-700'} rounded-lg hover:bg-green-700 transition-colors`}
          >
            <FaPhone className="mr-4 text-green-400" />
            <span>Call us at 1 (888) 901-8998</span>
          </button>
          <button 
            onClick={() => handleOptionSelect('chat')}
            className={`w-full p-4 text-left flex items-center ${selectedOption === 'chat' ? 'bg-blue-800' : 'bg-gray-700'} rounded-lg hover:bg-blue-700 transition-colors`}
          >
            <FaComments className="mr-4 text-blue-400" />
            <span>Chat with us</span>
          </button>
          <button 
            onClick={() => handleOptionSelect('tips')}
            className={`w-full p-4 text-left flex items-center ${selectedOption === 'tips' ? 'bg-yellow-800' : 'bg-gray-700'} rounded-lg hover:bg-yellow-700 transition-colors`}
          >
            <FaCircleInfo className="mr-4 text-yellow-400" />
            <span>Get emergency tips</span>
          </button>
        </div>
        <button 
          onClick={onClose}
          className="mt-6 w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-500 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;
