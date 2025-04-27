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

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="relative bg-white rounded-lg overflow-hidden shadow-lg group">
      <div className="lg:flex">
        <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-amber-700 text-white text-xs font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex items-center text-neutral-500 text-sm mb-3">
            <Calendar size={16} className="mr-1" />
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </div>
          <Link to={`/blog/${post.slug}`} className="block">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-neutral-800 mb-3 hover:text-amber-700 transition-colors">
              {post.title}
            </h2>
          </Link>
          <p className="text-neutral-600 mb-5">{post.excerpt}</p>
          <Link
            to={`/blog/${post.slug}`}
            className="inline-block px-5 py-2.5 bg-amber-700 text-white rounded-md font-medium text-sm transition-colors hover:bg-amber-800 self-start"
          >
            Read Article
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;