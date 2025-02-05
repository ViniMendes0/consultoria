"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/pagina-inicial";

  const [active, setActive] = useState("");

  return (
    <header className="bg-[#344A6F] text-[#344A6F] relative flex items-center justify-between p-4 opacity-80 bg-white/10 backdrop-blur-2xl shadow-md z-50">
      <h1 className="text-lg font-bold text-[#344A6F] opacity-70 ">
        Ls Consultoria
      </h1>
      <div className="flex items-center gap-6 ">
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
      </div>

      <div className="flex gap-4 p-2">
        {isHome ? (
          <>
            <button className="bg-gradient-to-r from-green-600 to-green-300 text-black px-3 py-1 rounded hover:opacity-80 transition shadow-xl">
              Login
            </button>

            <button className="bg-gradient-to-r from-red-500 to-red-400 text-white px-3 py-1 rounded hover:opacity-80 transition shadow-xl">
              Logout
            </button>
          </>
        ) : (
          <button className="bg-[#d8999e] text-[#344A6F] px-4 py-2 rounded hover:bg-[#fae9ea]">
            Sair
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
