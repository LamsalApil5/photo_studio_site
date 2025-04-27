import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check for existing user session in localStorage
    const storedUser = localStorage.getItem('lenslife_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);
  
  const login = async (email: string, password: string) => {
    try {
      // This is a mock login function
      // In a real application, you would make an API call to your backend
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll accept any login with admin@example.com
      if (email === 'admin@example.com' && password === 'password') {
        const user = {
          id: '1',
          email: email,
          role: 'admin',
        };
        
        setCurrentUser(user);
        localStorage.setItem('lenslife_user', JSON.stringify(user));
        return;
      }
      
      throw new Error('Invalid email or password');
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  
  const logout = async () => {
    try {
      // This is a mock logout function
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setCurrentUser(null);
      localStorage.removeItem('lenslife_user');
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  
  const isAdmin = currentUser?.role === 'admin';
  
  const value: AuthContextType = {
    currentUser,
    loading,
    login,
    logout,
    isAdmin,
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};