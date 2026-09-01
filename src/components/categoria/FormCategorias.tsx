import { type ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Categoria from '../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../service/Service';
import { ToastAlerta } from '../../utils/ToastAlerta';


function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
  });
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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        ToastAlerta('Categoria atualizada com sucesso', 'sucesso');
      } catch (error: any) {
        ToastAlerta('Erro ao atualizar a Categoria', 'erro');
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        ToastAlerta('Categoria cadastrada com sucesso', 'sucesso');
      } catch (error: any) {
        ToastAlerta('Erro ao cadastrar a Categoria', 'erro');
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto my-8">
      <h1 className="text-4xl text-center font-bold mb-8 text-red-600">
        {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Nome"
            name='nome'
            className="border-2 border-slate-300 rounded-lg p-2 outline-none focus:border-red-600"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-slate-300 rounded-lg p-2 outline-none focus:border-red-600"
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button
          className="rounded-lg text-white bg-red-600 hover:bg-red-800 w-1/2 py-2 mx-auto flex justify-center transition-colors"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Carregando...' : 'Confirmar'}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;