import { Link } from "react-router-dom";
import { PillIcon, MagnifyingGlassIcon, UserIcon, ShoppingCartIcon } from "@phosphor-icons/react";

function Navbar() {
  return (
    <div className="w-full flex justify-center py-4 bg-red-600 text-white shadow-lg">
      <div className="container flex justify-between items-center text-base mx-8">
        
        {/* Logo Farmácia */}
        <Link to="/home" className="text-2xl font-bold flex items-center gap-2">
          <div className="text-white flex items-center justify-center">
            <PillIcon size={32} />
          </div>
          <span className="tracking-wide">FARMÁCIA</span>
        </Link>

        {/* Barra de Pesquisa */}
        <div className="flex flex-1 max-w-2xl mx-12">
          <input 
            type="text" 
            placeholder="Procurar" 
            className="w-full rounded-l-lg px-4 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-red-900 bg-white"
          />
          <button className="bg-red-800 hover:bg-red-900 rounded-r-lg px-5 flex items-center justify-center transition-colors">
            <MagnifyingGlassIcon size={32} />
          </button>
        </div>

        {/* Links de Navegação e Ícones */}
        <div className="flex items-center gap-8">
          <div className="flex gap-5 font-medium">
            <Link to="/categorias" className="hover:text-red-200 transition-colors duration-300">
              Categorias
            </Link>
            <Link to="/formcategoria" className="hover:text-red-200 transition-colors duration-300">
              Cadastrar Categoria
            </Link>
          </div>
          
          <div className="flex gap-4 items-center">
            <UserIcon size={32} className="hover:text-red-200 cursor-pointer transition-colors duration-300" />
            <ShoppingCartIcon size={32} className="hover:text-red-200 cursor-pointer transition-colors duration-300" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;