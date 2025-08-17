-- Create users table (extends Supabase auth.users)
CREATE TABLE public.users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create products table
CREATE TABLE public.products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL,
  imageUrl TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create orders table
CREATE TABLE public.orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) NOT NULL,
  order_items JSONB NOT NULL,
  payment_info JSONB,
  total_price DECIMAL(10,2) NOT NULL,
  is_paid BOOLEAN DEFAULT FALSE,
  paid_at TIMESTAMP WITH TIME ZONE,
  delivery_info JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create policies for users table
CREATE POLICY "Users can view their own profile" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.users
  FOR UPDATE USING (auth.uid() = id);

-- Create policies for products table
CREATE POLICY "Anyone can view products" ON public.products
  FOR SELECT TO public USING (true);

CREATE POLICY "Only admins can insert products" ON public.products
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

CREATE POLICY "Only admins can update products" ON public.products
  FOR UPDATE TO authenticated USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

CREATE POLICY "Only admins can delete products" ON public.products
  FOR DELETE TO authenticated USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Create policies for orders table
CREATE POLICY "Users can view their own orders" ON public.orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own orders" ON public.orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own orders" ON public.orders
  FOR UPDATE USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX idx_products_category ON public.products(category);
CREATE INDEX idx_products_created_at ON public.products(created_at);
CREATE INDEX idx_orders_user_id ON public.orders(user_id);
CREATE INDEX idx_orders_created_at ON public.orders(created_at);

-- Insert sample products
INSERT INTO public.products (name, description, price, category, imageUrl) VALUES
('Pre-loved Leather Jacket - Classic Brown', 'A timeless brown leather jacket in excellent condition. Perfect for both casual and semi-formal occasions.', 1500.00, 'Men''s Thrift', 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400'),
('Second-hand Floral Maxi Dress', 'Beautiful floral pattern maxi dress, perfect for summer events. Gently used with vibrant colors.', 800.00, 'Women''s Thrift', 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400'),
('Thrift Designer Handbag - Genuine Leather', 'Authentic designer handbag in excellent condition. Features multiple compartments and genuine leather construction.', 2200.00, 'Bags & Accessories', 'https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg?auto=compress&cs=tinysrgb&w=400'),
('Thrift High-Waisted Denim Jeans', 'Classic high-waisted denim jeans in great condition. Perfect fit for casual everyday wear.', 600.00, 'Women''s Thrift', 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=400'),
('Pre-owned White Leather Sneakers', 'Clean white leather sneakers in excellent condition. Comfortable and stylish for everyday wear.', 900.00, 'Thrift Shoes', 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400'),
('Second-hand Silk Scarf - Beautiful Pattern', 'Elegant silk scarf with intricate patterns. Perfect accessory to elevate any outfit.', 300.00, 'Bags & Accessories', 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=400'),
('Thrift Wool Cardigan - Cozy & Warm', 'Soft wool cardigan perfect for cooler weather. Excellent condition with no signs of wear.', 1200.00, 'Women''s Thrift', 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400'),
('Pre-loved Gold Watch - Classic Style', 'Elegant gold watch in working condition. Timeless design suitable for both casual and formal occasions.', 1800.00, 'Bags & Accessories', 'https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg?auto=compress&cs=tinysrgb&w=400');
