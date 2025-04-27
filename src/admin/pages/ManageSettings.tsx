import React, { useState } from 'react';
import { Save, User, Mail, Phone, MapPin, Palette, Layout, Globe } from 'lucide-react';

const ManageSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  
  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setShowSaveMessage(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSaveMessage(false);
      }, 3000);
    }, 800);
  };
  
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-neutral-900">Site Settings</h1>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className={`flex items-center justify-center px-4 py-2 bg-amber-700 text-white rounded-md shadow-sm transition-colors ${
            isSaving ? 'opacity-70 cursor-not-allowed' : 'hover:bg-amber-800'
          }`}
        >
          {isSaving ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Saving...
            </>
          ) : (
            <>
              <Save size={18} className="mr-2" />
              Save Changes
            </>
          )}
        </button>
      </div>
      
      {showSaveMessage && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded flex items-start">
          <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p className="font-medium">Settings saved successfully!</p>
            <p className="text-sm">Your changes have been applied to the website.</p>
          </div>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex border-b border-neutral-200">
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === 'general'
                ? 'text-amber-700 border-b-2 border-amber-700'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
            onClick={() => setActiveTab('general')}
          >
            General
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === 'contact'
                ? 'text-amber-700 border-b-2 border-amber-700'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
            onClick={() => setActiveTab('contact')}
          >
            Contact Info
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === 'appearance'
                ? 'text-amber-700 border-b-2 border-amber-700'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
            onClick={() => setActiveTab('appearance')}
          >
            Appearance
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === 'seo'
                ? 'text-amber-700 border-b-2 border-amber-700'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
            onClick={() => setActiveTab('seo')}
          >
            SEO
          </button>
        </div>
        
        <div className="p-6">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-neutral-900 mb-4">General Settings</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Site Title
                    </label>
                    <input
                      type="text"
                      defaultValue="LensLife Photography"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Tagline
                    </label>
                    <input
                      type="text"
                      defaultValue="Capturing life's beautiful moments"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium text-neutral-900 mb-2">Social Media Links</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Instagram
                    </label>
                    <input
                      type="text"
                      defaultValue="https://instagram.com/lenslife"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Facebook
                    </label>
                    <input
                      type="text"
                      defaultValue="https://facebook.com/lenslife"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Twitter
                    </label>
                    <input
                      type="text"
                      defaultValue="https://twitter.com/lenslife"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Pinterest
                    </label>
                    <input
                      type="text"
                      defaultValue="https://pinterest.com/lenslife"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium text-neutral-900 mb-2">Admin Account</h3>
                <div className="flex items-center p-4 bg-neutral-50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-amber-700 flex items-center justify-center text-white mr-4">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">admin@example.com</p>
                    <p className="text-xs text-neutral-500">Admin</p>
                  </div>
                  <button className="ml-auto text-sm text-amber-700 hover:text-amber-800">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-neutral-900 mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start">
                    <Mail size={20} className="text-neutral-500 mt-1 mr-2" />
                    <div className="flex-grow">
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="info@lenslife.com"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={20} className="text-neutral-500 mt-1 mr-2" />
                    <div className="flex-grow">
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        defaultValue="(555) 123-4567"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={20} className="text-neutral-500 mt-1 mr-2" />
                    <div className="flex-grow">
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Address
                      </label>
                      <textarea
                        defaultValue="123 Photography Lane, Shutter City, SC 12345"
                        rows={3}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium text-neutral-900 mb-2">Business Hours</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Monday - Friday
                    </label>
                    <input
                      type="text"
                      defaultValue="9:00 AM - 6:00 PM"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Saturday
                    </label>
                    <input
                      type="text"
                      defaultValue="10:00 AM - 4:00 PM"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Sunday
                    </label>
                    <input
                      type="text"
                      defaultValue="Closed"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium text-neutral-900 mb-2">Google Maps Embed</h3>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Maps Embed URL
                  </label>
                  <input
                    type="text"
                    defaultValue="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1655903184517!5m2!1sen!2s"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'appearance' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-neutral-900 mb-4">Site Appearance</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="col-span-1 sm:col-span-2">
                    <div className="flex items-start">
                      <Palette size={20} className="text-neutral-500 mt-1 mr-2" />
                      <div className="flex-grow">
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Primary Color
                        </label>
                        <div className="flex">
                          <input
                            type="color"
                            defaultValue="#b45309"
                            className="h-10 w-14 p-1 rounded-l-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            defaultValue="#b45309"
                            className="w-28 px-3 py-2 border-y border-r border-neutral-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Logo
                    </label>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-neutral-200 rounded-md flex items-center justify-center overflow-hidden mr-3">
                        <Camera size={24} className="text-amber-700" />
                      </div>
                      <button className="px-3 py-1.5 bg-white border border-neutral-300 rounded text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
                        Choose File
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Favicon
                    </label>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-neutral-200 rounded-md flex items-center justify-center overflow-hidden mr-3">
                        <Camera size={24} className="text-amber-700" />
                      </div>
                      <button className="px-3 py-1.5 bg-white border border-neutral-300 rounded text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
                        Choose File
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium text-neutral-900 mb-2">Hero Section</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start">
                    <Layout size={20} className="text-neutral-500 mt-1 mr-2" />
                    <div className="flex-grow">
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Hero Background Image
                      </label>
                      <div className="mb-2">
                        <input
                          type="text"
                          defaultValue="https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg"
                          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                      </div>
                      <div className="border border-neutral-300 rounded-md p-2 bg-neutral-50">
                        <img
                          src="https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=240"
                          alt="Hero Preview"
                          className="h-24 w-48 object-cover rounded-md mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Hero Heading
                    </label>
                    <input
                      type="text"
                      defaultValue="Capturing Life's Beautiful Moments"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Hero Subheading
                    </label>
                    <input
                      type="text"
                      defaultValue="Professional photography and videography services for all your special occasions."
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-neutral-900 mb-4">SEO Settings</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start">
                    <Globe size={20} className="text-neutral-500 mt-1 mr-2" />
                    <div className="flex-grow">
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Site Meta Title
                      </label>
                      <input
                        type="text"
                        defaultValue="LensLife Photography | Professional Photo & Video Services"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                      <p className="mt-1 text-xs text-neutral-500">
                        Recommended length: 50-60 characters
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Meta Description
                    </label>
                    <textarea
                      defaultValue="LensLife Photography offers professional photography and videography services for weddings, events, portraits, and commercial projects. Based in Shutter City, serving nationwide."
                      rows={3}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                    <p className="mt-1 text-xs text-neutral-500">
                      Recommended length: 150-160 characters
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Meta Keywords
                    </label>
                    <input
                      type="text"
                      defaultValue="photography, videography, wedding photographer, portrait photography, event videography, professional photographer"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                    <p className="mt-1 text-xs text-neutral-500">
                      Separate keywords with commas
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium text-neutral-900 mb-2">Social Media SEO</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Open Graph Title
                    </label>
                    <input
                      type="text"
                      defaultValue="LensLife Photography | Capturing Your Special Moments"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Open Graph Description
                    </label>
                    <textarea
                      defaultValue="Professional photography and videography services for weddings, events, portraits, and more. Let us capture your beautiful moments."
                      rows={2}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Open Graph Image
                    </label>
                    <div className="flex items-center">
                      <div className="w-24 h-16 bg-neutral-200 rounded-md flex items-center justify-center overflow-hidden mr-3">
                        <img
                          src="https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=240"
                          alt="OG Preview"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <button className="px-3 py-1.5 bg-white border border-neutral-300 rounded text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
                        Choose File
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-neutral-500">
                      Recommended size: 1200 x 630 pixels
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium text-neutral-900 mb-2">Analytics</h3>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Google Analytics Tracking ID
                  </label>
                  <input
                    type="text"
                    defaultValue="UA-123456789-1"
                    placeholder="e.g., UA-XXXXXXXXX-X or G-XXXXXXXXXX"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageSettings;