import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Wind, Brain, BarChart3, Bell, BookOpen, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DemoPage() {
  const navigate = useNavigate();

  const demoFeatures = [
    {
      title: 'Environment & Air Health',
      description: 'Explore real-time air quality monitoring and environmental health risk assessment',
      icon: Wind,
      color: 'delhi-blue',
      path: '/environment',
    },
    {
      title: 'Mental Wellness Resources',
      description: 'Browse comprehensive mental health support and counseling resources',
      icon: Brain,
      color: 'delhi-purple',
      path: '/mental-wellness',
    },
    {
      title: 'Health AI Assistant',
      description: 'Try our AI-powered verified health information and guidance system',
      icon: Sparkles,
      color: 'secondary',
      path: '/ai-assistant',
    },
    {
      title: 'Smart Dashboards',
      description: 'View role-based health insights and analytics for different stakeholders',
      icon: BarChart3,
      color: 'health-green',
      path: '/dashboards',
    },
    {
      title: 'Health Alerts',
      description: 'See preventive health alerts and environmental warnings in action',
      icon: Bell,
      color: 'delhi-orange',
      path: '/alerts',
    },
    {
      title: 'Awareness Hub',
      description: 'Access educational content, health articles, and awareness campaigns',
      icon: BookOpen,
      color: 'delhi-blue',
      path: '/awareness',
    },
  ];

  const demoData = [
    'Sample air quality data from all Delhi zones',
    'Pre-populated mental wellness resources',
    'Verified health information database',
    'Mock health alerts and notifications',
    'Educational content and campaigns',
    'Role-based dashboard previews',
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-paragraph font-medium text-secondary">Interactive Demo</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Explore Demo Mode
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto mb-8">
              Experience the full capabilities of Delhi Care Grid with sample data. No login required.
            </p>

            <Card className="bg-gradient-to-r from-secondary/10 to-health-green/10 border-secondary/30 p-6 max-w-2xl mx-auto">
              <p className="text-base font-paragraph text-foreground/80 leading-relaxed">
                <strong className="text-secondary">Demo Mode</strong> allows you to explore all features of the platform 
                with pre-populated sample data. This is perfect for understanding how Delhi Care Grid works before creating an account.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Explore Platform Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 h-full hover:border-secondary/50 transition-all group cursor-pointer"
                  onClick={() => navigate(feature.path)}
                >
                  <div className={`w-16 h-16 bg-${feature.color}/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm font-paragraph text-foreground/70 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-secondary font-paragraph font-medium text-sm">
                    Explore Feature
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
              What's Included in Demo
            </h2>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {demoData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-heading font-bold text-secondary">✓</span>
                    </div>
                    <span className="text-base font-paragraph text-foreground/80 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm font-paragraph text-foreground/60 text-center mb-6">
                  Ready to access personalized health insights and real-time data?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => navigate('/login')}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-8"
                  >
                    Create Account
                  </Button>
                  <Button
                    onClick={() => navigate('/')}
                    variant="outline"
                    className="border-white/20 text-foreground hover:border-secondary hover:text-secondary h-12 px-8"
                  >
                    Back to Home
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <Card className="bg-gradient-to-r from-delhi-blue/10 to-secondary/10 border-delhi-blue/30 p-8 md:p-12 text-center">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Start Exploring Now
            </h3>
            <p className="text-lg font-paragraph text-foreground/70 mb-8 max-w-2xl mx-auto">
              Jump directly to any feature and experience how Delhi Care Grid can transform preventive healthcare
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button onClick={() => navigate('/environment')} variant="outline" className="border-delhi-blue text-delhi-blue hover:bg-delhi-blue hover:text-white">
                <Wind className="w-4 h-4 mr-2" />
                Air Quality
              </Button>
              <Button onClick={() => navigate('/mental-wellness')} variant="outline" className="border-delhi-purple text-delhi-purple hover:bg-delhi-purple hover:text-white">
                <Brain className="w-4 h-4 mr-2" />
                Mental Wellness
              </Button>
              <Button onClick={() => navigate('/ai-assistant')} variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Assistant
              </Button>
              <Button onClick={() => navigate('/dashboards')} variant="outline" className="border-health-green text-health-green hover:bg-health-green hover:text-white">
                <BarChart3 className="w-4 h-4 mr-2" />
                Dashboards
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
