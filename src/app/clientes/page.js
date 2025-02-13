"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ClienteActions from "../components/ClienteActions";
import ClienteTable from "../components/ClienteTable";
import Footer from "../components/Footer";
import ModalCadastro from "../components/ModalCadastro";

const ClientesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-pink-0">
      <Navbar />
      <div className="flex-grow flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-gray-700 mb-1"></h1>
        <SearchBar />

       
        <ClienteActions onOpenModal={() => setModalOpen(true)}>
          <ClienteTable />
        </ClienteActions>
      </div>

      {modalOpen && (
        <ModalCadastro isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}

      <Footer />
    </div>
  );
};

export default ClientesPage;
