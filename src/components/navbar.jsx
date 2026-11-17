import { useState } from 'react';
import { Home, ShoppingCart, User, Menu, X, Search, Heart,Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const totalItems = getTotalItems();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/all_categories?search=${encodeURIComponent(searchQuery.trim().toLowerCase())}`);
      setSearchQuery('');
    }
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <Home className="logo-icon" />
          <span className="logo-text">Maison & Décor</span>
        </Link>
        {/* Barre de recherche - Desktop */}
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher par catégorie "
              className="search-input"
            />
            <button type="submit" className="search-btn">
              Rechercher
            </button>
          </div>
        </form>
        {/* Menu Desktop */}
        <div className="navbar-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/all_categories" className="nav-link">
            All Categories
          </Link>
          <Link to="/inspirations" className="nav-link">
            Inspiration
          </Link>
        </div>
        {/* Icônes à droite */}
        <div className="navbar-actions">
          <Link to="/login" className="nav-icon" title="Connexion">
            <User className="icon" />
          </Link>
          <Link to="/panier" className="nav-icon cart-icon" title="Panier">
            <ShoppingCart className="icon" />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
          <div className="nav-icon like-icon" onClick={handleLike} title="Like">
        <Heart className={`icon ${isLiked ? 'liked' : ''}`} fill={isLiked ? 'red' : 'none'} />
        {likes > 0 && <span className="like-badge">{likes}</span>}
        </div>
            <div
        className="nav-icon"
        onClick={() => setIsContactModalOpen(true)}
        title="Nous contacter"
      >
        <Mail className="icon" />
      </div>          
        </div>
        {/* Bouton menu mobile */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
        </button>
      </div>
      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {/* Barre de recherche - Mobile */}
          <form onSubmit={handleSearch} className="mobile-search-form">
            <div className="search-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher..."
                className="search-input"
              />
            </div>
          </form>
          <Link to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link to="/all_categories" className="mobile-nav-link" onClick={toggleMobileMenu}>
            All Categories
          </Link>
          <Link to="/inspirations" className="mobile-nav-link" onClick={toggleMobileMenu}>
            Inspiration
          </Link>
          <div className="mobile-divider"></div>
          <Link to="/login" className="mobile-nav-link" onClick={toggleMobileMenu}>
            <User className="mobile-icon" />
            Connexion
          </Link>
          <Link to="/panier" className="mobile-nav-link" onClick={toggleMobileMenu}>
            <ShoppingCart className="mobile-icon" />
            Panier {totalItems > 0 && `(${totalItems})`}
          </Link>
        </div>
      )}
      {isContactModalOpen && (
  <div className="contact-modal-overlay">
    <div className="contact-modal">
      <button
        className="close-modal-btn"
        onClick={() => setIsContactModalOpen(false)}
      >
        <X className="icon" />
      </button>
      <h3>Nous contacter</h3>
      <form className="contact-form">
        <div className="form-group">
          <label>Votre nom</label>
          <input type="text" placeholder="Votre nom" required />
        </div>
        <div className="form-group">
          <label>Votre email</label>
          <input type="email" placeholder="Votre email" required />
        </div>
        <div className="form-group">
          <label>Votre message</label>
          <textarea
            placeholder="Écrivez vos préoccupations ici..."
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="consent" required />
          <label htmlFor="consent">
            J’accepte que mes informations soient utilisées pour me recontacter.
          </label>
        </div>
        <button type="submit" className="submit-btn">
          Envoyer
        </button>
      </form>
    </div>
  </div>
)}

    </nav>
  );
}
