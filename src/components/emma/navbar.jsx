'use client';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <div className="text-white text-xl">
          <img className='w-16 h-16'
              src="Image/Logo.png" alt="" />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Gallery</a>
          <a href="#" className="text-white">Contact</a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none mb-4"
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={`flex flex-col gap-10 text-center overflow-hidden uppercase md:hidden transition-all ${isOpen ? 'h-72': 'h-0'} duration-500 ease-in-out`}>
        <a href="#" className="text-white block">Home</a>
        <a href="#" className="text-white block">About</a>
        <a href="#" className="text-white block">Gallery</a>
        <a href="#" className="text-white block">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
