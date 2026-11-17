import { Link } from 'react-router-dom';
import promotion1 from '../assets/promotion1.jpeg';
import promotion2 from '../assets/promotion2.jpeg';
import promotion3 from '../assets/promotion3.jpeg';
import promotion4 from '../assets/promotion4.jpeg'
import './categoriesSection.css';

export default function CategoriesSection2() {
  const categories = [
    {
      id: 1,
      name: 'Chaises',
      image: promotion1,
      link: '/all_categories'
    },
    {
      id: 2,
      name: 'Canapé salon',
      image: promotion2,
      link: '/all_categories'
    },
    {
      id: 3,
      name: 'bureau',
      image: promotion3 ,
      link: '/all_categories'
    },
    {
      id: 4,
      name: 'chaise de bureau',
      image: promotion4,
      link: '/all_categories'
    }
  ];

  return (
    <section className="categories-section">
      <div className="categories-container">
        {/* Titre de la section */}
        <h2 className="categories-title">Promotion</h2>
        
        {/* Grille des catégories */}
        <div className="categories-grid">
          {categories.map((category) => (
            <Link 
              to={category.link} 
              key={category.id} 
              className="category-card"
            >
              <div className="category-image-wrapper">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="category-image"
                />
                <div className="category-overlay"></div>
              </div>
              <div className="category-content">
                <h3 className="category-name">{category.name}</h3>
                <span className="category-link-text">Découvrir →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}