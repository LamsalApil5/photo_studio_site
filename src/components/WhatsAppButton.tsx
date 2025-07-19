import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "9779800000000"; // Replace with your actual WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={24} className="text-white" /> {/* ✅ Use icon correctly */}
    </a>
  );
};

export default WhatsAppButton;
