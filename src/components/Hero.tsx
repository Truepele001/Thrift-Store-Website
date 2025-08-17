import React from 'react';
import { ArrowRight, Recycle, Globe, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      
      {/* Minimalist background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-7xl md:text-8xl font-black leading-none tracking-tight">
              Shop Smart,
              <span className="block text-white/80">Live Better</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Kenya's trusted thrift store chain. Discover amazing second-hand treasures at 
              unbeatable prices while giving clothes a second life and protecting our planet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-10 py-4 rounded-none font-bold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2 text-lg uppercase tracking-wide">
                <span>Start Thrifting</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white bg-transparent text-white px-10 py-4 rounded-none font-bold hover:bg-white hover:text-black transition-all duration-300 text-lg uppercase tracking-wide">
                Why Thrift?
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 border border-white/20 rounded-none flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-black">10K+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Happy Thrifters</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 border border-white/20 rounded-none flex items-center justify-center">
                    <Recycle className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-black">65K+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Items Thrifted</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 border border-white/20 rounded-none flex items-center justify-center">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-black">7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Thrift Stores</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-none p-1">
              <img
                src="https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Thrift store clothing racks"
                className="w-full h-96 object-cover rounded-none grayscale contrast-125"
              />
              <div className="absolute -bottom-8 -left-8 bg-white text-black p-8 rounded-none">
                <div className="text-sm font-bold uppercase tracking-wide">Fresh Stock</div>
                <div className="text-4xl font-black">Daily</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;