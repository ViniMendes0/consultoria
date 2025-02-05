"use client";

import SocialIcons from "./SocialIcons";


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className=" mt-60 w-full bg-[#344A6F] text-white py-4 text-center">
      <SocialIcons />
      Todos os direitos reservados a Ls Consultoria {2025}
    </footer>
  );
}

