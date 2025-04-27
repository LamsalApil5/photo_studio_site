import React, { useState } from 'react';
import { Plus, Edit, Trash2, Check, X } from 'lucide-react';

// Sample categories
const initialCategories = [
  { id: '1', name: 'Wedding', count: 85 },
  { id: '2', name: 'Portrait', count: 42 },
  { id: '3', name: 'Family', count: 37 },
  { id: '4', name: 'Event', count: 23 },
  { id: '5', name: 'Commercial', count: 18 },
  { id: '6', name: 'Travel', count: 14 },
  { id: '7', name: 'Fashion', count: 9 },
  { id: '8', name: 'Food', count: 6 },
];

const ManageCategories: React.FC = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [editingCategoryName, setEditingCategoryName] = useState('');
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  
  const handleAddCategory = () => {
    if (newCategoryName.trim() === '') return;
    
    const newCategory = {
      id: Date.now().toString(),
      name: newCategoryName.trim(),
      count: 0,
    };
    
    setCategories([...categories, newCategory]);
    setNewCategoryName('');
    setIsAddingCategory(false);
  };
  
  const handleEditCategory = (id: string) => {
    const category = categories.find(cat => cat.id === id);
    if (category) {
      setEditingCategoryId(id);
      setEditingCategoryName(category.name);
    }
  };
  
  const handleSaveEdit = (id: string) => {
    if (editingCategoryName.trim() === '') return;
    
    setCategories(categories.map(category => 
      category.id === id 
        ? { ...category, name: editingCategoryName.trim() } 
        : category
    ));
    
    setEditingCategoryId(null);
    setEditingCategoryName('');
  };
  
  const handleCancelEdit = () => {
    setEditingCategoryId(null);
    setEditingCategoryName('');
  };
  
  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter(category => category.id !== id));
  };
  
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-neutral-900">Manage Categories</h1>
        <button
          onClick={() => setIsAddingCategory(true)}
          className="flex items-center justify-center px-4 py-2 bg-amber-700 text-white rounded-md shadow-sm hover:bg-amber-800 transition-colors"
        >
          <Plus size={18} className="mr-2" />
          Add Category
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-neutral-200">
          <h2 className="text-lg font-medium text-neutral-900">Categories</h2>
          <p className="text-sm text-neutral-500">Manage categories for photos, videos, and blog posts.</p>
        </div>
        
        {/* Add Category Form */}
        {isAddingCategory && (
          <div className="px-6 py-4 bg-amber-50 border-b border-amber-200">
            <h3 className="text-sm font-medium text-neutral-900 mb-2">Add New Category</h3>
            <div className="flex">
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Category name"
                className="flex-grow px-3 py-2 border border-neutral-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                onClick={handleAddCategory}
                className="px-3 py-2 bg-amber-700 text-white rounded-r-md hover:bg-amber-800 transition-colors"
              >
                <Check size={18} />
              </button>
              <button
                onClick={() => setIsAddingCategory(false)}
                className="px-3 py-2 bg-white text-neutral-700 border border-neutral-300 rounded-md ml-2 hover:bg-neutral-50"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        )}
        
        {/* Categories List */}
        <ul className="divide-y divide-neutral-200">
          {categories.map((category) => (
            <li key={category.id} className="px-6 py-4 hover:bg-neutral-50">
              {editingCategoryId === category.id ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={editingCategoryName}
                    onChange={(e) => setEditingCategoryName(e.target.value)}
                    className="flex-grow px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => handleSaveEdit(category.id)}
                    className="ml-2 p-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors"
                  >
                    <Check size={16} />
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="ml-2 p-2 bg-white text-neutral-700 border border-neutral-300 rounded-md hover:bg-neutral-50"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-neutral-900 mr-2">{category.name}</span>
                    <span className="px-2 py-0.5 text-xs bg-neutral-100 text-neutral-700 rounded-full">
                      {category.count} items
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditCategory(category.id)}
                      className="p-1 text-neutral-500 hover:text-amber-700"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(category.id)}
                      className="p-1 text-neutral-500 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageCategories;