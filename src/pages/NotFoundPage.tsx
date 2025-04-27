import React from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 py-12 px-4">
      <div className="max-w-md w-full text-center">
        <Camera size={60} className="mx-auto text-amber-700 mb-6" />
        <h1 className="text-6xl font-serif font-bold text-neutral-900 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-neutral-800 mb-6">Page Not Found</h2>
        <p className="text-neutral-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-amber-700 text-white rounded-md font-medium transition-colors hover:bg-amber-800"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;