import React from "react";

const ClienteTable = ({ searchQuery, clientes }) => {
  const filteredClients = clientes.filter((client) => {
    return (
      client.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.cpf.includes(searchQuery)
    );
  });

  return (
    <div className="-mb-60  bg-white p-4 rounded-md shadow-md border border-pink-300">
      <div className="overflow-x-auto"> 
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-400 text-white">
              <th className="border bg-[#344A6F] p-2">ID</th>
              <th className="border bg-[#344A6F] p-2">Nome</th>
              <th className="border bg-[#344A6F] p-2 px-14">CPF</th>
              <th className="border bg-[#344A6F] p-2 px-10">Telefone</th>
              <th className="border bg-[#344A6F] p-2">Cidade</th>
              <th className="border bg-[#344A6F] p-2">Área</th>
              <th className="border bg-[#344A6F] p-2">Status</th>
              <th className="border bg-[#344A6F] p-2">Sexo</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{client.nome}</td>
                  <td className="border p-2">{client.cpf}</td>
                  <td className="border p-2">{client.telefone}</td>
                  <td className="border p-2">{client.cidade}</td>
                  <td className="border p-2">{client.area}</td>
                  <td className="border p-2">{client.status}</td>
                  <td className="border p-2">{client.sexo}</td>
                </tr>

                {client.observacoes && (
                  <tr>
                    <td colSpan="8" className="border p-2 bg-gray-200">
                      <strong>Observações:</strong> {client.observacoes}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClienteTable;
