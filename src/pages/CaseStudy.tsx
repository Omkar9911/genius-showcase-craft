import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Users, Zap } from 'lucide-react';
import { getProjectBySlug, projects } from '../data/projects';
import { getTestimonialsByProject } from '../data/testimonials';

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;
  const testimonials = slug ? getTestimonialsByProject(slug) : [];

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-lg mb-4">Project Not Found</h1>
          <p className="body-base text-neutral-600 mb-8">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/work" className="btn-primary">
            <ArrowLeft size={20} className="mr-2" />
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-container container-padding">
          <div className="mb-8">
            <Link 
              to="/work" 
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary-dark transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Work
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-brand-primary text-white rounded-full font-medium">
                  {project.category}
                </span>
                <span className="px-4 py-2 bg-neutral-200 text-neutral-700 rounded-full">
                  {project.industry}
                </span>
                {project.featured && (
                  <span className="px-4 py-2 bg-accent-orange text-white rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="heading-xl mb-6">{project.title}</h1>
              <p className="body-lg text-neutral-600 mb-8">{project.description}</p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-neutral-600">
                  <Calendar size={20} />
                  <span>Completed 2024</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Users size={20} />
                  <span>Team of 4</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Zap size={20} />
                  <span>12 weeks</span>
                </div>
              </div>

              {project.url && (
                <Link 
                  to={project.url} 
                  target="_blank"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View Live Site
                  <ExternalLink size={20} />
                </Link>
              )}
            </div>

            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section-padding bg-white">
        <div className="max-container container-padding">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Results That Matter</h2>
            <p className="body-lg text-neutral-600 max-w-2xl mx-auto">
              Numbers don't lie. Here's the measurable impact we delivered for {project.title}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.metrics.map((metric, index) => (
              <div 
                key={index} 
                className="text-center card-base animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-brand-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-neutral-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding bg-neutral-50">
        <div className="max-container container-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="heading-md mb-6">The Challenge</h2>
                <p className="body-base text-neutral-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-6">Our Approach</h2>
                <p className="body-base text-neutral-700 leading-relaxed">
                  {project.approach}
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="heading-md mb-6">The Solution</h2>
                <p className="body-base text-neutral-700 leading-relaxed mb-6">
                  {project.solution}
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="heading-md mb-6">The Results</h2>
                <p className="body-base text-neutral-700 leading-relaxed">
                  {project.results}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonials.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-container container-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-lg mb-12">What Our Client Says</h2>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="card-elevated">
                  <blockquote className="body-lg text-neutral-700 italic mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-neutral-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="section-padding bg-neutral-50">
        <div className="max-container container-padding">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              {previousProject ? (
                <Link 
                  to={`/work/${previousProject.slug}`}
                  className="group inline-flex items-center gap-4 p-6 bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <ArrowLeft size={24} className="text-brand-primary group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <div className="text-sm text-neutral-500 mb-1">Previous Project</div>
                    <div className="font-semibold">{previousProject.title}</div>
                  </div>
                </Link>
              ) : (
                <div className="p-6 opacity-50">
                  <div className="text-sm text-neutral-500">No previous project</div>
                </div>
              )}
            </div>

            <Link to="/work" className="btn-ghost">
              All Projects
            </Link>

            <div className="text-center md:text-right">
              {nextProject ? (
                <Link 
                  to={`/work/${nextProject.slug}`}
                  className="group inline-flex items-center gap-4 p-6 bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="text-sm text-neutral-500 mb-1">Next Project</div>
                    <div className="font-semibold">{nextProject.title}</div>
                  </div>
                  <ArrowRight size={24} className="text-brand-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div className="p-6 opacity-50">
                  <div className="text-sm text-neutral-500">No next project</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-primary">
        <div className="max-container container-padding text-center">
          <h2 className="heading-lg text-white mb-6">Ready for Similar Results?</h2>
          <p className="body-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with a custom solution.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-brand-primary hover:bg-neutral-50">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;