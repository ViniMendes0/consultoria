import React from "react";

const TeamSection = () => {
  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-extrabold text-[#344A6F]">
        CONHEÇA NOSSA <span className="text-[#d8999e]">EQUIPE</span>
      </h2>
      <p className="italic text-black mt-2">
        Conheça as pessoas que fazem tudo acontecer!
      </p>
      <div className="w-16 h-1 bg-[#344A6F] mx-auto mt-2"></div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 px-6">
        {/* Card 1 */}
        <div className=" shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
          <img
            src="/equipe1.jpg"
            alt="equipe"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="text-lg font-bold text-[#344a6f]">Amanda Baker</h3>
          <p className="text-sm text-black">Frase aqui!</p>
        </div>

        {/* Card 2 */}
        <div className=" shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
          <img
            src="/equipe1.jpg"
            alt="Membro 2"
            className="w-24 h-24 mx-auto rounded-full mb-5"
          />
          <h3 className="text-lg font-bold text-[#344A6F]">Amanda Baker</h3>
          <p className="text-sm text-black">Frase aqui</p>
        </div>

        {/* Card 3 */}
        <div className=" shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
          <img
            src="/equipe1.jpg"
            alt="Membro 3"
            className="w-24 h-24 mx-auto rounded-full mb-6"
          />
          <h3 className="text-lg font-bold text-[#344A6F]">Amanda Baker</h3>
          <p className="text-sm text-black">Frase aqui</p>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <a
          href="https://www.whatsapp.com/?lang=pt_BR" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#d8999e] text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-[#c07f85] transition duration-300 inline-block"
        >
          Fale Conosco no WhatsApp!
        </a>
      </div>
    </div>
  );
};

export default TeamSection;
