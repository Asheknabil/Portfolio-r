
import React from "react";
import hero1 from "../assets/hero-1.jpg";

const Home = () => {
  return (
    <section
      className="min-h-screen w-full bg-cover bg-center flex relative h-[800px] bg-hero items-center justify-start"
      style={{ backgroundImage: `url(${hero1})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="max-w-xl text-white">
          <span className="block text-[15px] tracking-[2px] uppercase mb-4">
            For website and video editing
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight uppercase mb-6">
            Videographer’s Portfolio
          </h2>
          <a
            href="#"
            className="relative inline-block px-8 py-3 text-white font-bold text-[15px] uppercase tracking-wider overflow-hidden group"
          >
            See more about us
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#3b6064] transition-all duration-700 group-hover:w-full group-hover:h-full"></span>
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#3b6064] transition-all duration-700 group-hover:w-full group-hover:h-full"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
