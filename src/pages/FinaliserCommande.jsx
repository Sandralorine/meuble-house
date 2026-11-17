import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Phone, MapPin, CreditCard } from 'lucide-react';
import './finaliserCommande.css';

export default function FinaliserCommande() {
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

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/login');
    }
  }, [navigate]);

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

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    console.log('Commande passée:', { formData });
    alert('Commande confirmée !');
    navigate('/');
  };

  return (
    <div className="finaliser-commande-page">
      <div className="finaliser-commande-container">
        <div className="finaliser-commande-header">
          <h1 className="finaliser-commande-title">Finaliser ma commande</h1>
        </div>
        <div className="finaliser-commande-body">
          <form onSubmit={handleSubmitOrder}>
            {/* Informations de l'utilisateur connecté */}
            <div className="form-section">
              <h3 className="section-title">
                <User className="section-icon" />
                Utilisateur connecté
              </h3>
              <div className="user-info">
                <div className="user-avatar">
                  <User className="avatar-icon" />
                </div>
                <div className="user-details">
                  <p><strong>{user ? `${user.prenom} ${user.nom}` : ''}</strong></p>
                  <p>{user ? user.email : ''}</p>
                </div>
              </div>
            </div>

            {/* Téléphone */}
            <div className="form-section">
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
                  className={formErrors.telephone ? 'error' : ''}
                  placeholder="6 XX XX XX XX"
                />
                {formErrors.telephone && <span className="error-text">{formErrors.telephone}</span>}
              </div>
            </div>

            {/* Adresse de livraison */}
            <div className="form-section">
              <h3 className="section-title">
                <MapPin className="section-icon" />
                Adresse de livraison
              </h3>
              <div className="form-group">
                <label>Adresse complète *</label>
                <textarea
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleInputChange}
                  className={formErrors.adresse ? 'error' : ''}
                  placeholder="Numéro, rue, quartier..."
                  rows="3"
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
                    className={formErrors.ville ? 'error' : ''}
                    placeholder="Yaoundé, Douala..."
                  />
                  {formErrors.ville && <span className="error-text">{formErrors.ville}</span>}
                </div>
                <div className="form-group">
                  <label>Code Postal</label>
                  <input
                    type="text"
                    name="codePostal"
                    value={formData.codePostal}
                    onChange={handleInputChange}
                    placeholder="Optionnel"
                  />
                </div>
              </div>
            </div>

            {/* Mode de paiement */}
            <div className="form-section">
              <h3 className="section-title">
                <CreditCard className="section-icon" />
                Mode de paiement
              </h3>
              <div className="payment-methods">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mobile-money"
                    checked={formData.paymentMethod === 'mobile-money'}
                    onChange={handleInputChange}
                  />
                  <span className="payment-label">
                    <span className="payment-icon">📱</span>
                    Mobile Money (MTN, Orange)
                  </span>
                </label>
                {formData.paymentMethod === 'mobile-money' && (
                  <div className="payment-info">
                    <div className="payment-details">
                      <h4>📱 Informations pour le paiement Mobile Money</h4>
                      <div className="payment-detail-item">
                        <strong>MTN Mobile Money :</strong>
                        <p className="payment-number">+237 6 81 36 86 29</p>
                        <p className="payment-name">Nom : MAISON & DÉCOR SARL</p>
                      </div>
                      <div className="payment-detail-item">
                        <strong>Orange Money :</strong>
                        <p className="payment-number">+237 6 97 62 02 27</p>
                        <p className="payment-name">Nom : MAISON & DÉCOR SARL</p>
                      </div>
                      <p className="payment-instruction">
                        💡 Envoyez <strong>FCFA</strong> à l'un de ces numéros et confirmez votre commande.
                      </p>
                    </div>
                  </div>
                )}
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                  />
                  <span className="payment-label">
                    <span className="payment-icon">💳</span>
                    Carte bancaire
                  </span>
                </label>
                {formData.paymentMethod === 'card' && (
                  <div className="payment-info">
                    <div className="payment-details">
                      <h4>💳 Informations pour le paiement par carte</h4>
                      <div className="card-info-box">
                        <div className="info-row">
                          <span className="info-label">Numéro de compte :</span>
                          <span className="info-value">10033 12345 67890 12345 67</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">Titulaire :</span>
                          <span className="info-value">MAISON & DÉCOR SARL</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">Banque :</span>
                          <span className="info-value">Afriland First Bank</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">Code SWIFT :</span>
                          <span className="info-value">CCBACMC2009</span>
                        </div>
                      </div>
                      <p className="payment-instruction">
                        💡 Effectuez un virement de <strong>FCFA</strong> et confirmez votre commande.
                      </p>
                    </div>
                  </div>
                )}
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleInputChange}
                  />
                  <span className="payment-label">
                    <span className="payment-icon">💵</span>
                    Paiement à la livraison
                  </span>
                </label>
                {formData.paymentMethod === 'cash' && (
                  <div className="payment-info">
                    <div className="payment-details cash-payment">
                      <h4>💵 Paiement à la livraison</h4>
                      <p className="payment-instruction">
                        ✅ Vous paierez <strong>FCFA</strong> en espèces directement au livreur lors de la réception de votre commande.
                      </p>
                      <p className="payment-note">
                        Note : Préparez le montant exact si possible.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Récapitulatif */}
            <div className="order-summary">
              <h3>Récapitulatif</h3>
              <div className="summary-line">
                <span>Articles</span>
                <span>FCFA</span>
              </div>
              <div className="summary-line">
                <span>Livraison</span>
                <span>FCFA</span>
              </div>
              <div className="summary-line total">
                <span>Total à payer</span>
                <span>FCFA</span>
              </div>
            </div>

            <button type="submit" className="submit-order-btn">
              Confirmer la commande
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
