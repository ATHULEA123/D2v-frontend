import React, {useState} from "react";
import {Logo} from "../../../assets/constant";
import {FaInstagram, FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";
import {PiArrowUpRightBold} from "react-icons/pi";
import {HiMenu} from "react-icons/hi";
import {Link} from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="custom-container">
    <div className="p-0">
    <nav className="flex items-center justify-between px-6 py-4">
        <div>
          <Logo />
        </div>

        {/* Regular Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#portfolio" className="text-gray-700 hover:text-gray-900">
            Portfolio
          </a>
          <a href="#gallery" className="text-gray-700 hover:text-gray-900">
            Gallery
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">
            Contact Us
          </a>
          <Link to="/login">
            <button className="px-4 py-3 text-sm bg-[#996830] text-white rounded-lg flex items-center space-x-2">
              <span>Login</span>
              <PiArrowUpRightBold />
            </button>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button className="block md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : <HiMenu className="text-3xl text-[#996830]" />}
        </button>
      </nav>
    </div>

      {/* Mobile Menu with Sliding Transition */}
      <div
        className={`w-[300px] md:hidden fixed top-0 right-0 h-full  bg-white z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 left-4 text-2xl text-[#996833] border-[#996833] border w-10 h-10 flex items-center justify-center rounded-full focus:outline-none"
          onClick={toggleMenu}
        >
          ✖
        </button>

        {/* Links */}
        <div className="flex flex-col items-center justify-center h-[90%] space-y-4 mt-0 ">
          <a
            href="#portfolio"
            className="px-4 py-2 border text-center w-[130px] border-[#996833] text-[#996833] rounded-lg text-lg hover:bg-[#996833] hover:text-white transition"
            onClick={toggleMenu}
          >
            Portfolio
          </a>
          <a
            href="#gallery"
            className="px-4 py-2 border text-center w-[130px] border-[#996833] text-[#996833] rounded-lg text-lg hover:bg-[#996833] hover:text-white transition"
            onClick={toggleMenu}
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="px-4 py-2 border text-center w-[130px] border-[#996833] text-[#996833] rounded-lg text-lg hover:bg-[#996833] hover:text-white transition"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
          <button
            className="px-4 py-2  text-center w-[130px] bg-[#996833] text-white rounded-lg text-lg hover:bg-[#8b5d33] transition"
            onClick={toggleMenu}
          >
            Login
          </button>
        </div>

        {/* Footer Line */}
        <div className="absolute bottom-0 left-0 w-full border-t border-gray-300 text-center text-[9px] py-3 text-[#4444]">
          2022 Inteo - Award winning studio. Made with love by <span className="text-[#996833]">Landify</span>
          <div className="flex justify-center tex-center  align-center gap-2">
            <div>
              <span className="font-semibold text-[#4444]">CONNECT</span>
            </div>
            <div className="w-[35px] text-center h-[1px] bg-[#444444] mt-2"></div>
            <div className="flex gap-2">
              <div>
                <div
                  className="text-[#996833] border border-[#996833] rounded-full w-[14px] h-[14px] text-center flex
        justify-center pt-0.5"
                >
                  <a href="">
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <div
                className="text-[#996833] border border-[#996833] rounded-full w-[14px] h-[14px] text-center flex
        justify-center pt-0.5"
              >
                <a href="">
                  <FaFacebook />
                </a>
              </div>
              <div
                className="text-[#996833] border border-[#996833] rounded-full w-[14px] h-[14px] text-center flex
        justify-center pt-0.5"
              >
                <a href="">
                  <FaYoutube />
                </a>
              </div>
              <div
                className="text-[#996833] border border-[#996833] rounded-full w-[14px] h-[14px] text-center flex
        justify-center pt-0.5"
              >
                <a href="">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
