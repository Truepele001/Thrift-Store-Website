import axios from 'axios';
import { Product } from './types';

// Use environment variable for API URL, fallback to localhost for development
// If deployed on Vercel, use same domain for API calls
const getAPIBaseURL = () => {
  // If environment variable is set, use it
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  
  // If in production and on vercel domain, use same domain
  if (import.meta.env.PROD && window.location.hostname.includes('vercel.app')) {
    return `${window.location.protocol}//${window.location.host}/api`;
  }
  
  // Default to localhost for development
  return 'http://localhost:5000/api';
};

const API_BASE_URL = getAPIBaseURL();

console.log('API Configuration:', {
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  API_BASE_URL,
  hostname: window.location.hostname,
  environment: import.meta.env.MODE
});

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Products API
export const fetchProducts = async (params?: {
  category?: string;
  page?: number;
  limit?: number;
  search?: string;
}): Promise<{ products: Product[]; totalPages: number; currentPage: number; total: number }> => {
  const response = await api.get('/products', { params });
  return response.data;
};

export const fetchProduct = async (id: string): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (product: Omit<Product, '_id'>): Promise<Product> => {
  const response = await api.post('/products', product);
  return response.data;
};

export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product> => {
  const response = await api.put(`/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await api.delete(`/products/${id}`);
};

// Auth API
export const register = async (userData: {
  name: string;
  email: string;
  password: string;
}): Promise<{
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
}> => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const login = async (credentials: {
  email: string;
  password: string;
}): Promise<{
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
}> => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

// Orders API
export const createOrder = async (orderData: {
  orderItems: Array<{
    name: string;
    quantity: number;
    image: string;
    price: number;
    product: string;
  }>;
  paymentInfo: {
    id: string;
    status: string;
    update_time: string;
  };
  totalPrice: number;
  deliveryInfo: {
    address: string;
    city: string;
    postalCode: string;
    phone: string;
  };
}): Promise<any> => {
  const response = await api.post('/orders', orderData);
  return response.data;
};

export const getOrder = async (id: string): Promise<any> => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};

export const updateOrderToPaid = async (id: string, paymentInfo: {
  id: string;
  status: string;
  update_time: string;
}): Promise<any> => {
  const response = await api.put(`/orders/${id}/pay`, paymentInfo);
  return response.data;
};

export const getUserOrders = async (): Promise<any[]> => {
  const response = await api.get('/orders/myorders');
  return response.data;
};

// Payment API with IntaSend
export const processPayment = async (paymentData: {
  amount: number;
  phone_number: string;
  email: string;
  first_name: string;
  last_name: string;
  host?: string;
}): Promise<any> => {
  const response = await api.post('/payments/checkout', paymentData);
  return response.data;
};

// Enhanced checkout function that creates order and processes payment
export const checkout = async (
  cart: Product[],
  deliveryInfo: {
    address: string;
    city: string;
    postalCode: string;
    phone: string;
  },
  userInfo: {
    email: string;
    first_name: string;
    last_name: string;
  }
): Promise<any> => {
  try {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    // First process payment
    const paymentResult = await processPayment({
      amount: totalPrice,
      phone_number: deliveryInfo.phone,
      email: userInfo.email,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
    });

    // If payment is successful, create order
    if (paymentResult.status === 'success') {
      const orderItems = cart.map(item => ({
        name: item.name,
        quantity: 1, // Assuming quantity of 1 for each item
        image: item.imageUrl,
        price: item.price,
        product: item._id,
      }));

      const orderData = {
        orderItems,
        paymentInfo: {
          id: paymentResult.id,
          status: paymentResult.status,
          update_time: new Date().toISOString(),
        },
        totalPrice,
        deliveryInfo,
      };

      const order = await createOrder(orderData);
      return { success: true, order, payment: paymentResult };
    }

    return { success: false, error: 'Payment failed' };
  } catch (error: any) {
    console.error('Checkout error:', error);
    return { success: false, error: error.response?.data?.message || 'Checkout failed' };
  }
};
