const NavegueSection = () => {
  return (
    <div className="text-center mt-20">
      <h2 className="mt-56 text-3xl font-extrabold text-[#344A6F]">Navegue</h2>
      <p className="italic text-black mt-2">Conheça o nosso site</p>
      <div className="w-16 h-1 bg-[#344A6F] mx-auto mt-2"></div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 px-6">
        <div
          className="relative w-full md:w-1/3 h-64 bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: "url('/quem-somos.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#344A6F] opacity-95"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center hover:bg-[#344A6F] transition duration-700">
            <img
              src="/icone-quem-somos.png"
              alt="Ícone"
              className="w-12 mb-2"
            />
            <h3 className="text-lg font-bold text-[#d8999e] ">QUEM SOMOS</h3>
            <p className="text-sm mt-2 text-[#d8999e] ">
              Descubra como chegamos até aqui.
            </p>
          </div>
        </div>

        <div
          className="relative w-full md:w-1/3 h-64 bg-cover bg-center rounded-lg overflow-hidden "
          style={{ backgroundImage: "url('/servicos.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#344A6F] opacity-95 "></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center hover:bg-[#344A6F] transition duration-700">
            <img src="/icone-servicos.png" alt="Ícone" className="w-12 mb-2 " />
            <h3 className="text-lg font-bold text-[#d8999e]">SERVIÇOS</h3>
            <p className="text-sm mt-2 text-[#d8999e] ">
              Confira nossos serviços.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavegueSection;
