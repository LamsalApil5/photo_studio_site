import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  publishedAt: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px] hover:shadow-lg">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-60 overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-amber-700 text-white text-xs font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center text-neutral-500 text-sm mb-2">
          <Calendar size={16} className="mr-1" />
          <time dateTime={post.publishedAt}>{formattedDate}</time>
        </div>
        <Link to={`/blog/${post.slug}`} className="block">
          <h3 className="text-xl font-serif font-semibold text-neutral-800 mb-2 hover:text-amber-700 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-neutral-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-block text-amber-700 font-medium text-sm hover:text-amber-800 transition-colors"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;