import React from 'react';
import { ArrowRight } from 'lucide-react';

const Categories: React.FC = () => {
  const categories = [
    {
      name: "Women's Thrift",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
      itemCount: "2,500+ pre-loved items",
      color: "from-pink-500 via-rose-500 to-purple-600"
    },
    {
      name: "Men's Thrift",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
      itemCount: "1,800+ second-hand finds",
      color: "from-indigo-500 via-blue-500 to-cyan-600"
    },
    {
      name: "Kids Thrift",
      image: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400",
      itemCount: "1,200+ gently used",
      color: "from-amber-500 via-orange-500 to-red-600"
    },
    {
      name: "Thrift Accessories",
      image: "https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg?auto=compress&cs=tinysrgb&w=400",
      itemCount: "800+ unique pieces",
      color: "from-emerald-500 via-teal-500 to-cyan-600"
    },
    {
      name: "Home Thrift",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      itemCount: "600+ household items",
      color: "from-rose-500 via-pink-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">Thrift by Category</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find amazing second-hand deals in every category with our curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-3xl cursor-pointer transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              <div className="relative h-72">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-75 transition-all duration-300`}></div>
                
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{category.name}</h3>
                <p className="text-sm opacity-90 mb-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">{category.itemCount}</p>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Browse Thrift Items</span>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;