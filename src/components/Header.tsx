import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, ChevronDown, Phone } from 'lucide-react';
import UserLogin from './auth/UserLogin';
import UserSignup from './auth/UserSignup';
import UserProfile from './auth/UserProfile';

interface HeaderProps {
  cartItems: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
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
        'Jeans',
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
        'Shop Shirts',
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
        'Shop Dresses',
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
    <header className="bg-white shadow-2xl sticky top-0 z-50 border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-black text-white py-3 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="h-4 w-4" />
            <span className="font-medium">+254 743 411 318</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-3">
              <button className="w-7 h-7 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-200 text-xs font-bold">
                f
              </button>
              <button className="w-7 h-7 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-200 text-xs font-bold">
                t
              </button>
              <button className="w-7 h-7 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-200 text-xs font-bold">
                i
              </button>
            </div>
            <div className="text-sm flex items-center space-x-3">
              <span className="font-medium">KSh 0.00</span>
              <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold">0</span>
            </div>
            <a 
              href="#admin" 
              className="text-xs font-medium text-gray-300 hover:text-white transition-colors px-3 py-1 border border-gray-600 rounded-full hover:border-white"
            >
              ADMIN
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center relative shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <img 
                src="/images/icon/Karis.jpg" 
                alt="KarisFits Icon" 
                className="w-16 h-16 object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-5xl font-black text-black tracking-tight">KarisFits</h1>
              {/* <p className="text-sm text-gray-600 uppercase tracking-widest font-semibold">KF</p> */}
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
                className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 focus:border-black transition-all duration-200 bg-gray-50 hover:bg-white shadow-sm"
              />
              <button className="absolute right-2 top-2 bg-black hover:bg-gray-800 text-white p-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center justify-center w-10 h-10 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200">
              <Heart className="h-5 w-5" />
            </button>

            {/* User Authentication */}
            {currentUser ? (
              <UserProfile user={currentUser} onLogout={() => setCurrentUser(null)} />
            ) : (
              <button 
                onClick={() => setShowLogin(true)}
                className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-all duration-200"
              >
                <User className="h-5 w-5" />
              </button>
            )}

            <button
              onClick={onCartClick}
              className="relative flex items-center justify-center w-10 h-10 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {cartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-all duration-200"
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
              className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 focus:border-black transition-all duration-200 bg-gray-50 hover:bg-white shadow-sm"
            />
            <button className="absolute right-2 top-2 bg-black hover:bg-gray-800 text-white p-2 rounded-lg transition-all duration-200 shadow-lg">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-black shadow-2xl">
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
                <button className="flex items-center space-x-1 px-6 py-4 text-white hover:bg-gray-800 transition-all duration-200 text-sm font-medium uppercase tracking-wide">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-white shadow-2xl border border-gray-100 min-w-52 z-50 rounded-none overflow-hidden">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <button
                        key={dropdownItem}
                        className="block w-full text-left px-6 py-4 text-gray-800 hover:bg-black hover:text-white transition-all duration-200 text-sm border-b border-gray-100 last:border-b-0 uppercase tracking-wide font-medium"
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
                  <button className="block w-full text-left text-white hover:bg-gray-800 transition-all duration-200 text-sm font-medium py-3 px-4 rounded-none uppercase tracking-wide">
                    {item.name}
                  </button>
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <button
                          key={dropdownItem}
                          className="block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 text-xs py-2 px-4 rounded-none uppercase tracking-wide"
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
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex space-x-8 py-4">
            {secondaryItems.map((item) => (
              <button
                key={item}
                className="text-gray-800 hover:text-black hover:bg-white transition-all duration-200 text-sm font-medium px-3 py-2 rounded-none uppercase tracking-wide"
              >
                {item}
              </button>
            ))}
            
            {/* Auth Buttons in Secondary Nav */}
            {!currentUser && (
              <div className="flex items-center space-x-4 ml-8">
                <button
                  onClick={() => setShowLogin(true)}
                  className="text-gray-800 hover:text-black transition-all duration-200 text-sm font-medium px-4 py-2 border border-gray-300 rounded-lg hover:border-black"
                >
                  LOGIN
                </button>
                <button
                  onClick={() => setShowSignup(true)}
                  className="bg-black text-white hover:bg-gray-800 transition-all duration-200 text-sm font-medium px-4 py-2 rounded-lg"
                >
                  SIGN UP
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Authentication Modals */}
      {showLogin && (
        <UserLogin
          onClose={() => setShowLogin(false)}
          onLogin={(user) => setCurrentUser(user)}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <UserSignup
          onClose={() => setShowSignup(false)}
          onSignup={(user) => setCurrentUser(user)}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </header>
  );
};

export default Header;