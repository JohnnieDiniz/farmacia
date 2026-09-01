import { type ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Categoria from '../../models/Categoria';
import type Produto from '../../models/Produto';
import { buscar, atualizar, cadastrar } from '../../service/Service';
import { ToastAlerta } from '../../utils/ToastAlerta';


function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: ''});
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    preco: 0,
    foto: '',
    categoria: null
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto);
  }

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria
    });
  }

  function retornar() {
    navigate('/produtos');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar('/produtos', produto, setProduto);
        ToastAlerta('Produto atualizado com sucesso', 'sucesso');
      } catch (error: any) {
        ToastAlerta('Erro ao atualizar o Produto', 'erro');
      }
    } else {
      try {
        await cadastrar('/produtos', produto, setProduto);
        ToastAlerta('Produto cadastrado com sucesso', 'sucesso' );
      } catch (error: any) {
        ToastAlerta('Erro ao cadastrar o Produto', 'erro');
      }
    }
    setIsLoading(false);
    retornar();
  }


  return (
    <div className="container flex flex-col items-center justify-center mx-auto my-8">
      <h1 className="text-4xl text-center font-bold mb-8 text-red-600">
        {id === undefined ? 'Cadastrar Produto' : 'Editar Produto'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoProduto}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            className="border-2 border-slate-300 rounded-lg p-2 outline-none focus:border-red-600"
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="border-2 border-slate-300 rounded-lg p-2 outline-none focus:border-red-600"
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="number"
            placeholder="Quantidade"
            name="quantidade"
            className="border-2 border-slate-300 rounded-lg p-2 outline-none focus:border-red-600"
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            step="0.01"
            placeholder="Preço"
            name="preco"
            className="border-2 border-slate-300 rounded-lg p-2 outline-none focus:border-red-600"
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="foto">URL da Foto</label>
          <input
            type="text"
            placeholder="URL da Foto"
            name="foto"
            className="border-2 border-slate-300 rounded-lg p-2 outline-none focus:border-red-600"
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            id="categoria"
            className="border-2 border-slate-300 rounded-lg p-2 outline-none focus:border-red-600"
            onChange={(e) => buscar(`/categorias/${e.target.value}`, setCategoria)}
          >
            <option value="" disabled selected>Selecione uma Categoria</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </select>
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

export default FormProduto;