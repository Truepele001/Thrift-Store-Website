import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Footer from './components/Footer';
import Cart from './components/Cart';
import AdminApp from './components/admin/AdminApp';

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: "Pre-loved Leather Jacket - Classic Brown",
    price: 1500,
    originalPrice: 8000,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Men's Thrift",
    condition: "Excellent",
    isLiked: false
  },
  {
    id: 2,
    name: "Second-hand Floral Maxi Dress",
    price: 800,
    originalPrice: 4500,
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Women's Thrift",
    condition: "Good",
    isLiked: true
  },
  {
    id: 3,
    name: "Thrift Designer Handbag - Genuine Leather",
    price: 2200,
    originalPrice: 12000,
    image: "https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Bags & Accessories",
    condition: "Excellent",
    isLiked: false
  },
  {
    id: 4,
    name: "Thrift High-Waisted Denim Jeans",
    price: 600,
    originalPrice: 3500,
    image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Women's Thrift",
    condition: "Good",
    isLiked: false
  },
  {
    id: 5,
    name: "Pre-owned White Leather Sneakers",
    price: 900,
    originalPrice: 5000,
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Thrift Shoes",
    condition: "Excellent",
    isLiked: false
  },
  {
    id: 6,
    name: "Second-hand Silk Scarf - Beautiful Pattern",
    price: 300,
    originalPrice: 2000,
    image: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Bags & Accessories",
    condition: "Good",
    isLiked: true
  },
  {
    id: 7,
    name: "Thrift Wool Cardigan - Cozy & Warm",
    price: 1200,
    originalPrice: 6000,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Women's Thrift",
    condition: "Excellent",
    isLiked: false
  },
  {
    id: 8,
    name: "Pre-loved Gold Watch - Classic Style",
    price: 1800,
    originalPrice: 8500,
    image: "https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Bags & Accessories",
    condition: "Good",
    isLiked: false
  }
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
}

function App() {
  const [products, setProducts] = useState(sampleProducts);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  // Check URL for admin route
  React.useEffect(() => {
    const checkAdminRoute = () => {
      if (window.location.hash === '#admin' || window.location.pathname === '/admin') {
        setShowAdmin(true);
      }
    };
    checkAdminRoute();
    window.addEventListener('hashchange', checkAdminRoute);
    return () => window.removeEventListener('hashchange', checkAdminRoute);
  }, []);

  // If admin route, show admin interface
  if (showAdmin) {
    return <AdminApp />;
  }

  const handleAddToCart = (product: any) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        }];
      }
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
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

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleToggleWishlist = (productId: number) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? { ...product, isLiked: !product.isLiked }
          : product
      )
    );
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItems={totalCartItems} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      <Hero />
      <Categories />
      <ProductGrid 
        products={products}
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
      />
    </div>
  );
}

export default App;