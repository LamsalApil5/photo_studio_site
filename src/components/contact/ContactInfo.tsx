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
    <div className="bg-[#333333] text-white rounded-lg shadow-md p-6 md:p-8 h-full">
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
            <h3 className="font-medium mb-1">Head Office</h3>
            <p className="text-neutral-300">
              Newroad, 7th Street
              <br />
              Pokhara, Nepal
            </p>
          </div>
        </li>

        <li className="flex mt-4">
          <MapPin
            size={20}
            className="text-amber-500 mt-1 mr-3 flex-shrink-0"
          />
          <div>
            <h3 className="font-medium mb-1">Branch Office</h3>
            <p className="text-neutral-300">
              Dulegaunda, Bhimad
              <br />
              Tanahun, Nepal
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
            href="https://www.instagram.com/moti_creation?utm_source=ig_web_button_share_sheet&igsh=Ymx4dDNqejFhcWkw"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-amber-700 transition-colors p-2 rounded-full"
            aria-label="Instagram"
          >
            <Instagram size={20} className="text-white" />
          </a>
          <a
            href="https://www.facebook.com/moticreationnepal"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-amber-700 transition-colors p-2 rounded-full"
            aria-label="Facebook"
          >
            <Facebook size={20} className="text-white" />
          </a>
          <a
            href="https://www.tiktok.com/@motiframepokhara?_t=ZS-8yLX7rX7FI2&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-amber-700 transition-colors p-2 rounded-full"
            aria-label="Tiktok"
          >
            <BsTiktok size={20} className="text-white" />
          </a>
          <a
            href="https://www.youtube.com/@MotiCreation/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-amber-700 transition-colors p-2 rounded-full"
            aria-label="YouTube"
          >
            <Youtube size={20} className="text-white" />
          </a>
          <a
            href="https://www.youtube.com/@motidigitalstudio1100"
            target="_blank"
            rel="noopener noreferrer"
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
