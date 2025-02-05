import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
    return (
      <div className="flex justify-center space-x-6 my-6">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-pink-600 text-3xl hover:text-pink-800 transition duration" />
        </a>

        <a href="https://www.facebook.com" target="_blank" rel=" noopener noreferrer">
        <FaFacebook className="text-blue-600 text-3xl hover:text-blue-800 transition duration-300" />
        </a>

        <a className="https://www.linkedin.com/company/laizstrehlempregocarreira/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-blue-500 text-3xl hover:text-blue-700 transition duration-300" />
        </a>
      </div>
    );
    
}

export default SocialIcons;