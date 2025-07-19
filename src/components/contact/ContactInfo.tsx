import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { BsTiktok } from "react-icons/bs";

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-red-900 text-white rounded-lg shadow-md p-6 md:p-8 h-full">
      <h2 className="text-2xl font-serif font-bold mb-6">
        Contact Information
      </h2>

      <ul className="space-y-5">
        <li className="flex">
          <MapPin
            size={20}
            className="text-amber-500 mt-1 mr-3 flex-shrink-0"
          />
          <div>
            <h3 className="font-medium text- mb-1">Our Location</h3>
            <p className="text-neutral-300">
              Dulegaunda, Bhimad
              <br />
              Pokhara, Nepal
            </p>
          </div>
        </li>

        <li className="flex">
          <Phone size={20} className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-amber-300 mb-1">Phone</h3>
            <p className="text-neutral-300">984-6365892, 985-6012312</p>
          </div>
        </li>

        <li className="flex">
          <Mail size={20} className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-amber-300 mb-1">Email</h3>
            <a
              href="mailto:moticreation2024@gmail.com"
              className="text-neutral-300 hover:text-amber-300 transition-colors"
            >
              moticreation2024@gmail.com
            </a>
          </div>
        </li>

        <li className="flex">
          <Clock size={20} className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-amber-300 mb-1">Business Hours</h3>
            <div className="text-neutral-300 grid grid-cols-2 gap-2">
              <span>Sunday - Friday:</span>
              <span>9:00 AM - 6:00 PM</span>
              <span>Saturday:</span>
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
            <Instagram size={20} className="text-white" />
          </a>
          <a
            href="#"
            className="bg-white/10 hover:bg-amber-700 transition-colors p-2 rounded-full"
            aria-label="Facebook"
          >
            <Facebook size={20} className="text-white" />
          </a>
          <a
            href="#"
            className="bg-white/10 hover:bg-amber-700 transition-colors p-2 rounded-full"
            aria-label="Tiktok"
          >
            <BsTiktok size={20} className="text-white" />
          </a>
          <a
            href="#"
            className="bg-white/10 hover:bg-amber-700 transition-colors p-2 rounded-full"
            aria-label="YouTube"
          >
            <Youtube size={20} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
