import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find((post) => post.slug === slug);
  
  if (!post) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-6">The blog post you're looking for doesn't exist.</p>
        <Link
          to="/blog"
          className="inline-flex items-center px-4 py-2 bg-amber-700 text-white rounded-md"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }
  
  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
  
  // Format date
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <>
      {/* Blog Post Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center text-neutral-300 hover:text-amber-400 mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </button>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="inline-block bg-amber-700 text-white text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-neutral-300 gap-6 mb-6">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-neutral-700 mb-6">
                  {post.excerpt}
                </p>
                
                <div dangerouslySetInnerHTML={{ __html: post.content || '<p>Content coming soon...</p>' }} />
                
                {/* Tags */}
                <div className="mt-10 pt-6 border-t border-neutral-200">
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag size={18} className="text-neutral-500" />
                    {post.tags && post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-neutral-100 text-neutral-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Share */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h3 className="text-lg font-semibold mb-4">Share this post</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="p-2 bg-[#1877F2] text-white rounded-full hover:bg-opacity-90 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-[#1DA1F2] text-white rounded-full hover:bg-opacity-90 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-[#0A66C2] text-white rounded-full hover:bg-opacity-90 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-8">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                    <Link to={`/blog/${relatedPost.slug}`} className="block">
                      <img
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                    <div className="p-4">
                      <Link to={`/blog/${relatedPost.slug}`} className="block">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2 hover:text-amber-700 transition-colors">
                          {relatedPost.title}
                        </h3>
                      </Link>
                      <p className="text-neutral-600 text-sm line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="text-amber-700 font-medium text-sm hover:text-amber-800 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogPostPage;