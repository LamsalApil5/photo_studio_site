import React, { useState } from 'react';
import { Menu, Bell, User, Search } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AdminHeader: React.FC = () => {
  const { currentUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
    if (isNotificationsOpen) setIsNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (isProfileMenuOpen) setIsProfileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="text-neutral-500 hover:text-neutral-900 focus:outline-none"
              aria-label="Open sidebar"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop title */}
          <div className="hidden md:block md:ml-4">
            <h1 className="text-xl font-semibold text-neutral-900">Admin Dashboard</h1>
          </div>

          {/* Mobile title */}
          <div className="md:hidden">
            <h1 className="text-lg font-semibold text-neutral-900">Admin Dashboard</h1>
          </div>

          {/* Right side - Search, notifications, profile */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <div className="flex items-center">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent w-64"
                />
              </div>
            </div>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={toggleNotifications}
                type="button"
                className="p-1 text-neutral-500 hover:text-neutral-900 focus:outline-none relative"
                aria-label="Notifications"
              >
                <Bell size={20} />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              {/* Notifications dropdown */}
              {isNotificationsOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-2 px-4 border-b border-neutral-200">
                    <h3 className="text-sm font-semibold text-neutral-900">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    <div className="px-4 py-3 hover:bg-neutral-50 border-b border-neutral-100">
                      <p className="text-sm font-medium text-neutral-900">New contact form submission</p>
                      <p className="text-xs text-neutral-500 mt-1">5 minutes ago</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-neutral-50 border-b border-neutral-100">
                      <p className="text-sm font-medium text-neutral-900">3 new photos uploaded</p>
                      <p className="text-xs text-neutral-500 mt-1">1 hour ago</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-neutral-50">
                      <p className="text-sm font-medium text-neutral-900">Blog post scheduled</p>
                      <p className="text-xs text-neutral-500 mt-1">Yesterday</p>
                    </div>
                  </div>
                  <div className="py-2 px-4 border-t border-neutral-200 text-center">
                    <a href="#" className="text-xs font-medium text-amber-700 hover:text-amber-800">
                      View all notifications
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Profile dropdown */}
            <div className="relative">
              <button
                onClick={toggleProfileMenu}
                type="button"
                className="flex items-center space-x-2 text-neutral-700 hover:text-neutral-900 focus:outline-none"
                aria-label="User menu"
              >
                <div className="h-8 w-8 rounded-full bg-amber-700 flex items-center justify-center text-white">
                  <User size={18} />
                </div>
                <span className="hidden md:block text-sm font-medium">
                  {currentUser?.email}
                </span>
              </button>

              {/* Profile dropdown menu */}
              {isProfileMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-amber-800"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
            >
              Uploads
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
            >
              Blog Posts
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
            >
              Categories
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
            >
              Settings
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default AdminHeader;