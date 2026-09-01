import { Link } from 'react-router-dom';
import type Categoria from '../../models/Categoria';


interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className='border-red-600 border flex flex-col rounded-lg overflow-hidden justify-between shadow-md'>
      <header className='py-2 px-6 bg-red-600 text-white font-bold text-xl'>
        Categoria
      </header>
      <div className='p-4 bg-white h-full'>
        <h4 className='text-lg font-semibold uppercase'>{categoria.nome}</h4>
        <p className='text-gray-600 mt-2'>{categoria.descricao}</p>
      </div>
      <div className="flex">
        <Link to={`/formcategoria/${categoria.id}`} className='w-full text-white bg-blue-600 hover:bg-blue-800 flex items-center justify-center py-2 transition-colors'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarcategoria/${categoria.id}`} className='text-white bg-red-500 hover:bg-red-800 w-full flex items-center justify-center py-2 transition-colors'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;