import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminApp from './components/admin/AdminApp';
import App from './App';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminApp />} />
      <Route path="/*" element={<App />} />
    </Routes>
  );
};

export default AppRouter;
