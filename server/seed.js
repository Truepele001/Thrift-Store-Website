require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const User = require('./models/User');
const connectDB = require('./config/db');

const sampleProducts = [
  {
    name: "Pre-loved Leather Jacket - Classic Brown",
    description: "A timeless brown leather jacket in excellent condition. Perfect for both casual and semi-formal occasions.",
    price: 1500,
    category: "Men's Thrift",
    imageUrl: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Second-hand Floral Maxi Dress",
    description: "Beautiful floral pattern maxi dress, perfect for summer events. Gently used with vibrant colors.",
    price: 800,
    category: "Women's Thrift",
    imageUrl: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Thrift Designer Handbag - Genuine Leather",
    description: "Authentic designer handbag in excellent condition. Features multiple compartments and genuine leather construction.",
    price: 2200,
    category: "Bags & Accessories",
    imageUrl: "https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Thrift High-Waisted Denim Jeans",
    description: "Classic high-waisted denim jeans in great condition. Perfect fit for casual everyday wear.",
    price: 600,
    category: "Women's Thrift",
    imageUrl: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Pre-owned White Leather Sneakers",
    description: "Clean white leather sneakers in excellent condition. Comfortable and stylish for everyday wear.",
    price: 900,
    category: "Thrift Shoes",
    imageUrl: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Second-hand Silk Scarf - Beautiful Pattern",
    description: "Elegant silk scarf with intricate patterns. Perfect accessory to elevate any outfit.",
    price: 300,
    category: "Bags & Accessories",
    imageUrl: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Thrift Wool Cardigan - Cozy & Warm",
    description: "Soft wool cardigan perfect for cooler weather. Excellent condition with no signs of wear.",
    price: 1200,
    category: "Women's Thrift",
    imageUrl: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Pre-loved Gold Watch - Classic Style",
    description: "Elegant gold watch in working condition. Timeless design suitable for both casual and formal occasions.",
    price: 1800,
    category: "Bags & Accessories",
    imageUrl: "https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const sampleAdmin = {
  name: "Admin User",
  email: "admin@thriftstore.com",
  password: "admin123",
  isAdmin: true
};

const seedDatabase = async () => {
  try {
    // Connect to database
    await connectDB();

    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});

    // Create admin user
    await User.create(sampleAdmin);
    console.log('Admin user created');

    // Create sample products
    await Product.insertMany(sampleProducts);
    console.log('Sample products created');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
