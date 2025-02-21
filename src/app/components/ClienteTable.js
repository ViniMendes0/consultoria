import React from "react";

const ClienteTable = ({ searchQuery, clientes }) => {
  const filteredClients = clientes.filter((client) => {
    return (
      client.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.cpf.includes(searchQuery)
    );
  });

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
          {filteredClients.map((client) => (
            <tr key={client.id} className="text-center">
              <td className="border border-gray-500 p-2 bg-[#fffffF] text-black">
                {client.id}
              </td>
              <td className="border border-gray-500 bg-[#ffffff] text-black p-2">
                {client.nome}
              </td>
              <td className="border border-gray-500 bg-[#ffffff] text-black p-2">
                {client.cpf}
              </td>
              <td className="border border-gray-500 bg-[#ffffff] text-black p-2">
                {client.telefone}
              </td>
              <td className="border border-gray-500 p-2">{client.area}</td>{" "}
              
              <td className="border border-gray-500 bg-[#ffffff] text-black p-2">
                {client.status}
              </td>
              <td className="border border-gray-500 p-2">
                {client.dataNascimento}
              </td>
              <td className="border border-gray-500 bg-[#ffffff] text-black p-2">
                {client.sexo}
              </td>
              <td className="border border-gray-500 p-2">{client.cidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClienteTable;
