import { useState, useEffect } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import inspiration1 from '../assets/inspiration1.jpeg';
import inspiration2 from '../assets/inspiration2.jpeg';
import inspiration3 from '../assets/inspiration3.jpeg';
import inspiration4 from '../assets/inspiration4.jpeg';
import inspiration5 from '../assets/inspiration5.jpeg';
import inspiration6 from '../assets/inspiration6.jpeg';
import inspiration7 from '../assets/inspiration7.jpeg';
import inspiration8 from '../assets/inspiration8.jpeg';
import inspiration9 from '../assets/inspiration9.jpeg';
import inspiration10 from '../assets/inspiration10.jpeg';
import inspiration11 from '../assets/inspiration11.jpeg';
import inspiration12 from '../assets/inspiration12.jpeg';
import inspiration13 from '../assets/inspiration13.jpeg';
import inspiration14 from '../assets/inspiration14.jpeg';
import inspiration15 from '../assets/inspiration15.jpeg';
import inspiration16 from '../assets/inspiration16.jpeg';
import inspiration17 from '../assets/inspiration17.jpeg';
import inspiration18 from '../assets/inspiration18.jpeg';
import inspiration19 from '../assets/inspiration19.jpeg';
import inspiration20 from '../assets/inspiration20.jpeg';


import './all_categories.css';

export default function AllCategories() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('tous');
  const itemsPerPage = 16;

  // Tous les produits
  const allProducts = [
    // INSPIRATIONS(20 produits)
    { id: 49, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration1, rating: 4 },
    { id: 50, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration2, rating: 3 },
    { id: 51, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration3, rating: 1 },
    { id: 52, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration4, rating: 4 },
    { id: 53, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration5, rating: 0 },
    { id: 54, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration6, rating: 2 },
    { id: 56, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration7, rating: 1 },
    { id: 57, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration8, rating: 4 },
    { id: 58, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration9, rating: 2 },
    { id: 59, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration10, rating: 3 },
    { id: 60, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration11, rating: 0 },
    { id: 61, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration12, rating: 5 },
    { id: 62, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration13, rating: 4 },
    { id: 63, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration14, rating: 3 },
    { id: 64, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration15, rating: 1 },
    { id: 65, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration16, rating: 2 },
    { id: 66, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration17, rating: 3 },
    { id: 67, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration18, rating: 4 },
    { id: 68, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration19, rating: 1 },
    { id: 69, name: 'Salon complet', category: 'Inspiration', price: '450 000 FCFA', image: inspiration20, rating: 4 },
    
    
  ];

  // Catégories pour la sidebar (calcul automatique)
  const categories = [
    { id: 'tous', name: 'inspirations', count: allProducts.length },
    { id: 'salon', name: 'Salon', count: allProducts.filter(p => p.category === 'salon').length },
    { id: 'salle-a-manger', name: 'Salle à Manger', count: allProducts.filter(p => p.category === 'salle-a-manger').length },
    { id: 'bureau', name: 'Bureau', count: allProducts.filter(p => p.category === 'bureau').length },
    { id: 'cuisine', name: 'Cuisine', count: allProducts.filter(p => p.category === 'cuisine').length },
    { id: 'chambre', name: 'Chambre', count: allProducts.filter(p => p.category === 'chambre').length },
    { id: 'luminaire', name: 'Luminaire', count: allProducts.filter(p => p.category === 'luminaire').length },
    { id: 'mirroir', name: 'Mirroir', count: allProducts.filter(p => p.category === 'mirroir').length },
    { id: 'vase et bougies', name: 'Vases et bougies', count: allProducts.filter(p => p.category === 'vase et bougies').length },
    { id: 'etageres', name: 'Étagères', count: allProducts.filter(p => p.category === 'etageres').length },
    { id: 'bibliotheques', name: 'Bibliothèques', count: allProducts.filter(p => p.category === 'bibliotheques').length },
    { id: 'comode', name: 'Commode', count: allProducts.filter(p => p.category === 'comode').length },
    { id: 'rangement', name: 'Rangement mural', count: allProducts.filter(p => p.category === 'rangement').length },
    { id: 'Inspiration', name: 'inspiration', count: allProducts.filter(p => p.category === 'Inspiration').length }
    
  ];

  // Filtrer les produits selon la catégorie active
  const filteredProducts = activeCategory === 'tous' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  // Appliquer le filtre de recherche si présent
  const searchFilteredProducts = searchQuery
    ? filteredProducts.filter(p => 
        p.category.toLowerCase().includes(searchQuery) ||
        p.name.toLowerCase().includes(searchQuery)
      )
    : filteredProducts;

  // Effet pour mettre à jour la catégorie active basée sur la recherche
  useEffect(() => {
    if (searchQuery) {
      // Vérifier si la recherche correspond à une catégorie
      const matchingCategory = categories.find(
        cat => cat.id !== 'tous' && cat.id.includes(searchQuery)
      );
      
      if (matchingCategory) {
        setActiveCategory(matchingCategory.id);
      } else {
        setActiveCategory('tous');
      }
      setCurrentPage(1);
    }
  }, [searchQuery]);

  // Calculer les produits de la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = searchFilteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Nombre total de pages
  const totalPages = Math.ceil(searchFilteredProducts.length / itemsPerPage);

  // Changer de page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Changer de catégorie
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  return (
    <div className="all-categories-page">
      <Navbar />
      
      <div className="categories-layout">
        {/* Sidebar gauche */}
        <aside className="sidebar">
          <h2 className="sidebar-title">Catégories</h2>
          <nav className="sidebar-nav">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
              >
                <span className="category-name">{category.name}</span>
                <span className="category-count">({category.count})</span>
                <ChevronRight className="category-arrow" />
              </button>
            ))}
          </nav>
        </aside>

        {/* Contenu principal */}
        <main className="main-content">
          <div className="content-header">
            <h1 className="page-title">
              {searchQuery ? `Résultats pour "${searchQuery}"` : 'Toutes les inspirations'}
            </h1>
            <p className="products-count">
              {searchFilteredProducts.length} Modéle{searchFilteredProducts.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Grille de produits */}
          {currentProducts.length > 0 ? (
            <div className="products-grid">
              {currentProducts.map((product) => (
                <Link to={`/productDetail/${product.id}`} key={product.id} className="product-card">
                  <div className="product-image-wrapper">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-overlay">
                      <button className="view-btn">Voir le produit</button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="star-icon"
                          fill={star <= (product.rating || 0) ? "#FFD700" : "none"}
                          stroke="#FFD700"
                        />
                      ))}
                    </div>
                    <p className="product-price">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h2 className="no-results-title">Aucun produit trouvé</h2>
              <p className="no-results-text">
                Désolé, nous n'avons trouvé aucun produit correspondant à "{searchQuery}".
              </p>
              <p className="no-results-suggestion">
                Essayez avec d'autres mots-clés comme : salon, bureau, cuisine, chambre...
              </p>
              <Link to="/all_categories" className="back-to-all-btn">
                Voir tous les produits
              </Link>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Précédent
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button 
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Suivant
              </button>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}