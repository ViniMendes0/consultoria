import React, { useState, useEffect } from "react";

const validarCPF = (cpf) => {
  cpf = cpf.replace(/\D/g, ""); 

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false; 
  }

  let soma = 0,
    resto;


  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

 
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true;
};


const formatarCPF = (valor) => {
  valor = valor.replace(/\D/g, ""); // Remove caracteres não numéricos
  valor = valor.replace(/^(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
  valor = valor.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
  return valor;
};

const ModalCadastro = ({ isOpen, onClose, onSave }) => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [area, setArea] = useState("");
  const [cidade, setCidade] = useState("");
  const [status, setStatus] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [error, setError] = useState("");

  const handleCPFChange = (e) => {
    setCpf(formatarCPF(e.target.value));
  };

  const handleSave = () => {
    if (
      !nome ||
      !cpf ||
      !telefone ||
      !dataNascimento ||
      !sexo ||
      !area ||
      !cidade ||
      !status
    ) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (!validarCPF(cpf)) {
      setError("CPF inválido. Verifique e tente novamente.");
      return;
    }

    setError("");
    onSave({
      nome,
      cpf,
      telefone,
      dataNascimento,
      sexo,
      area,
      cidade,
      status,
      observacoes,
    });
    onClose();
  };


  useEffect(() => {
    if (!isOpen) {
      setNome("");
      setCpf("");
      setTelefone("");
      setDataNascimento("");
      setSexo("");
      setArea("");
      setCidade("");
      setStatus("");
      setObservacoes("");
      setError("");
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
              Cadastro do Cliente
            </h2>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Nome Completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="CPF: 000.000.000-00"
                value={cpf}
                onChange={handleCPFChange}
                maxLength={14}
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Telefone: (00) 0 0000-0000"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="p-2 border rounded"
              />
              <input
                type="date"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="p-2 border rounded"
              />

              <input
                type="text"
                placeholder="Área"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="p-2 border rounded"
              />

              <div className="col-span-2 flex gap-4 items-center">
                <span className="text-gray-700">Sexo:</span>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Masculino"
                    checked={sexo === "Masculino"}
                    onChange={(e) => setSexo(e.target.value)}
                    className="mr-2"
                  />
                  Masculino
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Feminino"
                    checked={sexo === "Feminino"}
                    onChange={(e) => setSexo(e.target.value)}
                    className="mr-2"
                  />
                  Feminino
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Não binário"
                    checked={sexo === "Não binário"}
                    onChange={(e) => setSexo(e.target.value)}
                    className="mr-2"
                  />
                  Não binário
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Outro"
                    checked={sexo === "Outro"}
                    onChange={(e) => setSexo(e.target.value)}
                    className="mr-2"
                  />
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

              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
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
