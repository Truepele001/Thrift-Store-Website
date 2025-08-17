# Thrift Store Backend Setup

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

## Installation

1. Install dependencies:
```bash
cd server
npm install
```

2. Setup environment variables:
   - Copy `.env.example` to `.env`
   - Update the following variables in `.env`:
     - `MONGO_URI`: Your MongoDB connection string
     - `JWT_SECRET`: A secure random string for JWT tokens
     - `INTASEND_PUBLISHABLE_KEY`: Your IntaSend publishable key
     - `INTASEND_SECRET_KEY`: Your IntaSend secret key

3. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will run on http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products (supports filtering and pagination)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (auth required)
- `PUT /api/products/:id` - Update product (auth required)
- `DELETE /api/products/:id` - Delete product (auth required)

### Orders
- `POST /api/orders` - Create new order (auth required)
- `GET /api/orders/:id` - Get order by ID (auth required)
- `PUT /api/orders/:id/pay` - Update order to paid (auth required)
- `GET /api/orders/myorders` - Get user's orders (auth required)

### Payments
- `POST /api/payments/checkout` - Process payment with IntaSend
- `POST /api/payments/callback` - Payment callback/webhook

## Database Models

### User
- name, email, password, isAdmin, date

### Product
- name, description, price, category, imageUrl, date

### Order
- user, orderItems, paymentInfo, totalPrice, isPaid, paidAt, deliveryInfo, date
