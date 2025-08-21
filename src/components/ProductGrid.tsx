import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { fetchProducts } from '../api';
import { Product, FrontendProduct } from '../types';

interface ProductGridProps {
  onAddToCart: (product: any) => void;
  onToggleWishlist: (productId: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart, onToggleWishlist }) => {
  const [products, setProducts] = useState<FrontendProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        // Handle the response format which has a 'products' property
        const productsList = data.products || [];
        // Convert backend products to frontend format
        const convertedProducts = productsList.map((product: Product) => ({
          id: product._id,
          name: product.name,
          price: product.price,
          originalPrice: Math.floor(product.price * 1.5), // Simulate original price
          image: product.imageUrl,
          category: product.category,
          condition: 'Good', // Default condition
          isLiked: false,
        }));
        setProducts(convertedProducts);
      } catch (err) {
        console.error('Failed to fetch products from backend, using sample data:', err);
        // Fallback to sample data if backend is not available
        const sampleProducts = [
          {
            id: '1',
            name: 'Classic Denim Jacket',
            price: 2500,
            originalPrice: 4000,
            image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=500',
            category: 'Jackets',
            condition: 'Excellent',
            isLiked: false,
          },
          {
            id: '2',
            name: 'Vintage Leather Boots',
            price: 3200,
            originalPrice: 5500,
            image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
            category: 'Shoes',
            condition: 'Good',
            isLiked: false,
          },
          {
            id: '3',
            name: 'Designer Handbag',
            price: 1800,
            originalPrice: 3000,
            image: 'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=500',
            category: 'Accessories',
            condition: 'Excellent',
            isLiked: false,
          },
          {
            id: '4',
            name: 'Casual Cotton T-Shirt',
            price: 800,
            originalPrice: 1200,
            image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500',
            category: 'T-Shirts',
            condition: 'Good',
            isLiked: false,
          },
          {
            id: '5',
            name: 'Wool Sweater',
            price: 2200,
            originalPrice: 3500,
            image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
            category: 'Sweaters',
            condition: 'Excellent',
            isLiked: false,
          },
          {
            id: '6',
            name: 'Sport Sneakers',
            price: 2800,
            originalPrice: 4200,
            image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
            category: 'Shoes',
            condition: 'Good',
            isLiked: false,
          },
          {
            id: '7',
            name: 'Summer Dress',
            price: 1500,
            originalPrice: 2500,
            image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=500',
            category: 'Dresses',
            condition: 'Excellent',
            isLiked: false,
          },
          {
            id: '8',
            name: 'Black Jeans',
            price: 1900,
            originalPrice: 3200,
            image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500',
            category: 'Pants',
            condition: 'Good',
            isLiked: false,
          }
        ];
        setProducts(sampleProducts);
        setError(null); // Clear error since we have fallback data
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`;
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-xl">Loading products...</div>
        </div>
      </section>
    );
  }

  if (error && products.length === 0) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-xl text-red-600">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6 uppercase tracking-tight">Today's clothes Finds</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh brand new arrivals at incredible prices - these won't last long!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border-2 border-gray-200 hover:border-black transition-all duration-500 group overflow-hidden hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
                
                {/* Condition Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider ${
                    product.condition === 'Excellent' 
                      ? 'bg-black text-white'
                      : product.condition === 'Good'
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-500 text-white'
                  }`}>
                    {product.condition}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <button
                    onClick={() => onToggleWishlist(product.id)}
                    className={`p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
                      product.isLiked
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-white text-gray-700 hover:bg-black hover:text-white border border-gray-300'
                    }`}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="p-3 bg-white text-gray-700 rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-200 hover:scale-110 border border-gray-300">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>

                {/* Discount Badge */}
                {product.originalPrice && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg uppercase tracking-wider">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs text-black bg-gray-200 px-2 py-1 rounded-full uppercase tracking-wider font-semibold">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-bold text-black mb-3 line-clamp-2 text-lg uppercase tracking-wide">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-black">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 font-semibold uppercase tracking-wide"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-white text-black border-2 border-black hover:bg-black hover:text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 uppercase tracking-wider">
            Browse All Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;