"use client"

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  ArrowLeft,
  ExternalLink, 
  Terminal, 
  Cpu, 
  Code2, 
  Monitor, 
  Cloud, 
  Database,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layout,
  Server,
  Globe,
  Smartphone,
  CheckCircle2,
  Menu,
  X as CloseIcon,
  Workflow,
  Search,
  Activity,
  UserCheck,
  Shield,
  MessageSquare,
  Repeat,
  FastForward,
  Settings,
  GitBranch,
  Terminal as TermIcon
} from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import CustomCursor from './components/CustomCursor';
import AIChat from './components/AIChat';

// --- Types ---
interface ExperienceDetail {
  id: string;
  company: string;
  role: string;
  period: string;
  stats: { label: string; value: string }[];
  frontend: string[];
  backend: string[];
  infrastructure: string[]; // New dedicated section for infra
  impact: string[];
  stack: string[];
}

// --- Interaction Components ---

const Magnetic: React.FC<{ children: React.ReactNode; strength?: number }> = ({ children, strength = 0.3 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};

const InteractiveCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX - width / 2);
    y.set(mouseY - height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={`relative group ${className}`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      {children}
    </motion.div>
  );
};

// --- Massive Experience Data Expansion ---
const EXPERIENCES: ExperienceDetail[] = [
  {
    id: 'oracle',
    company: 'Oracle',
    role: 'Software Engineer',
    period: 'Aug 2022 — Present',
    stats: [
      { label: 'Latency Reduction', value: '20%' },
      { label: 'Investigation Speed', value: '40%' },
      { label: 'User Base', value: '10M+' }
    ],
    frontend: [
      'Led the architecture and development of mission-critical IAM diagnostic applications serving 10M+ enterprise users globally.',
      'Designed and built agent-facing React + TypeScript applications using strict component boundaries, memoization, and scoped state to handle data-dense views without unnecessary re-renders.',
      'Implemented route-level lazy loading and code splitting to reduce initial bundle size and improve time-to-interactive for high-traffic dashboards.',
      'Architected micro-frontend ecosystems for cloud identity services, enabling independent deployments across multiple engineering teams.'
    ],
    backend: [
      'Designed and built backend aggregation services in Java, Node.js, and Python that stitch together identity, entitlement, and operational signals from distributed systems.',
      'Implemented an LLM-assisted authorization policy analyzer that parses complex failure logs into human-readable diagnostics with schema-validated outputs.',
      'Developed event-driven processing flows using Kafka to ingest, validate, and correlate authorization events across distributed cloud regions.',
      'Engineered idempotent handlers and explicit timeout control for backend services, ensuring stability during upstream outages.'
    ],
    infrastructure: [
      'Built automation pipelines for infrastructure lifecycle operations (VM provisioning, OS patching, rollout validation), saving 120+ engineering hours monthly.',
      'Developed structured logging with correlation IDs across frontend and backend services to trace authorization failures end-to-end during incident investigations.',
      'Orchestrated multi-region deployment strategies for high-availability systems using OCI native tools and Terraform patterns.',
      'Enforced high quality through comprehensive unit/integration test coverage, automated CI/CD pipelines (GitHub Actions, TeamCity), and fine-grained production metrics.'
    ],
    impact: [
      'Led the architectural unification of two major identity platforms, reducing p95 request latency by ~20% and lowering long-term maintenance by ~50%.',
      'Authored technical design documents detailing service contracts, Kafka topic schemas, failure modes, and rollout strategies.',
      'Acted as a technical force multiplier by mentoring junior engineers and providing lateral technical leadership across cross-functional teams.'
    ],
    stack: ['Java', 'Spring Boot', 'Node.js', 'Python', 'Kafka', 'OCI', 'React', 'TypeScript', 'Docker', 'Sentry', 'Grafana']
  },
  {
    id: 'microsoft',
    company: 'Microsoft - Wipro',
    role: 'Software Engineer',
    period: 'Oct 2021 — Aug 2022',
    stats: [
      { label: 'Usability Score', value: '+40%' },
      { label: 'Workflow Efficiency', value: '+30%' },
      { label: 'Compliance', value: 'WCAG AA' }
    ],
    frontend: [
      'Built React-based internal tools and productivity extensions for global support teams, focusing on reusable component libraries and predictable data flows.',
      'Implemented frontend state normalization and memoized selectors to handle data-heavy ticket views without performance degradation.',
      'Delivered significant accessibility improvements using semantic HTML and keyboard navigation, increasing WCAG 2.1 compliance scores by ~40%.',
      'Refined UI responsiveness by reducing render depth and eliminating redundant API calls in frequently used support workflows.'
    ],
    backend: [
      'Implemented Java-based services with a layered architecture (Controller, Service, Persistence) to ensure high testability and maintainability.',
      'Designed REST APIs aligning frontend data contracts with backend DTOs to avoid brittle UI logic and reduce payload sizes.',
      'Added defensive UI patterns including graceful empty states, partial rendering, and retry affordances to keep tools usable during backend degradation.'
    ],
    infrastructure: [
      'Introduced integration tests and API contract validation into the CI/CD pipeline, reducing regressions in high-traffic internal workflows.',
      'Optimized complex SQL queries on Azure SQL Database, improving indexing and reducing unnecessary data joins to speed up reporting by 50%.'
    ],
    impact: [
      'Improved cross-departmental collaboration efficiency by providing better visibility into task statuses through automated reporting tools.',
      'Collaborated closely with product managers and designers in an agile setup to translate ambiguous requirements into stable solutions.'
    ],
    stack: ['Java', 'Spring', 'React', 'TypeScript', 'Azure', 'SQL', 'Jest', 'Accessibility (WCAG)', 'Azure DevOps']
  },
  {
    id: 'mahindra',
    company: 'Mahindra & Mahindra',
    role: 'Software Engineering Consultant',
    period: 'Feb 2020 — Oct 2021',
    stats: [
      { label: 'Backend Throughput', value: '+60%' },
      { label: 'Load Time reduction', value: '-70%' },
      { label: 'Team Led', value: '12 Eng' }
    ],
    frontend: [
      'Developed data-heavy enterprise web applications for pricing, supplier, and operational analytics handling millions of transactional records.',
      'Implemented lazy-loaded views and incremental data fetching to reduce initial payload size and improve perceived performance.',
      'Architected frontend layers using modular UI composition, isolation business logic from the presentation layer through service abstractions.'
    ],
    backend: [
      'Refactored monolithic Java/Spring backend into microservices, significantly increasing deployment velocity and system fault tolerance.',
      'Designed backend services with asynchronous processing and batch workflows to support long-running reporting use cases.',
      'Managed and optimized PostgreSQL databases handling high-concurrency manufacturing metrics for real-time tracking.'
    ],
    infrastructure: [
      'Integrated Kafka and RabbitMQ messaging-based workflows to decouple producers and consumers across business systems.',
      'Led the migration of legacy on-prem transactional data to a hybrid cloud environment, ensuring data integrity and zero-downtime cutovers.',
      'Established architectural conventions and performance-sensitive code review processes for a distributed team of 12 engineers.'
    ],
    impact: [
      'Modernized the flagship supplier portal, rebuilding it with React and performance-first architecture to improve page load times by 70%.',
      'Enabled real-time tracking for over 500+ suppliers across the global supply chain, improving operational visibility.'
    ],
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Kafka', 'Python', 'Redis', 'RabbitMQ', 'GCP']
  },
  {
    id: 'need-some-it',
    company: 'Need Some IT',
    role: 'Software Development Engineer',
    period: 'Jul 2018 — Feb 2020',
    stats: [
      { label: 'E2E Ownership', value: 'Features' },
      { label: 'System Type', value: 'SaaS' }
    ],
    frontend: [
      'Built end-to-end SaaS applications with JavaScript frameworks, owning features from initial implementation through deployment.',
      'Designed reusable frontend service layers to centralize API access, error normalization, and data transformation logic.',
      'Implemented basic caching and request de-duplication to improve responsiveness under limited infrastructure constraints.'
    ],
    backend: [
      'Designed reusable backend service layers for validation and business logic reuse across multiple internal tools.',
      'Built backend endpoints with clear validation and error semantics to reduce client-side complexity.'
    ],
    infrastructure: [
      'Implemented basic observability and structured logging to diagnose production issues and stabilize customer-facing systems.',
      'Worked directly with customers to iterate on workflows, translating loosely defined requirements into stable, production-ready systems.'
    ],
    impact: [
      'Gained strong fundamentals in debugging production systems and handling real-world edge cases in high-availability environments.',
      'Owned feature delivery end-to-end, contributing across the full stack as part of a high-velocity development team.'
    ],
    stack: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'REST APIs', 'Cloud Hosting', 'Logging']
  }
];

// --- Comprehensive Skills Arsenal ---
const SKILL_GROUPS = [
  { 
    title: 'Frontend Engine', 
    icon: Layout, 
    skills: [
      'React (Expert)', 'TypeScript', 'Next.js', 'React Native', 'Micro Frontends', 
      'Tailwind CSS', 'Framer Motion', 'Styled Components', 'Webpack', 'Module Federation', 
      'State Management (Redux/Context)', 'Performance Profiling', 'WCAG 2.1 Accessibility'
    ] 
  },
  { 
    title: 'Backend Systems', 
    icon: Server, 
    skills: [
      'Java (Spring Boot)', 'Node.js (TypeScript)', 'Python (FastAPI/Flask)', 
      'RESTful APIs', 'GraphQL', 'gRPC', 'Kotlin (Working Knowledge)', 'Service Orchestration',
      'Domain Driven Design (DDD)', 'Microservice Architectures', 'API Gateway Design'
    ] 
  },
  { 
    title: 'Architecture & Design', 
    icon: Workflow, 
    skills: [
      'Distributed Systems', 'Event-Driven Architectures', 'Hexagonal/Clean Architecture', 
      'System Scalability', 'Concurrency Control', 'Reliable Data Pipelines', 
      'Fan-out/Fan-in Patterns', 'State Normalization', 'High-Availability Planning'
    ] 
  },
  { 
    title: 'Data & Streaming', 
    icon: Database, 
    skills: [
      'PostgreSQL', 'MySQL', 'Kafka (Topics/Consumer Groups)', 'Redis Caching', 
      'Elasticsearch', 'BigQuery', 'MongoDB', 'SQL Optimization', 'Event Processing',
      'Batch Workflows', 'Logs-Based Analytics'
    ] 
  },
  { 
    title: 'AI / LLM Integration', 
    icon: Sparkles, 
    skills: [
      'LLM Orchestration', 'Structured Prompt Design', 'RAG (Retrieval Augmented Generation)', 
      'AI Guardrails', 'Explainable AI (XAI)', 'Schema Validation', 'Diagnostics Automation',
      'LangChain', 'Decision Support Systems'
    ] 
  },
  { 
    title: 'Infrastructure & DevOps', 
    icon: ShieldCheck, 
    skills: [
      'OCI (Oracle Cloud)', 'Azure', 'AWS Fundamentals', 'Docker', 'Kubernetes (GKE/EKS)', 
      'Terraform (IaC)', 'CI/CD (GitHub Actions, TeamCity, Jenkins)', 'SLA/SLO Management', 
      'VM Provisioning Automation', 'Serverless Patterns'
    ] 
  },
  { 
    title: 'Observability & Quality', 
    icon: Activity, 
    skills: [
      'Sentry', 'Grafana', 'Datadog', 'Prometheus', 'Structured Logging', 
      'Correlation IDs', 'TDD', 'Unit/Integration Testing (Jest, RTL)', 
      'Visual Regression Workflows', 'Performance Budgets'
    ] 
  },
  { 
    title: 'Leadership & Collaboration', 
    icon: UserCheck, 
    skills: [
      'Technical Team Lead (12+ Eng)', 'Mentoring Engineers', 'Agile Delivery', 
      'Stakeholder Alignment', 'Cross-Functional Strategy', 'Feature Ownership', 
      'Technical Design Docs', 'Requirement Analysis'
    ] 
  }
];

// --- Sub-Components ---

const TechBadge: React.FC<{ name: string }> = ({ name }) => (
  <motion.div 
    whileHover={{ y: -2, scale: 1.05 }}
    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-400/30 transition-all cursor-default"
  >
    <span className="text-[10px] font-mono font-bold text-white/60 uppercase tracking-widest">{name}</span>
  </motion.div>
);

const ExperienceDetailView = ({ exp, onBack }: { exp: ExperienceDetail, onBack: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="fixed inset-0 z-[300] bg-[#030303] overflow-y-auto"
    >
      {/* Detail Header */}
      <div className="sticky top-0 z-30 px-6 py-4 bg-[#030303]/90 backdrop-blur-xl border-b border-white/5 md:px-20 md:py-8 flex justify-between items-center">
        <Magnetic strength={0.2}>
          <button 
            onClick={onBack}
            className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-[0.3em]"
          >
            <ArrowLeft size={16} /> <span className="hidden sm:inline">Back</span>
          </button>
        </Magnetic>
        <div className="flex items-center gap-4">
          <span className="hidden md:block h-px w-20 bg-white/10" />
          <h2 className="text-sm md:text-xl font-black font-display uppercase italic tracking-tighter">{exp.company}</h2>
        </div>
      </div>

      <div className="px-6 py-12 md:px-20 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 md:gap-20">
        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-12">
          <InteractiveCard className="p-8 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent rounded-[2.5rem]">
            <h1 className="text-4xl md:text-4xl font-black font-display leading-[0.85] mb-6 uppercase italic tracking-tighter">{exp.company}</h1>
            <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">{exp.role}</p>
            <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.4em]">{exp.period}</p>
          </InteractiveCard>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {exp.stats.map(s => (
              <motion.div 
                key={s.label}
                whileHover={{ scale: 1.02, x: 5 }}
                className="p-6 border border-white/5 bg-white/[0.01] rounded-2xl"
              >
                <div className="text-4xl font-black font-display text-white mb-1">{s.value}</div>
                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="px-4 text-[10px] font-mono uppercase tracking-[0.5em] text-white/40">Core Arsenal</h4>
            <div className="flex flex-wrap gap-2 p-2">
              {exp.stack.map(s => <TechBadge key={s} name={s} />)}
            </div>
          </div>
        </div>

        {/* Deep Dive Content Expanded */}
        <div className="lg:col-span-8 space-y-16 pb-24">
          <section className="relative p-10 border border-white/5 rounded-[3rem] bg-white/[0.01]">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                <Monitor size={20} className="text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase italic tracking-tighter">Frontend Engineering</h3>
            </div>
            <div className="space-y-8">
              {exp.frontend.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="h-fit py-1 px-2 rounded-md bg-white/5 font-mono text-[10px] text-cyan-400/40 group-hover:text-cyan-400 transition-colors">0{i+1}</div>
                  <p className="text-white/60 leading-relaxed text-lg group-hover:text-white transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative p-10 border border-white/5 rounded-[3rem] bg-white/[0.01]">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center">
                <Server size={20} className="text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase italic tracking-tighter">Systems & Backend</h3>
            </div>
            <div className="space-y-8">
              {exp.backend.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="h-fit py-1 px-2 rounded-md bg-white/5 font-mono text-[10px] text-purple-400/40 group-hover:text-purple-400 transition-colors">0{i+1}</div>
                  <p className="text-white/60 leading-relaxed text-lg group-hover:text-white transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative p-10 border border-white/5 rounded-[3rem] bg-white/[0.01]">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center">
                <Cloud size={20} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase italic tracking-tighter">Infrastructure & Observability</h3>
            </div>
            <div className="space-y-8">
              {exp.infrastructure.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="h-fit py-1 px-2 rounded-md bg-white/5 font-mono text-[10px] text-blue-400/40 group-hover:text-blue-400 transition-colors">0{i+1}</div>
                  <p className="text-white/60 leading-relaxed text-lg group-hover:text-white transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative p-10 border border-white/5 rounded-[3rem] bg-white/[0.01]">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                <Sparkles size={20} className="text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase italic tracking-tighter">Leadership & Impact</h3>
            </div>
            <div className="space-y-8">
              {exp.impact.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="h-fit py-1 px-2 rounded-md bg-white/5 font-mono text-[10px] text-yellow-400/40 group-hover:text-yellow-400 transition-colors">0{i+1}</div>
                  <p className="text-white/60 leading-relaxed text-lg group-hover:text-white transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

// --- App Root ---

const App: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceDetail | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const navLinks = [
    { name: 'Legacy', href: '#experience' },
    { name: 'Toolkit', href: '#skills' },
    { name: 'Builds', href: '#projects' }
  ];

  return (
    <div className="relative min-h-screen bg-[#030303] selection:bg-cyan-400 selection:text-black scroll-smooth">
      <CustomCursor />
      <FluidBackground />

      <AnimatePresence mode="wait">
        {selectedExp && (
          <ExperienceDetailView 
            exp={selectedExp} 
            onBack={() => setSelectedExp(null)} 
          />
        )}
      </AnimatePresence>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] p-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference">
        <Magnetic strength={0.2}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="font-display font-black text-lg md:text-2xl tracking-tighter cursor-pointer flex flex-col leading-none"
            onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
          >
            <span className="text-white uppercase">Arulvinayak</span>
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] text-cyan-400 opacity-70 uppercase">Menon</span>
          </motion.div>
        </Magnetic>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 font-mono text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">
          {navLinks.map(link => (
            <Magnetic key={link.name} strength={0.4}>
              <a href={link.href} className="hover:opacity-100 transition-opacity p-2">{link.name}</a>
            </Magnetic>
          ))}
        </div>

        <div className="flex gap-4 md:gap-8 items-center">
          <div className="hidden sm:flex gap-4 md:gap-6 items-center">
            <Magnetic strength={0.5}>
              <motion.a href="https://github.com/Arveymenon" target="_blank" className="p-2"><Github size={20} className="opacity-40 hover:opacity-100 transition-opacity" /></motion.a>
            </Magnetic>
            <Magnetic strength={0.5}>
              <motion.a href="https://www.linkedin.com/in/arulvinayak-m/" target="_blank" className="p-2"><Linkedin size={20} className="opacity-40 hover:opacity-100 transition-opacity" /></motion.a>
            </Magnetic>
          </div>
          
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="max-w-7xl w-full">
          <div className="flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
              className="mb-8 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_cyan]" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase opacity-70">
                Staff-Level Full Stack Engineer
              </span>
            </motion.div>

            <h1 className="text-[14vw] sm:text-[13vw] md:text-[9vw] font-black leading-[0.85] tracking-tighter mb-10 md:mb-16 uppercase">
              <span className="text-white">Systems</span> <br /> 
              <span className="text-cyan-400 italic">Engineer</span>
            </h1>

            <div className="grid md:grid-cols-2 w-full gap-12 md:gap-16 items-end">
              <div className="space-y-6">
                <p className="text-xl md:text-3xl text-white/40 leading-snug font-light max-w-xl italic">
                  Bridging the gap between <span className="text-white border-b-2 border-cyan-400/40">complex backends</span>, high-performance UIs, and automated cloud infrastructure.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-white/20 text-[10px] font-mono uppercase tracking-widest"><CheckCircle2 size={12} className="text-cyan-400" /> Platform Engineering</div>
                  <div className="flex items-center gap-2 text-white/20 text-[10px] font-mono uppercase tracking-widest"><CheckCircle2 size={12} className="text-cyan-400" /> AI-Driven Dev</div>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end w-full md:w-auto">
                <Magnetic strength={0.1}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('experience')?.scrollIntoView({behavior:'smooth'})}
                    className="w-full md:w-auto px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 group rounded-full sm:rounded-none"
                  >
                    EXPLORE DOSSIER <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Magnetic>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Feed */}
      <section id="experience" className="py-24 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 md:mb-40 gap-8">
            <h2 className="text-6xl md:text-9xl font-black font-display uppercase tracking-tighter">Legacy</h2>
            <p className="max-w-sm text-white/30 font-mono text-xs uppercase leading-relaxed tracking-widest">A chronological deep-dive into full-stack impact and architectural ownership.</p>
          </div>

          <div className="space-y-6 md:space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                onClick={() => setSelectedExp(exp)}
                className="group relative cursor-pointer"
              >
                <div className="flex flex-col md:flex-row justify-between items-center py-10 md:py-20 px-6 md:px-16 border border-white/5 rounded-[2rem] md:rounded-[3rem] bg-white/[0.01] hover:bg-white/[0.03] hover:border-cyan-400/30 transition-all duration-500 overflow-hidden isolate">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  
                  <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 text-center md:text-left">
                    <span className="font-mono text-[10px] text-white/20 group-hover:text-cyan-400 transition-colors uppercase tracking-[0.5em] mb-4 block">
                      {exp.period}
                    </span>
                    <h3 className="text-3xl sm:text-4xl md:text-8xl font-black font-display group-hover:text-white transition-colors uppercase italic mb-2 tracking-tighter leading-none">
                      {exp.company}
                    </h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 opacity-30 group-hover:opacity-100 transition-all">
                      {exp.stack.slice(0, 5).map(s => <TechBadge key={s} name={s} />)}
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
                    <div className="text-[10px] md:text-xs font-mono text-white/30 uppercase tracking-[0.3em] font-bold">{exp.role}</div>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 transition-all"
                    >
                      <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 md:size-24 transition-transform duration-500" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Toolkit Inventory */}
      <section id="skills" className="py-24 md:py-48 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 md:mb-40">
            <h2 className="text-6xl md:text-9xl font-black font-display uppercase mb-8 tracking-tighter leading-none">Toolkit</h2>
            <div className="h-1 w-24 bg-cyan-400 mb-10" />
            <p className="text-white/30 max-w-lg font-mono text-sm leading-relaxed uppercase tracking-widest">
              Comprehensive polyglot expertise spanning the entire distributed application lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SKILL_GROUPS.map((group, i) => (
              <InteractiveCard 
                key={i}
                className="p-10 md:p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:border-cyan-400/20 transition-all group flex flex-col h-full"
              >
                <div className="mb-10 w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center group-hover:bg-cyan-400/10 transition-colors">
                  <group.icon size={32} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-10 uppercase italic tracking-tighter leading-none">{group.title}</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.skills.map(s => <TechBadge key={s} name={s} />)}
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 md:mb-40 gap-8">
            <h2 className="text-6xl md:text-9xl font-black font-display uppercase mb-8 tracking-tighter">Builds</h2>
            <p className="max-w-sm text-white/30 font-mono text-xs uppercase leading-relaxed tracking-widest">Experimental deployments and publicly recognized algorithmic systems.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Juliana AI', 
                tag: 'GenAI / NLP', 
                desc: 'Conversational agent for banking-related queries using LLM orchestration and vector search with deterministic fallbacks.',
                tech: ['TypeScript', 'LLM', 'Python', 'VectorDB', 'RAG'] 
              },
              { 
                name: 'Predicto', 
                tag: 'FinTech / Real-time', 
                desc: 'Real-time stock monitoring and automated trade execution system based on high-frequency technical analysis and low-latency data streams.',
                tech: ['React', 'Node.js', 'WebSockets', 'SQL', 'Redis'] 
              },
              { 
                name: 'BlockFlash', 
                tag: 'Distributed / Crypto', 
                desc: 'Flash trade execution app monitoring live crypto markets for real-time arbitrage opportunities with event-driven triggers.',
                tech: ['Go', 'Redis', 'Kafka', 'WebSockets', 'Go-Lang'] 
              }
            ].map((proj, i) => (
              <InteractiveCard 
                key={i}
                className="p-10 bg-white/[0.01] border border-white/5 rounded-[2.5rem] flex flex-col h-full hover:bg-white/[0.02]"
              >
                <div className="flex justify-between items-start mb-8">
                  <Sparkles className="text-cyan-400" size={28} />
                  <div className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">{proj.tag}</div>
                </div>
                <h3 className="text-3xl font-black font-display uppercase italic mb-4 tracking-tighter">{proj.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-10">{proj.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {proj.tech.map(t => <TechBadge key={t} name={t} />)}
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-24 md:py-48 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-[14vw] tracking-tighter text-white/[0.03] mb-12 md:mb-20 uppercase italic select-none"
          >
            ARULVINAYAK
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12 items-center text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] font-bold text-white/30">
            <div className="md:text-left order-3 md:order-1">© 2026 // ARUL.PRO</div>
            <div className="flex justify-center gap-8 md:gap-12 order-1 md:order-2">
              <Magnetic strength={0.3}><a href="https://www.linkedin.com/in/arulvinayak-m/" target="_blank" className="hover:text-cyan-400 transition-colors p-2">LinkedIn</a></Magnetic>
              <Magnetic strength={0.3}><a href="https://github.com/Arveymenon" target="_blank" className="hover:text-cyan-400 transition-colors p-2">GitHub</a></Magnetic>
              <Magnetic strength={0.3}><a href="mailto:arveymenon@gmail.com" className="hover:text-cyan-400 transition-colors p-2">Email</a></Magnetic>
            </div>
            <div className="md:text-right order-2 md:order-3">MUMBAI, IN // 18.9° N</div>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
