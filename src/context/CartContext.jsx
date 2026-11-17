import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Récupérer le panier du localStorage au démarrage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sauvegarder le panier dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Ajouter un produit au panier
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      // Vérifier si le produit existe déjà dans le panier
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        // Si le produit existe, augmenter la quantité
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, 10) }
            : item
        );
      } else {
        // Sinon, ajouter le nouveau produit
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Mettre à jour la quantité d'un produit
  const updateQuantity = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          if (newQuantity >= 1 && newQuantity <= 10) {
            return { ...item, quantity: newQuantity };
          }
        }
        return item;
      })
    );
  };

  // Supprimer un produit du panier
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Vider le panier
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculer le nombre total d'articles
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculer le sous-total
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^\d]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalItems,
    getSubtotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart doit être utilisé à l\'intérieur de CartProvider');
  }
  return context;
}