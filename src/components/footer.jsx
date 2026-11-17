import { Home, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Section principale du footer */}
      <div className="footer-content">
        <div className="footer-container">
          {/* Colonne 1 - À propos */}
          <div className="footer-column">
            <div className="footer-logo">
              <Home className="footer-logo-icon" />
              <span className="footer-logo-text">Maison & Décor</span>
            </div>
            <p className="footer-description">
              Votre destination privilégiée pour des meubles et décorations de qualité. 
              Transformez votre maison en un espace qui vous ressemble.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=61584197993534" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <Facebook className="social-icon" />
              </a>
              <a href="https://www.instagram.com/maisondecorco?igsh=NjdvcjFvYngxMHox" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                <Twitter className="social-icon" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Youtube">
                <Youtube className="social-icon" />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div className="footer-column">
            <h3 className="footer-title">Liens Rapides</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Accueil</Link></li>
              <li><Link to="/all_categories" className="footer-link">Catégories</Link></li>
              <li><Link to="/inspirations" className="footer-link">Inspiration</Link></li>
              <li><Link to="/" className="footer-link">À propos</Link></li>
              <li><Link to="/Login" className="footer-link">Connexion</Link></li>
            </ul>
          </div>

          {/* Colonne 3 - Catégories */}
          <div className="footer-column">
            <h3 className="footer-title">Catégories</h3>
            <ul className="footer-links">
              <li><Link to="/all_categories" className="footer-link">Salons</Link></li>
              <li><Link to="/all_categories" className="footer-link">Chambres</Link></li>
              <li><Link to="/all_categories" className="footer-link">Cuisines</Link></li>
              <li><Link to="/all_categories" className="footer-link">Bureaux</Link></li>
              <li><Link to="/all_categories" className="footer-link">Décoration</Link></li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div className="footer-column">
            <h3 className="footer-title">Contactez-nous</h3>
            <ul className="footer-contact">
              <li className="contact-item">
                <MapPin className="contact-icon" />
                <span>ecole polytechnique, Yaoundé, Cameroun</span>
              </li>
              <li className="contact-item">
                <Phone className="contact-icon" />
                <a href="tel:+237123456789" className="contact-link">+237 6 81 36 86 29</a>
              </li>
              <li className="contact-item">
                <Mail className="contact-icon" />
                <a href="mailto:contact@maisondecor.com" className="contact-link">lorinasandrao@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © 2025 Maison & Décor. Tous droits réservés.
          </p>
          <div className="footer-legal">
            <Link to="/mentions-legales" className="legal-link">Mentions légales</Link>
            <span className="legal-separator">•</span>
            <Link to="/politique-confidentialite" className="legal-link">Politique de confidentialité</Link>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
}