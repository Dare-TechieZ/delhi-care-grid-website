// HPI 1.6-G
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Wind, 
  Heart, 
  Brain, 
  Shield, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  Activity,
  GraduationCap,
  Building2,
  ChevronRight,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Globe,
  Database
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { HealthAlerts } from '@/entities';

// --- Utility Components for Motion & Layout ---

const RevealOnScroll = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.15 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className || ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ParallaxSection = ({ children, speed = 0.5, className }: { children: React.ReactNode, speed?: number, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  return (
    <div ref={ref} className={`relative ${className || ''}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
};

// --- Main Component ---

export default function HomePage() {
  // --- Data Fidelity Protocol: Canonization ---
  const [alerts, setAlerts] = useState<HealthAlerts[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Canonical Data Source 1: Fetched Alerts
  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const { items } = await BaseCrudService.getAll<HealthAlerts>('healthalerts');
        setAlerts(items.slice(0, 3));
      } catch (e) {
        console.error("Failed to fetch alerts", e);
      } finally {
        setIsLoaded(true);
      }
    };
    fetchAlerts();
  }, []);

  // Canonical Data Source 2: Stats
  const stats = [
    { label: 'Students Protected', value: '2.5M+', icon: GraduationCap, color: 'text-secondary' },
    { label: 'Schools Connected', value: '5,000+', icon: Building2, color: 'text-health-green' },
    { label: 'Daily Health Checks', value: '50K+', icon: Activity, color: 'text-delhi-orange' },
    { label: 'Active Alerts', value: alerts.length > 0 ? alerts.length.toString() : 'Active', icon: AlertTriangle, color: 'text-delhi-purple' },
  ];

  // Canonical Data Source 3: Features
  const features = [
    {
      title: 'Environment & Air Health',
      description: 'Real-time air quality monitoring and environmental health risk assessment for Delhi.',
      icon: Wind,
      href: '/environment',
      gradient: 'from-delhi-blue to-secondary',
      image: 'https://static.wixstatic.com/media/7edae3_42851b2d175b4d1f9941ad61023a3a34~mv2.png?originWidth=576&originHeight=384',
      color: 'text-delhi-blue'
    },
    {
      title: 'Mental Wellness Support',
      description: 'Comprehensive mental health resources and counseling for students and families.',
      icon: Brain,
      href: '/mental-wellness',
      gradient: 'from-delhi-purple to-health-green',
      image: 'https://static.wixstatic.com/media/7edae3_122333886baa4bf8b784caec531eca7e~mv2.png?originWidth=576&originHeight=384',
      color: 'text-delhi-purple'
    },
    {
      title: 'Health AI Assistant',
      description: 'AI-powered verified health information and personalized preventive guidance.',
      icon: Sparkles,
      href: '/ai-assistant',
      gradient: 'from-health-green to-secondary',
      image: 'https://static.wixstatic.com/media/7edae3_7ce2bb34434c4df183d170fa30caf970~mv2.png?originWidth=576&originHeight=384',
      color: 'text-health-green'
    },
    {
      title: 'Smart Dashboards',
      description: 'Role-based insights for students, parents, teachers, and administrators.',
      icon: TrendingUp,
      href: '/dashboards',
      gradient: 'from-delhi-orange to-delhi-purple',
      image: 'https://static.wixstatic.com/media/7edae3_db28a7c335c2443893202cd8143511f0~mv2.png?originWidth=576&originHeight=384',
      color: 'text-delhi-orange'
    },
  ];

  // Canonical Data Source 4: User Roles
  const userRoles = [
    { name: 'Student', icon: GraduationCap, description: 'Access wellness resources & health tracking', href: '/login?role=student' },
    { name: 'Parent', icon: Users, description: 'Monitor child health & receive alerts', href: '/login?role=parent' },
    { name: 'Teacher', icon: Heart, description: 'Support student wellness & view insights', href: '/login?role=teacher' },
    { name: 'Administrator', icon: Shield, description: 'Manage school health programs', href: '/login?role=admin' },
    { name: 'Government Official', icon: Building2, description: 'Access city-wide health analytics', href: '/login?role=official' },
  ];

  // --- Scroll Progress for Global Effects ---
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-paragraph selection:bg-secondary selection:text-secondary-foreground overflow-x-clip">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-delhi-blue via-secondary to-delhi-purple origin-left z-50"
        style={{ scaleX }}
      />

      <Header />

      {/* --- HERO SECTION: The Digital Pulse --- */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Dynamic Background Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-delhi-blue opacity-20 blur-[100px]"></div>
          <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-delhi-purple opacity-10 blur-[120px]"></div>
        </div>

        <div className="container max-w-[120rem] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Hero Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <RevealOnScroll>
                <div className="inline-flex items-center space-x-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8 w-fit">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-sm font-medium tracking-wide text-secondary uppercase">Official Platform of NCT Delhi</span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={100}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] tracking-tight mb-8">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Delhi</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-delhi-blue via-secondary to-health-green">Care Grid</span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mb-10 leading-relaxed font-light">
                  A unified, AI-powered ecosystem monitoring environmental risks, supporting student wellness, and delivering verified health guidance to every citizen.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/login">
                    <Button size="lg" className="h-14 px-8 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)]">
                      Access Portal
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 hover:bg-white/10 rounded-full backdrop-blur-sm">
                      View Live Demo
                    </Button>
                  </Link>
                </div>
              </RevealOnScroll>
            </div>

            {/* Hero Visual - Abstract City Interface */}
            <div className="lg:col-span-5 relative hidden lg:block h-[600px]">
              <ParallaxSection speed={0.2} className="absolute inset-0">
                <div className="relative w-full h-full perspective-1000">
                  {/* Main Dashboard Card */}
                  <motion.div 
                    initial={{ rotateY: -10, rotateX: 5, opacity: 0 }}
                    animate={{ rotateY: -5, rotateX: 2, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-10 left-0 w-full aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-20"
                  >
                    <div className="p-6 border-b border-white/10 flex justify-between items-center">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      </div>
                      <div className="text-xs text-white/40 font-mono">SYSTEM_ACTIVE</div>
                    </div>
                    <div className="p-6 grid grid-cols-2 gap-4">
                      <div className="col-span-2 h-32 bg-white/5 rounded-lg animate-pulse" />
                      <div className="h-24 bg-delhi-blue/20 rounded-lg" />
                      <div className="h-24 bg-health-green/20 rounded-lg" />
                    </div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-10 top-1/3 w-48 p-4 bg-black/80 backdrop-blur-md border border-delhi-purple/50 rounded-xl z-30 shadow-xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Brain className="w-5 h-5 text-delhi-purple" />
                      <span className="text-xs font-bold text-delhi-purple">AI ANALYSIS</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-delhi-purple" />
                    </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -left-10 bottom-20 w-56 p-4 bg-black/80 backdrop-blur-md border border-secondary/50 rounded-xl z-30 shadow-xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Wind className="w-5 h-5 text-secondary" />
                      <span className="text-xs font-bold text-secondary">AIR QUALITY: GOOD</span>
                    </div>
                    <div className="text-2xl font-mono font-bold text-white">AQI 85</div>
                  </motion.div>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS TICKER --- */}
      <section className="w-full border-y border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
        <div className="max-w-[120rem] mx-auto">
          <div className="flex flex-wrap md:flex-nowrap divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="flex-1 p-8 flex items-center justify-center md:justify-start gap-6 group hover:bg-white/5 transition-colors duration-300">
                <div className={`p-4 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform duration-300 ${stat.color.replace('text-', 'bg-')}/10`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-white/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACTIVE ALERTS (Conditional) --- */}
      {alerts.length > 0 && (
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-delhi-orange/5 -skew-y-1 transform origin-top-left scale-110" />
          <div className="container max-w-[120rem] mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-delhi-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-delhi-orange"></span>
                  </span>
                  <span className="text-delhi-orange font-bold tracking-widest uppercase text-sm">Live Updates</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold">Critical Health Alerts</h2>
              </div>
              <Link to="/alerts">
                <Button variant="ghost" className="text-delhi-orange hover:text-delhi-orange hover:bg-delhi-orange/10 group">
                  View All Alerts <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {alerts.map((alert, i) => (
                <RevealOnScroll key={alert._id} delay={i * 100}>
                  <div className="h-full bg-background border border-white/10 hover:border-delhi-orange/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,88,12,0.1)] group">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        alert.severityLevel === 'High' ? 'bg-destructive/20 text-destructive' :
                        alert.severityLevel === 'Medium' ? 'bg-delhi-orange/20 text-delhi-orange' :
                        'bg-secondary/20 text-secondary'
                      }`}>
                        {alert.severityLevel} Priority
                      </div>
                      <AlertTriangle className="w-5 h-5 text-white/30 group-hover:text-delhi-orange transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-delhi-orange transition-colors">{alert.alertTitle}</h3>
                    <p className="text-white/60 text-sm mb-6 line-clamp-3 leading-relaxed">{alert.alertMessage}</p>
                    <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-xs text-white/40">
                      <span>{alert.category}</span>
                      <span>{alert.issueDate ? new Date(alert.issueDate).toLocaleDateString('en-IN') : 'Just Now'}</span>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- FEATURES: Sticky Scroll Narrative --- */}
      <section className="py-32 relative">
        <div className="container max-w-[120rem] mx-auto px-6">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Integrated Health Ecosystem</h2>
            <p className="text-xl text-white/60">
              A comprehensive suite of tools designed to monitor, analyze, and improve the health infrastructure of Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Sticky Navigation/Summary */}
            <div className="hidden lg:block lg:col-span-4 relative">
              <div className="sticky top-32 space-y-8">
                {features.map((feature, idx) => (
                  <a 
                    key={idx} 
                    href={`#feature-${idx}`} 
                    className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg font-bold text-white/80 group-hover:text-white">{feature.title}</span>
                    </div>
                  </a>
                ))}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-delhi-blue/20 to-delhi-purple/20 border border-white/10 backdrop-blur-md">
                  <h4 className="font-bold mb-2">Need Assistance?</h4>
                  <p className="text-sm text-white/60 mb-4">Our AI Assistant is ready to help you navigate these resources.</p>
                  <Link to="/ai-assistant">
                    <Button size="sm" className="w-full bg-white text-black hover:bg-white/90">Ask AI Assistant</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Scrolling Content */}
            <div className="lg:col-span-8 space-y-32">
              {features.map((feature, idx) => (
                <div key={idx} id={`feature-${idx}`} className="scroll-mt-32 group">
                  <RevealOnScroll>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                      {/* Background Glow */}
                      <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${feature.gradient} opacity-10 blur-[100px] rounded-full pointer-events-none`} />
                      
                      <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                        <div className="order-2 md:order-1">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider mb-6 ${feature.color}`}>
                            <feature.icon className="w-3 h-3" />
                            Feature 0{idx + 1}
                          </div>
                          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">{feature.title}</h3>
                          <p className="text-lg text-white/60 mb-8 leading-relaxed">
                            {feature.description}
                          </p>
                          <ul className="space-y-3 mb-8">
                            {[1, 2, 3].map((item) => (
                              <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                                <CheckCircle2 className={`w-4 h-4 ${feature.color}`} />
                                <span>Advanced monitoring and real-time analytics</span>
                              </li>
                            ))}
                          </ul>
                          <Link to={feature.href}>
                            <Button className="group-hover:bg-white group-hover:text-black transition-colors">
                              Explore Module <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                        <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                          <Image 
                            src={feature.image} 
                            alt={feature.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SYSTEM ARCHITECTURE (New Visual Section) --- */}
      <section className="py-32 bg-white/5 border-y border-white/10">
        <div className="container max-w-[120rem] mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16">Secure. Scalable. Smart.</h2>
          </RevealOnScroll>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Central Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black border border-white/20 rounded-full flex items-center justify-center z-20 shadow-[0_0_50px_rgba(52,211,153,0.2)]">
              <Database className="w-10 h-10 text-secondary" />
            </div>
            
            {/* Orbiting Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 relative z-10">
              <RevealOnScroll delay={100}>
                <div className="p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-delhi-blue/50 transition-colors">
                  <Globe className="w-8 h-8 text-delhi-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">City-Wide Grid</h3>
                  <p className="text-sm text-white/50">Connecting 5,000+ schools and health centers across Delhi.</p>
                </div>
              </RevealOnScroll>
              
              <div className="hidden md:block"></div> {/* Spacer for center */}

              <RevealOnScroll delay={200}>
                <div className="p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-delhi-purple/50 transition-colors">
                  <Smartphone className="w-8 h-8 text-delhi-purple mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Citizen Access</h3>
                  <p className="text-sm text-white/50">Mobile-first interface for students, parents, and officials.</p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Connecting Lines (Decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden md:block" style={{ overflow: 'visible' }}>
              <line x1="20%" y1="50%" x2="45%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="55%" y1="50%" x2="80%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </section>

      {/* --- ROLE-BASED ACCESS --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/10" />
        <div className="container max-w-[120rem] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Who Are You?</h2>
              <p className="text-xl text-white/60">
                The platform adapts to your role, providing tailored dashboards, relevant alerts, and specific tools for your needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {userRoles.map((role, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <Link to={role.href} className="block h-full">
                  <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/50 hover:-translate-y-2 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <role.icon className="w-6 h-6 text-white group-hover:text-secondary transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{role.name}</h3>
                    <p className="text-sm text-white/50 mb-4">{role.description}</p>
                    <div className="flex items-center text-xs font-bold text-secondary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      Access Portal <ArrowRight className="ml-1 w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://static.wixstatic.com/media/7edae3_60ec6b59cba54a18b2f73de88b79fa1f~mv2.png?originWidth=1152&originHeight=576" 
            alt="Delhi Cityscape" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">Ready to Join the Grid?</h2>
            <p className="text-xl text-white/70 mb-12">
              Whether you are a student, parent, or official, your participation strengthens Delhi's health infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/login">
                <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full">
                  Secure Login
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-10 text-lg border-white/20 hover:bg-white/10 rounded-full">
                  Learn More About Policy
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}