import { motion } from 'framer-motion';
import { Wind, AlertTriangle, Users, TrendingDown, MapPin, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function DelhiProblemsPage() {
  const problems = [
    {
      title: 'Air Pollution Crisis',
      icon: Wind,
      color: 'delhi-orange',
      severity: 85,
      description: 'Delhi faces severe air quality challenges, especially during winter months.',
      issues: [
        'AQI frequently exceeds 300 (Severe category)',
        'Vehicular emissions account for 40% of pollution',
        'Seasonal stubble burning increases pollution by 30-40%',
        'Industrial emissions from surrounding areas',
        'Construction dust and road dust',
      ],
      impact: 'Respiratory diseases, asthma, cardiovascular issues, reduced life expectancy',
      solution: 'Real-time air quality monitoring, health alerts, preventive guidance, environmental tracking',
    },
    {
      title: 'Student Mental Health Crisis',
      icon: Users,
      color: 'delhi-purple',
      severity: 72,
      description: 'Rising mental health challenges among Delhi\'s student population.',
      issues: [
        'Academic pressure and competitive environment',
        'Social media and cyberbullying',
        'Family stress and socioeconomic challenges',
        'Limited access to counseling services',
        'Stigma around mental health discussions',
      ],
      impact: 'Anxiety, depression, sleep disorders, academic underperformance, self-harm',
      solution: 'Free counseling services, peer support networks, wellness workshops, 24/7 helplines',
    },
    {
      title: 'Health Information Misinformation',
      icon: AlertTriangle,
      color: 'delhi-orange',
      severity: 68,
      description: 'Widespread health misinformation affecting public health decisions.',
      issues: [
        'Unverified health claims on social media',
        'Traditional remedies without scientific backing',
        'Vaccine hesitancy due to false information',
        'Lack of access to verified health information',
        'Language barriers in health communication',
      ],
      impact: 'Poor health decisions, delayed treatment, disease spread, reduced vaccination rates',
      solution: 'AI-powered verified health information, expert-reviewed answers, official government sources',
    },
    {
      title: 'Healthcare Access Inequality',
      icon: TrendingDown,
      color: 'delhi-blue',
      severity: 75,
      description: 'Unequal access to healthcare services across different areas of Delhi.',
      issues: [
        'Limited healthcare facilities in peripheral areas',
        'High cost of private healthcare',
        'Overcrowded government hospitals',
        'Shortage of mental health professionals',
        'Limited preventive health programs',
      ],
      impact: 'Late diagnosis, higher mortality rates, preventable diseases, health disparities',
      solution: 'Centralized health platform, resource optimization, preventive care focus, role-based access',
    },
    {
      title: 'Preventive Health Awareness Gap',
      icon: Zap,
      color: 'health-green',
      severity: 70,
      description: 'Low awareness about preventive health measures among general population.',
      issues: [
        'Lack of health literacy',
        'Limited health education in schools',
        'Insufficient awareness about environmental health',
        'Poor understanding of disease prevention',
        'Limited access to health resources',
      ],
      impact: 'Higher disease burden, increased healthcare costs, preventable health issues',
      solution: 'Educational content, awareness campaigns, health guidance, accessible resources',
    },
    {
      title: 'Data Fragmentation in Health System',
      icon: MapPin,
      color: 'secondary',
      severity: 80,
      description: 'Health data scattered across multiple systems without integration.',
      issues: [
        'No unified health records system',
        'Duplicate testing and treatments',
        'Inefficient resource allocation',
        'Difficulty in identifying health trends',
        'Limited data-driven decision making',
      ],
      impact: 'Inefficient healthcare delivery, wasted resources, missed opportunities for intervention',
      solution: 'Integrated health platform, data analytics, trend identification, smart resource allocation',
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-delhi-orange/10 border border-delhi-orange/20 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 text-delhi-orange" />
              <span className="text-sm font-paragraph font-medium text-delhi-orange">Delhi-Specific Challenges</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Delhi's Health & Environmental Challenges
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto">
              Understanding the specific health and environmental problems Delhi Care Grid is designed to address
            </p>
          </motion.div>

          <Card className="bg-gradient-to-r from-delhi-orange/10 to-destructive/10 border-delhi-orange/30 p-8 max-w-3xl mx-auto">
            <p className="text-base font-paragraph text-foreground/80 leading-relaxed">
              Delhi faces unique health and environmental challenges due to its geography, climate, population density, 
              and rapid urbanization. Delhi Care Grid is specifically designed to address these local issues with targeted solutions.
            </p>
          </Card>
        </div>
      </section>

      {/* Problems Grid */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 md:p-12 hover:border-secondary/50 transition-all">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`w-16 h-16 bg-${problem.color}/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <problem.icon className={`w-8 h-8 text-${problem.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-base font-paragraph text-foreground/70">
                        {problem.description}
                      </p>
                    </div>
                  </div>

                  {/* Severity Indicator */}
                  <div className="mb-8 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-paragraph font-semibold text-foreground">Severity Level</span>
                      <span className={`text-lg font-heading font-bold text-${problem.color}`}>{problem.severity}%</span>
                    </div>
                    <Progress value={problem.severity} className="h-2" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Issues */}
                    <div>
                      <h4 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center">
                        <AlertTriangle className={`w-5 h-5 text-${problem.color} mr-2`} />
                        Key Issues
                      </h4>
                      <ul className="space-y-2">
                        {problem.issues.map((issue, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm font-paragraph text-foreground/70">
                            <span className={`text-${problem.color} mt-1`}>•</span>
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div>
                      <h4 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center">
                        <TrendingDown className={`w-5 h-5 text-destructive mr-2`} />
                        Health Impact
                      </h4>
                      <p className="text-sm font-paragraph text-foreground/70 leading-relaxed">
                        {problem.impact}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center">
                        <Zap className={`w-5 h-5 text-health-green mr-2`} />
                        DCG Solution
                      </h4>
                      <p className="text-sm font-paragraph text-foreground/70 leading-relaxed">
                        {problem.solution}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <Card className="bg-gradient-to-r from-secondary/10 to-health-green/10 border-secondary/30 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Delhi Care Grid: A Comprehensive Solution
            </h2>
            <p className="text-lg font-paragraph text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              By addressing these specific challenges with AI-powered technology, verified health information, 
              and government-backed resources, Delhi Care Grid aims to create a healthier, more informed, 
              and more resilient Delhi for all residents.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
