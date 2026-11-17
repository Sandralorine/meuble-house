import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import LoginPage from './login/Login';  
import InscriptionPage from './login/inscription';
import RecuperationPage from './login/recuperation';
import Home from './pages/page_accueil';
import Pagecategories from './pages/all_categories';
import ProductDetail from './pages/productDetail';
import Inspiration from './pages/inspirations';
import Panier from './pages/panier';
import FinaliserCommande from './pages/FinaliserCommande';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/page_accueil" element={<Home/>} />  
        <Route path="/login" element={<LoginPage />} />
        <Route path="/inscription" element={<InscriptionPage />} />
        <Route path="/recuperation" element={<RecuperationPage />} />
        <Route path="/all_categories" element={<Pagecategories />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/inspirations" element={<Inspiration />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/FinaliserCommande" element={<FinaliserCommande />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}


export default App;