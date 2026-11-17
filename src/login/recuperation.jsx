import { useState } from 'react';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './recuperation.css';

export default function RecuperationPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation de l'email
    if (!email) {
      setError('Email requis');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email invalide');
      return;
    }

    // Simuler l'envoi de l'email
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log('Email de récupération envoyé à:', email);
    }, 1500);
  };

  return (
    <div className="recuperation-container">
      <div className="recuperation-wrapper">
        {/* Card */}
        <div className="recuperation-card">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="recuperation-header">
                <div className="icon-circle">
                  <Mail className="header-icon" />
                </div>
                <h1 className="recuperation-title">Mot de passe oublié?</h1>
                <p className="recuperation-subtitle">
                  Pas de problème ! Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
                </p>
              </div>

              {/* Formulaire */}
              <div className="recuperation-body">
                <div className="form-container">
                  {/* Champ Email */}
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
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError('');
                        }}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleSubmit(e);
                          }
                        }}
                        className={`input-field ${error ? 'input-error' : ''}`}
                        placeholder="vous@exemple.com"
                        autoComplete="off"
                        disabled={isLoading}
                      />
                    </div>
                    {error && (
                      <p className="error-text">{error}</p>
                    )}
                  </div>

                  {/* Bouton d'envoi */}
                  <button
                    onClick={handleSubmit}
                    className="submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Envoi en cours...' : 'Envoyer le lien'}
                  </button>

                  {/* Lien retour */}
                  <Link to="/login" className="back-link">
                    <ArrowLeft className="back-icon" />
                    Retour à la connexion
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Message de succès */}
              <div className="success-container">
                <div className="success-icon-circle">
                  <CheckCircle className="success-icon" />
                </div>
                <h2 className="success-title">Email envoyé !</h2>
                <p className="success-text">
                  Nous avons envoyé un lien de réinitialisation à <strong>{email}</strong>
                </p>
                <p className="success-subtext">
                  Vérifiez votre boîte de réception et suivez les instructions pour réinitialiser votre mot de passe.
                </p>

                <div className="success-info">
                  <p className="info-title">Vous n'avez pas reçu l'email ?</p>
                  <ul className="info-list">
                    <li>Vérifiez votre dossier spam ou courrier indésirable</li>
                    <li>Assurez-vous que l'adresse email est correcte</li>
                    <li>Attendez quelques minutes, l'email peut prendre du temps</li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setEmail('');
                  }}
                  className="resend-btn"
                >
                  Renvoyer l'email
                </button>

                <Link to="/login" className="back-link-success">
                  <ArrowLeft className="back-icon" />
                  Retour à la connexion
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <p className="footer-copyright">
          © 2025 Maison & Décor. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}