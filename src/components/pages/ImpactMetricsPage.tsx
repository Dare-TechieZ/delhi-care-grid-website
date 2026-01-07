import { motion } from 'framer-motion';
import { TrendingUp, Users, Heart, Shield, Activity, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function ImpactMetricsPage() {
  const expectedBenefits = [
    {
      title: 'Reduced Disease Burden',
      icon: Heart,
      color: 'health-green',
      metrics: [
        { label: 'Respiratory Disease Reduction', value: 25, unit: '%' },
        { label: 'Mental Health Intervention Rate', value: 40, unit: '%' },
        { label: 'Early Disease Detection', value: 35, unit: '%' },
      ],
      description: 'Early detection and preventive measures reduce the overall disease burden in Delhi.',
    },
    {
      title: 'Improved Health Outcomes',
      icon: Activity,
      color: 'secondary',
      metrics: [
        { label: 'Student Health Score Improvement', value: 30, unit: '%' },
        { label: 'School Attendance Increase', value: 20, unit: '%' },
        { label: 'Academic Performance Improvement', value: 15, unit: '%' },
      ],
      description: 'Healthier students perform better academically and have better attendance.',
    },
    {
      title: 'Healthcare Cost Savings',
      icon: Shield,
      color: 'delhi-blue',
      metrics: [
        { label: 'Preventive Care Cost Reduction', value: 40, unit: '%' },
        { label: 'Hospital Admission Reduction', value: 20, unit: '%' },
        { label: 'Treatment Cost Savings', value: 30, unit: '%' },
      ],
      description: 'Prevention is cheaper than treatment, reducing overall healthcare costs.',
    },
    {
      title: 'Increased Health Awareness',
      icon: Target,
      color: 'delhi-orange',
      metrics: [
        { label: 'Health Literacy Improvement', value: 50, unit: '%' },
        { label: 'Resource Access Increase', value: 60, unit: '%' },
        { label: 'Preventive Behavior Adoption', value: 45, unit: '%' },
      ],
      description: 'Better informed citizens make healthier choices and adopt preventive behaviors.',
    },
    {
      title: 'Equitable Health Access',
      icon: Users,
      color: 'delhi-purple',
      metrics: [
        { label: 'Underserved Area Coverage', value: 80, unit: '%' },
        { label: 'Mental Health Service Access', value: 70, unit: '%' },
        { label: 'Health Equity Improvement', value: 50, unit: '%' },
      ],
      description: 'Technology bridges gaps in healthcare access across different areas and populations.',
    },
    {
      title: 'Environmental Health Improvement',
      icon: TrendingUp,
      color: 'delhi-blue',
      metrics: [
        { label: 'Air Quality Awareness', value: 75, unit: '%' },
        { label: 'Pollution-Related Health Reduction', value: 20, unit: '%' },
        { label: 'Environmental Action Participation', value: 40, unit: '%' },
      ],
      description: 'Better environmental monitoring leads to improved air quality and health.',
    },
  ];

  const timelineMetrics = [
    {
      phase: 'Phase 1 (Year 1)',
      duration: 'Months 1-12',
      targets: [
        '2.5 million students registered',
        '5,000 schools connected',
        '50,000 daily active users',
        '100 mental health counselors trained',
        '24/7 helpline operational',
      ],
    },
    {
      phase: 'Phase 2 (Year 2)',
      duration: 'Months 13-24',
      targets: [
        '5 million users on platform',
        '10,000 schools connected',
        '500,000 daily active users',
        '200 mental health counselors trained',
        '50,000 health interventions completed',
      ],
    },
    {
      phase: 'Phase 3 (Year 3)',
      duration: 'Months 25-36',
      targets: [
        '8 million users on platform',
        '15,000 schools connected',
        '2 million daily active users',
        '500 mental health counselors trained',
        '500,000 health interventions completed',
      ],
    },
  ];

  const successIndicators = [
    {
      title: 'User Engagement',
      indicators: [
        'Daily active users',
        'Average session duration',
        'Feature usage rates',
        'User retention rate',
        'Satisfaction scores',
      ],
    },
    {
      title: 'Health Outcomes',
      indicators: [
        'Disease prevalence reduction',
        'Hospital admission rates',
        'Mental health service utilization',
        'Health screening participation',
        'Preventive behavior adoption',
      ],
    },
    {
      title: 'System Performance',
      indicators: [
        'Platform uptime',
        'Data accuracy',
        'Response time',
        'User support satisfaction',
        'Security incidents',
      ],
    },
    {
      title: 'Equity & Access',
      indicators: [
        'Geographic coverage',
        'Demographic reach',
        'Language accessibility',
        'Device compatibility',
        'Accessibility compliance',
      ],
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-health-green/10 border border-health-green/20 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-health-green" />
              <span className="text-sm font-paragraph font-medium text-health-green">Expected Benefits</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Impact Metrics & Expected Benefits
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto">
              Measurable outcomes and expected health improvements from Delhi Care Grid
            </p>
          </motion.div>

          <Card className="bg-gradient-to-r from-health-green/10 to-secondary/10 border-health-green/30 p-8 max-w-3xl mx-auto">
            <p className="text-base font-paragraph text-foreground/80 leading-relaxed">
              Delhi Care Grid is designed to deliver measurable health improvements across the city. 
              We track specific metrics to ensure the platform is achieving its goals and benefiting all residents.
            </p>
          </Card>
        </div>
      </section>

      {/* Expected Benefits */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Expected Health Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expectedBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 h-full hover:border-secondary/50 transition-all">
                  <div className={`w-16 h-16 bg-${benefit.color}/20 rounded-xl flex items-center justify-center mb-6`}>
                    <benefit.icon className={`w-8 h-8 text-${benefit.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm font-paragraph text-foreground/70 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <div className="space-y-4">
                    {benefit.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-paragraph font-medium text-foreground/80">{metric.label}</span>
                          <span className={`text-lg font-heading font-bold text-${benefit.color}`}>
                            {metric.value}{metric.unit}
                          </span>
                        </div>
                        <Progress value={metric.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            3-Year Implementation Timeline
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {timelineMetrics.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 h-full hover:border-secondary/50 transition-all">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-lg font-heading font-bold text-secondary">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground">{phase.phase}</h3>
                      <p className="text-xs font-paragraph text-foreground/60">{phase.duration}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {phase.targets.map((target, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm font-paragraph text-foreground/70">
                        <span className="text-secondary mt-1">✓</span>
                        <span>{target}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Timeline Visualization */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
              Cumulative Impact Over 3 Years
            </h3>
            
            <div className="space-y-6">
              {[
                { label: 'Total Users', year1: '2.5M', year2: '5M', year3: '8M' },
                { label: 'Schools Connected', year1: '5,000', year2: '10,000', year3: '15,000' },
                { label: 'Daily Active Users', year1: '50K', year2: '500K', year3: '2M' },
                { label: 'Health Interventions', year1: '10K', year2: '50K', year3: '500K' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="font-paragraph font-medium text-foreground">{item.label}</span>
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <p className="text-xs font-paragraph text-foreground/60 mb-1">Year 1</p>
                      <p className="text-lg font-heading font-bold text-secondary">{item.year1}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-paragraph text-foreground/60 mb-1">Year 2</p>
                      <p className="text-lg font-heading font-bold text-secondary">{item.year2}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-paragraph text-foreground/60 mb-1">Year 3</p>
                      <p className="text-lg font-heading font-bold text-secondary">{item.year3}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Success Indicators */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Key Success Indicators
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successIndicators.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 h-full hover:border-secondary/50 transition-all">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                    {category.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {category.indicators.map((indicator, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm font-paragraph text-foreground/70">
                        <span className="text-secondary mt-1">•</span>
                        <span>{indicator}</span>
                      </li>
                    ))}
                  </ul>
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
