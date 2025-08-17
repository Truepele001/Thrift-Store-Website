const express = require('express');
const router = express.Router();
const { supabaseAdmin } = require('../config/supabase');

// Create new order
router.post('/', async (req, res) => {
  try {
    const {
      user_id,
      order_items,
      payment_info,
      total_price,
      delivery_info,
    } = req.body;

    if (order_items && order_items.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }

    const { data: order, error } = await supabaseAdmin
      .from('orders')
      .insert([
        {
          user_id,
          order_items,
          payment_info,
          total_price,
          delivery_info,
          is_paid: false,
        }
      ])
      .select()
      .single();

    if (error) {
      throw error;
    }

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get order by ID
router.get('/:id', async (req, res) => {
  try {
    const { data: order, error } = await supabaseAdmin
      .from('orders')
      .select('*, users(name, email)')
      .eq('id', req.params.id)
      .single();

    if (error) {
      throw error;
    }

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update order to paid
router.put('/:id/pay', async (req, res) => {
  try {
    const { data: order, error } = await supabaseAdmin
      .from('orders')
      .update({
        is_paid: true,
        paid_at: new Date().toISOString(),
        payment_info: req.body,
      })
      .eq('id', req.params.id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user orders
router.get('/user/:userId', async (req, res) => {
  try {
    const { data: orders, error } = await supabaseAdmin
      .from('orders')
      .select('*')
      .eq('user_id', req.params.userId)
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
