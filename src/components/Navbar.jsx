import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaDribbble, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="absolute left-0 top-0 w-full h-[80px] border-b bg-[#011627] z-50 flex items-center">
      <div className="container mx-auto px-6 flex items-center justify-between">

        <div className="flex-shrink-0">
          <a href="/">
            <img src={logo} alt="logo" className="h-64 w-auto" />
          </a>
        </div>

        <nav className="hidden lg:flex items-center space-x-10 text-white font-play uppercase text-[15px]">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="relative py-2 hover:text-[#38a3a5] transition-colors group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#38a3a5] scale-0 group-hover:scale-100 origin-left transition-transform"></span>
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center pl-8 border-l border-white/20 space-x-4 text-[#c7f9cc] text-[15px]">
          <a href="https://web.facebook.com/ashek.nabil"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/ashek-elahi-nabil-310535337/"><FaTwitter /></a>
          <a href="#"><FaDribbble /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="bg-black/90 text-white text-center lg:hidden">
          <ul className="space-y-3 py-4 uppercase">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.link}
                  className="block py-1 text-sm hover:text-[#e0e1dd] transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
