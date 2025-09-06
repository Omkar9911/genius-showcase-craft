import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  budget: string;
  timeline: string;
  projectType: string;
  message: string;
  honeypot: string; // Anti-spam field
}

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState<string>('');
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    projectType: '',
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    if (!form.projectType) newErrors.projectType = 'Please select a project type';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Anti-spam check
    if (form.honeypot) {
      return; // Bot detected
    }

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const apiBase = process.env.API_BASE;
      
      if (apiBase) {
        // Send to actual API
        const response = await fetch(`${apiBase}/api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...form,
            honeypot: undefined // Don't send honeypot field
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        const result = await response.json();
        setReferenceId(result.referenceId || 'GENIUS-' + Date.now());
      } else {
        // Development fallback - log to console
        console.log('Contact Form Submission:', {
          ...form,
          honeypot: undefined,
          submittedAt: new Date().toISOString(),
          referenceId: 'DEV-' + Date.now()
        });
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setReferenceId('DEV-' + Date.now());
      }

      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-subtle">
        <div className="max-container container-padding section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h1 className="heading-lg mb-6">Thank You!</h1>
            <p className="body-lg text-neutral-600 mb-8">
              Your message has been received successfully. We'll review your project details and 
              get back to you within 24 hours with next steps.
            </p>
            <div className="card-base max-w-md mx-auto mb-8">
              <p className="body-sm text-neutral-600 mb-2">Reference ID:</p>
              <p className="font-mono text-brand-primary font-medium">{referenceId}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" className="btn-primary">
                Return Home
              </a>
              <a href="/work" className="btn-secondary">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-container container-padding text-center">
          <h1 className="heading-xl mb-6">Let's Build Something Amazing</h1>
          <p className="body-lg text-neutral-600 max-w-3xl mx-auto">
            Ready to transform your digital presence? We'd love to hear about your project 
            and discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-container container-padding">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-md mb-6">Get in Touch</h2>
                <p className="body-base text-neutral-600 mb-8">
                  Have questions? We're here to help. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-neutral-600">hello@genius.com</p>
                    <p className="text-sm text-neutral-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-neutral-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-neutral-500">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-neutral-600">
                      123 Innovation Drive<br />
                      Tech District, CA 94105
                    </p>
                    <p className="text-sm text-neutral-500">By appointment only</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-neutral-200">
                <h3 className="font-semibold mb-4">Quick Response Times</h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Email inquiries: Within 24 hours</li>
                  <li>• Project consultations: Within 48 hours</li>
                  <li>• Urgent support: Within 4 hours</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="card-elevated space-y-6">
                <div>
                  <h2 className="heading-md mb-4">Tell Us About Your Project</h2>
                  <p className="text-neutral-600 mb-8">
                    Fill out this form and we'll get back to you with a detailed proposal.
                  </p>
                </div>

                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={form.honeypot}
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className={`form-input ${errors.name ? 'border-error' : ''}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'border-error' : ''}`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your Company"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleInputChange}
                      className={`form-select ${errors.projectType ? 'border-error' : ''}`}
                    >
                      <option value="">Select project type</option>
                      <option value="web-design">Web Design</option>
                      <option value="frontend-development">Frontend Development</option>
                      <option value="full-stack-development">Full-Stack Development</option>
                      <option value="ecommerce">E-commerce Solution</option>
                      <option value="performance-seo">Performance & SEO</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.projectType && <p className="text-error text-sm mt-1">{errors.projectType}</p>}
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                    Desired Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    className={`form-textarea ${errors.message ? 'border-error' : ''}`}
                    placeholder="Tell us about your project goals, target audience, specific requirements, and any other details that would help us understand your needs..."
                    rows={6}
                  />
                  {errors.message && <p className="text-error text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-sm text-neutral-500 text-center mt-3">
                    We'll respond within 24 hours with a detailed proposal.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;