const NavegueSection = () => {
  return (
    <div className="text-center -mt-96">
      <h2 className="mt-56 text-3xl font-extrabold text-[#344A6F]">Navegue</h2>
      <p className="italic text-black mt-2">Conheça o nosso site</p>
      <div className="w-16 h-1 bg-[#344A6F] mx-auto mt-2"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 px-6">
       
        <div
          className="relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden"
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
          className="relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: "url('/servicos.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#344A6F] opacity-95"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center hover:bg-[#344A6F] transition duration-700">
            <img src="/icone-servicos.png" alt="Ícone" className="w-12 mb-2" />
            <h3 className="text-lg font-bold text-[#d8999e]">SERVIÇOS</h3>
            <p className="text-sm mt-2 text-[#d8999e] ">
              Confira nossos serviços.
            </p>
          </div>
        </div>

        <div
          className="relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: "url('/clareza.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#344A6F] opacity-95"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center hover:bg-[#344A6F] transition duration-700">
            <img src="/clareza.png" alt="Ícone" className="w-12 mb-2" />
            <h3 className="text-lg font-bold text-[#d8999e] ">CLAREZA</h3>
            <p className="text-sm mt-2 text-[#d8999e] ">
              Criando processos confiáveis.
            </p>
          </div>
        </div>

        <div
          className="relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: "url('/rentabilidade.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#344A6F] opacity-95"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center hover:bg-[#344A6F] transition duration-700">
            <img
              src="/icone-rentabilidade.png"
              alt="Ícone"
              className="w-12 mb-2"
            />
            <h3 className="text-lg font-bold text-[#d8999e] ">RENTABILIDADE</h3>
            <p className="text-sm mt-2 text-[#d8999e] ">
              Reduzindo suas despesas e definindo seus preços corretamente.
            </p>
          </div>
        </div>

        <div
          className="relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: "url('/expansao.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#344A6F] opacity-95"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center hover:bg-[#344A6F] transition duration-700">
            <img src="/icone-expansao.png" alt="Ícone" className="w-12 mb-2" />
            <h3 className="text-lg font-bold text-[#d8999e] ">EXPANSÃO</h3>
            <p className="text-sm mt-2 text-[#d8999e] ">
              Gerenciando endividamentos e captando recursos para o seu
              crescimento.
            </p>
          </div>
        </div>

        <div
          className="relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: "url('/roi.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#344A6F] opacity-95"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center hover:bg-[#344A6F] transition duration-700">
            <img src="/icone-roi.png" alt="Ícone" className="w-12 mb-2" />
            <h3 className="text-lg font-bold text-[#d8999e] ">ROI</h3>
            <p className="text-sm mt-2 text-[#d8999e] ">
              Gerenciando a distribuição de dividendos para os sócios.
            </p>
          </div>
        </div>

        <div
          className="relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: "url('/direcionamento.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#344A6F] opacity-95"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center hover:bg-[#344A6F] transition duration-700">
            <img
              src="/icone-direcionamento.png"
              alt="Ícone"
              className="w-12 mb-2"
            />
            <h3 className="text-lg font-bold text-[#d8999e] ">
              DIRECIONAMENTO
            </h3>
            <p className="text-sm mt-2 text-[#d8999e] ">
              Planejando de forma estratégica a sua melhor rota.
            </p>
          </div>
        </div>

        
        <div
          className="relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: "url('/estabilidade.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#344A6F] opacity-95"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center hover:bg-[#344A6F] transition duration-700">
            <img
              src="/icone-estabilidade.png"
              alt="Ícone"
              className="w-12 mb-2"
            />
            <h3 className="text-lg font-bold text-[#d8999e] ">ESTABILIDADE</h3>
            <p className="text-sm mt-2 text-[#d8999e] ">
              Fortalecendo sua empresa.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default NavegueSection;
