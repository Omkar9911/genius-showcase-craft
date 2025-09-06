import React from 'react';
import { ArrowRight, Check, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-container container-padding text-center">
          <h1 className="heading-xl mb-6">Our Services</h1>
          <p className="body-lg text-neutral-600 max-w-3xl mx-auto mb-8">
            From initial concept to ongoing maintenance, we provide comprehensive web solutions 
            that drive real business results. Every service is tailored to your specific needs and goals.
          </p>
          <Link to="/contact" className="btn-primary">
            Get Custom Quote
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-container container-padding">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.slug}
                className="card-elevated animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Service Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-brand-primary rounded-xl flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded" /> {/* Placeholder for icon */}
                      </div>
                      <div>
                        <h2 className="heading-md mb-2">{service.title}</h2>
                        <p className="text-neutral-600">{service.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h3 className="heading-sm mb-4">What's Included</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <Check size={20} className="text-accent-green flex-shrink-0 mt-0.5" />
                              <span className="body-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h3 className="heading-sm mb-4">Deliverables</h3>
                        <ul className="space-y-3">
                          {service.deliverables.map((deliverable, delIndex) => (
                            <li key={delIndex} className="flex items-start gap-3">
                              <Check size={20} className="text-accent-blue flex-shrink-0 mt-0.5" />
                              <span className="body-sm">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="lg:border-l lg:border-neutral-200 lg:pl-8">
                    <div className="space-y-6">
                      {/* Timeline */}
                      <div className="flex items-center gap-3">
                        <Clock size={20} className="text-neutral-400" />
                        <div>
                          <div className="font-medium">Timeline</div>
                          <div className="text-neutral-600">{service.timeline}</div>
                        </div>
                      </div>

                      {/* Starting Price */}
                      <div className="flex items-center gap-3">
                        <DollarSign size={20} className="text-neutral-400" />
                        <div>
                          <div className="font-medium">Starting Price</div>
                          <div className="text-2xl font-bold text-brand-primary">
                            {service.startingPrice}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <Link 
                          to="/contact" 
                          className="btn-primary w-full justify-center group"
                        >
                          Get Started
                          <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <p className="text-sm text-neutral-500 mt-2 text-center">
                          Free consultation included
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-neutral-50">
        <div className="max-container container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Process</h2>
            <p className="body-lg text-neutral-600 max-w-2xl mx-auto">
              We follow a proven methodology that ensures your project is delivered on time, 
              within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We dive deep into your business goals, target audience, and technical requirements.'
              },
              {
                step: '02', 
                title: 'Strategy',
                description: 'We create a detailed project roadmap with clear milestones and deliverables.'
              },
              {
                step: '03',
                title: 'Design & Build',
                description: 'Our team designs and develops your solution using modern best practices.'
              },
              {
                step: '04',
                title: 'Launch & Support',
                description: 'We deploy your project and provide ongoing support and maintenance.'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {phase.step}
                </div>
                <h3 className="heading-sm mb-4">{phase.title}</h3>
                <p className="body-sm text-neutral-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-container container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
            <p className="body-lg text-neutral-600 max-w-2xl mx-auto">
              Have questions? We've got answers. Here are the most common questions we get about our services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity. Simple websites take 3-6 weeks, while full applications can take 8-20 weeks. We provide detailed timelines during discovery.'
              },
              {
                question: 'Do you provide ongoing maintenance?',
                answer: 'Yes, we offer maintenance packages that include security updates, performance monitoring, content updates, and technical support.'
              },
              {
                question: 'Can you work with our existing team?',
                answer: 'Absolutely! We often collaborate with internal teams, providing expertise where needed while integrating smoothly with your existing workflow.'
              },
              {
                question: 'What technologies do you specialize in?',
                answer: 'We focus on modern web technologies including React, TypeScript, Node.js, and cloud platforms like AWS and Vercel for optimal performance and scalability.'
              }
            ].map((faq, index) => (
              <div key={index} className="card-base animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="heading-sm mb-3">{faq.question}</h3>
                <p className="body-sm text-neutral-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-primary">
        <div className="max-container container-padding text-center">
          <h2 className="heading-lg text-white mb-6">Ready to Get Started?</h2>
          <p className="body-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary bg-white text-brand-primary hover:bg-neutral-50">
              Start Your Project
            </Link>
            <Link to="/work" className="btn-ghost text-white border-white/30 hover:bg-white/10">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;