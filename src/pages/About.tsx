import React from 'react';
import { Users, Award, Coffee, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-subtle">
        <div className="max-container container-padding text-center">
          <h1 className="heading-xl mb-6">About GENIUS</h1>
          <p className="body-lg text-neutral-600 max-w-3xl mx-auto">
            We're a team of passionate designers and developers who believe great digital experiences 
            should be accessible to every business, regardless of size.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-container container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="heading-lg mb-6">Our Mission</h2>
              <p className="body-base text-neutral-700 leading-relaxed mb-6">
                At GENIUS, we exist to bridge the gap between ambitious business goals and outstanding 
                digital execution. We believe every company deserves web experiences that not only look 
                beautiful but drive real, measurable results.
              </p>
              <p className="body-base text-neutral-700 leading-relaxed">
                Founded in 2020, we've grown from a small team of three to a diverse group of specialists 
                who've collectively delivered over 200 successful projects across industries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-primary mb-2">200+</div>
                <div className="text-neutral-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-primary mb-2">50+</div>
                <div className="text-neutral-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-primary mb-2">4.9</div>
                <div className="text-neutral-600">Client Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-primary mb-2">24h</div>
                <div className="text-neutral-600">Response Time</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Client-Focused',
                description: 'Every decision we make starts with understanding your business goals and user needs.'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Quality Driven',
                description: 'We maintain the highest standards in code quality, design, and user experience.'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Passionate Team',
                description: 'We love what we do and it shows in every project we deliver.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-brand-primary">
                  {value.icon}
                </div>
                <h3 className="heading-sm mb-4">{value.title}</h3>
                <p className="body-sm text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-primary">
        <div className="max-container container-padding text-center">
          <h2 className="heading-lg text-white mb-6">Let's Work Together</h2>
          <p className="body-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your digital presence? We'd love to hear about your project.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-brand-primary hover:bg-neutral-50">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;