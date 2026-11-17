import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Minus, Plus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
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
import comode  from '../assets/comode.jpeg';
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
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  
  // Utiliser le contexte du panier
  const { addToCart } = useCart();

  // Votre base de données de produits (gardez celle que vous avez)
  const allProducts = [
    // ... tous vos produits ici
    // SALON (7 produits)
   { id: 1, name: 'Canapé Moderne', category: 'salon', price: '450 000 FCFA', image: salon1,description:'Creez un espace de detente et de convivialité avec nos meubles de salon',dimensions:'L 200*90cm * H 80cm',material:'bois , tissu ,cuir et metal' },
   { id: 2, name: 'Fauteuil Relax', category: 'salon', price: '180 000 FCFA', image: salon2,description:'salon offrant un espace de detente ou le calme et le sérénité regnent',dimensions:'L 250*90cm * H 80cm',material:'bois , tissu , metal et cuir' },
   { id: 3, name: 'Canapé d\'Angle', category: 'salon', price: '620 000 FCFA', image: salon3 ,description:'un canapé crant un coin de repos ideal pour se detendre ',dimensions:'L 250*90cm * H 80cm',material:'bois , tissu , metal et cuir'},
   { id: 4, name: 'Table Basse Ronde', category: 'salon', price: '125 000 FCFA', image: salon4 ,description:'table basse en marble qui ajoute une touche de sophistication a la piece ',dimensions:'H 80cm',material:'bois , mable'},
   { id: 5, name: 'canapé moderme', category: 'salon', price: '85 000 FCFA', image: salon7,description:'canapé en cuir noir créent uncoin de confort et de detente ',dimensions:'L 250*90cm * H 80cm',material:'bois, tissu et cuir ' },
   { id: 6, name: 'canapé coloré', category: 'salon', price: '85 000 FCFA', image: salon5 ,description:'un salon moderne et lumineux,avec des meubles en bois clair et des accents de couleur vive ',dimensions:'L 250*90cm * H 80cm',material:'bois , tissu et cuir'},
   { id: 7, name: 'canapé beige', category: 'salon', price: '85 000 FCFA', image: salon6,description:'un salon elegant et raffiné , avec des meubles en bois precieux et des accents de metal brillant',dimensions:'L 250*90cm * H 80cm',material:'boir , cuir , metal et tissu'},



   // SALLE À MANGER (5 produits)
   { id: 8, name: 'Table à Manger', category: 'salle-a-manger', price: '280 000 FCFA', image:salle_a_manger3 ,description:'',dimensions:'',material:''},
   { id: 9, name: 'Chaise Salle à Manger', category: 'salle-a-manger', price: '65 000 FCFA', image:salle_a_manger2,description:'',dimensions:'',material:''  },
   { id: 10, name: 'Table a manger Moderne', category: 'salle-a-manger', price: '340 000 FCFA', image: Salle_a_manger,description:'',dimensions:'',material:''},
   { id: 11, name: 'Table Extensible', category: 'salle-a-manger', price: '385 000 FCFA', image: salle_a_manger4,description:'',dimensions:'',material:''},
   { id: 12, name: 'Salle a manger en bois', category: 'salle-a-manger', price: '95 000 FCFA', image: salle_a_manger5,description:'',dimensions:'',material:''},
   { id: 13, name: 'Chaise Rembourrée', category: 'salle-a-manger', price: '95 000 FCFA', image: salle_a_manger6,description:'',dimensions:'',material:''},

   // BUREAU (4 produits)
   { id: 14, name: 'Bureau Exécutif', category: 'bureau', price: '320 000 FCFA', image: bureau1 ,description:'',dimensions:'',material:''},
   { id: 15, name: 'Bureau moderne', category: 'bureau', price: '145 000 FCFA', image: bureau2,description:'',dimensions:'',material:'' },
   { id: 16, name: 'Bureau rose', category: 'bureau', price: '385 000 FCFA', image: bureau3,description:'',dimensions:'',material:'' },
   { id: 17, name: 'Bureau d angle', category: 'bureau', price: '195 000 FCFA', image: bureau4 ,description:'',dimensions:'',material:''},

   // CUISINE (4 produits)
   { id: 18, name: 'Îlot de Cuisine', category: 'cuisine', price: '380 000 FCFA', image: cuisine1 ,description:'',dimensions:'',material:''},
   { id: 19, name: 'Meuble Haut Cuisine', category: 'cuisine', price: '165 000 FCFA', image: cuisine2,description:'',dimensions:'',material:'' },
   { id: 20, name: 'Cuisine green', category: 'cuisine', price: '185 000 FCFA', image: cuisine3 ,description:'',dimensions:'',material:''},
   { id: 21, name: 'Cuisine complete', category: 'Cuisne complete', price: '75 000 FCFA', image: cuisine4,description:'',dimensions:'',material:''},

   // LUMINAIRE (5 produits)
   { id: 22, name: 'Lustre Moderne', category: 'luminaire', price: '185 000 FCFA', image: luminaire1,description:'',dimensions:'',material:'' },
   { id: 23, name: 'Lampadaire Design', category: 'luminaire', price: '125 000 FCFA', image: luminaire2,description:'',dimensions:'',material:'' },
   { id: 24, name: 'Lustre mural', category: 'luminaire', price: '65 000 FCFA', image: luminaire3,description:'',dimensions:'',material:''},
   
   // MIROIR (4 produits)
   { id: 25, name: 'Miroir Rond XXL', category: 'mirroir', price: '95 000 FCFA', image: mirroir1,description:'',dimensions:'',material:''},
   { id: 26, name: 'Miroir Rectangulaire', category: 'mirroir', price: '115 000 FCFA', image: mirroir2,description:'',dimensions:'',material:'' },
   { id: 27, name: 'Miroir Artisanal', category: 'mirroir', price: '135 000 FCFA', image: mirroir3,description:'',dimensions:'',material:''},
   { id: 28, name: 'Miroir Doré Antique', category: 'mirroir', price: '165 000 FCFA', image: mirroir4 ,description:'',dimensions:'',material:''},

   // VASE ET BOUGIES (4 produits)
   { id: 29, name: 'Vase Céramique Grand', category: 'vase et bougies', price: '45 000 FCFA', image: vase1,description:'',dimensions:'',material:'' },
   { id: 30, name: 'Vase artisanal', category: 'vase et bougies', price: '35 000 FCFA', image: vase2 ,description:'',dimensions:'',material:''},
   { id: 31, name: 'Bougies beiges', category: 'vase et bougies', price: '55 000 FCFA', image: bougie1 ,description:'',dimensions:'',material:''},
   { id: 32, name: 'Bougies Moderne', category: 'vase et bougies', price: '28 000 FCFA', image: bougie2,description:'',dimensions:'',material:'' },

   // TEXTILES (4 produits)
   { id: 33, name: 'Lit moderne', category: 'chambre', price: '185 000 FCFA', image: chambre1 ,description:'',dimensions:'',material:''},
   { id: 34, name: 'Lit orca', category: 'chambre', price: '25 000 FCFA', image: chambre2,description:'',dimensions:'',material:''},
   { id: 35, name: 'Lit louis XV', category: 'chambre', price: '95 000 FCFA', image: chambre3 ,description:'',dimensions:'',material:''},
   { id: 36, name: 'Lit king', category: 'chambre', price: '95 000 FCFA', image: chambre4, description:'',dimensions:'',material:''},
  
   // ÉTAGÈRES (4 produits)
   { id: 37, name: 'Étagère Murale Flottante', category: 'etageres', price: '85 000 FCFA', image: etagere1,description:'',dimensions:'',material:'' },
   { id: 38, name: 'Étagère Échelle', category: 'etageres', price: '125 000 FCFA', image: etagere2,description:'',dimensions:'',material:'' },
   { id: 39, name: 'Étagère d\'Angle', category: 'etageres', price: '95 000 FCFA', image: etagere3,description:'',dimensions:'',material:'' },
   { id: 40, name: 'Étagère Industrielle', category: 'etageres', price: '165 000 FCFA', image: etageres ,description:'',dimensions:'',material:''},

   // BIBLIOTHÈQUES (3 produits)
   { id: 41, name: 'Bibliothèque Haute', category: 'bibliotheques', price: '220 000 FCFA', image: bibliotheque1 ,description:'',dimensions:'',material:'' },
   { id: 42, name: 'Bibliothèque Modulable', category: 'bibliotheques', price: '285 000 FCFA', image:bibiotheque2 ,description:'',dimensions:'',material:'' },
   { id: 43, name: 'Bibliothèque Basse', category: 'bibliotheques', price: '175 000 FCFA', image: bibliotheque3 ,description:'',dimensions:'',material:''},

   // COMMODE (3 produits)
   { id: 44, name: 'Commode 5 Tiroirs', category: 'comode', price: '225 000 FCFA', image: comode1,description:'',dimensions:'',material:''},
   { id: 45, name: 'Commode Vintage', category: 'comode', price: '285 000 FCFA', image: comode2 ,description:'',dimensions:'',material:''},
   { id: 46, name: 'Commode Moderne', category: 'comode', price: '195 000 FCFA', image: comode,description:'',dimensions:'',material:''},

   // RANGEMENT MURAL (3 produits)
   { id: 47, name: 'Cube Mural Suspendu', category: 'rangement', price: '75 000 FCFA', image: rangement_mural,description:'',dimensions:'',material:''},
   { id: 48, name: 'Panneau Rangement', category: 'rangement', price: '95 000 FCFA', image: rangement_mural2 ,description:'',dimensions:'',material:''},

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

  const product = allProducts.find(p => p.id === parseInt(id));
  const relatedProducts = product
    ? allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  if (!product) {
    return (
      <div className="product-detail-page">
        <Navbar />
        <div className="error-container">
          <h2>Produit non trouvé</h2>
          <Link to="/all_categories" className="back-link">Retour aux catégories</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 50) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Ajouter le produit au panier via le contexte
    addToCart(product, quantity);
    
    console.log(`Ajout au panier: ${product.name}, quantité: ${quantity}`);
    setAddedToCart(true);
    setShowConfirmation(true); // Affiche le message de confirmation
    
    // Réinitialiser après 3 secondes
    setTimeout(() => {
      setAddedToCart(false);
      setShowConfirmation(false); // Cache le message de confirmation
      setQuantity(1);
    }, 5000);
  };

  return (
    <div className="product-detail-page">
      <Navbar />

      <div className="product-container">
        <div className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span className="separator">/</span>
          <Link to="/all_categories">Catégories</Link>
          <span className="separator">/</span>
          <span className="current">{product.name}</span>
        </div>

        <div className="product-main">
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">{product.price}</p>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description || 'Aucune description disponible.'}</p>
            </div>

            <div className="product-specs">
              <div className="spec-item">
                <strong>Dimensions:</strong>
                <span>{product.dimensions || 'Non spécifié'}</span>
              </div>
              <div className="spec-item">
                <strong>Matériaux:</strong>
                <span>{product.material || 'Non spécifié'}</span>
              </div>
            </div>

            <div className="quantity-selector">
              <label>Quantité:</label>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(-1)} className="qty-btn">
                  <Minus className="qty-icon" />
                </button>
                <span className="quantity-value">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="qty-btn">
                  <Plus className="qty-icon" />
                </button>
              </div>
            </div>

            <div className="action-buttons">
              <button
                onClick={handleAddToCart}
                className={`add-to-cart-btn ${addedToCart ? 'added' : ''}`}
              >
                {addedToCart ? (
                  <>
                    <Check className="btn-icon" />
                    Ajouté au panier
                  </>
                ) : (
                  <>
                    <ShoppingCart className="btn-icon" />
                    Ajouter au panier
                  </>
                )}
              </button>
                    {showConfirmation && (
                <div className="confirmation-message">
                  Le produit a été ajouté au panier avec succès !
                  veillez consulter la page du panier pour visualiser tous vos produits .
                </div>
              )}
              <button className="icon-btn">
                <Heart className="btn-icon" />
              </button>
              <button className="icon-btn">
                <Share2 className="btn-icon" />
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-section">
            <h2 className="related-title">Produits similaires</h2>
            <div className="related-grid">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  to={`/productDetail/${relatedProduct.id}`}
                  key={relatedProduct.id}
                  className="related-card"
                >
                  <div className="related-image">
                    <img src={relatedProduct.image} alt={relatedProduct.name} />
                  </div>
                  <h3 className="related-name">{relatedProduct.name}</h3>
                  <p className="related-price">{relatedProduct.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}