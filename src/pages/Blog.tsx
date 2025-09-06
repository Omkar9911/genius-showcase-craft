import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');

  // Get all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).sort();

  // Filter posts based on search and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-container container-padding text-center">
          <h1 className="heading-xl mb-6">Our Blog</h1>
          <p className="body-lg text-neutral-600 max-w-3xl mx-auto mb-8">
            Insights, tutorials, and industry trends from our team of experts. 
            Stay updated with the latest in web development, design, and digital strategy.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-white">
          <div className="max-container container-padding">
            <div className="text-center mb-12">
              <span className="px-4 py-2 bg-accent-orange text-white rounded-full font-medium">
                Featured Article
              </span>
            </div>

            <Link to={`/blog/${featuredPost.slug}`} className="group">
              <div className="card-elevated max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="heading-lg mb-6 group-hover:text-brand-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="body-lg text-neutral-600 mb-8">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-neutral-500 mb-8">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span className="text-sm">{featuredPost.author.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-sm">
                          {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span className="text-sm">{featuredPost.readTime} min read</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-brand-primary font-medium group-hover:gap-3 transition-all">
                      Read Full Article
                      <ArrowRight size={20} />
                    </div>
                  </div>

                  <div>
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-96 object-cover rounded-xl group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Filter Tags */}
      <section className="py-8 bg-neutral-50 border-y border-neutral-200">
        <div className="max-container container-padding">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-medium text-neutral-700">Filter by topic:</span>
            <button
              onClick={() => setSelectedTag('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedTag
                  ? 'bg-brand-primary text-white'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-brand-primary text-white'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="max-container container-padding">
          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="card-feature group animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-primary rounded-full text-sm font-medium">
                        {post.tags[0]}
                      </span>
                    </div>
                  </div>

                  <h3 className="heading-sm mb-3 group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="body-sm text-neutral-600 mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span>{post.author.name}</span>
                    </div>
                    <span>{post.readTime} min read</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                    <span className="text-sm text-neutral-500">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                    <ArrowRight size={20} className="text-brand-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="body-lg text-neutral-600 mb-4">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('');
                }}
                className="btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-brand-primary">
        <div className="max-container container-padding text-center">
          <h2 className="heading-lg text-white mb-6">Stay Updated</h2>
          <p className="body-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest insights on web development, design trends, and digital strategy 
            delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input flex-1"
              />
              <button className="btn-secondary bg-white text-brand-primary hover:bg-neutral-50">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;