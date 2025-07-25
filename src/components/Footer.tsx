import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";
import logo from "../assets/logo/logoMC.png";
import { FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={logo} // make sure `logo` is imported correctly
                alt="Moti Creation Logo"
                className="w-14 h-fit bg-white" // 6 * 4px = 24px
              />
              <span className="font-serif text-xl font-bold tracking-tight">
                Moti Creation
              </span>
            </div>

            <p className="text-neutral-400 text-sm mt-4 max-w-xs">
              Moti Creation captures life’s precious moments with artistic style
              and precise technique. Since 2018, it has turned memories into
              timeless stories through creative and elegant photography.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialLink
                href="https://www.instagram.com/moti_creation?utm_source=ig_web_button_share_sheet&igsh=Ymx4dDNqejFhcWkw"
                icon={<Instagram size={18} />}
                label="Instagram"
              />
              <SocialLink
                href="https://www.facebook.com/moticreationnepal"
                icon={<Facebook size={18} />}
                label="Facebook"
              />
              <SocialLink
                href="https://www.tiktok.com/@motiframepokhara?_t=ZS-8yLX7rX7FI2&_r=1"
                icon={<FaTiktok size={18} />}
                label="Tiktok"
              />
              <SocialLink
                href="https://www.youtube.com/@MotiCreation/featured"
                icon={<Youtube size={18} />}
                label="Youtube"
              />
              <SocialLink
                href="https://www.youtube.com/@motidigitalstudio1100"
                icon={<Youtube size={18} />}
                label="Youtube"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-neutral-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {/* Head Office */}
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="text-[#F6891E] mt-0.5 mr-2 flex-shrink-0"
                />
                <span className="text-neutral-400 text-sm">
                  Newroad, 7th Street, Pokhara, Nepal
                </span>
              </li>

              {/* Branch Office */}
              <li className="flex items-start mt-3">
                <MapPin
                  size={18}
                  className="text-[#F6891E] mt-0.5 mr-2 flex-shrink-0"
                />
                <span className="text-neutral-400 text-sm">
                  Dulegaunda, Bhimad, Tanahun, Nepal
                </span>
              </li>

              <li className="flex items-center">
                <Phone
                  size={18}
                  className="text-[#F6891E] mr-2 flex-shrink-0"
                />
                <span className="text-neutral-400 text-sm">
                  984-6365892, 985-6012312
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-[#F6891E] mr-2 flex-shrink-0" />
                <a
                  href="mailto:moticreation2024@gmail.com"
                  className="text-neutral-400 hover:text-amber-500 text-sm"
                >
                  moticreation2024@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} Moti Creation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
}> = ({ href, icon, label }) => (
  <a
    href={href}
    className="text-neutral-400 hover:text-amber-500 transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Video Gallery", path: "/video-gallery" },
  { label: "Packages", path: "/packages" },
  { label: "Contact", path: "/contact" },
];

const services = [
  { label: "Photography", path: "/portfolio" },
  { label: "Maternity Sessions", path: "/maternity" },
  { label: "Family Portraits", path: "/portfolio" },
  { label: "Videography", path: "/video-gallery" },
];

export default Footer;
