import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="absolute left-0 top-0 w-full h-[80px] border-b bg-[#011627] z-50 flex items-center">
  <div className="container mx-auto px-6 flex items-center justify-center sm:justify-between relative">

    {/* Logo */}
    <div className="flex-shrink-0">
      <a href="/">
        <img 
          src={logo} 
          alt="logo" 
          className="h-64 w-auto mx-auto" 
        />
      </a>
    </div>

    {/* Button Right (Hidden on small screens) */}
    <div className="hidden sm:flex items-center">
      <a
        href="#"
        className="relative px-8 py-3 text-white font-bold text-[15px] uppercase tracking-wider overflow-hidden group"
      >
        See more about us
        <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#4493e2] transition-all duration-700 group-hover:w-full group-hover:h-full"></span>
        <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#4493e2] transition-all duration-700 group-hover:w-full group-hover:h-full"></span>
      </a>
    </div>

  </div>
</header>

  );
};

export default Navbar;
