import { Link } from 'react-router-dom';
import luminaire from '../assets/luminaire.jpeg';
import mirroir from '../assets/mirroir.jpeg';
import vase from '../assets/vase.jpeg';
import textille from '../assets/textille.jpeg'
import './categoriesSection.css';

export default function CategoriesSection2() {
  const categories = [
    {
      id: 1,
      name: 'luminaire',
      image: luminaire,
      link: '/all_categories'
    },
    {
      id: 2,
      name: 'mirroir',
      image: mirroir,
      link: '/all_categories'
    },
    {
      id: 3,
      name: 'vase et bougie',
      image: vase ,
      link: '/all_categories'
    },
    {
      id: 4,
      name: 'testille',
      image: textille,
      link: '/all_categories'
    }
  ];

  return (
    <section className="categories-section">
      <div className="categories-container">
        {/* Titre de la section */}
        <h2 className="categories-title">Decoration</h2>
        
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