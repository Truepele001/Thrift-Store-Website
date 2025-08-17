import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AdminApp from './components/admin/AdminApp';
import { AuthProvider } from './context/AuthContext';
import { Product } from './types';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
}

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  // Check URL for admin route
  React.useEffect(() => {
    const checkAdminRoute = () => {
      setShowAdmin(window.location.pathname.includes('/admin'));
    };
    
    checkAdminRoute();
    window.addEventListener('popstate', checkAdminRoute);
    
    return () => window.removeEventListener('popstate', checkAdminRoute);
  }, []);

  // If admin route, show admin interface
  if (showAdmin) {
    return <AdminApp />;
  }

  const handleAddToCart = (product: any) => {
    // Add to backend-style cart (for checkout)
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item._id === product._id);
      if (existingProduct) {
        return prevCart; // Don't add duplicates for now
      }
      return [...prevCart, product];
    });

    // Add to frontend-style cart (for display)
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product._id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, {
          id: product._id,
          name: product.name,
          price: product.price,
          image: product.imageUrl,
          quantity: 1
        }];
      }
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    setCart(prevCart => prevCart.filter(item => item._id !== id));
  };

  const handleToggleWishlist = (productId: string) => {
    // This would typically save to user's wishlist in the backend
    console.log('Toggle wishlist for product:', productId);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutSuccess = () => {
    setCart([]);
    setCartItems([]);
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Header 
          cartItems={totalCartItems} 
          onCartClick={() => setIsCartOpen(true)} 
        />
        <Hero />
        <Categories />
        <ProductGrid 
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
        />
        <Features />
        <Footer />
        
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
        />

        <Checkout
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          cart={cart}
          onCheckoutSuccess={handleCheckoutSuccess}
        />
      </div>
    </AuthProvider>
  );
}

export default App;
