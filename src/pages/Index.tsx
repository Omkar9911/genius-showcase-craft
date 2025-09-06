import React from 'react';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { getFeaturedServices } from '../data/services';
import { getFeaturedProjects } from '../data/projects';
import { getFeaturedTestimonials } from '../data/testimonials';

const Index: React.FC = () => {
  const featuredServices = getFeaturedServices();
  const featuredProjects = getFeaturedProjects().slice(0, 1); // Just one for homepage
  const featuredTestimonials = getFeaturedTestimonials(3);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Logo Cloud */}
      <section className="section-padding bg-neutral-50">
        <div className="max-container container-padding">
          <div className="text-center mb-12">
            <p className="body-base text-neutral-600">
              Trusted by industry leaders and growing startups
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {/* Using placeholder company names */}
            {['TechFlow', 'Verde Fashion', 'HealthLink', 'Quantum Trading', 'SkillForge', 'Premier Props'].map((company) => (
              <div key={company} className="text-xl font-semibold text-neutral-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding">
        <div className="max-container container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">What We Do Best</h2>
            <p className="body-lg text-neutral-600 max-w-2xl mx-auto">
              We specialize in creating digital experiences that drive measurable business results. 
              From design to development, we build web solutions that work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div 
                key={service.id} 
                className="card-feature animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mb-6">
                  {service.icon === 'Palette' && <Zap className="w-6 h-6 text-white" />}
                  {service.icon === 'Code' && <Zap className="w-6 h-6 text-white" />}
                  {service.icon === 'Layers' && <Zap className="w-6 h-6 text-white" />}
                </div>
                <h3 className="heading-sm mb-4">{service.title}</h3>
                <p className="body-base text-neutral-600 mb-6">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-brand-primary">
                    From {service.startingPrice}
                  </span>
                  <Link 
                    to={`/services#${service.slug}`}
                    className="text-brand-primary hover:text-brand-primary-dark transition-colors"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="featured-work" className="section-padding bg-neutral-50">
        <div className="max-container container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Featured Work</h2>
            <p className="body-lg text-neutral-600 max-w-2xl mx-auto">
              Real projects, real results. See how we've helped businesses transform their digital presence.
            </p>
          </div>

          {featuredProjects.map((project) => (
            <div key={project.id} className="card-elevated max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm">
                      {project.industry}
                    </span>
                  </div>
                  
                  <h3 className="heading-md mb-4">{project.title}</h3>
                  <p className="body-lg text-neutral-600 mb-8">{project.excerpt}</p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {project.metrics.slice(0, 2).map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-bold text-brand-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-neutral-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/work/${project.slug}`}
                    className="btn-primary group"
                  >
                    View Case Study
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="lg:order-first">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <Link to="/work" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax Band */}
      <section className="relative py-24 overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 bg-gradient-primary"></div>
        <div className="relative z-10 max-container container-padding text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to transform your digital presence?
          </h2>
          <p className="body-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses who trust GENIUS to build their digital future.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-brand-primary hover:bg-neutral-50">
            Start Your Project
          </Link>
        </div>
        
        {/* Parallax Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full parallax-element" style={{ '--scroll-y': '0.5' } as React.CSSProperties}></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full parallax-element" style={{ '--scroll-y': '-0.3' } as React.CSSProperties}></div>
      </section>

      {/* Testimonials Teaser */}
      <section className="section-padding">
        <div className="max-container container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">What Our Clients Say</h2>
            <p className="body-lg text-neutral-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what business leaders say about working with GENIUS.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="card-base animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="body-base text-neutral-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-neutral-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-ghost">
              Read All Testimonials
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-container container-padding text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">Let's Build Something Amazing</h2>
            <p className="body-lg text-neutral-600 mb-8">
              Ready to take your digital presence to the next level? We'd love to hear about your project 
              and show you how we can help achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Started Today
              </Link>
              <Link to="/work" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
