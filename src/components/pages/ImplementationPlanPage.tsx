import { motion } from 'framer-motion';
import { Zap, Users, Building2, TrendingUp, CheckCircle, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

export default function ImplementationPlanPage() {
  const phases = [
    {
      phase: 'Phase 1: Foundation & Pilot',
      duration: 'Months 1-6',
      icon: Zap,
      color: 'delhi-blue',
      objectives: [
        'Establish core platform infrastructure',
        'Integrate government data sources',
        'Train initial team of health professionals',
        'Launch pilot in 100 schools',
        'Develop mobile and web applications',
      ],
      deliverables: [
        'Fully functional platform with core features',
        '100 schools with 50,000 students registered',
        '24/7 helpline operational',
        'Initial health data integration',
        'User feedback collection system',
      ],
      stakeholders: ['Government IT Team', 'Health Experts', 'School Administrators', 'Tech Partners'],
    },
    {
      phase: 'Phase 2: Expansion & Optimization',
      duration: 'Months 7-18',
      icon: Users,
      color: 'secondary',
      objectives: [
        'Expand to 1,000 schools',
        'Enhance AI capabilities',
        'Establish mental health support network',
        'Launch awareness campaigns',
        'Optimize based on pilot feedback',
      ],
      deliverables: [
        '1,000 schools connected',
        '500,000 students registered',
        '100 trained mental health counselors',
        'Awareness campaign in 50 districts',
        'Enhanced mobile app with new features',
      ],
      stakeholders: ['School Networks', 'Mental Health Organizations', 'Media Partners', 'NGOs'],
    },
    {
      phase: 'Phase 3: Full Rollout & Sustainability',
      duration: 'Months 19-36',
      icon: Building2,
      color: 'health-green',
      objectives: [
        'Achieve city-wide coverage',
        'Establish sustainable funding model',
        'Build local capacity',
        'Integrate with government health systems',
        'Plan for long-term maintenance',
      ],
      deliverables: [
        'All Delhi schools connected',
        '8 million users on platform',
        'Integrated with government health systems',
        'Sustainable funding mechanisms',
        'Local team trained for operations',
      ],
      stakeholders: ['All Government Agencies', 'Healthcare Providers', 'Educational Institutions', 'Community Leaders'],
    },
  ];

  const rolloutStrategy = [
    {
      title: 'Geographic Rollout',
      description: 'Phased expansion from central Delhi to peripheral areas',
      steps: [
        'Phase 1: Central Delhi (100 schools)',
        'Phase 2: East & West Delhi (500 schools)',
        'Phase 3: North & South Delhi (400 schools)',
        'Phase 4: Peripheral areas (500 schools)',
      ],
    },
    {
      title: 'User Onboarding',
      description: 'Structured approach to bring users onto the platform',
      steps: [
        'School administrators trained first',
        'Teachers and counselors onboarded',
        'Students registered in batches',
        'Parents added to platform',
        'Community members invited',
      ],
    },
    {
      title: 'Data Integration',
      description: 'Systematic integration of various data sources',
      steps: [
        'Environmental data sources connected',
        'Health information databases integrated',
        'Government health systems linked',
        'Educational data synchronized',
        'Real-time data feeds established',
      ],
    },
    {
      title: 'Capacity Building',
      description: 'Training and development of personnel',
      steps: [
        'Government IT staff trained',
        'Health professionals certified',
        'School coordinators trained',
        'Community health workers prepared',
        'Ongoing professional development',
      ],
    },
  ];

  const riskManagement = [
    {
      risk: 'Low user adoption',
      mitigation: 'Comprehensive awareness campaigns, incentive programs, school integration',
    },
    {
      risk: 'Data quality issues',
      mitigation: 'Regular audits, validation processes, expert review, continuous monitoring',
    },
    {
      risk: 'Technical challenges',
      mitigation: 'Robust infrastructure, backup systems, 24/7 technical support, regular testing',
    },
    {
      risk: 'Privacy concerns',
      mitigation: 'Strong data protection, transparency, user control, regular security audits',
    },
    {
      risk: 'Funding constraints',
      mitigation: 'Government commitment, phased approach, cost optimization, alternative funding',
    },
    {
      risk: 'Resistance to change',
      mitigation: 'Stakeholder engagement, training, demonstration of benefits, gradual implementation',
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
              <MapPin className="w-4 h-4 text-delhi-blue" />
              <span className="text-sm font-paragraph font-medium text-delhi-blue">Rollout Strategy</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Pilot & Implementation Plan
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto">
              Detailed roadmap for rolling out Delhi Care Grid across the city in phases
            </p>
          </motion.div>

          <Card className="bg-gradient-to-r from-delhi-blue/10 to-secondary/10 border-delhi-blue/30 p-8 max-w-3xl mx-auto">
            <p className="text-base font-paragraph text-foreground/80 leading-relaxed">
              Delhi Care Grid will be rolled out in three phases over 3 years, starting with a pilot in selected schools 
              and expanding to achieve city-wide coverage. Each phase builds on lessons learned from the previous one.
            </p>
          </Card>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            3-Phase Implementation Plan
          </h2>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 md:p-12 hover:border-secondary/50 transition-all">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className={`w-20 h-20 bg-${phase.color}/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <phase.icon className={`w-10 h-10 text-${phase.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                        {phase.phase}
                      </h3>
                      <p className="text-base font-paragraph text-foreground/70">
                        {phase.duration}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Objectives */}
                    <div>
                      <h4 className="text-lg font-heading font-bold text-foreground mb-4">Objectives</h4>
                      <ul className="space-y-2">
                        {phase.objectives.map((obj, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm font-paragraph text-foreground/70">
                            <span className={`text-${phase.color} mt-1`}>•</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="text-lg font-heading font-bold text-foreground mb-4">Deliverables</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((del, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm font-paragraph text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-health-green flex-shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stakeholders */}
                    <div>
                      <h4 className="text-lg font-heading font-bold text-foreground mb-4">Key Stakeholders</h4>
                      <ul className="space-y-2">
                        {phase.stakeholders.map((stake, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm font-paragraph text-foreground/70">
                            <Users className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span>{stake}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rollout Strategy */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Rollout Strategy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rolloutStrategy.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 h-full hover:border-secondary/50 transition-all">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {strategy.title}
                  </h3>
                  
                  <p className="text-sm font-paragraph text-foreground/70 mb-4 leading-relaxed">
                    {strategy.description}
                  </p>
                  
                  <ol className="space-y-2">
                    {strategy.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm font-paragraph text-foreground/70">
                        <span className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-heading font-bold text-secondary">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Risk Management & Mitigation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {riskManagement.map((item, index) => (
              <motion.div
                key={item.risk}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 h-full hover:border-secondary/50 transition-all">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-3 flex items-center">
                    <span className="w-2 h-2 bg-delhi-orange rounded-full mr-3"></span>
                    {item.risk}
                  </h3>
                  
                  <p className="text-sm font-paragraph text-foreground/70 leading-relaxed">
                    <strong className="text-secondary">Mitigation:</strong> {item.mitigation}
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
