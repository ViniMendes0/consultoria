"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="-bo  mt-60 w-full bg-[#344A6F] text-white py-6 text-center">
      <div className="font-bold text-lg space-x-4">
        <span className="italic">Coritiba</span> -
        <span className="italic">111.111/1111.11</span> -
        <span className="italic">REDE SOCIAL</span> -
        <span className="italic">CONTATO</span> -
        <span className="italic">SOBRE NÓS</span> -
        <span className="italic">LGPD</span> -
        <span className="italic">FAQ</span>
      </div>
      <p className="text-sm text-white mt-2">
        RODAPÉ DA APLICAÇÃO COM O ANO ATUAL {year} E NOME DA EMPRESA DE
        DESENVOLVIMENTO
      </p>
    </footer>
  );
}
