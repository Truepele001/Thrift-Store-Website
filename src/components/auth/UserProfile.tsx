import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, ShoppingBag, Heart, LogOut, ChevronDown } from 'lucide-react';

interface UserProfileProps {
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string | null;
  };
  onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const menuItems = [
    { label: 'My Profile', icon: User, action: () => console.log('Profile') },
    { label: 'My Orders', icon: ShoppingBag, action: () => console.log('Orders') },
    { label: 'Wishlist', icon: Heart, action: () => console.log('Wishlist') },
    { label: 'Settings', icon: Settings, action: () => console.log('Settings') },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200"
      >
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
          ) : (
            getInitials(user.name)
          )}
        </div>
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-black">{user.name.split(' ')[0]}</p>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 overflow-hidden">
          {/* User Info */}
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
                ) : (
                  getInitials(user.name)
                )}
              </div>
              <div>
                <p className="font-medium text-black">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => {
                    item.action();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors text-left"
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Logout */}
          <div className="border-t border-gray-200">
            <button
              onClick={() => {
                onLogout();
                setIsOpen(false);
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors text-left"
            >
              <LogOut className="h-4 w-4" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
