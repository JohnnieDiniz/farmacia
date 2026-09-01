import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center h-full w-full py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-8">
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <h2 className="text-5xl font-bold text-red-600">
            Seja bem vindo!
          </h2>
          <p className="text-xl text-gray-800">
            Aqui você encontra Medicamentos e Cosméticos!
          </p>
          <div className="flex justify-start mt-4">
            <Link to="/formcategoria">
              <button className="rounded-lg bg-red-600 text-white py-3 px-8 font-bold hover:bg-red-800 transition-colors duration-300 shadow-md">
                Cadastrar Categoria
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://ik.imagekit.io/JohnnieDiniz/farmacia/home.png"
            alt="Ilustração de uma farmacêutica no balcão"
            className="w-full max-w-112.5 h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;