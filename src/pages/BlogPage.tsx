import React, { useState } from 'react';
import { PageType, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/mockData';
import {
  Sparkles,
  Search,
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  X,
  Share2,
  Tag,
  CheckCircle2,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

interface BlogPageProps {
  onPageChange: (page: PageType) => void;
  onOpenConsultation: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onPageChange, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  const categories = ['All', 'Hospitality Trends', 'Real Estate', 'Weddings', 'Luxury Travel', 'MICE & Leadership'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div id="blog-page" className="w-full bg-[#0b0f17] text-slate-100 font-sans">
      {/* HERO SECTION */}
      <section id="blog-hero" className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-amber-900/20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E12AQFzCUXI4JjWjw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1664351128180?e=2147483647&v=beta&t=yy2Q-l-0996_ECbJei266e18lF2mjZ4oEN0p-ldu7nQ"
            alt="Anahita Editorial & Journal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f17] via-[#0b0f17]/80 to-[#0b0f17]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#121824] text-amber-200 text-xs uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>The Anahita Journal & Advisory Perspectives</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-luxury text-white font-medium leading-tight">
            Hospitality Insights & Luxury Trends
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            Thought leadership, market intelligence, and behind-the-scenes stories from our hotel principals, real estate advisors, and celebration directors.
          </p>

          {/* Search & Filter Controls */}
          <div className="max-w-3xl mx-auto pt-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, category, or keywords..."
                className="w-full pl-11 pr-4 py-3 bg-[#0e1420]/90 border border-slate-700 focus:border-[#c5a059] text-xs text-slate-200 placeholder-slate-500 rounded-xs outline-none backdrop-blur-md transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] rounded-xs transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#c5a059] text-[#0b0f17] shadow-lg'
                      : 'bg-[#121824] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED POST HERO CARD (If no search query active) */}
      {!searchQuery && selectedCategory === 'All' && (
        <section id="blog-featured-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div
            onClick={() => setActivePost(featuredPost)}
            className="group cursor-pointer bg-[#0e1420] border border-slate-800 hover:border-[#c5a059] rounded-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all duration-300 shadow-2xl"
          >
            <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[320px] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1420] via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-[#c5a059] text-[#0b0f17] px-3 py-1 rounded-xs text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3 h-3" />
                <span>Featured Editorial</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#c5a059]">
                  <span className="uppercase tracking-widest font-semibold">{featuredPost.category}</span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white font-medium leading-snug group-hover:text-amber-200 transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#c5a059]/50"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-white">{featuredPost.author.name}</h4>
                    <p className="text-[10px] text-slate-400">{featuredPost.author.role}</p>
                  </div>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] group-hover:text-amber-200 flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BLOG POSTS GRID */}
      <section id="blog-grid-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h3 className="text-xl font-serif-luxury text-white font-medium">
            {selectedCategory === 'All' ? 'Latest Articles & Intelligence' : `${selectedCategory} Articles`}
          </h3>
          <span className="text-xs text-slate-400">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-[#0e1420] border border-slate-800 rounded-xs space-y-4">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto" />
            <h4 className="text-lg font-serif-luxury text-white">No Articles Found</h4>
            <p className="text-xs text-slate-400">Try adjusting your search query or selecting a different category filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-[#c5a059] text-[#0b0f17] text-xs font-semibold uppercase tracking-wider rounded-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setActivePost(post)}
                className="group cursor-pointer bg-[#0e1420] border border-slate-800 hover:border-[#c5a059]/80 rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#080c14]/80 backdrop-blur-md border border-[#c5a059]/40 text-[#c5a059] px-3 py-1 rounded-xs text-[10px] font-semibold uppercase tracking-widest">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#c5a059]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#c5a059]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif-luxury text-white font-semibold leading-snug group-hover:text-amber-200 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-slate-400 bg-[#121824] px-2 py-0.5 rounded-xs border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-[#c5a059]/50"
                      />
                      <span className="text-[11px] text-slate-300 font-medium">{post.author.name}</span>
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#c5a059] group-hover:text-amber-200 flex items-center gap-1">
                      <span>Read</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ARTICLE READER MODAL */}
      {activePost && (
        <div id="blog-article-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-[#0e1420] border border-[#c5a059]/40 rounded-xs shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
            {/* Modal Header Bar */}
            <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-[#080c14] sticky top-0 z-20">
              <div className="flex items-center gap-2 text-xs text-[#c5a059] uppercase tracking-wider font-semibold">
                <Tag className="w-3.5 h-3.5" />
                <span>{activePost.category}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400 font-normal">{activePost.readTime}</span>
              </div>

              <button
                id="btn-close-article-modal"
                onClick={() => setActivePost(null)}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-10 space-y-8 overflow-y-auto">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-4xl font-serif-luxury text-white font-medium leading-snug">
                  {activePost.title}
                </h1>

                <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-800">
                  <div className="flex items-center gap-3">
                    <img
                      src={activePost.author.avatar}
                      alt={activePost.author.name}
                      className="w-12 h-12 rounded-full object-cover border border-[#c5a059]"
                    />
                    <div>
                      <h4 className="text-xs font-semibold text-white">{activePost.author.name}</h4>
                      <p className="text-[11px] text-slate-400">{activePost.author.role}</p>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#c5a059]" />
                    <span>Published {activePost.date}</span>
                  </div>
                </div>
              </div>

              {/* Cover Image */}
              <div className="relative h-72 sm:h-96 rounded-xs overflow-hidden border border-slate-800">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Paragraphs */}
              <div className="space-y-6 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {activePost.content.map((paragraph, idx) => (
                  <p key={idx} className="first-letter:text-3xl first-letter:font-serif-luxury first-letter:text-[#c5a059] first-letter:mr-1">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Article Tags */}
              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-medium mr-2">Topics:</span>
                {activePost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#c5a059] bg-[#121824] px-3 py-1 rounded-xs border border-[#c5a059]/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Article Action CTA */}
              <div className="bg-[#121824] p-6 rounded-xs border border-[#c5a059]/40 space-y-4 text-center sm:text-left sm:flex items-center justify-between gap-6">
                <div className="space-y-1">
                  <h4 className="text-base font-serif-luxury text-white font-semibold">
                    Discuss this Perspective with Anahita Partners
                  </h4>
                  <p className="text-xs text-slate-400">
                    Schedule a private advisory consultation regarding hotel management, asset acquisition, or grand event curation.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActivePost(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-semibold uppercase tracking-[0.15em] rounded-xs transition-all whitespace-nowrap"
                >
                  Book Advisory Desk
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* JOURNAL NEWSLETTER SUBSCRIPTION */}
      <section id="blog-newsletter-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070a10] border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto bg-[#0e1420] border border-amber-900/30 p-8 sm:p-12 rounded-xs text-center space-y-6 shadow-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium">
            Exclusive Intelligence
          </span>

          <h2 className="text-2xl sm:text-4xl font-serif-luxury text-white font-medium">
            Subscribe to the Anahita Quarterly Journal
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Receive confidential hospitality market briefs, off-market asset alerts, and global luxury travel trends delivered straight to your inbox.
          </p>

          {newsletterSubscribed ? (
            <div className="inline-flex items-center gap-2 p-4 bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs font-semibold rounded-xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Thank you! You are now subscribed to the Anahita Quarterly Journal.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto pt-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your executive email address..."
                className="w-full sm:flex-1 px-4 py-3 bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-xs text-slate-100 placeholder-slate-500 rounded-xs outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-semibold uppercase tracking-[0.15em] rounded-xs transition-all whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          )}
        </div>
      </section>

      {/* TRANSITION BANNER TO CONTACT */}
      <section id="blog-transition-to-contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0b0f17] via-[#121824] to-[#0b0f17] border-t border-b border-slate-800 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium">
            Direct Concierge Desk
          </span>
          <h2 className="text-3xl font-serif-luxury text-white font-medium">
            Have a Specific Project or Event in Mind?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Reach out to our global offices in Dubai, New Delhi, London, and Maldives for immediate executive assistance.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="btn-blog-go-contact"
              onClick={() => onPageChange('contact')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Senior Partners</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-3.5 border border-slate-700 hover:border-[#c5a059] text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-xs transition-all"
            >
              Book Advisory Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
