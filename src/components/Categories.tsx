import React from 'react';
import { ArrowRight } from 'lucide-react';

const Categories: React.FC = () => {
  const categories = [
    {
      name: "Women's Clothes",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
      itemCount: "2,500+ pre-loved items",
      color: "from-black/80 to-black/60"
    },
    {
      name: "Men's Clothes",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
      itemCount: "1,800+ second-hand finds",
      color: "from-black/70 to-black/50"
    },
    {
      name: "Kids Clothes",
      image: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400",
      itemCount: "1,200+ gently used",
      color: "from-black/80 to-black/60"
    },
    {
      name: "Other Accessories",
      image: "https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg?auto=compress&cs=tinysrgb&w=400",
      itemCount: "800+ unique pieces",
      color: "from-black/70 to-black/50"
    },
    {
      name: "Home Stuff",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      itemCount: "600+ household items",
      color: "from-black/80 to-black/60"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black text-black mb-8 tracking-tight uppercase">Shop by Category</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find amazing new clothes deals in every category with our curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
            >
              <div className="relative h-96">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} group-hover:opacity-40 transition-all duration-300`}></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-black mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 uppercase tracking-wide">{category.name}</h3>
                <p className="text-sm opacity-90 mb-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75 uppercase tracking-wide">{category.itemCount}</p>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-sm font-bold bg-white text-black px-6 py-3 rounded-none uppercase tracking-wide">Browse Items</span>
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