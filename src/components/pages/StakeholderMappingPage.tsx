import { motion } from 'framer-motion';
import { Building2, Users, Heart, Shield, TrendingUp, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

export default function StakeholderMappingPage() {
  const stakeholders = [
    {
      category: 'Government Agencies',
      icon: Building2,
      color: 'delhi-blue',
      stakeholders: [
        {
          name: 'Ministry of Health & Family Welfare',
          role: 'Policy guidance, health standards, national health programs',
          responsibilities: [
            'Set health guidelines and standards',
            'Provide health data and surveillance',
            'Ensure compliance with national health policies',
            'Support scaling to other states',
          ],
        },
        {
          name: 'Ministry of Education',
          role: 'School integration, student wellness programs, curriculum alignment',
          responsibilities: [
            'Facilitate school participation',
            'Integrate with school health programs',
            'Support student wellness initiatives',
            'Provide educational data',
          ],
        },
        {
          name: 'Delhi Health Department',
          role: 'Local health service coordination, hospital integration',
          responsibilities: [
            'Coordinate with hospitals and clinics',
            'Provide local health data',
            'Support health interventions',
            'Monitor health outcomes',
          ],
        },
        {
          name: 'Delhi Pollution Control Committee',
          role: 'Environmental data, air quality monitoring',
          responsibilities: [
            'Provide real-time air quality data',
            'Support environmental monitoring',
            'Coordinate pollution control measures',
            'Share environmental research',
          ],
        },
      ],
    },
    {
      category: 'Educational Institutions',
      icon: Users,
      color: 'secondary',
      stakeholders: [
        {
          name: 'School Principals & Administrators',
          role: 'Platform coordination, student enrollment, program implementation',
          responsibilities: [
            'Facilitate student registration',
            'Coordinate health programs',
            'Provide school data',
            'Support awareness campaigns',
          ],
        },
        {
          name: 'Teachers & Counselors',
          role: 'Student support, health monitoring, intervention delivery',
          responsibilities: [
            'Monitor student health',
            'Deliver wellness programs',
            'Identify at-risk students',
            'Provide feedback on platform',
          ],
        },
        {
          name: 'School Health Committees',
          role: 'Health program oversight, community engagement',
          responsibilities: [
            'Oversee health initiatives',
            'Engage parents and community',
            'Monitor program effectiveness',
            'Report health issues',
          ],
        },
      ],
    },
    {
      category: 'Healthcare Providers',
      icon: Heart,
      color: 'health-green',
      stakeholders: [
        {
          name: 'Government Hospitals & Clinics',
          role: 'Health service delivery, data integration, patient referral',
          responsibilities: [
            'Provide health services',
            'Share health data',
            'Receive patient referrals',
            'Support health interventions',
          ],
        },
        {
          name: 'Mental Health Professionals',
          role: 'Counseling services, mental health support, training',
          responsibilities: [
            'Provide counseling services',
            'Train peer counselors',
            'Support crisis intervention',
            'Develop wellness programs',
          ],
        },
        {
          name: 'Medical Experts & Researchers',
          role: 'Content review, guideline development, research support',
          responsibilities: [
            'Review health information',
            'Develop clinical guidelines',
            'Conduct research',
            'Validate AI recommendations',
          ],
        },
      ],
    },
    {
      category: 'Community & Civil Society',
      icon: Users,
      color: 'delhi-purple',
      stakeholders: [
        {
          name: 'NGOs & Community Organizations',
          role: 'Community engagement, awareness campaigns, support services',
          responsibilities: [
            'Conduct awareness campaigns',
            'Provide community support',
            'Engage local communities',
            'Support vulnerable populations',
          ],
        },
        {
          name: 'Parents & Guardians',
          role: 'Child health monitoring, program participation, feedback',
          responsibilities: [
            'Monitor child health',
            'Participate in programs',
            'Provide feedback',
            'Support wellness initiatives',
          ],
        },
        {
          name: 'Students',
          role: 'Platform users, health tracking, feedback providers',
          responsibilities: [
            'Use platform features',
            'Track health data',
            'Provide feedback',
            'Participate in programs',
          ],
        },
      ],
    },
    {
      category: 'Technology & Support',
      icon: Zap,
      color: 'delhi-orange',
      stakeholders: [
        {
          name: 'Government IT Department',
          role: 'Infrastructure, security, technical support',
          responsibilities: [
            'Manage platform infrastructure',
            'Ensure data security',
            'Provide technical support',
            'Maintain system uptime',
          ],
        },
        {
          name: 'Technology Partners',
          role: 'Platform development, AI implementation, maintenance',
          responsibilities: [
            'Develop and maintain platform',
            'Implement AI systems',
            'Provide technical expertise',
            'Support scaling',
          ],
        },
      ],
    },
  ];

  const engagementStrategy = [
    {
      phase: 'Awareness & Buy-in',
      activities: [
        'Present platform vision and benefits',
        'Address concerns and questions',
        'Demonstrate pilot results',
        'Secure formal commitment',
      ],
    },
    {
      phase: 'Capacity Building',
      activities: [
        'Conduct training programs',
        'Develop implementation guides',
        'Establish support systems',
        'Build local expertise',
      ],
    },
    {
      phase: 'Implementation',
      activities: [
        'Coordinate rollout activities',
        'Monitor progress',
        'Provide ongoing support',
        'Collect feedback',
      ],
    },
    {
      phase: 'Sustainability',
      activities: [
        'Establish governance structures',
        'Build local capacity',
        'Ensure long-term funding',
        'Plan for continuous improvement',
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-delhi-blue/10 border border-delhi-blue/20 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-delhi-blue" />
              <span className="text-sm font-paragraph font-medium text-delhi-blue">Stakeholder Engagement</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Government Stakeholder Mapping
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto">
              Understanding the roles and responsibilities of all stakeholders in Delhi Care Grid
            </p>
          </motion.div>

          <Card className="bg-gradient-to-r from-delhi-blue/10 to-secondary/10 border-delhi-blue/30 p-8 max-w-3xl mx-auto">
            <p className="text-base font-paragraph text-foreground/80 leading-relaxed">
              Delhi Care Grid's success depends on effective collaboration between government agencies, educational institutions, 
              healthcare providers, and community organizations. Each stakeholder plays a critical role in the platform's implementation and sustainability.
            </p>
          </Card>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          {stakeholders.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 bg-${category.color}/20 rounded-xl flex items-center justify-center`}>
                  <category.icon className={`w-8 h-8 text-${category.color}`} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  {category.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.stakeholders.map((stakeholder, stakeholderIndex) => (
                  <motion.div
                    key={stakeholder.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: stakeholderIndex * 0.1 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 h-full hover:border-secondary/50 transition-all">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                        {stakeholder.name}
                      </h3>
                      
                      <p className="text-sm font-paragraph text-foreground/70 mb-4 leading-relaxed">
                        <strong className={`text-${category.color}`}>Role:</strong> {stakeholder.role}
                      </p>
                      
                      <div>
                        <p className="text-sm font-paragraph font-semibold text-foreground/80 mb-3">Key Responsibilities:</p>
                        <ul className="space-y-2">
                          {stakeholder.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm font-paragraph text-foreground/70">
                              <span className={`text-${category.color} mt-1`}>•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engagement Strategy */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Stakeholder Engagement Strategy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementStrategy.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 h-full hover:border-secondary/50 transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-heading font-bold text-secondary">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground">
                      {item.phase}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {item.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm font-paragraph text-foreground/70">
                        <span className="text-secondary mt-1">✓</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Framework */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              Collaboration Framework
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Governance Structure',
                  description: 'Clear decision-making processes with representation from all stakeholders',
                  items: ['Steering Committee', 'Technical Committee', 'Implementation Task Force', 'Monitoring & Evaluation Team'],
                },
                {
                  title: 'Communication Channels',
                  description: 'Regular communication to ensure alignment and address concerns',
                  items: ['Monthly stakeholder meetings', 'Quarterly progress reviews', 'Annual strategic planning', 'Real-time issue resolution'],
                },
                {
                  title: 'Resource Sharing',
                  description: 'Efficient utilization of resources across stakeholders',
                  items: ['Shared infrastructure', 'Joint training programs', 'Coordinated data sharing', 'Collaborative problem-solving'],
                },
                {
                  title: 'Performance Monitoring',
                  description: 'Regular tracking of progress and outcomes',
                  items: ['KPI tracking', 'Impact assessment', 'User feedback collection', 'Continuous improvement'],
                },
              ].map((item, index) => (
                <div key={index} className="pb-6 border-b border-white/10 last:border-0 last:pb-0">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base font-paragraph text-foreground/70 mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.items.map((subitem) => (
                      <span
                        key={subitem}
                        className="text-xs font-paragraph px-3 py-1 bg-secondary/20 text-secondary rounded-full border border-secondary/30"
                      >
                        {subitem}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
