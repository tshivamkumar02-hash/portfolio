"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Statistics", href: "#stats" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Startup", href: "#startup" },
    { name: "Teaching", href: "#teaching" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
      sticky
      top-0
      z-[9999]
      bg-slate-950/90
      backdrop-blur-md
      border-b
      border-slate-800
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        h-16
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}
        <a
          href="#home"
          className="
          text-xl
          font-bold
          text-cyan-400
          hover:text-cyan-300
          transition-all
          "
        >
          SKT
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
              relative
              hover:text-cyan-400
              transition-all
              duration-300
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-cyan-400
              after:transition-all
              hover:after:w-full
              "
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="
          lg:hidden
          text-2xl
          text-white
          hover:text-cyan-400
          transition-all
          "
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          lg:hidden
          border-t
          border-slate-800
          bg-slate-950
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="
              block
              px-6
              py-4
              hover:bg-slate-900
              hover:text-cyan-400
              transition-all
              "
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}