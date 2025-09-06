export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  featured: boolean;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Design',
    slug: 'web-design',
    description: 'Custom website designs that combine beautiful aesthetics with conversion-focused user experience. We create digital experiences that engage your audience and drive business results.',
    icon: 'Palette',
    features: [
      'Custom UI/UX Design',
      'Mobile-First Responsive Design',
      'Brand Identity Integration',
      'Conversion Optimization',
      'Accessibility Compliance (WCAG 2.1)',
      'Performance-Optimized Assets'
    ],
    deliverables: [
      'Design System & Style Guide',
      'High-Fidelity Mockups',
      'Interactive Prototypes',
      'Responsive Layouts (Mobile, Tablet, Desktop)',
      'Asset Library & Icons',
      'Design Documentation'
    ],
    timeline: '3-6 weeks',
    startingPrice: '$12,000',
    featured: true
  },
  {
    id: '2',
    title: 'Frontend Development',
    slug: 'frontend-development',
    description: 'Lightning-fast, modern frontend development using React, TypeScript, and cutting-edge tools. We build interfaces that are both beautiful and performant.',
    icon: 'Code',
    features: [
      'React & TypeScript Development',
      'Modern CSS (Tailwind, CSS-in-JS)',
      'State Management (Redux, Zustand)',
      'Performance Optimization',
      'Cross-Browser Compatibility',
      'Progressive Web App (PWA) Features'
    ],
    deliverables: [
      'Production-Ready Codebase',
      'Component Library',
      'Responsive Implementation',
      'Performance Optimizations',
      'Browser Testing Report',
      'Documentation & Handoff'
    ],
    timeline: '4-8 weeks',
    startingPrice: '$18,000',
    featured: true
  },
  {
    id: '3',
    title: 'Full-Stack Development',
    slug: 'full-stack-development',
    description: 'Complete web application development from database to deployment. We handle everything from backend APIs to frontend interfaces and infrastructure.',
    icon: 'Layers',
    features: [
      'Full-Stack Architecture',
      'Database Design & Optimization',
      'API Development & Integration',
      'Authentication & Security',
      'Cloud Infrastructure (AWS, Vercel)',
      'CI/CD Pipeline Setup'
    ],
    deliverables: [
      'Complete Web Application',
      'Database Schema & Setup',
      'RESTful/GraphQL APIs',
      'Admin Dashboard',
      'Deployment & Hosting Setup',
      'Technical Documentation'
    ],
    timeline: '8-16 weeks',
    startingPrice: '$35,000',
    featured: true
  },
  {
    id: '4',
    title: 'E-commerce Solutions',
    slug: 'ecommerce-solutions',
    description: 'Custom e-commerce platforms built for conversion and scale. From product catalogs to payment processing, we create seamless shopping experiences.',
    icon: 'ShoppingCart',
    features: [
      'Custom E-commerce Platform',
      'Payment Gateway Integration',
      'Inventory Management System',
      'Order Management & Fulfillment',
      'SEO & Marketing Tools',
      'Analytics & Reporting Dashboard'
    ],
    deliverables: [
      'Complete E-commerce Website',
      'Product Catalog System',
      'Shopping Cart & Checkout',
      'Payment Processing Setup',
      'Admin & Vendor Panels',
      'Marketing Tools Integration'
    ],
    timeline: '10-20 weeks',
    startingPrice: '$45,000',
    featured: false
  },
  {
    id: '5',
    title: 'Performance & SEO',
    slug: 'performance-seo',
    description: 'Technical SEO and performance optimization services to improve your search rankings and user experience. We make your site faster and more discoverable.',
    icon: 'Zap',
    features: [
      'Core Web Vitals Optimization',
      'Technical SEO Audit',
      'Page Speed Optimization',
      'Schema Markup Implementation',
      'Lighthouse Score Improvement',
      'Search Console Setup & Monitoring'
    ],
    deliverables: [
      'Performance Audit Report',
      'Technical SEO Implementation',
      'Speed Optimization',
      'SEO Strategy Document',
      'Monitoring & Analytics Setup',
      'Monthly Performance Reports'
    ],
    timeline: '2-4 weeks',
    startingPrice: '$8,000',
    featured: false
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getFeaturedServices = (): Service[] => {
  return services.filter(service => service.featured);
};