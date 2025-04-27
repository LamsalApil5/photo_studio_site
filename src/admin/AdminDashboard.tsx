import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';
import Dashboard from './pages/Dashboard';
import ManageUploads from './pages/ManageUploads';
import ManageBlogs from './pages/ManageBlogs';
import ManageCategories from './pages/ManageCategories';
import ManageSettings from './pages/ManageSettings';

const AdminDashboard: React.FC = () => {
  const { currentUser, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!currentUser) {
      navigate('/admin/login', { replace: true });
    }
  }, [currentUser, navigate]);

  // Don't render the admin dashboard if user is not authenticated or not an admin
  if (!currentUser || !isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-neutral-100 p-4 md:p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/uploads/*" element={<ManageUploads />} />
            <Route path="/blogs/*" element={<ManageBlogs />} />
            <Route path="/categories" element={<ManageCategories />} />
            <Route path="/settings" element={<ManageSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;