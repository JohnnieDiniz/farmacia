import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Produto from '../../models/Produto';
import { buscar, deletar } from '../../service/Service';
import { ToastAlerta } from '../../utils/ToastAlerta';


function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function apagarProduto() {
    setIsLoading(true);
    try {
      await deletar(`/produtos/${id}`);
      ToastAlerta('Produto apagado com sucesso', 'sucesso');
    } catch (error) {
      ToastAlerta('Erro ao apagar o Produto', 'erro');
    }
    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate('/produtos');
  }

  return (
    <div className='container w-1/3 mx-auto my-8'>
      <h1 className='text-4xl text-center py-4 font-bold text-red-600'>Deletar Produto</h1>
      <p className='text-center font-semibold mb-4'>
        Você tem certeza de que deseja apagar o produto a seguir?
      </p>

      <div className='border-red-600 border flex flex-col rounded-lg overflow-hidden justify-between shadow-md'>
        <header className='py-2 px-6 bg-red-600 text-white font-bold text-xl'>
          Produto
        </header>
        <div className='p-4 bg-white h-full'>
          <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
        </div>
        <div className="flex">
          <button
            className='text-white bg-blue-600 hover:bg-blue-800 w-full py-2 transition-colors'
            onClick={retornar}
          >
            Não
          </button>
          <button
            className='text-white bg-red-500 hover:bg-red-800 w-full py-2 flex items-center justify-center transition-colors'
            onClick={apagarProduto}
            disabled={isLoading}
          >
            {isLoading ? 'Apagando...' : 'Sim'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;