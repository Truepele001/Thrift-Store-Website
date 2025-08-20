const express = require('express');
const router = express.Router();
const { supabaseAdmin } = require('../config/supabase');

// Sample data for when Supabase is not configured
const sampleProducts = [
  {
    id: '1',
    name: "Pre-loved Leather Jacket - Classic Brown",
    description: "A timeless brown leather jacket in excellent condition. Perfect for both casual and semi-formal occasions.",
    price: 1500,
    category: "Men's Clothes",
    imageUrl: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: "Second-hand Floral Maxi Dress",
    description: "Beautiful floral pattern maxi dress, perfect for summer events. Gently used with vibrant colors.",
    price: 800,
    category: "Women's Clothes",
    imageUrl: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: "Shop Designer Handbag - Genuine Leather",
    description: "Authentic designer handbag in excellent condition. Features multiple compartments and genuine leather construction.",
    price: 2200,
    category: "Bags & Accessories",
    imageUrl: "https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    name: "Shop High-Waisted Denim Jeans",
    description: "Classic high-waisted denim jeans in great condition. Perfect fit for casual everyday wear.",
    price: 600,
    category: "Women's Clothes",
    imageUrl: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: new Date().toISOString()
  }
];

// Get all products with filtering and pagination
router.get('/', async (req, res) => {
  try {
    // Check if Supabase is properly configured
    if (!process.env.SUPABASE_URL || process.env.SUPABASE_URL === 'https://your-project-id.supabase.co') {
      console.log('⚠️  Supabase not configured, returning sample data');
      return res.json({
        products: sampleProducts,
        totalPages: 1,
        currentPage: 1,
        total: sampleProducts.length
      });
    }

    const { category, page = 1, limit = 12, search } = req.query;
    
    let query = supabaseAdmin.from('products').select('*');
    
    if (category && category !== 'all') {
      query = query.eq('category', category);
    }
    
    if (search) {
      query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`);
    }

    const { data: products, error, count } = await query
      .range((page - 1) * limit, page * limit - 1)
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    res.json({
      products,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      total: count
    });
  } catch (err) {
    console.error('Error fetching products:', err.message);
    // Fallback to sample data on error
    res.json({
      products: sampleProducts,
      totalPages: 1,
      currentPage: 1,
      total: sampleProducts.length
    });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const { data: product, error } = await supabaseAdmin
      .from('products')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error) {
      throw error;
    }

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a product
router.post('/', async (req, res) => {
  try {
    const { name, description, price, category, imageUrl } = req.body;

    const { data: product, error } = await supabaseAdmin
      .from('products')
      .insert([{ name, description, price, category, imageUrl }])
      .select()
      .single();

    if (error) {
      throw error;
    }

    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update product
router.put('/:id', async (req, res) => {
  try {
    const { data: product, error } = await supabaseAdmin
      .from('products')
      .update(req.body)
      .eq('id', req.params.id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete product
router.delete('/:id', async (req, res) => {
  try {
    const { error } = await supabaseAdmin
      .from('products')
      .delete()
      .eq('id', req.params.id);

    if (error) {
      throw error;
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
