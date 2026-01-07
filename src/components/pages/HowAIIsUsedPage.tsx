import { motion } from 'framer-motion';
import { Sparkles, Brain, TrendingUp, Shield, Users, Zap, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

export default function HowAIIsUsedPage() {
  const aiApplications = [
    {
      title: 'Health Risk Prediction',
      description: 'AI analyzes environmental data, health history, and behavioral patterns to predict potential health risks before they occur.',
      icon: Brain,
      color: 'delhi-blue',
      examples: [
        'Predicting respiratory issues based on air quality trends',
        'Identifying students at risk of mental health challenges',
        'Forecasting disease outbreaks in specific areas',
      ],
    },
    {
      title: 'Personalized Health Guidance',
      description: 'Machine learning algorithms provide customized health recommendations based on individual profiles and local conditions.',
      icon: Sparkles,
      color: 'secondary',
      examples: [
        'Tailored exercise routines based on air quality',
        'Personalized nutrition plans for students',
        'Customized mental wellness activities',
      ],
    },
    {
      title: 'Real-Time Alert System',
      description: 'AI processes real-time environmental and health data to generate timely alerts and notifications.',
      icon: Zap,
      color: 'delhi-orange',
      examples: [
        'Air quality alerts when pollution exceeds safe levels',
        'Health warnings during disease outbreaks',
        'Personalized wellness reminders',
      ],
    },
    {
      title: 'Data Pattern Recognition',
      description: 'AI identifies patterns in health and environmental data to uncover trends and insights.',
      icon: TrendingUp,
      color: 'health-green',
      examples: [
        'Seasonal health trend analysis',
        'Identifying vulnerable populations',
        'Detecting emerging health issues',
      ],
    },
    {
      title: 'Smart Resource Allocation',
      description: 'AI optimizes distribution of health resources and interventions to maximize impact.',
      icon: Users,
      color: 'delhi-purple',
      examples: [
        'Directing counseling services to high-need areas',
        'Prioritizing health interventions',
        'Optimizing program scheduling',
      ],
    },
    {
      title: 'Verified Information Retrieval',
      description: 'AI searches and retrieves verified health information from trusted government and medical sources.',
      icon: Shield,
      color: 'delhi-blue',
      examples: [
        'Answering health questions with verified data',
        'Providing evidence-based health guidance',
        'Citing official government health guidelines',
      ],
    },
  ];

  const safeguards = [
    {
      title: 'Human Oversight',
      description: 'All AI recommendations are reviewed by medical experts and government officials before deployment.',
    },
    {
      title: 'Data Privacy',
      description: 'Personal health data is encrypted and never used for commercial purposes or shared without consent.',
    },
    {
      title: 'Transparency',
      description: 'Users can understand how AI made specific recommendations and access the data sources used.',
    },
    {
      title: 'Bias Prevention',
      description: 'AI systems are regularly tested to ensure fair treatment across all demographic groups.',
    },
    {
      title: 'Accountability',
      description: 'Clear processes exist to address concerns or errors in AI recommendations.',
    },
    {
      title: 'Regular Audits',
      description: 'Independent audits ensure AI systems meet ethical standards and government regulations.',
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-paragraph font-medium text-secondary">AI Technology Explained</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              How AI Is Used in Delhi Care Grid
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto">
              Understanding the artificial intelligence technology that powers preventive health and environmental monitoring
            </p>
          </motion.div>

          <Card className="bg-gradient-to-r from-secondary/10 to-health-green/10 border-secondary/30 p-8 max-w-3xl mx-auto">
            <p className="text-base font-paragraph text-foreground/80 leading-relaxed">
              <strong className="text-secondary">AI (Artificial Intelligence)</strong> is technology that learns from data to make predictions 
              and recommendations. In Delhi Care Grid, AI helps us analyze health and environmental information to provide better, 
              faster, and more personalized health guidance to every resident.
            </p>
          </Card>
        </div>
      </section>

      {/* AI Applications */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            AI Applications in Delhi Care Grid
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiApplications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 h-full hover:border-secondary/50 transition-all">
                  <div className={`w-16 h-16 bg-${app.color}/20 rounded-xl flex items-center justify-center mb-6`}>
                    <app.icon className={`w-8 h-8 text-${app.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {app.title}
                  </h3>
                  
                  <p className="text-sm font-paragraph text-foreground/70 mb-4 leading-relaxed">
                    {app.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-paragraph font-semibold text-foreground/60">Examples:</p>
                    <ul className="space-y-1">
                      {app.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs font-paragraph text-foreground/70">
                          <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguards Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            AI Safety & Ethical Safeguards
          </h2>

          <p className="text-lg font-paragraph text-foreground/70 max-w-3xl mx-auto text-center mb-12">
            We use AI responsibly with multiple safeguards to ensure it benefits everyone fairly and safely
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safeguards.map((safeguard, index) => (
              <motion.div
                key={safeguard.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 h-full hover:border-health-green/50 transition-all">
                  <div className="w-12 h-12 bg-health-green/20 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-health-green" />
                  </div>
                  
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {safeguard.title}
                  </h3>
                  
                  <p className="text-sm font-paragraph text-foreground/70 leading-relaxed">
                    {safeguard.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            How AI Works in Simple Terms
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: 1,
                title: 'Data Collection',
                description: 'AI collects information from official government sources, health records, environmental sensors, and user inputs.',
              },
              {
                step: 2,
                title: 'Pattern Recognition',
                description: 'AI analyzes this data to find patterns - like "high pollution days often lead to respiratory issues."',
              },
              {
                step: 3,
                title: 'Learning',
                description: 'AI learns from these patterns to understand relationships between different factors.',
              },
              {
                step: 4,
                title: 'Prediction & Recommendation',
                description: 'Based on what it learned, AI predicts future health risks and recommends preventive actions.',
              },
              {
                step: 5,
                title: 'Human Review',
                description: 'Medical experts review AI recommendations to ensure accuracy and safety before users see them.',
              },
              {
                step: 6,
                title: 'Continuous Improvement',
                description: 'AI learns from feedback and outcomes to become more accurate over time.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 md:p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-heading font-bold text-secondary">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base font-paragraph text-foreground/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
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
