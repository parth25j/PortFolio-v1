import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white !py-8 !px-4 ">
      <div className="max-w-6xl !mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm !mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Parth Sharma. All rights reserved.</p>

        <ul className="flex gap-6 text-xl">
          <li className="transition-transform duration-300 hover:scale-110 hover:text-blue-400">
            <a href="https://www.linkedin.com/in/parth-sharma-b83bba18a" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li className="transition-transform duration-300 hover:scale-110 hover:text-pink-400">
            <a href="https://www.instagram.com/parthj_25/?igsh=MW1zdWV5b3RxNHFy#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
// www.linkedin.com/in/parth-sharma-b83bba18a