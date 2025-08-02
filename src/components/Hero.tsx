import React from 'react';
import { ArrowRight, Recycle, Globe, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-7xl font-bold leading-tight">
              Thrift Smart,
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Live Better</span>
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Kenya's trusted thrift store chain. Discover amazing second-hand treasures at 
              unbeatable prices while giving clothes a second life and protecting our planet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105">
                <span>Start Thrifting</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gradient-to-r from-purple-400 to-pink-400 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Why Thrift?
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="flex justify-center mb-3">
                  <Users className="h-8 w-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm text-gray-300">Happy Thrifters</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="flex justify-center mb-3">
                  <Recycle className="h-8 w-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold">65K+</div>
                <div className="text-sm text-gray-300">Items Thrifted</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="flex justify-center mb-3">
                  <Globe className="h-8 w-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold">7</div>
                <div className="text-sm text-gray-300">Thrift Stores</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <img
                src="https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Thrift store clothing racks"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
                <div className="text-sm font-medium">Fresh Stock</div>
                <div className="text-3xl font-bold">Daily</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;