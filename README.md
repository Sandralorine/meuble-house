#  Maison & Décor - Site E-commerce

Bienvenue sur le dépôt de **Maison & Décor**, un projet de site e-commerce dédié à l'ameublement et à la décoration d'intérieur. Ce projet a été développé avec React.js pour le frontend et une API Node.js/Express pour la gestion de l'authentification.

##  Les pages principales

Le site est structuré autour de plusieurs pages clés, offrant une expérience utilisateur fluide et intuitive :

1. **🏠 Page de Garde (Accueil)**
   * Présentation de l'univers de la marque.
   * Carrousel d'images mettant en avant les collections (ex: "Décoration Scandinave").
   * Navigation rapide vers les différentes catégories (Salon, Salle à Manger, Bureau, Cuisine).

2. **🛍️ Page "Tous les produits"**
   * Catalogue complet des articles disponibles (48 produits).
   * Système de filtrage par catégories (Salon, Salle à manger, Bureau, Cuisine, Chambre).
   * Affichage des cartes produits avec image, nom, prix et système de notation par étoiles.

3. **✨ Page "Inspirations"**
   * Un espace dédié pour découvrir des idées de décoration et d'aménagement.
   * Mise en avant de styles et d'ambiances pour aider le client à se projeter.

4. **🛒 Page "Panier" et Commande**
   * Récapitulatif des articles sélectionnés par l'utilisateur.
   * Possibilité de modifier la quantité, de supprimer un article ou de vider le panier.
   * Résumé de la commande (Sous-total, frais de livraison, Total).
   * **Système d'authentification :** Pour finaliser une commande, l'utilisateur doit être connecté. Une fenêtre modale "Connexion requise" s'affiche pour rediriger vers la page de connexion ou d'inscription.

5. **🔐 Pages d'Authentification (Login / Mot de passe oublié)**
   * Interface de connexion avec champs email et mot de passe.
   * Option "Se souvenir de moi" et lien "Mot de passe oublié".
   * Page de creaction d un compte .

## 🚀 Technologies utilisées

### Frontend
*   **React.js** (Bibliothèque JavaScript pour l'interface utilisateur)
*   **Vite** (Outil de build ultra-rapide)
*   **React Router** (Pour la navigation entre les pages)
*   **CSS  (Pour la mise en page et le design)
*   **Lucide React** (Pour les icônes)

### Backend (Gestion des utilisateurs)
*   **Node.js & Express.js** (Serveur API)
*   **JWT (JSON Web Tokens)** (Pour la sécurisation des sessions et l'authentification)
*   **MySQL** (Base de données relationnelle, gérée via WampServer)

## ⚙️ Installation et Lancement

###  Prérequis
*   Avoir installé **Node.js**
*   Avoir installé **WampServer** pour la base de données MySQL.


Pour faire tourner ce projet sur votre machine locale, suivez ces étapes :

1. **Cloner le dépôt :**
   git clone [https://github.com/Sandralorine/meuble-house]
2. **Accéder au dossier du projet :**
    cd meuble-house 

### Configuration de la Base de Données
a. Démarrez WampServer.
b. Ouvrez phpMyAdmin et créez une base de données nommée **`maison_decor`**.
c. Exécutez le script SQL suivant pour créer la table des utilisateurs :
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nom VARCHAR(100) NOT NULL,
       prenom VARCHAR(100) NOT NULL,
       email VARCHAR(150) UNIQUE NOT NULL,
       telephone VARCHAR(20),
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
 
     
3. **Lancer le Backend  :**
     cd backend
     npm install
     node server.js
  Le serveur devrait démarrer sur le port 5000.

4. **Lancer le Frontend dans un aautre terminal :**
    npm install
    npm run dev

## ⚙️ Ouvrir le navigateur :
Accédez à l'adresse suivante : http://localhost:3000

## 👤 Auteur
- KUETE LORINE
- Projet réalisé dans le cadre d'un projet scolaire


