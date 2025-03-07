"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import ClienteActions from "./ClienteActions";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/pagina-inicial";

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#344A6F] text-[#344A6F] relative flex items-center justify-between p-4 opacity-80 bg-white/10 backdrop-blur-2xl shadow-md z-50">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
        <h1 className="text-lg font-bold text-[#344A6F] opacity-70">
          Ls Consultoria
        </h1>

        <nav className="hidden md:flex items-center gap-6">
          {["Pagina inicial", "Clientes", "Relatorios"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className={`hover:text-[#caa4a7] ${
                pathname === `/${item.toLowerCase().replace(" ", "-")}`
                  ? "border-b-2 border-[#caa4a7] opacity-70"
                  : ""
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isHome ? (
            <>
              <button className="bg-gradient-to-r from-green-600 to-green-400 text-black px-3 py-1 rounded hover:opacity-50 transition shadow-2xl">
                Login
              </button>
              <button className="bg-gradient-to-r from-red-600 to-red-400 text-white px-3 py-1 rounded hover:opacity-50 transition shadow-xl">
                Logout
              </button>
            </>
          ) : (
            <button className="bg-[#d8999e] text-[#344A6F] px-4 py-2 rounded hover:bg-[#fddfe1]">
              Sair
            </button>
          )}
        </div>

        <button
          className="md:hidden text-[#344A6F] text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

    
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          menuOpen ? "h-auto py-6" : "h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {["Pagina inicial", "Clientes", "Relatorios"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-[#344A6F] text-xl hover:text-[#caa4a7] opacity-80"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mt-4">
          {isHome ? (
            <>
              <button className="bg-gradient-to-r from-green-600 to-green-400 text-black px-4 py-2 rounded">
                Login
              </button>
              <button className="bg-gradient-to-r from-red-600 to-red-400 text-white px-4 py-2 rounded">
                Logout
              </button>
            </>
          ) : (
            <button className="bg-[#d8999e] text-[#344A6F] px-4 py-2 rounded">
              Sair
            </button>
          )}
        </div>

       
        <div className=" mt-6 hidden md:block px-4">
          <ClienteActions />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
