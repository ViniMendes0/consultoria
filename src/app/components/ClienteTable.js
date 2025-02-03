const ClienteTable = () => {
    return (
      <div className="-mb-60 bg-white p-4 rounded-md shadow-md border border-pink-300">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-400 text-white">
              <th className="border bg-[#344A6F] p-2">ID</th>
              <th className="border bg-[#344A6F] p-2 text-white">Nome</th>
              <th className="border bg-[#344A6F] p-2">CPF</th>
              <th className="border bg-[#344A6F] p-2 text-white">Telefone</th>
              <th className="border bg-[#344A6F] p-2">Área</th>
              <th className="border bg-[#344A6F] p-2 text-white">Status</th>
              <th className="border bg-[#344A6F] p-2">Data Nasc</th>
              <th className="border bg-[#344A6F] p-2 text-white">Sexo</th>
              <th className="border bg-[#344A6F] p-2">Cidade</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index} className="text-center">
                <td className="border border-white p-2 bg-[#344A6F] text-white">
                  {index + 1}
                </td>
                <td className="  border border-gray-500 bg-[#ffffff] text-black p-2">
                  <input
                    type="text"
                    className="w-28 text-center outline-none  text-black"
                  />
                </td>

                <td className="  border border-gray-500 bg-[#ffffff] text-black p-2">
                  <input
                    type="text"
                    className="w-28 text-center outline-none  text-black"
                  />
                </td>

                <td className="  border border-gray-500 bg-[#ffffff] text-black p-2">
                  <input
                    type="text"
                    className="w-28 text-center outline-none  text-black"
                  />
                </td>
                <td className="border border-gray-500 p-2">
                  <input
                    type="text"
                    className="w-24 text-center outline-none"
                  />
                </td>
                <td className="  border border-gray-500 bg-[#ffffff] text-black p-2">
                  <input
                    type="text"
                    className="w-28 text-center outline-none  text-black"
                  />
                </td>
                <td className="border border-gray-500 p-2">
                  <input
                    type="text"
                    className="w-20 text-center outline-none"
                  />
                </td>
                <td className="  border border-gray-500 bg-[#ffffff] text-black p-2">
                  <input
                    type="text"
                    className="w-28 text-center outline-none  text-black"
                  />
                </td>
                <td className="border border-gray-500 p-2">
                  <input
                    type="text"
                    className="w-28 text-center outline-none"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ClienteTable;