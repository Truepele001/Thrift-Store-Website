const express = require('express');
const router = express.Router();
const axios = require('axios');

// IntaSend checkout
router.post('/checkout', async (req, res) => {
  try {
    const { amount, phone_number, email, first_name, last_name, host } = req.body;

    const payload = {
      public_key: process.env.INTASEND_PUBLISHABLE_KEY,
      amount: amount,
      currency: 'KES',
      method: 'M-PESA',
      phone_number: phone_number,
      email: email,
      first_name: first_name,
      last_name: last_name,
      host: host || 'http://localhost:3000'
    };

    const response = await axios.post('https://sandbox.intasend.com/api/v1/payment/mpesa-stk-push/', payload, {
      headers: {
        'Content-Type': 'application/json',
        'X-IntaSend-Public-API-Key': process.env.INTASEND_PUBLISHABLE_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Payment error:', error.response?.data || error.message);
    res.status(500).json({ 
      message: 'Payment failed', 
      error: error.response?.data || error.message 
    });
  }
});

// Payment callback/webhook
router.post('/callback', async (req, res) => {
  try {
    console.log('Payment callback received:', req.body);
    
    // Here you would update your order status based on the payment result
    // and possibly send confirmation emails, etc.
    
    res.status(200).json({ message: 'Callback received' });
  } catch (error) {
    console.error('Callback error:', error);
    res.status(500).json({ message: 'Callback processing failed' });
  }
});

module.exports = router;
