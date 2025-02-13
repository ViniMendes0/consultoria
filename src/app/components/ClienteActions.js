import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";

const ClienteActions = ({ onOpenModal, children }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        
        <button
          onClick={onOpenModal}
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

    
      <div className="rounded-lg h-64 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default ClienteActions;
