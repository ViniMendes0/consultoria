import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ClienteActions from "../components/ClienteActions";
import ClienteTable from "../components/ClienteTable";
import Footer from "../components/Footer";


const ClientesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-pink-0">
      <Navbar
       />
      <div className="flex-grow flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-gray-700 mb-1"></h1>
        <SearchBar />
        <ClienteActions>
          <ClienteTable />
        </ClienteActions>
      </div>
      <Footer />
    </div>
  );
};

export default ClientesPage;
