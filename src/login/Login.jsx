import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Home, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

 
  // Remplacez toute la fonction handleSubmit dans Login.jsx par celle-ci :

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Submitting:', { email, password, rememberMe });

  const newErrors = {};
  // Validation
  if (!email) {
    newErrors.email = 'Email requis';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = 'Email invalide';
  }
  if (!password) {
    newErrors.password = 'Mot de passe requis';
  } else if (password.length < 6) {
    newErrors.password = 'Minimum 6 caractères';
  }
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  try {
    console.log('Sending request to:', 'http://localhost:5000/api/auth/login');
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, rememberMe }),
    });

    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('🔍 DONNÉES COMPLÈTES REÇUES:', data);
    console.log('🔍 STRUCTURE:', Object.keys(data));
    console.log('🔍 TOUTES LES PROPRIÉTÉS:', JSON.stringify(data, null, 2));

    if (!response.ok) {
      throw new Error(data.error || 'Erreur de connexion');
    }

    // IMPORTANT : Vérifiez la structure des données reçues
    console.log('Token reçu:', data.token);
    console.log('User reçu:', data.user);

    // Stockage du token
    if (data.token) {
      localStorage.setItem('token', data.token);
      console.log('✅ Token stocké');
    }

    // Si l'API ne renvoie pas les infos utilisateur, on les récupère
    if (data.userId && !data.user) {
      console.log('🔄 Récupération des infos utilisateur...');
      
      try {
        const userResponse = await fetch(`http://localhost:5000/api/users/${data.userId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${data.token}`,
            'Content-Type': 'application/json',
          },
        });

        if (userResponse.ok) {
          const userData = await userResponse.json();
          console.log('✅ Données utilisateur récupérées:', userData);
          
          // Adaptez selon la structure de votre API
          const userToStore = {
            id: userData.id || data.userId,
            nom: userData.nom || userData.lastName || userData.last_name || '',
            prenom: userData.prenom || userData.firstName || userData.first_name || '',
            email: userData.email || email
          };

          console.log('📦 Données utilisateur à stocker:', userToStore);
          localStorage.setItem('user', JSON.stringify(userToStore));
          
          const verification = localStorage.getItem('user');
          console.log('✅ Vérification du stockage:', verification);
        } else {
          console.warn('⚠️ Impossible de récupérer les infos utilisateur');
          // Stockage minimal avec les données disponibles
          const minimalUser = {
            id: data.userId,
            email: email,
            nom: '',
            prenom: ''
          };
          localStorage.setItem('user', JSON.stringify(minimalUser));
          console.log('📦 Stockage minimal:', minimalUser);
        }
      } catch (userError) {
        console.error('❌ Erreur récupération utilisateur:', userError);
        // Stockage minimal en cas d'erreur
        const minimalUser = {
          id: data.userId,
          email: email,
          nom: '',
          prenom: ''
        };
        localStorage.setItem('user', JSON.stringify(minimalUser));
      }
    } else if (data.user) {
      // Si les infos sont déjà dans la réponse
      const userToStore = {
        id: data.user.id || data.userId,
        nom: data.user.nom || data.user.lastName || '',
        prenom: data.user.prenom || data.user.firstName || '',
        email: data.user.email || email
      };
      localStorage.setItem('user', JSON.stringify(userToStore));
      console.log('✅ Utilisateur stocké:', userToStore);
    }

    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      navigate('/');
    }, 2000);
  } catch (err) {
    console.error('❌ Error:', err);
    setErrors({ ...errors, form: err.message });
  }
};


  return (
    <div className="login-container">
       {/* Bouton Retour */}
      
      <div className="login-wrapper">
         {/* Card */}
         <Link to="/" className="back-button-container">
          <div className="back-button">
            <ArrowLeft className="back-icon" />
            Retour
          </div>
        </Link>
       
        
        <div className="login-card">
          {/* Header */}
          <div className="login-header">
            <div className="logo-circle">
              <Home className="logo-icon" />
            </div>
            <h1 className="login-title">Bienvenue</h1>
            <p className="login-subtitle">Connectez-vous à votre espace</p>
          </div>
          {/* Formulaire */}
          <div className="login-body">
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
                      setErrors({ ...errors, email: '' });
                    }}
                    className={`input-field ${errors.email ? 'input-error' : ''}`}
                    placeholder="vous@exemple.com"
                    autoComplete="off"
                  />
                </div>
                {errors.email && (
                  <p className="error-text">{errors.email}</p>
                )}
              </div>
              {/* Champ Mot de passe */}
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
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrors({ ...errors, password: '' });
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmit(e);
                      }
                    }}
                    className={`input-field ${errors.password ? 'input-error' : ''}`}
                    placeholder="••••••••"
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
              {/* Options */}
              <div className="form-options">
                <div className="remember-checkbox">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="checkbox-input"
                  />
                  <label htmlFor="remember" className="checkbox-label">
                    Se souvenir de moi
                  </label>
                </div>
                <Link to="/recuperation" className="forgot-link">
                  Mot de passe oublié?
                </Link>
              </div>
              {/* Bouton de connexion */}
              <button
                onClick={handleSubmit}
                className="submit-btn"
              >
                Se connecter
              </button>
            </div>
            {/* Message de confirmation */}
            {showConfirmation && (
              <div className="confirmation-message">
                <div className="confirmation-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="var(--success)"/>
                  </svg>
                </div>
                <p className="confirmation-text">Connexion réussie !</p>
              </div>
            )}
            {/* Divider */}
            <div className="divider-container">
              <div className="divider-line"></div>
              <span className="divider-text">Ou continuer avec</span>
              <div className="divider-line"></div>
            </div>
            {/* Boutons réseaux sociaux */}
            <div className="social-buttons-grid">
              <button className="social-btn">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M5.27 9.76A7.5 7.5 0 0 1 12 4.5c1.96 0 3.73.72 5.12 1.88l3.82-3.82A12 12 0 0 0 12 0C7.32 0 3.27 2.55 1.27 6.36l4-3.1z"/>
                  <path fill="#4285F4" d="M23.49 12.27c0-.83-.08-1.63-.22-2.4H12v4.53h6.44a5.5 5.5 0 0 1-2.38 3.61l3.77 2.93c2.2-2.03 3.47-5.02 3.47-8.67z"/>
                  <path fill="#FBBC05" d="M5.27 14.24a7.5 7.5 0 0 1 0-4.48l-4-3.1a12 12 0 0 0 0 10.68l4-3.1z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.93-2.9l-3.77-2.93c-1.03.7-2.35 1.13-4.16 1.13a7.47 7.47 0 0 1-7.02-5.06l-4 3.1C3.27 21.45 7.32 24 12 24z"/>
                </svg>
                <span className="social-text">Google</span>
              </button>
              <button className="social-btn">
                <svg className="social-icon" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="social-text">Facebook</span>
              </button>
            </div>
            {/* Lien inscription */}
            <p className="signup-text">
              Vous n'avez pas de compte?{' '}
              <Link to="/inscription" className="signup-link">
                Inscrivez-vous gratuitement
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
