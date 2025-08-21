import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

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
              Kenya's favorite clothes store chain, making quality Brand New clothes
              affordable for everyone. Shop smart, save money, help the planet.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <button className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              
              {/* X (Twitter) */}
              <button className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:border-black hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/karis_fits_ke?igsh=Nm10ZzdnMGxuOWZt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-tr hover:from-purple-400 hover:via-pink-500 hover:to-orange-500 hover:text-white hover:border-transparent hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* WhatsApp */}
              <a 
                href="https://api.whatsapp.com/send/?phone=254743411318&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white hover:border-green-500 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">Why shop with us?</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">Store Locations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">Sell Your Clothes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">Shop Guide</a></li>
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
                  <p className="text-gray-300 text-sm">Next to Kenya builders Airport Northroad,</p>
                  <p className="text-gray-300 text-sm">Nairobi, Kenya</p>
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