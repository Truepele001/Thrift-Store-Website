import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">KF</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">KarisFits</h3>
                <p className="text-sm text-gray-300">THRIFT</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Kenya's favorite thrift store chain, making quality second-hand fashion 
              affordable for everyone. Thrift smart, save money, help the planet.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-indigo-500 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-pink-500 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500 transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">Why Thrift?</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">Store Locations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">Sell Your Clothes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">Thrift Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">Size Guide</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">Payment Methods</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">Track Your Order</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300">Westlands, Nairobi</p>
                  <p className="text-gray-300">Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <p className="text-gray-300">+254 743 411 318</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <p className="text-gray-300">hello@thriftea.co.ke</p>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="font-semibold mb-4 text-white">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-r-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>in Kenya</span>
            </div>
            
            <div className="text-gray-300">
              <p>&copy; 2025 KarisFits. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;