import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/AngazaLogo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition ${
      isActive
        ? "text-green-600 bg-green-50"
        : "text-gray-700 hover:text-green-600 hover:bg-green-50"
    }`;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo + Name */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Angaza Logo"
            className="h-10 w-10 rounded-full object-cover shadow-md"
          />
          <span className="text-xl font-bold text-gray-800">
            <span className="text-green-600">Angaza</span> Community
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/programs" className={navLinkClasses}>Programs</NavLink>
          <NavLink to="/events" className={navLinkClasses}>Events</NavLink>
          <NavLink to="/volunteer" className={navLinkClasses}>Volunteer</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <NavLink
            to="/volunteer"
            className="bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-700 transition"
          >
            Join Us
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3 shadow-lg">
          <NavLink to="/" className={navLinkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/programs" className={navLinkClasses} onClick={() => setIsOpen(false)}>Programs</NavLink>
          <NavLink to="/events" className={navLinkClasses} onClick={() => setIsOpen(false)}>Events</NavLink>
          <NavLink to="/volunteer" className={navLinkClasses} onClick={() => setIsOpen(false)}>Volunteer</NavLink>
          <NavLink to="/contact" className={navLinkClasses} onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}