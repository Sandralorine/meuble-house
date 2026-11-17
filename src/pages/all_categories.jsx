import { useState, useEffect } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import bureau1 from '../assets/bureau1.jpg';
import bureau2 from '../assets/bureau2.jpg';
import bureau3 from '../assets/bureau3.jpg';
import bureau4 from '../assets/bureau4.jpg';
import luminaire1 from '../assets/luminaire1.jpg';
import luminaire2 from '../assets/luminaire2.jpg';
import luminaire3 from '../assets/luminaire3.jpg';
import vase1 from '../assets/vase1.jpg';
import vase2 from '../assets/vase2.jpg';
import bougie1 from '../assets/bougie1.jpg';
import bougie2 from '../assets/bougie2.jpg';
import bibliotheque1 from '../assets/bibliotheque1.jpg';
import bibiotheque2 from '../assets/bibiotheque2.jpg';
import bibliotheque3 from '../assets/bibliotheque3.jpg';
import rangement_mural from '../assets/rangement_mural.jpg';
import rangement_mural2 from '../assets/rangement_mural2.jpg';
import salon1 from '../assets/salon1.jpg';
import salon2 from '../assets/salon2.jpg';
import salon3 from '../assets/salon3.jpg';
import salon4 from '../assets/salon4.jpg';
import salon5 from '../assets/salon5.jpg';
import salon6 from '../assets/salon6.jpg';
import salon7 from '../assets/salon7.jpg';
import salle_a_manger3 from '../assets/salle_a_manger3.jpg';
import salle_a_manger2 from '../assets/salle_a_manger2.jpg';
import salle_a_manger4 from '../assets/salle_a_manger4.jpg';
import salle_a_manger5 from '../assets/salle_a_manger5.jpg';
import salle_a_manger6 from '../assets/salle_a_manger6.jpg';
import Salle_a_manger from '../assets/Salle_a_manger.jpeg';
import cuisine1 from '../assets/cuisine1.jpg';
import cuisine2 from '../assets/cuisine2.jpg';
import cuisine3 from '../assets/cuisine3.jpg';
import cuisine4 from '../assets/cuisine4.jpg';
import mirroir1 from '../assets/mirroir1.jpg';
import mirroir2 from '../assets/mirroir2.jpg';
import mirroir3 from '../assets/mirroir3.jpg';
import mirroir4 from '../assets/mirroir4.jpg';
import chambre1 from '../assets/chambre1.jpg';
import chambre4 from '../assets/chambre4.jpg';
import chambre2 from '../assets/chambre2.jpg';
import chambre3 from '../assets/chambre3.jpg';
import etagere1 from '../assets/etagere1.jpg';
import etagere2 from '../assets/etagere2.jpg';
import etagere3 from '../assets/etagere3.jpg';
import etageres from '../assets/etageres.jpeg';
import comode1 from '../assets/comode1.jpg';
import comode2 from '../assets/comode2.jpg';
import comode from '../assets/comode.jpeg';
import './all_categories.css';

export default function AllCategories() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('tous');
  const itemsPerPage = 16;

  // Tous les produits
  const allProducts = [
    // SALON (7 produits)
    { id: 1, name: 'Canapé Moderne', category: 'salon', price: '450 000 FCFA', image: salon1, rating: 4 },
    { id: 2, name: 'Fauteuil Relax', category: 'salon', price: '180 000 FCFA', image: salon2, rating: 0 },
    { id: 3, name: 'Canapé d\'Angle', category: 'salon', price: '620 000 FCFA', image: salon3, rating: 3 },
    { id: 4, name: 'Table Basse Ronde', category: 'salon', price: '125 000 FCFA', image: salon4, rating: 1 },
    { id: 5, name: 'canapé moderne', category: 'salon', price: '85 000 FCFA', image: salon7, rating: 0 },
    { id: 6, name: 'canapé coloré', category: 'salon', price: '85 000 FCFA', image: salon5, rating: 4 },
    { id: 7, name: 'canapé beige', category: 'salon', price: '85 000 FCFA', image: salon6, rating: 2 },

    // SALLE À MANGER (6 produits)
    { id: 8, name: 'Table à Manger', category: 'salle-a-manger', price: '280 000 FCFA', image: salle_a_manger3, rating: 0 },
    { id: 9, name: 'Chaise Salle à Manger', category: 'salle-a-manger', price: '65 000 FCFA', image: salle_a_manger2, rating: 2 },
    { id: 10, name: 'Table a manger Moderne', category: 'salle-a-manger', price: '340 000 FCFA', image: Salle_a_manger, rating: 0 },
    { id: 11, name: 'Table Extensible', category: 'salle-a-manger', price: '385 000 FCFA', image: salle_a_manger4, rating: 3 },
    { id: 12, name: 'Salle a manger en bois', category: 'salle-a-manger', price: '95 000 FCFA', image: salle_a_manger5, rating: 4 },
    { id: 13, name: 'Chaise Rembourrée', category: 'salle-a-manger', price: '95 000 FCFA', image: salle_a_manger6, rating: 0 },

    // BUREAU (4 produits)
    { id: 14, name: 'Bureau Exécutif', category: 'bureau', price: '320 000 FCFA', image: bureau1, rating: 3 },
    { id: 15, name: 'Bureau moderne', category: 'bureau', price: '145 000 FCFA', image: bureau2, rating: 0 },
    { id: 16, name: 'Bureau rose', category: 'bureau', price: '385 000 FCFA', image: bureau3, rating: 3 },
    { id: 17, name: 'Bureau d angle', category: 'bureau', price: '195 000 FCFA', image: bureau4, rating: 2 },

    // CUISINE (4 produits)
    { id: 18, name: 'Îlot de Cuisine', category: 'cuisine', price: '380 000 FCFA', image: cuisine1, rating: 0 },
    { id: 19, name: 'Meuble Haut Cuisine', category: 'cuisine', price: '165 000 FCFA', image: cuisine2, rating: 1 },
    { id: 20, name: 'Cuisine green', category: 'cuisine', price: '185 000 FCFA', image: cuisine3, rating: 4 },
    { id: 21, name: 'Cuisine complete', category: 'cuisine', price: '75 000 FCFA', image: cuisine4, rating: 0 },

    // LUMINAIRE (3 produits)
    { id: 22, name: 'Lustre Moderne', category: 'luminaire', price: '185 000 FCFA', image: luminaire1, rating: 3 },
    { id: 23, name: 'Lampadaire Design', category: 'luminaire', price: '125 000 FCFA', image: luminaire2, rating: 5 },
    { id: 24, name: 'Lustre mural', category: 'luminaire', price: '65 000 FCFA', image: luminaire3, rating: 2 },

    // MIROIR (4 produits)
    { id: 25, name: 'Miroir Rond XXL', category: 'mirroir', price: '95 000 FCFA', image: mirroir1, rating: 3 },
    { id: 26, name: 'Miroir Rectangulaire', category: 'mirroir', price: '115 000 FCFA', image: mirroir2, rating: 2 },
    { id: 27, name: 'Miroir Artisanal', category: 'mirroir', price: '135 000 FCFA', image: mirroir3, rating: 0 },
    { id: 28, name: 'Miroir Doré Antique', category: 'mirroir', price: '165 000 FCFA', image: mirroir4, rating: 4 },

    // VASE ET BOUGIES (4 produits)
    { id: 29, name: 'Vase Céramique Grand', category: 'vase et bougies', price: '45 000 FCFA', image: vase1, rating: 3 },
    { id: 30, name: 'Vase artisanal', category: 'vase et bougies', price: '35 000 FCFA', image: vase2, rating: 4 },
    { id: 31, name: 'Bougies beiges', category: 'vase et bougies', price: '55 000 FCFA', image: bougie1, rating: 0 },
    { id: 32, name: 'Bougies Moderne', category: 'vase et bougies', price: '28 000 FCFA', image: bougie2, rating: 4 },

    // CHAMBRE (4 produits)
    { id: 33, name: 'Lit moderne', category: 'chambre', price: '185 000 FCFA', image: chambre1, rating: 3 },
    { id: 34, name: 'Lit orca', category: 'chambre', price: '25 000 FCFA', image: chambre2, rating: 2 },
    { id: 35, name: 'Lit louis XV', category: 'chambre', price: '95 000 FCFA', image: chambre3, rating: 1 },
    { id: 36, name: 'Lit king', category: 'chambre', price: '95 000 FCFA', image: chambre4, rating: 0 },

    // ÉTAGÈRES (4 produits)
    { id: 37, name: 'Étagère Murale Flottante', category: 'etageres', price: '85 000 FCFA', image: etagere1, rating: 3 },
    { id: 38, name: 'Étagère Échelle', category: 'etageres', price: '125 000 FCFA', image: etagere2, rating: 2 },
    { id: 39, name: 'Étagère d\'Angle', category: 'etageres', price: '95 000 FCFA', image: etagere3, rating: 1 },
    { id: 40, name: 'Étagère Industrielle', category: 'etageres', price: '165 000 FCFA', image: etageres, rating: 0 },

    // BIBLIOTHÈQUES (3 produits)
    { id: 41, name: 'Bibliothèque Haute', category: 'bibliotheques', price: '220 000 FCFA', image: bibliotheque1, rating: 4 },
    { id: 42, name: 'Bibliothèque Modulable', category: 'bibliotheques', price: '285 000 FCFA', image: bibiotheque2, rating: 3 },
    { id: 43, name: 'Bibliothèque Basse', category: 'bibliotheques', price: '175 000 FCFA', image: bibliotheque3, rating: 2 },

    // COMMODE (3 produits)
    { id: 44, name: 'Commode 5 Tiroirs', category: 'comode', price: '225 000 FCFA', image: comode1, rating: 3 },
    { id: 45, name: 'Commode Vintage', category: 'comode', price: '285 000 FCFA', image: comode2, rating: 1 },
    { id: 46, name: 'Commode Moderne', category: 'comode', price: '195 000 FCFA', image: comode, rating: 0 },

    // RANGEMENT MURAL (2 produits)
    { id: 47, name: 'Cube Mural Suspendu', category: 'rangement', price: '75 000 FCFA', image: rangement_mural, rating: 3 },
    { id: 48, name: 'Panneau Rangement', category: 'rangement', price: '95 000 FCFA', image: rangement_mural2, rating: 5 },
  ];

  // Catégories pour la sidebar (calcul automatique)
  const categories = [
    { id: 'tous', name: 'Tous les produits', count: allProducts.length },
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
              {searchQuery ? `Résultats pour "${searchQuery}"` : 'Tous les Produits'}
            </h1>
            <p className="products-count">
              {searchFilteredProducts.length} produit{searchFilteredProducts.length > 1 ? 's' : ''}
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