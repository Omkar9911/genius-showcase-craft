export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  project?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'TechFlow Solutions',
    quote: 'GENIUS completely transformed our platform. The new interface is intuitive, fast, and our user engagement has skyrocketed. They delivered exactly what we needed, on time and within budget.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    project: 'TechFlow SaaS Platform',
    rating: 5
  },
  {
    id: '2', 
    name: 'Marcus Rodriguez',
    role: 'Founder',
    company: 'Verde Fashion',
    quote: 'Working with GENIUS was a game-changer. They understood our sustainability mission and created an e-commerce experience that tells our story beautifully. $2.4M in first-year sales speaks volumes.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    project: 'Verde E-commerce Revolution',
    rating: 5
  },
  {
    id: '3',
    name: 'Dr. Emily Watson',
    role: 'Chief Medical Officer',
    company: 'HealthLink Network',
    quote: 'The patient portal GENIUS built is remarkable. It\'s secure, user-friendly, and has dramatically improved patient engagement. The team\'s attention to healthcare compliance was exceptional.',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
    project: 'HealthTech Patient Portal',
    rating: 5
  },
  {
    id: '4',
    name: 'James Park',
    role: 'Head of Technology',
    company: 'Quantum Trading',
    quote: 'The trading dashboard GENIUS developed handles our massive transaction volumes flawlessly. Sub-50ms latency and rock-solid stability - exactly what we needed for our high-frequency operations.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    project: 'FinTech Dashboard Analytics',
    rating: 5
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Director of Learning',
    company: 'SkillForge Academy',
    quote: 'Our students love the new learning platform. 95% completion rates are unheard of in online education. GENIUS created something truly engaging that makes learning enjoyable.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    project: 'EduTech Learning Platform',
    rating: 5
  },
  {
    id: '6',
    name: 'David Kim',
    role: 'Regional Manager',
    company: 'Premier Properties',
    quote: 'The virtual tour platform revolutionized how we show properties. 280% more appointments and our agents save hours each week. GENIUS delivered innovation that drives real business results.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    project: 'PropTech Virtual Tours',
    rating: 5
  }
];

export const getTestimonialsByProject = (projectSlug: string): Testimonial[] => {
  return testimonials.filter(testimonial => 
    testimonial.project?.toLowerCase().replace(/\s+/g, '-') === projectSlug
  );
};

export const getFeaturedTestimonials = (count: number = 3): Testimonial[] => {
  return testimonials.slice(0, count);
};