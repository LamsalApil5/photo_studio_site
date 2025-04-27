import React, { useState } from 'react';
import { blogPosts } from '../data/blogPosts';
import BlogCard from '../components/blog/BlogCard';
import FeaturedPost from '../components/blog/FeaturedPost';
import { Search } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const latestFeaturedPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  // Extract unique categories
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts by search query and category
  const filteredPosts = remainingPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-neutral-300">
              Insights, tips, and stories from the world of photography and videography.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          <div className="mb-16">
            <FeaturedPost post={latestFeaturedPost} />
          </div>

          {/* Search and Filters */}
          <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-auto relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-neutral-700 font-medium">Filter by:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-amber-700 text-white'
                      : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-neutral-800 mb-2">No posts found</h3>
              <p className="text-neutral-600">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-neutral-300 mb-6">
              Stay updated with the latest photography tips, trends, and exclusive content.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-neutral-900"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-700 text-white rounded-md font-medium transition-colors hover:bg-amber-800"
              >
                Subscribe
              </button>
            </form>
            <p className="text-neutral-400 text-sm mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;