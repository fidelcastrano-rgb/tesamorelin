import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/src/constants';
import { motion } from 'motion/react';

export default function Blog() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-6xl font-display font-bold text-primary mb-6">Research Hub.</h1>
          <p className="text-xl text-gray-600">Stay informed with the latest studies, guides, and updates from the world of peptide research.</p>
        </div>

        {/* Featured Post */}
        <Link to={`/blog/${BLOG_POSTS[0].slug}`} className="group block mb-20">
          <div className="bg-white rounded-[4rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
              <img
                src={BLOG_POSTS[0].image}
                alt={BLOG_POSTS[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                  Featured Article
                </span>
                <div className="flex items-center gap-2 text-gray-600 text-xs font-bold uppercase tracking-widest">
                  <Calendar size={14} />
                  <span>{BLOG_POSTS[0].date}</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 group-hover:text-secondary transition-colors leading-tight">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                {BLOG_POSTS[0].excerpt}
              </p>
              <div className="flex items-center gap-3 text-primary font-bold text-lg">
                <span>Read Full Article</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </Link>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.slice(1).map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
              <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden bg-support">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                      <Tag size={12} />
                      <span>{post.category}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-6 group-hover:text-secondary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-8 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center gap-2 text-primary font-bold text-sm">
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
