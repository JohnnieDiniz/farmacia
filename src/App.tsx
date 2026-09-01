import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import DeletarCategoria from './components/categoria/DeletarCategorias';
import FormCategoria from './components/categoria/FormCategorias';
import ListaCategorias from './components/categoria/ListaCategorias';


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />

        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/formcategoria" element={<FormCategoria />} />
            <Route path="/formcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;