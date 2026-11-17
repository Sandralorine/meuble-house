import { Link } from 'react-router-dom';
import etageres from '../assets/etageres.jpeg';
import bibliotheques from '../assets/bibliotheques.jpeg';
import comode from '../assets/comode.jpeg';
import rangement_mural from '../assets/rangement_mural.jpeg'
import './categoriesSection.css';

export default function CategoriesSection2() {
  const categories = [
    {
      id: 1,
      name: 'etegeres',
      image: etageres,
      link: '/all_categories'
    },
    {
      id: 2,
      name: 'bibliotheques',
      image: bibliotheques,
      link: '/all_categories'
    },
    {
      id: 3,
      name: 'comode et buffets',
      image: comode,
      link: '/all_categories'
    },
    {
      id: 4,
      name: 'rangement mural',
      image: rangement_mural,
      link: '/all_categories'
    }
  ];

  return (
    <section className="categories-section">
      <div className="categories-container">
        {/* Titre de la section */}
        <h2 className="categories-title">Rangement</h2>
        
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