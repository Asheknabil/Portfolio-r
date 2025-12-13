import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#011627] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">

        {/* Left side */}
        <aside className="text-center sm:text-left">
          <a href="#">
            <img
              src={logo}
              alt="logo"
              className="h-40 -ms-[1px] -mt-16 w-auto mx-auto sm:mx-0"
            />
          </a>
          <p className="-mt-6 text-sm text-gray-300 leading-relaxed">
            Front-End Developer specialized in{" "}
            <span className="text-cyan-400">React </span>&
            <span className="text-cyan-400"> Next.js</span>
            <br />
            Focused on performance, clean code, and modern UI.
          </p>

        </aside>

        {/* Right side */}
        <nav className="text-center sm:text-right">
          <h6 className="mb-4 text-lg font-semibold tracking-wide">
            Social
          </h6>
          <div className="flex justify-center sm:justify-end gap-5">
            <a
              href="https://www.linkedin.com/in/ashek-elahi-nabil-310535337/"
              className="text-white text-xl hover:text-blue-400 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://web.facebook.com/ashek.nabil"
              className="text-white text-xl hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/Asheknabil"
              className="text-white text-xl hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
          </div>
        </nav>

      </div>
    </footer>
  );
}
