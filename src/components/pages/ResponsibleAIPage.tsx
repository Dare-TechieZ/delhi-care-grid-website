import { motion } from 'framer-motion';
import { Shield, Users, Zap, Eye, Lock, Scale, CheckCircle, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

export default function ResponsibleAIPage() {
  const principles = [
    {
      title: 'Fairness & Equity',
      description: 'AI systems are designed to treat all users fairly regardless of age, gender, religion, caste, or socioeconomic status.',
      icon: Scale,
      color: 'health-green',
      commitments: [
        'Regular bias audits across demographic groups',
        'Equal access to health services for all',
        'No discrimination in health recommendations',
        'Special support for vulnerable populations',
      ],
    },
    {
      title: 'Transparency & Explainability',
      description: 'Users can understand how AI makes decisions and access the data sources used.',
      icon: Eye,
      color: 'delhi-blue',
      commitments: [
        'Clear explanation of AI recommendations',
        'Visible data sources and citations',
        'Understandable language for all users',
        'Access to decision-making processes',
      ],
    },
    {
      title: 'Privacy & Data Protection',
      description: 'Personal health data is protected with strict security measures and never misused.',
      icon: Lock,
      color: 'secondary',
      commitments: [
        'Bank-grade encryption for all data',
        'No sharing without explicit consent',
        'Compliance with data protection laws',
        'Regular security audits',
      ],
    },
    {
      title: 'Accountability & Responsibility',
      description: 'Clear processes exist to address concerns, errors, or misuse of AI systems.',
      icon: Shield,
      color: 'delhi-purple',
      commitments: [
        'Clear complaint and feedback mechanisms',
        'Rapid response to errors or concerns',
        'Regular audits by independent bodies',
        'Transparent reporting of issues',
      ],
    },
    {
      title: 'Human Oversight',
      description: 'Medical experts and government officials review all AI recommendations before deployment.',
      icon: Users,
      color: 'delhi-orange',
      commitments: [
        'Expert review of all health recommendations',
        'Human decision-making for critical issues',
        'Regular training of oversight teams',
        'Clear escalation procedures',
      ],
    },
    {
      title: 'Continuous Improvement',
      description: 'AI systems are regularly evaluated and improved based on feedback and outcomes.',
      icon: Zap,
      color: 'health-green',
      commitments: [
        'Regular performance evaluation',
        'Incorporation of user feedback',
        'Learning from errors and outcomes',
        'Adaptation to new information',
      ],
    },
  ];

  const ethicalGuidelines = [
    {
      category: 'Health Recommendations',
      guidelines: [
        'AI provides guidance only, not medical diagnosis or treatment',
        'Users are always encouraged to consult healthcare professionals',
        'Recommendations are based on verified, evidence-based information',
        'Emergency situations are clearly flagged with helpline numbers',
      ],
    },
    {
      category: 'Data Usage',
      guidelines: [
        'Personal data is used only for stated health purposes',
        'Aggregated, anonymized data may be used for research and policy',
        'Users can request data deletion at any time',
        'Data is never sold or shared for commercial purposes',
      ],
    },
    {
      category: 'Bias Prevention',
      guidelines: [
        'AI systems are tested for bias across all demographic groups',
        'Health recommendations are culturally sensitive',
        'Language and accessibility are designed for all users',
        'Special attention to vulnerable and marginalized groups',
      ],
    },
    {
      category: 'Transparency',
      guidelines: [
        'All health information includes source citations',
        'AI limitations and uncertainties are clearly stated',
        'Users understand how their data is being used',
        'Regular public reporting on AI performance and issues',
      ],
    },
    {
      category: 'User Rights',
      guidelines: [
        'Right to understand AI decisions affecting them',
        'Right to request human review of AI recommendations',
        'Right to access their personal health data',
        'Right to lodge complaints and seek remedies',
      ],
    },
    {
      category: 'Safety & Security',
      guidelines: [
        'All systems undergo security testing before deployment',
        'Continuous monitoring for security threats',
        'Rapid response to security incidents',
        'Regular backup and disaster recovery procedures',
      ],
    },
  ];

  const oversight = [
    {
      title: 'Internal Review Board',
      description: 'Medical experts and data scientists review AI systems regularly',
      members: 'Doctors, health experts, data scientists, government officials',
    },
    {
      title: 'External Audits',
      description: 'Independent organizations audit AI systems for compliance and ethics',
      members: 'Third-party auditors, civil society organizations, academic institutions',
    },
    {
      title: 'User Feedback',
      description: 'Direct feedback from users helps identify and fix issues',
      members: 'Students, parents, teachers, administrators, general public',
    },
    {
      title: 'Government Oversight',
      description: 'Government agencies ensure compliance with regulations and policies',
      members: 'Ministry of Health, Ministry of Education, Data Protection Authority',
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
              <Shield className="w-4 h-4 text-health-green" />
              <span className="text-sm font-paragraph font-medium text-health-green">Ethical AI Commitment</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Responsible & Ethical AI
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto">
              Our commitment to using AI responsibly, fairly, and transparently for the benefit of all Delhi residents
            </p>
          </motion.div>

          <Card className="bg-gradient-to-r from-health-green/10 to-secondary/10 border-health-green/30 p-8 max-w-3xl mx-auto">
            <p className="text-base font-paragraph text-foreground/80 leading-relaxed">
              <strong className="text-health-green">Responsible AI</strong> means using artificial intelligence in ways that are fair, 
              transparent, safe, and beneficial to society. Delhi Care Grid is committed to these principles in every aspect of our platform.
            </p>
          </Card>
        </div>
      </section>

      {/* Core Principles */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Core Ethical Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 h-full hover:border-secondary/50 transition-all">
                  <div className={`w-16 h-16 bg-${principle.color}/20 rounded-xl flex items-center justify-center mb-6`}>
                    <principle.icon className={`w-8 h-8 text-${principle.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  
                  <p className="text-sm font-paragraph text-foreground/70 mb-4 leading-relaxed">
                    {principle.description}
                  </p>
                  
                  <div className="space-y-2">
                    {principle.commitments.map((commitment, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs font-paragraph text-foreground/70">
                        <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{commitment}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Guidelines */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Ethical Guidelines by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ethicalGuidelines.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 h-full hover:border-secondary/50 transition-all">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                    {item.category}
                  </h3>
                  
                  <ul className="space-y-3">
                    {item.guidelines.map((guideline, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm font-paragraph text-foreground/70">
                        <span className="text-secondary mt-1">•</span>
                        <span>{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Oversight & Accountability */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Oversight & Accountability
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {oversight.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 h-full hover:border-secondary/50 transition-all">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm font-paragraph text-foreground/70 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-xs font-paragraph text-foreground/60">
                      <strong>Members:</strong> {item.members}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Complaint & Feedback */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 md:p-12">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center">
              <AlertCircle className="w-6 h-6 text-delhi-orange mr-3" />
              Complaint & Feedback Mechanism
            </h3>
            
            <p className="text-base font-paragraph text-foreground/80 mb-6 leading-relaxed">
              If you have concerns about how AI is being used, believe you've been treated unfairly, or want to report an issue:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-heading font-bold text-secondary">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-1">Email Us</h4>
                  <p className="text-base font-paragraph text-foreground/70">
                    Send detailed feedback to: <strong>ethics@delhicaregrid.gov.in</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-heading font-bold text-secondary">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-1">Call Our Helpline</h4>
                  <p className="text-base font-paragraph text-foreground/70">
                    Speak with our team: <strong>1800-XXX-XXXX</strong> (Available 24/7)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-heading font-bold text-secondary">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-1">File a Formal Complaint</h4>
                  <p className="text-base font-paragraph text-foreground/70">
                    Submit through our online portal or visit our office for formal grievance redressal
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
