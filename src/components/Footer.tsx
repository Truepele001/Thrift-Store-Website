import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden border-t border-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-700">
                <span className="text-black font-bold text-lg">KF</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">KarisFits</h3>
                {/* <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">THRIFT</p> */}
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Kenya's favorite thrift store chain, making quality second-hand fashion 
              affordable for everyone. Thrift smart, save money, help the planet.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white hover:text-black transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white hover:text-black transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white hover:text-black transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">Why Thrift?</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">Store Locations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">Sell Your Clothes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">Thrift Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">Size Guide</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wide">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">Payment Methods</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">Track Your Order</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wide">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-black" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Westlands, Nairobi</p>
                  <p className="text-gray-300 text-sm">Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-black" />
                </div>
                <p className="text-gray-300 text-sm">+254 743 411 318</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-black" />
                </div>
                <p className="text-gray-300 text-sm">hello@thriftea.co.ke</p>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="font-semibold mb-4 text-white uppercase tracking-wide text-sm">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-white placeholder-gray-500 text-sm"
                />
                <button className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-r-xl transition-all duration-300">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-white" />
              <span>in Kenya</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 KarisFits. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#admin" className="text-gray-400 hover:text-white transition-colors text-sm">Admin</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;