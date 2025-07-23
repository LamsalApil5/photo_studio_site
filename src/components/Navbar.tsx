import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo/logo.png";

interface NavbarProps {
  isScrolled: boolean;
}

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Video Gallery", path: "/video-gallery" },
  { label: "Maternity", path: "/maternity" },
  { label: "Packages", path: "/packages" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Moti Creation Logo"
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-all hover:text-[#F6891E] pb-1 ${
                  isActive
                    ? "text-[#F6891E] border-b-2 border-[#F6891E]"
                    : isScrolled
                    ? "text-[#333333]"
                    : "text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#F6891E] focus:outline-none z-60"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Fullscreen Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center space-y-8 text-xl font-semibold"
            onClick={handleLinkClick}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `text-neutral-900 hover:text-blue-800 ${
                    isActive ? "border-b-2 border-blue-800 pb-1" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
