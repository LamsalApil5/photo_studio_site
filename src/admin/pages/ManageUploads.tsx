import React, { useState } from 'react';
import { 
  Plus, 
  Upload, 
  Grid, 
  List, 
  Search, 
  Filter, 
  Trash2, 
  Edit, 
  Eye,
  X,
  Image as ImageIcon
} from 'lucide-react';

// Sample photo data
import { photos } from '../../data/photos';

const ManageUploads: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', ...new Set(photos.map(photo => photo.category))];
  
  // Filter photos by search query and category
  const filteredPhotos = photos.filter(photo => {
    const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const togglePhotoSelection = (id: string) => {
    if (selectedPhotos.includes(id)) {
      setSelectedPhotos(selectedPhotos.filter(photoId => photoId !== id));
    } else {
      setSelectedPhotos([...selectedPhotos, id]);
    }
  };
  
  const selectAllPhotos = () => {
    if (selectedPhotos.length === filteredPhotos.length) {
      setSelectedPhotos([]);
    } else {
      setSelectedPhotos(filteredPhotos.map(photo => photo.id));
    }
  };
  
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-4 sm:mb-0">Manage Photos</h1>
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="flex items-center justify-center px-4 py-2 bg-amber-700 text-white rounded-md shadow-sm hover:bg-amber-800 transition-colors"
        >
          <Plus size={18} className="mr-2" />
          Upload Photos
        </button>
      </div>
      
      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center">
            <div className="relative w-full md:w-64">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent w-full"
              />
            </div>
            <div className="relative ml-0 md:ml-2 mt-2 md:mt-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-3 pr-8 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <Filter size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none" />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md ${
                viewMode === 'grid' ? 'bg-neutral-200' : 'bg-white hover:bg-neutral-100'
              }`}
              aria-label="Grid view"
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md ${
                viewMode === 'list' ? 'bg-neutral-200' : 'bg-white hover:bg-neutral-100'
              }`}
              aria-label="List view"
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Photo Actions */}
      {selectedPhotos.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-center justify-between">
          <div className="text-sm">
            <span className="font-medium">{selectedPhotos.length}</span> photos selected
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1.5 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors flex items-center">
              <Trash2 size={14} className="mr-1" />
              Delete
            </button>
            <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center">
              <Edit size={14} className="mr-1" />
              Edit
            </button>
          </div>
        </div>
      )}
      
      {/* Photos Grid/List View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className={`relative bg-white rounded-lg overflow-hidden shadow-sm group ${
                selectedPhotos.includes(photo.id) ? 'ring-2 ring-amber-500' : ''
              }`}
            >
              <div className="relative aspect-square">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                <div className="absolute top-2 left-2">
                  <input
                    type="checkbox"
                    checked={selectedPhotos.includes(photo.id)}
                    onChange={() => togglePhotoSelection(photo.id)}
                    className="h-5 w-5 text-amber-600 rounded focus:ring-amber-500"
                  />
                </div>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-1">
                    <button className="p-1.5 bg-white rounded-full text-neutral-700 hover:text-amber-700">
                      <Eye size={16} />
                    </button>
                    <button className="p-1.5 bg-white rounded-full text-neutral-700 hover:text-amber-700">
                      <Edit size={16} />
                    </button>
                    <button className="p-1.5 bg-white rounded-full text-neutral-700 hover:text-red-700">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-neutral-900 truncate">{photo.title}</h3>
                <p className="text-xs text-neutral-500">{photo.category}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedPhotos.length === filteredPhotos.length && filteredPhotos.length > 0}
                      onChange={selectAllPhotos}
                      className="h-4 w-4 text-amber-600 rounded focus:ring-amber-500 mr-2"
                    />
                    Photo
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Date Added
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {filteredPhotos.map((photo) => (
                <tr key={photo.id} className={selectedPhotos.includes(photo.id) ? 'bg-amber-50' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedPhotos.includes(photo.id)}
                        onChange={() => togglePhotoSelection(photo.id)}
                        className="h-4 w-4 text-amber-600 rounded focus:ring-amber-500 mr-2"
                      />
                      <div className="h-10 w-10 rounded-md overflow-hidden flex-shrink-0">
                        <img src={photo.url} alt={photo.title} className="h-full w-full object-cover" />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-neutral-900">{photo.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-neutral-100 text-neutral-800">
                      {photo.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                    Apr 23, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-neutral-600 hover:text-amber-700">
                        <Eye size={16} />
                      </button>
                      <button className="text-neutral-600 hover:text-amber-700">
                        <Edit size={16} />
                      </button>
                      <button className="text-neutral-600 hover:text-red-700">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-neutral-500 bg-opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-200">
                <h3 className="text-lg font-medium text-neutral-900">Upload Photos</h3>
                <button
                  onClick={() => setIsUploadModalOpen(false)}
                  className="text-neutral-500 hover:text-neutral-900"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="px-6 py-4">
                <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
                    <Upload size={24} />
                  </div>
                  <p className="text-sm text-neutral-700 mb-2">Drag and drop files here, or click to browse</p>
                  <p className="text-xs text-neutral-500 mb-4">Supports: JPG, PNG, GIF (Max 10MB each)</p>
                  <button className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors">
                    Select Files
                  </button>
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Category
                  </label>
                  <select className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option value="">Select a category</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Portrait">Portrait</option>
                    <option value="Family">Family</option>
                    <option value="Event">Event</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
              </div>
              <div className="px-6 py-4 bg-neutral-50 flex justify-end">
                <button
                  onClick={() => setIsUploadModalOpen(false)}
                  className="px-4 py-2 bg-white border border-neutral-300 rounded-md text-neutral-700 hover:bg-neutral-50 mr-2"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUploads;