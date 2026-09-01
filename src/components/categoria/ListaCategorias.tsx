import { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';
import type Categoria from '../../models/Categoria';
import { buscar } from '../../service/Service';
import CardCategorias from './CardCategorias';


function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarCategorias() {
    setIsLoading(true);
    try {
      await buscar('/categorias', setCategorias);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarCategorias();
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
          {!isLoading && categorias.length === 0 && (
            <span className="text-3xl text-center my-8">Nenhuma categoria encontrada</span>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;