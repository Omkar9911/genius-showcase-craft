import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '../assets/hero-bg.jpg';

const HeroSection: React.FC = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('featured-work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {!isReducedMotion ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroImage}
            className="w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src={heroImage} type="image/jpeg" />
            {/* Fallback for when video doesn't load */}
            <img 
              src={heroImage} 
              alt="" 
              className="w-full h-full object-cover"
            />
          </video>
        ) : (
          <img 
            src={heroImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-container container-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="heading-xl text-white mb-6 animate-fade-up">
            Web that feels{' '}
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              effortless
            </span>
          </h1>

          {/* Slogan */}
          <p className="body-lg text-blue-100 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Build smart. Ship fast.
          </p>

          {/* Description */}
          <p className="body-lg text-white/90 mb-12 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            We craft digital experiences that drive results. From concept to launch, 
            we build websites that work beautifully across every device and deliver 
            measurable business value.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={scrollToWork}
              className="btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-brand-primary transition-all group"
            >
              See Our Work
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={goToContact}
              className="btn-primary bg-white text-brand-primary hover:bg-white/90 hover:scale-105"
            >
              Get a Proposal
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;