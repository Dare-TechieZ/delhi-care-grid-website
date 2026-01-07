import { motion } from 'framer-motion';
import { BookOpen, Download, Users, Heart, Shield, HelpCircle, CheckCircle, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CitizenGuidePage() {
  const sections = [
    {
      title: 'What is Delhi Care Grid?',
      icon: BookOpen,
      color: 'delhi-blue',
      content: `Delhi Care Grid is an AI-powered, government-backed health platform designed to help all Delhi residents stay healthy. 
      It combines real-time environmental monitoring, mental health support, and verified health information in one easy-to-use platform. 
      The platform is free and available to everyone in Delhi.`,
      keyPoints: [
        'Free health platform for all Delhi residents',
        'Government-backed and secure',
        'AI-powered personalized health guidance',
        'Real-time environmental monitoring',
        '24/7 mental health support',
      ],
    },
    {
      title: 'Who Can Use Delhi Care Grid?',
      icon: Users,
      color: 'secondary',
      content: `Delhi Care Grid is designed for everyone in Delhi. Whether you're a student, parent, teacher, or government official, 
      the platform has features tailored to your needs. Different user roles have access to different features based on their needs.`,
      keyPoints: [
        'Students: Health tracking, wellness resources, mental health support',
        'Parents: Monitor child health, receive alerts, access resources',
        'Teachers: Track student wellness, access health data, support programs',
        'Administrators: Manage school health programs, view analytics',
        'Government Officials: Access city-wide health data and insights',
      ],
    },
    {
      title: 'How to Get Started',
      icon: CheckCircle,
      color: 'health-green',
      content: `Getting started with Delhi Care Grid is simple. You can explore the platform in Demo Mode without logging in, 
      or create an account to access personalized features and track your health data.`,
      keyPoints: [
        'Visit the Delhi Care Grid website',
        'Click "Demo Mode" to explore features without login',
        'Or click "Login" to create an account',
        'Complete your profile with basic information',
        'Start using health features immediately',
      ],
    },
    {
      title: 'Key Features Explained',
      icon: Heart,
      color: 'delhi-purple',
      content: `Delhi Care Grid offers several key features to support your health and well-being. Each feature is designed to be easy to use and helpful.`,
      keyPoints: [
        'Environment & Air Health: Real-time air quality monitoring and health alerts',
        'Mental Wellness: Free counseling, peer support, and wellness resources',
        'Health AI Assistant: Ask health questions and get verified answers',
        'Smart Dashboards: Personalized health insights and analytics',
        'Alerts & Notifications: Real-time health and environmental warnings',
      ],
    },
    {
      title: 'Privacy & Data Security',
      icon: Shield,
      color: 'delhi-orange',
      content: `Your privacy and data security are our top priorities. All your health information is protected with bank-grade encryption 
      and is never shared without your explicit permission.`,
      keyPoints: [
        'Bank-grade encryption for all data',
        'Your data is never sold or shared commercially',
        'You control who can access your information',
        'Regular security audits and updates',
        'Compliance with government data protection laws',
      ],
    },
    {
      title: 'Frequently Asked Questions',
      icon: HelpCircle,
      color: 'delhi-blue',
      content: `Here are answers to common questions about Delhi Care Grid.`,
      keyPoints: [
        'Is Delhi Care Grid free? Yes, completely free for all Delhi residents',
        'Do I need to provide personal information? Only basic information needed for registration',
        'Can I delete my account? Yes, you can request account deletion anytime',
        'Is my data safe? Yes, with bank-grade encryption and strict security measures',
        'How do I report a problem? Use the feedback form or call our helpline',
      ],
    },
    {
      title: 'Medical & Data Disclaimers',
      icon: AlertCircle,
      color: 'destructive',
      content: `Important information about using Delhi Care Grid responsibly.`,
      keyPoints: [
        'Delhi Care Grid provides guidance, not medical diagnosis or treatment',
        'Always consult healthcare professionals for medical concerns',
        'AI recommendations are based on verified information but not a substitute for professional advice',
        'In emergencies, call emergency services (112) or visit nearest hospital',
        'Data is used only for health purposes and never for commercial use',
      ],
    },
    {
      title: 'Accessibility Features',
      icon: Users,
      color: 'secondary',
      content: `Delhi Care Grid is designed to be accessible to everyone, including people with disabilities.`,
      keyPoints: [
        'Available in English and Hindi languages',
        'Screen reader compatible for visually impaired users',
        'Keyboard navigation support',
        'High contrast mode for better visibility',
        'Simple, clear language for easy understanding',
      ],
    },
  ];

  const downloadGuides = [
    {
      title: 'Quick Start Guide',
      description: 'Get started with Delhi Care Grid in 5 minutes',
      icon: BookOpen,
      color: 'delhi-blue',
    },
    {
      title: 'Student Wellness Guide',
      description: 'Complete guide for students using the platform',
      icon: Users,
      color: 'secondary',
    },
    {
      title: 'Parent Guide',
      description: 'How parents can monitor and support child health',
      icon: Heart,
      color: 'health-green',
    },
    {
      title: 'Teacher Guide',
      description: 'Using Delhi Care Grid in school settings',
      icon: BookOpen,
      color: 'delhi-purple',
    },
    {
      title: 'Privacy & Security Guide',
      description: 'Understanding data protection and privacy',
      icon: Shield,
      color: 'delhi-orange',
    },
    {
      title: 'Accessibility Guide',
      description: 'Features for users with disabilities',
      icon: Users,
      color: 'delhi-blue',
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
              <BookOpen className="w-4 h-4 text-delhi-blue" />
              <span className="text-sm font-paragraph font-medium text-delhi-blue">Complete Guide</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Delhi Care Grid Citizen Guide
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto">
              Everything you need to know about using Delhi Care Grid to improve your health and well-being
            </p>
          </motion.div>

          <Card className="bg-gradient-to-r from-delhi-blue/10 to-secondary/10 border-delhi-blue/30 p-8 max-w-3xl mx-auto">
            <p className="text-base font-paragraph text-foreground/80 leading-relaxed">
              This comprehensive guide explains what Delhi Care Grid is, how to use it, and how it can help you and your family stay healthy. 
              Whether you're new to the platform or want to learn more, this guide has all the information you need.
            </p>
          </Card>
        </div>
      </section>

      {/* Main Sections */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 md:p-12 hover:border-secondary/50 transition-all">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`w-16 h-16 bg-${section.color}/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <section.icon className={`w-8 h-8 text-${section.color}`} />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>

                  <p className="text-base font-paragraph text-foreground/80 mb-6 leading-relaxed">
                    {section.content}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className={`w-5 h-5 text-${section.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm font-paragraph text-foreground/80 leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Downloadable Guides
          </h2>

          <p className="text-lg font-paragraph text-foreground/70 max-w-3xl mx-auto text-center mb-12">
            Download comprehensive guides for different user types and topics
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 h-full hover:border-secondary/50 transition-all flex flex-col">
                  <div className={`w-16 h-16 bg-${guide.color}/20 rounded-xl flex items-center justify-center mb-6`}>
                    <guide.icon className={`w-8 h-8 text-${guide.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {guide.title}
                  </h3>
                  
                  <p className="text-sm font-paragraph text-foreground/70 mb-6 leading-relaxed flex-1">
                    {guide.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className={`w-full border-${guide.color} text-${guide.color} hover:bg-${guide.color} hover:text-white`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Contact */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Need Help?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  Browse FAQs
                </h3>
                <p className="text-sm font-paragraph text-foreground/70 mb-4">
                  Find answers to common questions about the platform
                </p>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  View FAQs
                </Button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-health-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-8 h-8 text-health-green" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  Contact Support
                </h3>
                <p className="text-sm font-paragraph text-foreground/70 mb-4">
                  Email: support@delhicaregrid.gov.in
                </p>
                <Button variant="outline" className="border-health-green text-health-green hover:bg-health-green hover:text-white">
                  Send Email
                </Button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-delhi-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-delhi-blue" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  24/7 Helpline
                </h3>
                <p className="text-sm font-paragraph text-foreground/70 mb-4">
                  Call: 1800-XXX-XXXX (Toll Free)
                </p>
                <Button variant="outline" className="border-delhi-blue text-delhi-blue hover:bg-delhi-blue hover:text-white">
                  Call Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
