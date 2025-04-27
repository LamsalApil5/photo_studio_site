import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-white rounded-lg shadow-md p-6 md:p-8 h-full">
      <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
      
      <ul className="space-y-5">
        <li className="flex">
          <MapPin size={20} className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-amber-300 mb-1">Our Location</h3>
            <p className="text-neutral-300">123 Photography Lane<br />Shutter City, SC 12345</p>
          </div>
        </li>
        
        <li className="flex">
          <Phone size={20} className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-amber-300 mb-1">Phone</h3>
            <p className="text-neutral-300">(555) 123-4567</p>
          </div>
        </li>
        
        <li className="flex">
          <Mail size={20} className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-amber-300 mb-1">Email</h3>
            <a
              href="mailto:info@lenslife.com"
              className="text-neutral-300 hover:text-amber-300 transition-colors"
            >
              info@lenslife.com
            </a>
          </div>
        </li>
        
        <li className="flex">
          <Clock size={20} className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-amber-300 mb-1">Business Hours</h3>
            <div className="text-neutral-300 grid grid-cols-2 gap-2">
              <span>Monday - Friday:</span>
              <span>9:00 AM - 6:00 PM</span>
              <span>Saturday:</span>
              <span>10:00 AM - 4:00 PM</span>
              <span>Sunday:</span>
              <span>Closed</span>
            </div>
          </div>
        </li>
      </ul>
      
      <div className="mt-8">
        <h3 className="font-medium text-amber-300 mb-3">Connect With Us</h3>
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-white/10 hover:bg-amber-700 transition-colors p-2 rounded-full"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="#"
            className="bg-white/10 hover:bg-amber-700 transition-colors p-2 rounded-full"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="bg-white/10 hover:bg-amber-700 transition-colors p-2 rounded-full"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="bg-white/10 hover:bg-amber-700 transition-colors p-2 rounded-full"
            aria-label="Pinterest"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;