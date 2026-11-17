import { Link } from 'react-router-dom';
import salon from '../assets/salon.jpeg';
import Salle_a_manger from '../assets/Salle_a_manger.jpeg';
import bureau from '../assets/bureau.jpeg';
import cuisine from '../assets/cuisine.jpeg';

import './categoriesSection.css';

export default function CategoriesSection1() {
  const categories = [
    {
      id: 1,
      name: 'Salon',
      image: salon,
      link: '/all_categories'
    },
    {
      id: 2,
      name: 'Salle à Manger',
      image: Salle_a_manger,
      link: '/all_categories'
    },
    {
      id: 3,
      name: 'Bureau',
      image: bureau,
      link: '/all_categories'
    },
    {
      id: 4,
      name: 'Cuisine',
      image: cuisine,
      link: '/all_categories'
    }
  ];

  return (
    <section className="categories-section">
      <div className="categories-container">
        {/* Titre de la section */}
        <h2 className="categories-title">Meubles</h2>
        
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