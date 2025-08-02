import React from 'react';
import { Truck, Shield, RefreshCw, Headphones, Award, Leaf } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: "Affordable Delivery",
      description: "Cheap delivery within Nairobi - Free for orders above KSh 2,000",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: Shield,
      title: "Quality Checked",
      description: "All thrift items are cleaned, inspected and quality graded",
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50"
    },
    {
      icon: RefreshCw,
      title: "Thrift Guarantee",
      description: "7-day exchange policy if item doesn't fit or meet expectations",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50"
    },
    {
      icon: Headphones,
      title: "Thrift Help",
      description: "Get help finding the perfect thrift items via WhatsApp",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50"
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Guaranteed lowest prices on quality second-hand items",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      icon: Leaf,
      title: "Planet Friendly",
      description: "Every thrift purchase saves clothes from landfills",
      color: "from-teal-500 to-emerald-500",
      bgColor: "from-teal-50 to-emerald-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">Why Choose KarisFits?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kenya's most trusted thrift store with the best prices and quality second-hand items
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 hover:scale-105">
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;