import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Categoria from '../../models/Categoria';
import { buscar, deletar } from '../../service/Service';

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function apagarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);
      alert('Categoria apagada com sucesso');
    } catch (error) {
      alert('Erro ao apagar a Categoria');
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className='container w-1/3 mx-auto my-8'>
      <h1 className='text-4xl text-center py-4 font-bold text-red-600'>Deletar Categoria</h1>
      <p className='text-center font-semibold mb-4'>
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className='border-red-600 border flex flex-col rounded-lg overflow-hidden justify-between shadow-md'>
        <header className='py-2 px-6 bg-red-600 text-white font-bold text-xl'>
          Categoria
        </header>
        <div className='p-4 bg-white h-full'>
          <h4 className='text-lg font-semibold uppercase'>{categoria.nome}</h4>
          <p className='text-gray-600 mt-2'>{categoria.descricao}</p>
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
            onClick={apagarCategoria}
            disabled={isLoading}
          >
            {isLoading ? 'Apagando...' : 'Sim'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;