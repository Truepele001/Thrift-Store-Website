import { Product } from './types';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('http://localhost:5000/api/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const checkout = async (cart: Product[], amount: number, phone_number: string) => {
  const intasend = new (window as any).IntaSend({
    publishable_key: 'ISPubKey_test_your_key_here', // Replace with your publishable key
  });

  intasend.on('COMPLETE', (results: any) => {
    console.log('Payment successful', results);
    // Handle successful payment (e.g., clear cart, show success message)
  });

  intasend.on('FAILED', (results: any) => {
    console.log('Payment failed', results);
    // Handle failed payment (e.g., show error message)
  });

  intasend.pay({
    amount,
    currency: 'KES',
    phone_number,
  });
};
