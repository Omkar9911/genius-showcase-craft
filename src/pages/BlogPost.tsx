import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '../data/blog';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-lg mb-4">Article Not Found</h1>
          <p className="body-base text-neutral-600 mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/blog" className="btn-primary">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (same tags, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="pt-20">
      {/* Article Header */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-container container-padding">
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary-dark transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-brand-primary text-white rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="heading-xl mb-8">{post.title}</h1>

            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{post.author.name}</div>
                  <div className="text-sm text-neutral-600">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-neutral-500">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span className="text-sm">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long', 
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span className="text-sm">{post.readTime} min read</span>
                </div>
              </div>
            </div>

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="max-container container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="body-lg text-neutral-600 mb-8 leading-relaxed">
                {post.excerpt}
              </div>
              
              {/* Content would be rendered from markdown in a real app */}
              <div 
                className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-p:leading-relaxed prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-900 prose-code:bg-neutral-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br/>').replace(/#{1,6}\s/g, match => {
                    const level = match.length - 1;
                    return `<h${level} class="text-${4-level}xl font-bold mt-8 mb-4 text-neutral-900">`;
                  })
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="section-padding bg-neutral-50">
        <div className="max-container container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="card-base">
              <div className="flex items-start gap-6">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="heading-sm mb-2">About {post.author.name}</h3>
                  <p className="text-neutral-600 mb-4">{post.author.role}</p>
                  <p className="body-sm text-neutral-600">
                    {post.author.name} is a {post.author.role.toLowerCase()} at GENIUS with extensive experience 
                    in modern web development and digital strategy. They specialize in creating scalable, 
                    performance-optimized solutions for growing businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-container container-padding">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">Related Articles</h2>
              <p className="body-lg text-neutral-600 max-w-2xl mx-auto">
                Continue reading with these related articles that might interest you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="card-feature group animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-primary rounded-full text-sm font-medium">
                        {relatedPost.tags[0]}
                      </span>
                    </div>
                  </div>

                  <h3 className="heading-sm mb-3 group-hover:text-brand-primary transition-colors">
                    {relatedPost.title}
                  </h3>

                  <p className="body-sm text-neutral-600 mb-6">
                    {relatedPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <span>{relatedPost.readTime} min read</span>
                    <ArrowRight size={16} className="text-brand-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-brand-primary">
        <div className="max-container container-padding text-center">
          <h2 className="heading-lg text-white mb-6">Ready to Apply These Insights?</h2>
          <p className="body-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how these strategies can be applied to your specific project and business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary bg-white text-brand-primary hover:bg-neutral-50">
              Start Your Project
            </Link>
            <Link to="/blog" className="btn-ghost text-white border-white/30 hover:bg-white/10">
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;