import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag, Share2, MessageCircle, Mail, ChevronRight } from 'lucide-react';
import { BLOG_POSTS, PRODUCTS } from '@/src/constants';
import { motion } from 'motion/react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-40 pb-40 text-center">
        <h1 className="text-4xl font-display font-bold text-primary mb-8">Article not found.</h1>
        <Link to="/blog" className="btn-primary">Back to Research Hub</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <header className="relative py-32 md:py-48 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={post.image} alt="" className="w-full h-full object-cover blur-sm" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 font-bold text-sm uppercase tracking-widest">
            <ArrowLeft size={16} />
            <span>Back to Research Hub</span>
          </Link>
          <div className="flex items-center justify-center gap-6 mb-8">
            <span className="bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-widest">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <User size={24} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-white/60">Written By</p>
              <p className="font-bold">{post.author}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h4 className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-6">Share Article</h4>
                  <div className="flex flex-col gap-4">
                    <button className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors font-bold text-sm">
                      <div className="w-10 h-10 bg-support rounded-xl flex items-center justify-center"><Share2 size={18} /></div>
                      <span>Copy Link</span>
                    </button>
                    <a href="https://wa.me/447341056054" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-[#25D366] transition-colors font-bold text-sm">
                      <div className="w-10 h-10 bg-support rounded-xl flex items-center justify-center"><MessageCircle size={18} /></div>
                      <span>WhatsApp</span>
                    </a>
                    <button className="flex items-center gap-3 text-gray-600 hover:text-secondary transition-colors font-bold text-sm">
                      <div className="w-10 h-10 bg-support rounded-xl flex items-center justify-center"><Mail size={18} /></div>
                      <span>Email</span>
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-6">Related Products</h4>
                  <div className="space-y-4">
                    {PRODUCTS.slice(0, 3).map((p) => (
                      <Link key={p.id} to={`/products/${p.slug}`} className="group block">
                        <div className="flex items-center gap-4 p-4 bg-support rounded-2xl border border-gray-100 hover:border-primary/20 transition-all">
                          <div className="w-12 h-12 bg-white rounded-xl overflow-hidden flex-shrink-0">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{p.name}</p>
                            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">From £{p.variants[0].price.toFixed(2)}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-9">
              <div className="prose prose-lg prose-primary max-w-none">
                <div className="bg-support p-8 rounded-[2.5rem] border border-primary/5 mb-12">
                  <p className="text-xl text-primary font-medium italic leading-relaxed">
                    "{post.excerpt}"
                  </p>
                </div>

                <div 
                  className="text-gray-600 leading-[1.8] space-y-8 text-lg blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Article Footer */}
                <div className="mt-20 pt-12 border-t border-gray-100">
                  <div className="flex flex-wrap items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                      <h4 className="text-sm font-bold text-gray-600 uppercase tracking-widest">Tags:</h4>
                      <div className="flex gap-2">
                        <span className="px-4 py-2 bg-support rounded-full text-xs font-bold text-primary">#Research</span>
                        <span className="px-4 py-2 bg-support rounded-full text-xs font-bold text-primary">#UKLab</span>
                        <span className="px-4 py-2 bg-support rounded-full text-xs font-bold text-primary">#Peptides</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <h4 className="text-sm font-bold text-gray-600 uppercase tracking-widest">Share:</h4>
                      <div className="flex gap-2">
                        <button aria-label="Share article" className="w-10 h-10 bg-support rounded-full flex items-center justify-center text-gray-600 hover:text-primary transition-colors"><Share2 size={18} /></button>
                        <a aria-label="Share on WhatsApp" href="https://wa.me/447341056054" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-support rounded-full flex items-center justify-center text-gray-600 hover:text-[#25D366] transition-colors"><MessageCircle size={18} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-support">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to start your research?</h2>
              <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">Explore our catalog of high-purity research peptides and get next-day UK delivery.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/products" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-all shadow-xl">
                  Shop Catalog
                </Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
