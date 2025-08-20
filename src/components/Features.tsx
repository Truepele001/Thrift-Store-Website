import React from 'react';
import { Truck, Shield, RefreshCw, Headphones, Award, Leaf } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: "Affordable Delivery",
      description: "Cheap delivery within Nairobi - Free for orders above KSh 2,000"
    },
    {
      icon: Shield,
      title: "Quality Checked",
      description: "All thrift items are cleaned, inspected and quality graded"
    },
    {
      icon: RefreshCw,
      title: "Thrift Guarantee",
      description: "7-day exchange policy if item doesn't fit or meet expectations"
    },
    {
      icon: Headphones,
      title: "Thrift Help",
      description: "Get help finding the perfect clothes items via WhatsApp"
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Guaranteed lowest prices on quality Brand New clothes"
    },
    {
      icon: Leaf,
      title: "Planet Friendly",
      description: "Every cloth purchase saves clothes from landfills"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6 uppercase tracking-tight">Why Choose KarisFits?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kenya's most trusted online cloth store with the best prices and quality new clothes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-white border-2 border-gray-200 hover:border-black transition-all duration-500 hover:shadow-2xl">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:scale-110 transition-all duration-300">
                  <div className="w-12 h-12 bg-black group-hover:bg-white rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 uppercase tracking-wide">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;