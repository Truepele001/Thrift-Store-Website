import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, ChevronDown, Phone } from 'lucide-react';
import UserLogin from './auth/UserLogin';
import UserSignup from './auth/UserSignup';
import UserProfile from './auth/UserProfile';
import AuthCallback from './auth/AuthCallback';
import { useAuth } from '../context/AuthContext';

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
  const { user, logout } = useAuth();
  const dropdownTimeoutRef = useRef<any>(null);

  const handleAuthComplete = (_userData: any) => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleLogout = async () => {
    await logout();
  };

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
              {/* Facebook */}
              <button className="w-8 h-8 bg-white text-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              
              {/* X (Twitter) */}
              <button className="w-8 h-8 bg-white text-gray-700 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/karis_fits_ke?igsh=Nm10ZzdnMGxuOWZt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white text-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-400 hover:via-pink-500 hover:to-orange-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* WhatsApp */}
              <a 
                href="https://api.whatsapp.com/send/?phone=254743411318&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white text-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
            <div className="text-sm flex items-center space-x-3">
              <span className="font-medium">KSh 0.00</span>
              <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold">0</span>
            </div>
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
            {user ? (
              <UserProfile user={user} onLogout={handleLogout} />
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
            {!user && (
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

      {/* AuthCallback for handling OAuth redirects */}
      <AuthCallback onAuthComplete={handleAuthComplete} />

      {/* Authentication Modals */}
      {showLogin && (
        <UserLogin
          onClose={() => setShowLogin(false)}
          onLogin={handleAuthComplete}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <UserSignup
          onClose={() => setShowSignup(false)}
          onSignup={handleAuthComplete}
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