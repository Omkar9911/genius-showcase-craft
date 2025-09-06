export interface Project {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  image: string;
  category: string;
  tech: string[];
  industry: string;
  outcome: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  approach: string;
  solution: string;
  results: string;
  url?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'TechFlow SaaS Platform',
    slug: 'techflow-saas-platform',
    excerpt: 'Complete SaaS rebuild that increased user engagement by 340% and reduced churn by 60%',
    description: 'A comprehensive redesign and rebuild of a B2B SaaS platform serving 50,000+ users across 12 industries.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    category: 'Full-stack',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    industry: 'SaaS',
    outcome: 'Performance',
    metrics: [
      { label: 'User Engagement', value: '+340%' },
      { label: 'Churn Reduction', value: '60%' },
      { label: 'Page Load Speed', value: '2.1s' },
      { label: 'Mobile Conversion', value: '+180%' }
    ],
    challenge: 'Legacy platform suffered from poor performance, confusing UX, and high churn rates. Users struggled with complex workflows and the mobile experience was broken.',
    approach: 'Conducted user research, rebuilt the architecture with modern tech stack, implemented progressive web app features, and redesigned the entire user journey.',
    solution: 'Built a lightning-fast React frontend with Node.js backend, implemented real-time features, created intuitive dashboard interfaces, and optimized for mobile-first experience.',
    results: 'Achieved 340% increase in user engagement, 60% reduction in churn, 2.1s average load times, and 180% improvement in mobile conversions within 6 months.',
    url: 'https://techflow.example.com',
    featured: true
  },
  {
    id: '2',
    title: 'Verde E-commerce Revolution',
    slug: 'verde-ecommerce-revolution',
    excerpt: 'Luxury sustainable fashion brand that generated $2.4M in first-year revenue',
    description: 'End-to-end e-commerce solution for a luxury sustainable fashion startup, from branding to checkout.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    category: 'E-commerce',
    tech: ['React', 'Next.js', 'Stripe', 'Shopify'],
    industry: 'Fashion',
    outcome: 'Revenue',
    metrics: [
      { label: 'First Year Revenue', value: '$2.4M' },
      { label: 'Conversion Rate', value: '4.2%' },
      { label: 'Average Order Value', value: '$156' },
      { label: 'Return Customer Rate', value: '68%' }
    ],
    challenge: 'New sustainable fashion brand needed to establish credibility, communicate brand values, and create seamless shopping experience in competitive luxury market.',
    approach: 'Developed comprehensive brand strategy, created immersive product experiences, implemented advanced filtering and search, and optimized conversion funnel.',
    solution: 'Built custom e-commerce platform with storytelling focus, integrated sustainable supply chain messaging, implemented AR try-on features, and created loyalty program.',
    results: 'Generated $2.4M revenue in year one, achieved 4.2% conversion rate (industry average 2.1%), $156 AOV, and 68% return customer rate.',
    featured: true
  },
  {
    id: '3',
    title: 'HealthTech Patient Portal',
    slug: 'healthtech-patient-portal',
    excerpt: 'HIPAA-compliant portal serving 25,000+ patients with 99.9% uptime',
    description: 'Secure patient portal and telemedicine platform for healthcare provider network.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    category: 'Web Design',
    tech: ['React', 'FHIR', 'AWS', 'WebRTC'],
    industry: 'Healthcare',
    outcome: 'Compliance',
    metrics: [
      { label: 'Active Patients', value: '25,000+' },
      { label: 'System Uptime', value: '99.9%' },
      { label: 'Consultation Completion', value: '94%' },
      { label: 'User Satisfaction', value: '4.8/5' }
    ],
    challenge: 'Healthcare network needed HIPAA-compliant portal for patient records, appointments, and telemedicine while ensuring accessibility and security.',
    approach: 'Implemented end-to-end encryption, designed accessible interfaces following WCAG guidelines, integrated with existing EHR systems, and built scalable infrastructure.',
    solution: 'Created secure patient portal with video consultations, appointment scheduling, prescription management, and health record access with bank-level security.',
    results: 'Serves 25,000+ patients with 99.9% uptime, 94% consultation completion rate, and 4.8/5 user satisfaction while maintaining full HIPAA compliance.',
    featured: false
  },
  {
    id: '4',
    title: 'FinTech Dashboard Analytics',
    slug: 'fintech-dashboard-analytics',
    excerpt: 'Real-time trading dashboard processing 100K+ transactions per second',
    description: 'High-performance trading platform dashboard with real-time analytics and automated trading features.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    category: 'Frontend',
    tech: ['React', 'D3.js', 'WebSocket', 'Redis'],
    industry: 'Finance',
    outcome: 'Performance',
    metrics: [
      { label: 'Transactions/Second', value: '100K+' },
      { label: 'Data Latency', value: '<50ms' },
      { label: 'Daily Active Traders', value: '12,000' },
      { label: 'Trading Volume', value: '$50M/day' }
    ],
    challenge: 'Trading firm needed ultra-fast dashboard to display real-time market data, execute trades, and provide advanced analytics without any performance lag.',
    approach: 'Built with high-performance React architecture, implemented WebSocket connections, used canvas-based charts, and optimized data processing pipelines.',
    solution: 'Created real-time dashboard with sub-50ms latency, advanced charting tools, automated trading algorithms, and risk management features.',
    results: 'Processes 100K+ transactions per second with <50ms latency, serves 12,000 daily active traders, and facilitates $50M in daily trading volume.',
    featured: false
  },
  {
    id: '5',
    title: 'EduTech Learning Platform',
    slug: 'edutech-learning-platform',
    excerpt: 'Interactive learning platform with 95% course completion rates',
    description: 'Comprehensive online learning platform with interactive courses, progress tracking, and certification.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    category: 'Full-stack',
    tech: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
    industry: 'Education',
    outcome: 'Engagement',
    metrics: [
      { label: 'Course Completion', value: '95%' },
      { label: 'Student Satisfaction', value: '4.9/5' },
      { label: 'Active Learners', value: '50,000+' },
      { label: 'Certificates Issued', value: '30,000+' }
    ],
    challenge: 'Educational institution needed engaging online platform to replace in-person training with interactive digital experiences and certification tracking.',
    approach: 'Designed gamified learning experiences, built interactive content tools, implemented progress tracking, and created social learning features.',
    solution: 'Built comprehensive LMS with video lessons, interactive exercises, peer collaboration tools, and automated certification system.',
    results: 'Achieved 95% course completion rates, 4.9/5 student satisfaction, serves 50,000+ active learners, and issued 30,000+ certificates.',
    featured: false
  },
  {
    id: '6',
    title: 'PropTech Virtual Tours',
    slug: 'proptech-virtual-tours',
    excerpt: 'VR property platform that increased sales appointments by 280%',
    description: '3D virtual property tours platform with VR support and integrated CRM for real estate agents.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    category: 'Web Design',
    tech: ['Three.js', 'React', 'WebGL', 'CRM API'],
    industry: 'Real Estate',
    outcome: 'Sales',
    metrics: [
      { label: 'Sales Appointments', value: '+280%' },
      { label: 'Virtual Tours', value: '10,000+' },
      { label: 'Agent Adoption', value: '89%' },
      { label: 'Time Saved', value: '15hrs/week' }
    ],
    challenge: 'Real estate agency needed to showcase properties remotely during pandemic while maintaining engagement and qualifying serious buyers effectively.',
    approach: 'Built 3D property visualization platform, integrated with existing CRM, created mobile-optimized tours, and implemented lead scoring system.',
    solution: 'Developed WebGL-based virtual tour platform with VR support, interactive hotspots, measurement tools, and integrated lead management.',
    results: 'Increased sales appointments by 280%, created 10,000+ virtual tours, achieved 89% agent adoption, and saved agents 15 hours per week.',
    featured: false
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectsByIndustry = (industry: string): Project[] => {
  return projects.filter(project => project.industry === industry);
};