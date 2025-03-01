const HeroSection = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center -mt-96 -top-28 text-center z-10 px-4 sm:px-0">
      {/* Versão para TELAS GRANDES */}
      <div className="hidden sm:block">
        <p className="text-4xl font-extrabold">
          <em className="font-poppins text-[#344A6F] text-opacity-80">
            CONSULTORIA PARA NEGÓCIOS.
          </em>
        </p>
        <div className="mt-6">
          <h1 className="text-2xl font-medium text-black text-opacity-55">
            Sua recolocação no mercado começa aqui!
          </h1>
        </div>
      </div>

      {/* Versão para TELAS MENORES */}
      <div className="block sm:hidden">
        <p className="text-xl font-extrabold  mt-44">
          <em className="font-poppins text-[#344A6F] text-opacity-80">
            CONSULTORIA PARA NEGÓCIOS.
          </em>
        </p>

        <h1 className="text-lg font-medium text-black text-opacity-55 ">
          Sua recolocação no mercado começa aqui!
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
