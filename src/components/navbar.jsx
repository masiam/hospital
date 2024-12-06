import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Service
          </a>
          <a href="#Testi" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>

        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu Icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed w-full right-0 top-0 bottom-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-20">
          <ul className="flex flex-col items-center gap-5 text-lg font-medium text-white">
            <a
              href="#Header"
              className="px-4 py-2 rounded-full hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#About"
              className="px-4 py-2 rounded-full hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#Projects"
              className="px-4 py-2 rounded-full hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#Testimonials"
              className="px-4 py-2 rounded-full hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
