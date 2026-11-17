import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './inscription.css';

export default function InscriptionPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Effacer l'erreur du champ modifié
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    // Validation du nom
    if (!formData.nom.trim()) {
      newErrors.nom = 'Nom requis';
    }
    // Validation du prénom
    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Prénom requis';
    }
    // Validation de l'email
    if (!formData.email) {
      newErrors.email = 'Email requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    // Validation du téléphone
    if (!formData.telephone) {
      newErrors.telephone = 'Téléphone requis';
    } else if (!/^[0-9]{9,}$/.test(formData.telephone.replace(/\s/g, ''))) {
      newErrors.telephone = 'Téléphone invalide';
    }
    // Validation du mot de passe
    if (!formData.password) {
      newErrors.password = 'Mot de passe requis';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Minimum 8 caractères';
    }
    // Validation de la confirmation du mot de passe
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmation requise';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }
    // Validation des conditions
    if (!acceptTerms) {
      newErrors.terms = 'Vous devez accepter les conditions';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    try {
      console.log('Inscription:', formData);
  
      // Envoyer les données au backend
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log('Response:', data);
  
      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'inscription');
      }
  
      alert('Inscription réussie !');
    } catch (err) {
      console.error('Error:', err);
      alert(`Erreur lors de l'inscription: ${err.message}`);
    }
  };
  

  return (
    <div className="inscription-container">
      <div className="inscription-wrapper">
        {/* Card */}
        <div className="inscription-card">
          {/* Header */}
          <div className="inscription-header">
            <h1 className="inscription-title">Créer un compte</h1>
            <p className="inscription-subtitle">Rejoignez-nous dès maintenant</p>
          </div>

          {/* Formulaire */}
          <div className="inscription-body">
            <div className="form-container">
              {/* Nom et Prénom sur la même ligne */}
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="nom" className="input-label">
                    Nom
                  </label>
                  <div className="input-wrapper">
                    <div className="input-icon-left">
                      <User className="icon" />
                    </div>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      value={formData.nom}
                      onChange={handleChange}
                      className={`input-field ${errors.nom ? 'input-error' : ''}`}
                      placeholder="Votre nom"
                      autoComplete="off"
                    />
                  </div>
                  {errors.nom && (
                    <p className="error-text">{errors.nom}</p>
                  )}
                </div>

                <div className="input-group">
                  <label htmlFor="prenom" className="input-label">
                    Prénom
                  </label>
                  <div className="input-wrapper">
                    <div className="input-icon-left">
                      <User className="icon" />
                    </div>
                    <input
                      id="prenom"
                      name="prenom"
                      type="text"
                      value={formData.prenom}
                      onChange={handleChange}
                      className={`input-field ${errors.prenom ? 'input-error' : ''}`}
                      placeholder="Votre prénom"
                      autoComplete="off"
                    />
                  </div>
                  {errors.prenom && (
                    <p className="error-text">{errors.prenom}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  Adresse email
                </label>
                <div className="input-wrapper">
                  <div className="input-icon-left">
                    <Mail className="icon" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? 'input-error' : ''}`}
                    placeholder="vous@exemple.com"
                    autoComplete="off"
                  />
                </div>
                {errors.email && (
                  <p className="error-text">{errors.email}</p>
                )}
              </div>

              {/* Téléphone */}
              <div className="input-group">
                <label htmlFor="telephone" className="input-label">
                  Numéro de téléphone
                </label>
                <div className="input-wrapper">
                  <div className="input-icon-left">
                    <Phone className="icon" />
                  </div>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleChange}
                    className={`input-field ${errors.telephone ? 'input-error' : ''}`}
                    placeholder="6 XX XX XX XX"
                    autoComplete="off"
                  />
                </div>
                {errors.telephone && (
                  <p className="error-text">{errors.telephone}</p>
                )}
              </div>

              {/* Mot de passe */}
              <div className="input-group">
                <label htmlFor="password" className="input-label">
                  Mot de passe
                </label>
                <div className="input-wrapper">
                  <div className="input-icon-left">
                    <Lock className="icon" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    className={`input-field ${errors.password ? 'input-error' : ''}`}
                    placeholder="Minimum 8 caractères"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle-btn"
                  >
                    {showPassword ? (
                      <EyeOff className="icon" />
                    ) : (
                      <Eye className="icon" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="error-text">{errors.password}</p>
                )}
              </div>

              {/* Confirmation mot de passe */}
              <div className="input-group">
                <label htmlFor="confirmPassword" className="input-label">
                  Confirmer le mot de passe
                </label>
                <div className="input-wrapper">
                  <div className="input-icon-left">
                    <Lock className="icon" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`input-field ${errors.confirmPassword ? 'input-error' : ''}`}
                    placeholder="Confirmez votre mot de passe"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="password-toggle-btn"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="icon" />
                    ) : (
                      <Eye className="icon" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="error-text">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Accepter les conditions */}
              <div className="terms-container">
                <div className="remember-checkbox">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => {
                      setAcceptTerms(e.target.checked);
                      setErrors({ ...errors, terms: '' });
                    }}
                    className="checkbox-input"
                  />
                  <label htmlFor="terms" className="checkbox-label">
                    J'accepte les{' '}
                    <a href="#" className="terms-link">conditions d'utilisation</a>
                    {' '}et la{' '}
                    <a href="#" className="terms-link">politique de confidentialité</a>
                  </label>
                </div>
                {errors.terms && (
                  <p className="error-text">{errors.terms}</p>
                )}
              </div>

              {/* Bouton d'inscription */}
              <button
                onClick={handleSubmit}
                className="submit-btn"
              >
                S'inscrire
              </button>
            </div>

            {/* Lien connexion */}
            <p className="login-text">
              Vous avez déjà un compte?{' '}
              <Link to="/login" className="login-link">
                Se connecter
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="footer-copyright">
          © 2025 Maison & Décor. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}