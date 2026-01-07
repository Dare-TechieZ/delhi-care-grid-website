import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Users, Phone, ExternalLink, BookOpen, Video, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BaseCrudService } from '@/integrations';
import { MentalWellnessResources, HealthHelplines } from '@/entities';

export default function MentalWellnessPage() {
  const [resources, setResources] = useState<MentalWellnessResources[]>([]);
  const [helplines, setHelplines] = useState<HealthHelplines[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const fetchData = async () => {
      const { items: resourceItems } = await BaseCrudService.getAll<MentalWellnessResources>('mentalwellnessresources');
      const { items: helplineItems } = await BaseCrudService.getAll<HealthHelplines>('healthhelplines');
      
      setResources(resourceItems);
      setHelplines(helplineItems);
    };
    fetchData();
  }, []);

  const categories = ['All', ...Array.from(new Set(resources.map(r => r.category).filter(Boolean)))];

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  const programs = [
    {
      title: 'Student Counseling Services',
      description: 'Free confidential counseling for students dealing with stress, anxiety, and academic pressure',
      icon: Brain,
      color: 'delhi-purple',
      features: ['One-on-one sessions', 'Group therapy', 'Crisis intervention'],
    },
    {
      title: 'Peer Support Network',
      description: 'Connect with trained peer counselors who understand student challenges',
      icon: Users,
      color: 'secondary',
      features: ['24/7 peer chat', 'Support groups', 'Mentorship programs'],
    },
    {
      title: 'Wellness Workshops',
      description: 'Interactive sessions on stress management, mindfulness, and emotional well-being',
      icon: Heart,
      color: 'health-green',
      features: ['Weekly workshops', 'Meditation sessions', 'Skill-building activities'],
    },
  ];

  const wellnessTips = [
    {
      title: 'Practice Mindfulness',
      description: 'Take 10 minutes daily for meditation or deep breathing exercises',
      icon: Brain,
    },
    {
      title: 'Stay Connected',
      description: 'Maintain regular contact with friends, family, and support networks',
      icon: Users,
    },
    {
      title: 'Physical Activity',
      description: 'Exercise regularly to boost mood and reduce stress levels',
      icon: Heart,
    },
    {
      title: 'Seek Help Early',
      description: 'Don\'t hesitate to reach out to counselors or helplines when needed',
      icon: Phone,
    },
  ];

  const getResourceIcon = (type: string | undefined) => {
    switch (type?.toLowerCase()) {
      case 'video':
        return Video;
      case 'article':
        return BookOpen;
      case 'chat':
        return MessageCircle;
      default:
        return BookOpen;
    }
  };

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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-delhi-purple/10 border border-delhi-purple/20 rounded-full mb-6">
              <Brain className="w-4 h-4 text-delhi-purple" />
              <span className="text-sm font-paragraph font-medium text-delhi-purple">Mental Health Support</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Mental Wellness Resources
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto">
              Comprehensive mental health resources and counseling support for students and families across Delhi
            </p>
          </motion.div>

          {/* Emergency Helplines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-destructive/10 to-delhi-orange/10 border-destructive/30 p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    24/7 Mental Health Helplines
                  </h3>
                  <p className="text-sm font-paragraph text-foreground/70 mb-4">
                    If you or someone you know is in crisis, please reach out immediately
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {helplines.slice(0, 4).map((helpline) => (
                      <div key={helpline._id} className="flex items-center justify-between bg-background/50 rounded-lg p-3">
                        <div>
                          <div className="text-sm font-paragraph font-medium text-foreground">{helpline.helplineName}</div>
                          <div className="text-xs font-paragraph text-foreground/60">{helpline.operatingHours}</div>
                        </div>
                        <a href={`tel:${helpline.contactNumber}`} className="text-lg font-heading font-bold text-secondary hover:text-secondary/80">
                          {helpline.contactNumber}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Student Wellness Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 h-full hover:border-secondary/50 transition-all">
                  <div className={`w-16 h-16 bg-${program.color}/20 rounded-xl flex items-center justify-center mb-6`}>
                    <program.icon className={`w-8 h-8 text-${program.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                    {program.title}
                  </h3>
                  
                  <p className="text-base font-paragraph text-foreground/70 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm font-paragraph text-foreground/80">
                        <div className={`w-1.5 h-1.5 bg-${program.color} rounded-full`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Mental Health Resources
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' 
                  : 'border-white/20 text-foreground/80 hover:border-secondary hover:text-secondary'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => {
              const ResourceIcon = getResourceIcon(resource.type);
              return (
                <motion.div
                  key={resource._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 h-full hover:border-secondary/50 transition-all group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <ResourceIcon className="w-6 h-6 text-secondary" />
                      </div>
                      {resource.type && (
                        <span className="text-xs font-paragraph px-2 py-1 bg-delhi-purple/20 text-delhi-purple rounded-full">
                          {resource.type}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {resource.title}
                    </h3>
                    
                    <p className="text-sm font-paragraph text-foreground/70 mb-4 leading-relaxed line-clamp-3">
                      {resource.description}
                    </p>
                    
                    {resource.targetAudience && (
                      <div className="text-xs font-paragraph text-foreground/50 mb-4">
                        Target: {resource.targetAudience}
                      </div>
                    )}
                    
                    {resource.externalLink && (
                      <a
                        href={resource.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-paragraph font-medium text-secondary hover:text-secondary/80"
                      >
                        Access Resource
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                    )}
                    
                    {resource.contactInformation && (
                      <div className="mt-3 pt-3 border-t border-white/10 text-xs font-paragraph text-foreground/60">
                        Contact: {resource.contactInformation}
                      </div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wellness Tips */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Daily Wellness Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wellnessTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 text-center h-full hover:border-health-green/50 transition-all">
                  <div className="w-12 h-12 bg-health-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="w-6 h-6 text-health-green" />
                  </div>
                  
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {tip.title}
                  </h3>
                  
                  <p className="text-sm font-paragraph text-foreground/70 leading-relaxed">
                    {tip.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
