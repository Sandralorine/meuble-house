import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, X, User, Mail, Phone, MapPin, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './panier.css';

export default function Panier() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, getSubtotal } = useCart();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    telephone: '',
    adresse: '',
    ville: '',
    codePostal: '',
    paymentMethod: 'mobile-money'
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const subtotal = getSubtotal();
  const shipping = subtotal > 0 ? 15000 : 0;
  const total = subtotal + shipping;

  useEffect(() => {
    try {
      const userData = localStorage.getItem('user');
      if (userData && userData !== 'undefined' && userData !== 'null') {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données utilisateur:', error);
      // Si erreur, on nettoie le localStorage
      localStorage.removeItem('user');
    }
  }, []);

  const formatPrice = (price) => {
    return price.toLocaleString('fr-FR');
  };

  const extractPrice = (priceString) => {
    return parseFloat(priceString.replace(/[^\d]/g, ''));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.telephone) {
      errors.telephone = 'Téléphone requis';
    } else if (!/^[0-9]{9,}$/.test(formData.telephone.replace(/\s/g, ''))) {
      errors.telephone = 'Téléphone invalide';
    }

    if (!formData.adresse.trim()) errors.adresse = 'Adresse requise';
    if (!formData.ville.trim()) errors.ville = 'Ville requise';
    return errors;
  };

  const handleCheckout = () => {
    try {
      const userData = localStorage.getItem('user');
      if (!userData || userData === 'undefined' || userData === 'null') {
        setShowLoginAlert(true);
        return;
      }
      
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setShowCheckoutForm(true);
    } catch (error) {
      console.error('Erreur lors de la vérification de connexion:', error);
      setShowLoginAlert(true);
    }
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    console.log('Commande passée:', { formData, cartItems, total });
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setShowCheckoutForm(false);
      setOrderPlaced(false);
      setFormData({
        telephone: '',
        adresse: '',
        ville: '',
        codePostal: '',
        paymentMethod: 'mobile-money'
      });
    }, 9000);
  };

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-container">
        <div className="cart-header">
          <h1 className="cart-title">Mon Panier</h1>
          <p className="cart-count">{cartItems.length} article{cartItems.length > 1 ? 's' : ''}</p>
        </div>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <ShoppingBag className="empty-icon" />
            <h2 className="empty-title">Votre panier est vide</h2>
            <p className="empty-text">Découvrez nos produits et ajoutez-les à votre panier</p>
            <Link to="/all_categories" className="shop-btn">
              Commencer mes achats
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              <div className="items-header">
                <button onClick={clearCart} className="clear-btn">
                  <Trash2 className="clear-icon" />
                  Vider le panier
                </button>
              </div>
              {cartItems.map((item) => {
                const itemPrice = extractPrice(item.price);
                const itemTotal = itemPrice * item.quantity;
                return (
                  <div key={item.id} className="cart-item">
                    <Link to={`/productDetail/${item.id}`} className="item-image">
                      <img src={item.image} alt={item.name} />
                    </Link>
                    <div className="item-details">
                      <Link to={`/productDetail/${item.id}`} className="item-name">
                        {item.name}
                      </Link>
                      <p className="item-category">{item.category}</p>
                      <p className="item-price">{formatPrice(itemPrice)} FCFA</p>
                    </div>
                    <div className="item-quantity">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="qty-btn"
                        disabled={item.quantity === 1}
                      >
                        <Minus className="qty-icon" />
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="qty-btn"
                        disabled={item.quantity === 10}
                      >
                        <Plus className="qty-icon" />
                      </button>
                    </div>
                    <div className="item-total">
                      <p className="total-price">{formatPrice(itemTotal)} FCFA</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                      title="Supprimer"
                    >
                      <Trash2 className="remove-icon" />
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="cart-summary">
              <h2 className="summary-title">Résumé de la commande</h2>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Sous-total</span>
                  <span>{formatPrice(subtotal)} FCFA</span>
                </div>
                <div className="summary-row">
                  <span>Livraison</span>
                  <span>{formatPrice(shipping)} FCFA</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>{formatPrice(total)} FCFA</span>
                </div>
              </div>
              <button onClick={handleCheckout} className="checkout-btn">
                Commander
              </button>
              <Link to="/all_categories" className="continue-shopping">
                <ArrowLeft className="continue-icon" />
                Continuer mes achats
              </Link>
              <div className="cart-info">
                <div className="info-item">
                  <span className="info-icon">🚚</span>
                  <div>
                    <strong>Livraison rapide</strong>
                    <p>Sous 3-5 jours ouvrables</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">💳</span>
                  <div>
                    <strong>Paiement sécurisé</strong>
                    <p>Carte bancaire, Mobile Money</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">↩️</span>
                  <div>
                    <strong>Retour gratuit</strong>
                    <p>Sous 14 jours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal de finalisation de commande */}
      {showCheckoutForm && (
        <div className="checkout-overlay">
          <div className="checkout-modal">
            <button onClick={() => setShowCheckoutForm(false)} className="close-modal-btn">
              <X />
            </button>
            
            {orderPlaced ? (
              <div className="order-success">
                <div className="success-icon">✓</div>
                <h2>Commande confirmée !</h2>
                <p>Votre commande a été enregistrée avec succès.</p>
                <p>Vous recevrez une confirmation par email.</p>
              </div>
            ) : (
              <>
                <div className="checkout-user-info">
                  <div className="user-avatar">
                    <User size={40} />
                  </div>
                  <div className="user-details">
                    <h3>{user?.prenom} {user?.nom}</h3>
                    <p className="user-email">{user?.email}</p>
                  </div>
                </div>

                <h2 className="checkout-title">Finaliser la commande</h2>
                
                <div className="checkout-form">
                  <div className="form-group">
                    <label>
                      <Phone className="input-icon" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      placeholder="Ex: 681368629"
                      className={formErrors.telephone ? 'error' : ''}
                    />
                    {formErrors.telephone && <span className="error-text">{formErrors.telephone}</span>}
                  </div>

                  <div className="form-group">
                    <label>
                      <MapPin className="input-icon" />
                      Adresse de livraison *
                    </label>
                    <input
                      type="text"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleInputChange}
                      placeholder="Numéro et nom de rue"
                      className={formErrors.adresse ? 'error' : ''}
                    />
                    {formErrors.adresse && <span className="error-text">{formErrors.adresse}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Ville *</label>
                      <input
                        type="text"
                        name="ville"
                        value={formData.ville}
                        onChange={handleInputChange}
                        placeholder="Votre ville"
                        className={formErrors.ville ? 'error' : ''}
                      />
                      {formErrors.ville && <span className="error-text">{formErrors.ville}</span>}
                    </div>

                   
                  </div>

                  <div className="form-group">
                    <label>
                      <CreditCard className="input-icon" />
                      Méthode de paiement
                    </label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                    >
                      <option value="mobile-money">Mobile Money</option>
                      <option value="carte">Carte bancaire</option>
                      <option value="cash">Paiement à la livraison</option>
                    </select>
                  </div>

                  <div className="order-summary-box">
                    <h3>Résumé</h3>
                    <div className="summary-line">
                      <span>Sous-total</span>
                      <span>{formatPrice(subtotal)} FCFA</span>
                    </div>
                    <div className="summary-line">
                      <span>Livraison</span>
                      <span>{formatPrice(shipping)} FCFA</span>
                    </div>
                    <div className="summary-line total">
                      <span>Total</span>
                      <span>{formatPrice(total)} FCFA</span>
                    </div>
                  </div>

                  <button type="button" onClick={handleSubmitOrder} className="submit-order-btn">
                    Confirmer la commande
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Modal de connexion requise */}
      {showLoginAlert && (
        <div className="login-alert-overlay">
          <div className="login-alert-modal">
            <div className="login-alert-icon">
              <User className="alert-icon" />
            </div>
            <h3 className="login-alert-title">Connexion requise</h3>
            <p className="login-alert-message">Veuillez vous connecter pour finaliser votre commande.</p>
            <div className="login-alert-actions">
              <button className="login-alert-cancel" onClick={() => setShowLoginAlert(false)}>
                Annuler
              </button>
              <button className="login-alert-confirm" onClick={() => {
                setShowLoginAlert(false);
                navigate('/login');
              }}>
                Se connecter
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}