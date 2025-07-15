import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo/logo.png";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when a link is clicked
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
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
                `text-sm font-medium transition-colors hover:text-amber-700 ${
                  isActive
                    ? "text-amber-700"
                    : isScrolled
                    ? "text-neutral-900"
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
          className="md:hidden text-neutral-900 focus:outline-none z-60"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Fullscreen Overlay Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center space-y-8 text-xl font-semibold"
            onClick={handleLinkClick}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-neutral-900 hover:text-amber-700"
                onClick={handleLinkClick}
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

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Video Gallery", path: "/video-gallery" },
  { label: "Maternity", path: "/maternity" },
  { label: "Packages", path: "/packages" },
  { label: "Contact", path: "/contact" },
];

export default Navbar;
