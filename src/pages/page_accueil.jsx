import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import CategoriesSection1 from '../components/categoriesSection1';
import CategoriesSection2 from '../components/categoriesSection2';
import CategoriesSection3 from '../components/categoriesSection3';
import CategoriesSection4 from '../components/categoriesSection4';
import './page_accueil.css';

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Carousel />
      <CategoriesSection1 />
      <CategoriesSection2 />
      <CategoriesSection3 />
      <CategoriesSection4 />

     
      <Footer />
      
      
    </div>
  );
}