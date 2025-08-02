import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, ChevronDown, Phone } from 'lucide-react';

interface HeaderProps {
  cartItems: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '#',
      hasDropdown: false
    },
    {
      name: 'Shoes',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        'Men\'s Shoes',
        'Women\'s Shoes',
        'Kids Shoes',
        'Sports Shoes',
        'Formal Shoes',
        'Boots & Sneakers',
        'Casual Shoes'
      ]
    },
    {
      name: 'Shop',
      href: '#',
      hasDropdown: false
    },
    {
      name: 'Accessories',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        'Bags & Purses',
        'Belts & Wallets',
        'Jewelry',
        'Watches',
        'Sunglasses',
        'Scarves & Hats',
        'Phone Cases'
      ]
    },
    {
      name: 'Belts',
      href: '#',
      hasDropdown: false
    },
    {
      name: 'Bags/Pouch',
      href: '#',
      hasDropdown: false
    },
    {
      name: 'Boxers & Pants',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        'Men\'s Underwear',
        'Women\'s Underwear',
        'Boxer Shorts',
        'Thrift Jeans',
        'Casual Pants',
        'Formal Trousers',
        'Shorts & Bermudas'
      ]
    },
    {
      name: 'Laces',
      href: '#',
      hasDropdown: false
    },
    {
      name: 'Men Clothing',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        'Thrift Shirts',
        'T-Shirts & Polos',
        'Jackets & Coats',
        'Sweaters & Hoodies',
        'Formal Wear',
        'Casual Wear',
        'Vintage Pieces'
      ]
    },
    {
      name: 'Women Clothing',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        'Thrift Dresses',
        'Blouses & Tops',
        'Skirts & Pants',
        'Jackets & Blazers',
        'Sweaters & Cardigans',
        'Casual Wear',
        'Vintage Collections'
      ]
    }
  ];

  const secondaryItems = [
    'Caps/Masks/Marvins',
    'Shades',
    'Slides',
    'Socks',
    'Sweaters & Hoodies',
    'JACKETS',
    'Contact Us'
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="h-4 w-4" />
            <span>+254 743 411 318</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-blue-500 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-lg">
                <span className="text-white text-xs font-bold">f</span>
              </div>
              <div className="w-6 h-6 bg-cyan-500 hover:bg-cyan-400 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-lg">
                <span className="text-white text-xs font-bold">t</span>
              </div>
              <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg">
                <span className="text-white text-xs font-bold">i</span>
              </div>
            </div>
            <div className="text-sm flex items-center space-x-2">
              <span className="font-medium">KSh 0.00</span>
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center relative shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-bold text-lg">KF</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">KarisFits</h1>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">THRIFT</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white shadow-sm"
              />
              <button className="absolute right-2 top-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white p-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center justify-center w-10 h-10 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200">
              <Heart className="h-5 w-5" />
            </button>

            <button className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-200">
              <User className="h-5 w-5" />
            </button>

            <button
              onClick={onCartClick}
              className="relative flex items-center justify-center w-10 h-10 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold shadow-lg">
                  {cartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white shadow-sm"
            />
            <button className="absolute right-2 top-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white p-2 rounded-lg transition-all duration-200 shadow-lg">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 px-6 py-4 text-white hover:bg-white hover:bg-opacity-20 transition-all duration-200 text-sm font-medium backdrop-blur-sm">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-white shadow-2xl border border-gray-100 min-w-52 z-50 rounded-lg overflow-hidden">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <button
                        key={dropdownItem}
                        className="block w-full text-left px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-200 text-sm border-b border-gray-50 last:border-b-0"
                      >
                        {dropdownItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button className="block w-full text-left text-white hover:bg-white hover:bg-opacity-20 transition-all duration-200 text-sm font-medium py-3 px-4 rounded-lg">
                    {item.name}
                  </button>
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <button
                          key={dropdownItem}
                          className="block w-full text-left text-indigo-100 hover:text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 text-xs py-2 px-4 rounded"
                        >
                          {dropdownItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex space-x-8 py-4">
            {secondaryItems.map((item) => (
              <button
                key={item}
                className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 text-sm font-medium px-3 py-2 rounded-lg"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;