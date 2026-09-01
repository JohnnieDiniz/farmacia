import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import DeletarCategoria from './components/categoria/DeletarCategorias';
import FormCategoria from './components/categoria/FormCategorias';
import ListaCategorias from './components/categoria/ListaCategorias';
import DeletarProduto from './components/produtos/DeletarProduto';
import FormProduto from './components/produtos/FormProduto';
import ListaProdutos from './components/produtos/ListaProdutos';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
			<>
      <ToastContainer />
      <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/formcategoria" element={<FormCategoria />} />
          <Route path="/formcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="/formproduto" element={<FormProduto />} />
          <Route path="/formproduto/:id" element={<FormProduto />} />
          <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;