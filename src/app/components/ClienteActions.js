import React, { useState } from "react";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import ClienteTable from "./ClienteTable";
import ModalCadastro from "./ModalCadastro"; 

const ClienteActions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [clientes, setClientes] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveClient = (newClient) => {
   
    setClientes((prevClientes) => [
      ...prevClientes,
      { ...newClient, id: Date.now() },
    ]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handleOpenModal}
          className="flex items-center gap-2 font-semibold bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-600 transition"
        >
          <FaUserPlus className="text-white" />
          Cadastrar Cliente
        </button>

        <div className="flex gap-3">
          <button className="p-2 bg-yellow-300 rounded hover:bg-yellow-400 transition shadow-md">
            <FaEdit className="text-gray-700" />
          </button>
          <button className="p-2 bg-red-400 rounded hover:bg-red-500 transition shadow-md">
            <FaTrash className="text-white" />
          </button>
        </div>
      </div>

      
      <div className="flex justify-center -mt-28 mb-20">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Digite o nome ou CPF para consultar..."
            className="w-96 p-3 pl-5 rounded-full border border-pink-400 focus:outline-none shadow-md text-gray-600 placeholder-gray-400"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <AiOutlineSearch size={20} />
          </button>
        </div>
      </div>

      
      <ClienteTable searchQuery={searchQuery} clientes={clientes} />

    
      <ModalCadastro
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveClient} 
      />
    </div>
  );
};

export default ClienteActions;
