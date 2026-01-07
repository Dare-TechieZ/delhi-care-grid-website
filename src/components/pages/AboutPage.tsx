import { motion } from 'framer-motion';
import { Shield, Target, Users, TrendingUp, Award, Globe, Heart, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  const missions = [
    {
      title: 'Preventive Health',
      description: 'Proactive health monitoring and early intervention to prevent diseases before they occur',
      icon: Shield,
      color: 'health-green',
    },
    {
      title: 'Environmental Safety',
      description: 'Real-time air quality monitoring and environmental health risk assessment',
      icon: Globe,
      color: 'delhi-blue',
    },
    {
      title: 'Mental Wellness',
      description: 'Comprehensive mental health support for students, families, and educators',
      icon: Heart,
      color: 'delhi-purple',
    },
    {
      title: 'Data-Driven Insights',
      description: 'AI-powered analytics for informed decision-making and policy development',
      icon: Zap,
      color: 'secondary',
    },
  ];

  const impactMetrics = [
    { label: 'Students Protected', value: '2.5M+', icon: Users, color: 'secondary' },
    { label: 'Schools Connected', value: '5,000+', icon: Target, color: 'health-green' },
    { label: 'Health Interventions', value: '150K+', icon: Heart, color: 'delhi-purple' },
    { label: 'City Coverage', value: '100%', icon: Globe, color: 'delhi-blue' },
  ];

  const alignedMissions = [
    {
      name: 'Ayushman Bharat',
      description: 'National Health Protection Mission',
      category: 'Health',
    },
    {
      name: 'National Clean Air Programme',
      description: 'Air Quality Management',
      category: 'Environment',
    },
    {
      name: 'Digital India',
      description: 'Technology-Enabled Governance',
      category: 'Digital',
    },
    {
      name: 'Samagra Shiksha',
      description: 'Integrated School Education',
      category: 'Education',
    },
    {
      name: 'Smart Cities Mission',
      description: 'Urban Development & Innovation',
      category: 'Urban',
    },
    {
      name: 'Fit India Movement',
      description: 'Health & Wellness Promotion',
      category: 'Health',
    },
  ];

  const principles = [
    {
      title: 'Privacy First',
      description: 'All health data is encrypted and stored securely. We never share personal information without explicit consent.',
    },
    {
      title: 'Evidence-Based',
      description: 'Every health recommendation is backed by scientific research and verified by medical experts.',
    },
    {
      title: 'Inclusive Access',
      description: 'Free access for all Delhi residents with support for multiple languages and accessibility standards.',
    },
    {
      title: 'Transparent Operations',
      description: 'Open data policies and regular public reporting on platform performance and impact.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-delhi-blue/10 border border-delhi-blue/20 rounded-full mb-6">
              <Shield className="w-4 h-4 text-delhi-blue" />
              <span className="text-sm font-paragraph font-medium text-delhi-blue">Government Initiative</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              About Delhi Care Grid
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              Delhi Care Grid is an AI-powered, government-grade preventive health platform developed by the Government of NCT of Delhi. 
              We combine environmental monitoring, mental wellness support, and verified health information to create a comprehensive 
              health ecosystem for Delhi's 2.5 million students and their families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Our Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 h-full text-center hover:border-secondary/50 transition-all">
                  <div className={`w-16 h-16 bg-${mission.color}/20 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <mission.icon className={`w-8 h-8 text-${mission.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {mission.title}
                  </h3>
                  
                  <p className="text-sm font-paragraph text-foreground/70 leading-relaxed">
                    {mission.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Our Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center hover:border-secondary/50 transition-all">
                  <div className={`w-16 h-16 bg-${metric.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <metric.icon className={`w-8 h-8 text-${metric.color}`} />
                  </div>
                  <div className="text-4xl font-heading font-bold text-foreground mb-2">{metric.value}</div>
                  <div className="text-sm font-paragraph text-foreground/60">{metric.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-secondary/10 to-health-green/10 border-secondary/30 p-8 md:p-12 text-center">
            <Award className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Recognized Excellence
            </h3>
            <p className="text-lg font-paragraph text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Delhi Care Grid has been recognized as a model health platform by the Ministry of Health and Family Welfare, 
              demonstrating how technology can transform preventive healthcare delivery at scale.
            </p>
          </Card>
        </div>
      </section>

      {/* Aligned Missions */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 text-center">
            Aligned with National Missions
          </h2>
          <p className="text-lg font-paragraph text-foreground/70 max-w-3xl mx-auto text-center mb-12">
            Delhi Care Grid supports and integrates with key Indian government initiatives
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alignedMissions.map((mission, index) => (
              <motion.div
                key={mission.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:border-secondary/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-heading font-bold text-foreground">{mission.name}</h3>
                    <span className="text-xs font-paragraph px-2 py-1 bg-delhi-blue/20 text-delhi-blue rounded-full flex-shrink-0 ml-2">
                      {mission.category}
                    </span>
                  </div>
                  <p className="text-sm font-paragraph text-foreground/70 leading-relaxed">
                    {mission.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Our Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 h-full hover:border-secondary/50 transition-all">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-base font-paragraph text-foreground/70 leading-relaxed">
                    {principle.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Pages */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Policies & Compliance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center hover:border-secondary/50 transition-all">
              <Shield className="w-12 h-12 text-health-green mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Privacy Policy</h3>
              <p className="text-sm font-paragraph text-foreground/70 mb-4">
                We protect your health data with bank-grade encryption and strict access controls.
              </p>
              <a href="/privacy" className="text-sm font-paragraph font-medium text-secondary hover:text-secondary/80">
                Read Full Policy →
              </a>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center hover:border-secondary/50 transition-all">
              <Target className="w-12 h-12 text-delhi-blue mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Terms of Service</h3>
              <p className="text-sm font-paragraph text-foreground/70 mb-4">
                Guidelines for using Delhi Care Grid platform and accessing health services.
              </p>
              <a href="/terms" className="text-sm font-paragraph font-medium text-secondary hover:text-secondary/80">
                Read Terms →
              </a>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center hover:border-secondary/50 transition-all">
              <TrendingUp className="w-12 h-12 text-delhi-purple mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Disclaimer</h3>
              <p className="text-sm font-paragraph text-foreground/70 mb-4">
                Important information about health guidance and medical advice limitations.
              </p>
              <a href="/disclaimer" className="text-sm font-paragraph font-medium text-secondary hover:text-secondary/80">
                Read Disclaimer →
              </a>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
