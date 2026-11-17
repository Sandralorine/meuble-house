import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Route pour la connexion
router.post('/login', async (req, res) => {
  console.log('JWT_SECRET: - authRoutes.js:9', process.env.JWT_SECRET);
  try {
    console.log('Request received: - authRoutes.js:11', req.body);
    const { email, password } = req.body;
    console.log('Email: - authRoutes.js:13', email, 'Password:', password);

    const user = await User.findByEmail(email);
    console.log('User found: - authRoutes.js:16', user);

    if (!user) {
      console.log('User not found - authRoutes.js:19');
      return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }

    console.log('Stored password: - authRoutes.js:23', user.password);
    const isMatch = await User.comparePasswords(password, user.password);
    console.log('Password match result: - authRoutes.js:25', isMatch);

    if (!isMatch) {
      console.log('Password does not match - authRoutes.js:28');
      return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, userId: user.id });
  } catch (err) {
    console.error('Detailed error: - authRoutes.js:35', err); // Log détaillé de l'erreur
    res.status(500).json({ error: 'Erreur serveur', details: err.message }); // Retourner les détails de l'erreur
  }
});

// route pour l inscription
router.post('/register', async (req, res) => {
  console.log('Request received: - authRoutes.js:42', req.body);
  try {
    const { nom, prenom, email, telephone, password } = req.body;

    // Vérifiez si l'utilisateur existe déjà
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'Un utilisateur avec cet email existe déjà' });
    }

    // Créez un nouvel utilisateur
    const userId = await User.create(nom, prenom, email, telephone, password);

    res.status(201).json({ message: 'Utilisateur enregistré avec succès', userId });
  } catch (err) {
    console.error('Error: - authRoutes.js:57', err);
    res.status(500).json({ error: 'Erreur serveur', details: err.message });
  }
});

// OU MIEUX ENCORE : Modifiez votre endpoint de login pour renvoyer les infos directement
router.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Votre logique de vérification...
    const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    
    // Vérification du mot de passe...
    
    const token = jwt.sign({ userId: user.id }, 'votre_secret_jwt', {
      expiresIn: '1h'
    });

    // ✅ RENVOYEZ LES INFOS UTILISATEUR ICI
    res.json({
      token: token,
      userId: user.id,
      user: {  // ⭐ AJOUTEZ CETTE PARTIE
        id: user.id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur de connexion' });
  }
});



export default router;
