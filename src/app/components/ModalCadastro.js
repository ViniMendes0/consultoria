"use client";
import React, { useState } from "react";

const ModalCadastro = ({ isOpen, onClose }) => {
  
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [cidade, setCidade] = useState("");
  const [status, setStatus] = useState("");
  const [observacoes, setObservacoes] = useState("");

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
              Cadastro do Cliente
            </h2>

            
            <div className="grid grid-cols-2 gap-3">
              
              <input type="text" placeholder="Nome Completo" value={nome}
                onChange={(e) => setNome(e.target.value)} className="p-2 border rounded"
              />

              <input type="text" placeholder="CPF: 000.000.000-00" value={cpf} 
              onChange={(e) => setCpf(e.target.value)} className="p-2 border rounded"
              />

              <input type="text" placeholder="Telefone: (00) 0 0000-0000" value={telefone}
                onChange={(e) => setTelefone(e.target.value)} className="p-2 border rounded"
              />

              <input type="date" value={dataNascimento} 
              onChange={(e) => setDataNascimento(e.target.value)} className="p-2 border rounded"
              />

              <input type="text" placeholder="Cidade" value={cidade}
                onChange={(e) => setCidade(e.target.value)} className="p-2 border rounded"
              />

              <input type="text" placeholder="Status" value={status}
                onChange={(e) => setStatus(e.target.value)} className="p-2 border rounded"
              />

            


              <div className="col-span-2 flex gap-4 items-center">
                <span className="text-gray-700">Sexo:</span>

                <label className="flex items-center">
                  
                  
                  <input type="radio" value="Masculino" checked={sexo === "Masculino"}
                    onChange={(e) => setSexo(e.target.value)} className="mr-2" />
                  Masculino
                </label>


                <label className="flex items-center">
                  
                  <input type="radio" value="Feminino" checked={sexo === "Feminino"}
                    onChange={(e) => setSexo(e.target.value)} className="mr-2" />
                  Feminino
                </label>


                 <label className="flex items-center">
                  
                  <input type="radio" value="Não binario" checked={sexo === "Não binario"}
                    onChange={(e) => setSexo(e.target.value)} className="mr-2" />
                  Não binario
                </label>


                
                 <label className="flex items-center">
                  
                  <input type="radio" value="Outro" checked={sexo === "Outro"}
                    onChange={(e) => setSexo(e.target.value)} className="mr-2" />
                  Outro
                </label>

              </div>
            </div>

           
            <textarea
              placeholder="Observações"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              className="w-full p-2 border rounded mt-2"
            ></textarea>

           
            <div className="flex justify-between mt-4">
              <button
                onClick={onClose}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Fechar
              </button>

              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCadastro;
