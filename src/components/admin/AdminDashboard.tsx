import React, { useState } from 'react';
import { 
  BarChart3, 
  Package, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  DollarSign,
  Eye,
  Plus,
  Bell,
  Settings,
  LogOut
} from 'lucide-react';

interface AdminDashboardProps {
  onLogout?: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const stats = [
    { label: 'Total Revenue', value: 'KSh 2,450,000', change: '+12.5%', icon: DollarSign, positive: true },
    { label: 'Total Orders', value: '1,234', change: '+8.2%', icon: ShoppingCart, positive: true },
    { label: 'Total Products', value: '456', change: '+15.3%', icon: Package, positive: true },
    { label: 'Active Users', value: '890', change: '+5.7%', icon: Users, positive: true },
  ];

  const recentOrders = [
    { id: '#ORD001', customer: 'John Doe', items: 3, total: 'KSh 4,500', status: 'Completed', date: '2025-01-15' },
    { id: '#ORD002', customer: 'Jane Smith', items: 2, total: 'KSh 3,200', status: 'Processing', date: '2025-01-15' },
    { id: '#ORD003', customer: 'Mike Johnson', items: 5, total: 'KSh 7,800', status: 'Shipped', date: '2025-01-14' },
    { id: '#ORD004', customer: 'Sarah Wilson', items: 1, total: 'KSh 1,500', status: 'Pending', date: '2025-01-14' },
    { id: '#ORD005', customer: 'David Brown', items: 4, total: 'KSh 5,600', status: 'Completed', date: '2025-01-13' },
  ];

  const topProducts = [
    { name: 'Vintage Leather Jacket', sales: 45, revenue: 'KSh 135,000', stock: 12 },
    { name: 'Designer Jeans', sales: 38, revenue: 'KSh 76,000', stock: 8 },
    { name: 'Classic White Sneakers', sales: 32, revenue: 'KSh 64,000', stock: 15 },
    { name: 'Retro Band T-Shirt', sales: 28, revenue: 'KSh 28,000', stock: 22 },
    { name: 'Wool Winter Coat', sales: 25, revenue: 'KSh 75,000', stock: 5 },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-black text-sm">KF</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">KarisFits</h2>
              <p className="text-xs text-gray-400 uppercase tracking-wide">ADMIN</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-white text-black'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Admin User</p>
              <p className="text-xs text-gray-400">admin@karisfits.com</p>
            </div>
          </div>
          <button onClick={() => window.location.hash = ''} className="w-full flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors">
            <LogOut className="h-4 w-4" />
            <span className="text-sm">Back to Store</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-black capitalize">{activeTab}</h1>
              <p className="text-gray-600 text-sm">Manage your thrift store efficiently</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-black transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Add Product</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.label}</p>
                          <p className="text-2xl font-bold text-black mt-2">{stat.value}</p>
                        </div>
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-gray-600" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center">
                        <span className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.change}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">vs last month</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Charts and Tables Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-black">Recent Orders</h3>
                      <button className="text-sm text-gray-600 hover:text-black flex items-center space-x-1">
                        <span>View All</span>
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3">
                              <span className="font-medium text-black">{order.id}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{order.customer} • {order.items} items</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-black">{order.total}</p>
                            <p className="text-sm text-gray-500">{order.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Products */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-black">Top Products</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {topProducts.map((product, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                          <div className="flex-1">
                            <p className="font-medium text-black">{product.name}</p>
                            <p className="text-sm text-gray-600">{product.sales} sales • {product.stock} in stock</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-black">{product.revenue}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'overview' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="text-center">
                <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</h3>
                <p className="text-gray-600 mb-6">This section is under development. Coming soon!</p>
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
