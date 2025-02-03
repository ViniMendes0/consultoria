import React from "react";
import { AiOutlineSearch } from "react-icons/ai"; // Importando o ícone de lupa

const SearchBar = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Digite o nome ou CPF para consultar..."
          className="w-96 p-3 pl-5 rounded-full border border-pink-400  focus:outline-none shadow-md text-gray-600 placeholder-gray-400"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
          <AiOutlineSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
