import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-subtle">
        <div className="max-container container-padding text-center">
          <h1 className="heading-xl mb-6">Client Testimonials</h1>
          <p className="body-lg text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with GENIUS.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-container container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="card-elevated animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
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
        </div>
      </section>

      <section className="section-padding bg-brand-primary">
        <div className="max-container container-padding text-center">
          <h2 className="heading-lg text-white mb-6">Join Our Happy Clients</h2>
          <p className="body-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to experience the same level of service and results? Let's discuss your project.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-brand-primary hover:bg-neutral-50">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;