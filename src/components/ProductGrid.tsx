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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6 uppercase tracking-tight">Today's Thrift Finds</h2>
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
            Browse All Thrift Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;