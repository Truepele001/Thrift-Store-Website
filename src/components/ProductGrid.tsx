import React from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  condition: string;
  isLiked?: boolean;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart, onToggleWishlist }) => {
  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">Today's Thrift Finds</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh brand new arrivals at incredible prices - these won't last long!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-gray-100 hover:border-indigo-200"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Condition Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm border ${
                    product.condition === 'Excellent' 
                      ? 'bg-emerald-100/80 text-emerald-700 border-emerald-200'
                      : product.condition === 'Good'
                      ? 'bg-blue-100/80 text-blue-700 border-blue-200'
                      : 'bg-amber-100/80 text-amber-700 border-amber-200'
                  }`}>
                    {product.condition}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <button
                    onClick={() => onToggleWishlist(product.id)}
                    className={`p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 ${
                      product.isLiked
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-white/90 text-gray-700 hover:bg-red-50 hover:text-red-500'
                    }`}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="p-3 bg-white/90 text-gray-700 rounded-full shadow-lg backdrop-blur-sm hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:scale-110">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>

                {/* Discount Badge */}
                {product.originalPrice && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-bold text-gray-800 mb-3 line-clamp-2 text-lg group-hover:text-indigo-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
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
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-white to-gray-50 text-indigo-600 border-2 border-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Browse All Thrift Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;