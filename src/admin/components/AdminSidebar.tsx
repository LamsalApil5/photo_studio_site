import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Camera, 
  Grid, 
  FileText, 
  Tag, 
  Settings, 
  LogOut, 
  Upload,
  Video
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AdminSidebar: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className="bg-neutral-900 w-64 min-h-screen fixed hidden md:block overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Camera size={24} className="text-amber-500" />
          <span className="font-serif text-xl font-bold text-white">LensLife</span>
        </div>
        
        <p className="text-neutral-400 text-xs uppercase font-semibold tracking-wider mb-4">
          Main
        </p>
        
        <nav className="space-y-1">
          <NavItem to="/admin/dashboard" icon={<Grid size={18} />} label="Dashboard" />
          <NavItem to="/admin/uploads" icon={<Upload size={18} />} label="Photo Uploads" />
          <NavItem to="/admin/videos" icon={<Video size={18} />} label="Video Uploads" />
          <NavItem to="/admin/blogs" icon={<FileText size={18} />} label="Blog Posts" />
          <NavItem to="/admin/categories" icon={<Tag size={18} />} label="Categories" />
          <NavItem to="/admin/settings" icon={<Settings size={18} />} label="Settings" />
        </nav>
        
        <div className="border-t border-neutral-800 my-6"></div>
        
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
        >
          <LogOut size={18} />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
          isActive
            ? 'bg-amber-800 text-white'
            : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export default AdminSidebar;