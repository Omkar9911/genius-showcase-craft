import React, { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Work: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = ['all', 'Web Design', 'Frontend', 'Full-stack', 'E-commerce'];
  const industries = ['all', 'SaaS', 'Fashion', 'Healthcare', 'Finance', 'Education', 'Real Estate'];
  
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter || project.industry === filter;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-container container-padding text-center">
          <h1 className="heading-xl mb-6">Our Work</h1>
          <p className="body-lg text-neutral-600 max-w-3xl mx-auto mb-8">
            Real projects, real results. Browse our portfolio of successful web applications 
            and see how we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-container container-padding">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-neutral-600">
              <Filter size={20} />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[...categories, ...industries.slice(1)].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === item
                      ? 'bg-brand-primary text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="max-container container-padding">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/work/${project.slug}`}
                className="card-feature group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-primary rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-accent-orange text-white rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs font-medium">
                    {project.industry}
                  </span>
                  <span className="px-2 py-1 bg-brand-primary/10 text-brand-primary rounded text-xs font-medium">
                    {project.outcome}
                  </span>
                </div>

                <h3 className="heading-sm mb-3 group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="body-sm text-neutral-600 mb-6">
                  {project.excerpt}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.metrics.slice(0, 2).map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-lg font-bold text-brand-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-neutral-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 2).map((tech) => (
                      <span key={tech} className="text-xs text-neutral-500 bg-neutral-50 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ArrowRight size={20} className="text-brand-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="body-lg text-neutral-600 mb-4">
                No projects found for the selected filter.
              </p>
              <button
                onClick={() => setFilter('all')}
                className="btn-secondary"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-primary">
        <div className="max-container container-padding text-center">
          <h2 className="heading-lg text-white mb-6">Ready to Start Your Project?</h2>
          <p className="body-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your goals and create something amazing together. 
            Every great project starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary bg-white text-brand-primary hover:bg-neutral-50">
              Start Your Project
            </Link>
            <Link to="/services" className="btn-ghost text-white border-white/30 hover:bg-white/10">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;