# Thrift Store Website

A modern, full-stack e-commerce website for a thrift store chain in Kenya, featuring product management, user authentication, cart functionality, and IntaSend payment integration.

<!-- Updated environment variables - trigger redeploy -->

## Features

### Frontend
- **Modern UI/UX**: Built with React, TypeScript, and Tailwind CSS
- **Product Catalog**: Browse thrift products with filtering and search
- **Shopping Cart**: Add/remove items, manage quantities
- **User Authentication**: Register, login, and user profiles
- **Checkout Process**: Multi-step checkout with delivery information
- **Payment Integration**: IntaSend M-Pesa payment processing
- **Admin Panel**: Product management for administrators
- **Responsive Design**: Works on desktop, tablet, and mobile

### Backend
- **RESTful API**: Express.js with MongoDB
- **Authentication**: JWT-based user authentication
- **Product Management**: CRUD operations for products
- **Order Management**: Create and track orders
- **Payment Processing**: IntaSend API integration
- **User Management**: Role-based access control

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Axios for API calls
- React Router for navigation

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- IntaSend for payments

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Supabase account (free tier available)
- IntaSend account for payments

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Thrift-Store-Website
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd server
npm install
```

4. **Setup Supabase**
   - Create a new project at [Supabase](https://supabase.com)
   - Go to Settings > API to get your URL and anon key
   - Run the SQL script in `server/supabase-setup.sql` in your Supabase SQL editor

5. **Setup environment variables**

Frontend `.env` file (in root directory):
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Backend `.env` file (in server directory):
```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
PORT=5000
INTASEND_PUBLISHABLE_KEY=ISPubKey_test_your_key_here
INTASEND_SECRET_KEY=ISSecretKey_test_your_secret_key_here
```

6. **Start the backend server**
```bash
cd server
npm run dev
```

7. **Start the frontend development server**
```bash
# In the root directory
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5000`.

## Commands to get started

Run these commands in order:

```bash
# 1. Install frontend dependencies
npm install

# 2. Install backend dependencies
cd server && npm install

# 3. Set up Supabase database (run the SQL script in Supabase dashboard)

# 4. Configure environment variables in both .env files

# 5. Start backend (in server directory)
npm run dev

# 6. In a new terminal, start frontend (in root directory)
cd .. && npm run dev
```

## Admin Access

After seeding the database, you can access the admin panel with:
- Email: `admin@thriftstore.com`
- Password: `admin123`

Access the admin panel at: `http://localhost:3000/admin`
