import { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';
import type Produto from '../../models/Produto';
import { buscar } from '../../service/Service';
import CardProdutos from './CardProdutos';


function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarProdutos() {
    setIsLoading(true);
    try {
      await buscar('/produtos', setProdutos);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center h-[80vh]">
          <MoonLoader color="#dc2626" size={60} />
        </div>
      )}
      
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-8">
          {!isLoading && produtos.length === 0 && (
            <span className="text-3xl text-center my-8">Nenhum produto encontrado</span>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((produto) => (
              <CardProdutos key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;