import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout?: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`;
  };

  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-75" onClick={onClose}></div>
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b bg-black text-white">
            <h2 className="text-xl font-bold uppercase tracking-wide">
              Shopping Cart ({itemCount})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-6">
                  <svg className="mx-auto h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-gray-600 text-xl mb-6">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 uppercase tracking-wide"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex space-x-4 p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-black transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl grayscale"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-black uppercase tracking-wide">{item.name}</h3>
                      {item.size && (
                        <p className="text-sm text-gray-500 mt-1 uppercase">Size: {item.size}</p>
                      )}
                      <p className="text-lg font-bold text-black mt-2">
                        {formatPrice(item.price)}
                      </p>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3 bg-gray-200 rounded-xl p-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="p-2 hover:bg-white rounded-lg transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-white rounded-lg transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-2 text-black hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t bg-white p-6 space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold uppercase tracking-wide">Total:</span>
                <span className="text-2xl font-bold text-black">
                  {formatPrice(total)}
                </span>
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-bold transition-all duration-300 uppercase tracking-wide"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={onClose}
                  className="w-full border-2 border-gray-300 text-black py-4 rounded-xl font-semibold hover:bg-gray-100 hover:border-black transition-all duration-300 uppercase tracking-wide"
                >
                  Continue Shopping
                </button>
              </div>
              
              <div className="text-center text-gray-500">
                <p className="bg-gray-100 py-2 px-4 rounded-lg text-sm uppercase tracking-wide">M-Pesa and card payments accepted</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;