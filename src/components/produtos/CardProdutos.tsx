import { Link } from 'react-router-dom';
import type Produto from '../../models/Produto';


interface CardProdutoProps {
  produto: Produto;
}

function CardProdutos({ produto }: CardProdutoProps) {
  return (
    <div className='border-red-600 border flex flex-col rounded-lg overflow-hidden justify-between shadow-md'>
      <header className='py-2 px-6 bg-red-600 text-white font-bold text-xl'>
        Produto
      </header>
      <div className='p-4 bg-white flex flex-col h-full gap-2'>
        <img src={produto.foto} alt={produto.nome} className='w-full h-48 object-cover rounded-lg' />
        <h4 className='text-lg font-semibold uppercase mt-2'>{produto.nome}</h4>
        <p className='text-gray-800 font-bold'>Preço: R$ {produto.preco}</p>
        <p className='text-gray-800 font-bold'>Categoria: {produto.categoria?.nome}</p>
      </div>
      <div className="flex">
        <Link to={`/formproduto/${produto.id}`} className='w-full text-white bg-blue-600 hover:bg-blue-800 flex items-center justify-center py-2 transition-colors'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarproduto/${produto.id}`} className='text-white bg-red-500 hover:bg-red-800 w-full flex items-center justify-center py-2 transition-colors'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProdutos;