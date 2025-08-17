export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  date?: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

export interface CartItem extends Product {
  quantity: number;
  size?: string;
}

export interface Order {
  _id: string;
  user: string;
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
  isPaid: boolean;
  paidAt?: string;
  deliveryInfo: {
    address: string;
    city: string;
    postalCode: string;
    phone: string;
  };
  date: string;
}

export interface DeliveryInfo {
  address: string;
  city: string;
  postalCode: string;
  phone: string;
}

export interface UserInfo {
  email: string;
  first_name: string;
  last_name: string;
}
