"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 
      ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

        {/* LOGO */}
        <Link href="/">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight 
          bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
          text-transparent bg-clip-text hover:scale-105 transition">
            Jashandeep Singh
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <Link href={link.href}>
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 text-white flex flex-col items-center justify-center gap-10 text-2xl transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
            className="hover:text-blue-400 transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;