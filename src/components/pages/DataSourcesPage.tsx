import { motion } from 'framer-motion';
import { Database, Shield, CheckCircle, ExternalLink, Building2, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DataSourcesPage() {
  const dataSources = [
    {
      category: 'Environmental Data',
      icon: Database,
      color: 'delhi-blue',
      sources: [
        {
          name: 'Central Pollution Control Board (CPCB)',
          description: 'Real-time air quality data from monitoring stations across Delhi',
          url: 'https://www.cpcb.gov.in',
          dataPoints: ['AQI', 'PM2.5', 'PM10', 'NO₂', 'SO₂', 'CO', 'O₃'],
        },
        {
          name: 'India Meteorological Department (IMD)',
          description: 'Weather data, seasonal patterns, and climate information',
          url: 'https://www.imd.gov.in',
          dataPoints: ['Temperature', 'Humidity', 'Wind Speed', 'Rainfall', 'Seasonal Data'],
        },
        {
          name: 'Delhi Pollution Control Committee (DPCC)',
          description: 'Local air quality monitoring and environmental regulations',
          url: 'https://dpcc.delhigovt.nic.in',
          dataPoints: ['Regional AQI', 'Pollution Sources', 'Environmental Alerts'],
        },
      ],
    },
    {
      category: 'Health Data',
      icon: Shield,
      color: 'health-green',
      sources: [
        {
          name: 'Ministry of Health & Family Welfare',
          description: 'National health guidelines, disease surveillance, and health policies',
          url: 'https://www.mohfw.gov.in',
          dataPoints: ['Health Guidelines', 'Disease Data', 'Vaccination Info', 'Health Alerts'],
        },
        {
          name: 'National Centre for Disease Control (NCDC)',
          description: 'Disease surveillance, outbreak information, and health alerts',
          url: 'https://ncdc.gov.in',
          dataPoints: ['Disease Surveillance', 'Outbreak Data', 'Health Alerts', 'Prevention Guidelines'],
        },
        {
          name: 'Delhi Health Department',
          description: 'Local health services, hospital data, and health programs',
          url: 'https://health.delhi.gov.in',
          dataPoints: ['Hospital Info', 'Health Services', 'Local Health Data', 'Programs'],
        },
        {
          name: 'Indian Council of Medical Research (ICMR)',
          description: 'Medical research, clinical guidelines, and health standards',
          url: 'https://www.icmr.gov.in',
          dataPoints: ['Research Data', 'Clinical Guidelines', 'Health Standards'],
        },
      ],
    },
    {
      category: 'Mental Health & Wellness',
      icon: Users,
      color: 'delhi-purple',
      sources: [
        {
          name: 'National Institute of Mental Health & Neurosciences (NIMHANS)',
          description: 'Mental health guidelines, counseling standards, and wellness programs',
          url: 'https://www.nimhans.ac.in',
          dataPoints: ['Mental Health Guidelines', 'Counseling Standards', 'Wellness Programs'],
        },
        {
          name: 'Ministry of Education - Mental Health Support',
          description: 'School mental health programs and student wellness initiatives',
          url: 'https://www.education.gov.in',
          dataPoints: ['School Programs', 'Student Wellness', 'Counseling Services'],
        },
        {
          name: 'AASRA & Other NGOs',
          description: 'Mental health support services and crisis helplines',
          url: 'https://www.aasra.info',
          dataPoints: ['Helpline Data', 'Support Services', 'Crisis Intervention'],
        },
      ],
    },
    {
      category: 'Government & Policy',
      icon: Building2,
      color: 'delhi-orange',
      sources: [
        {
          name: 'Government of NCT of Delhi',
          description: 'Official government policies, programs, and initiatives',
          url: 'https://delhi.gov.in',
          dataPoints: ['Policies', 'Programs', 'Government Initiatives'],
        },
        {
          name: 'Ministry of Environment, Forest & Climate Change',
          description: 'Environmental policies, climate action, and sustainability',
          url: 'https://moef.gov.in',
          dataPoints: ['Environmental Policies', 'Climate Data', 'Sustainability Info'],
        },
        {
          name: 'Ayushman Bharat Programme',
          description: 'National health protection and wellness programs',
          url: 'https://ayushmanbharat.gov.in',
          dataPoints: ['Health Programs', 'Wellness Initiatives', 'Coverage Data'],
        },
      ],
    },
  ];

  const dataQuality = [
    {
      title: 'Verification Process',
      description: 'All data sources are verified for authenticity and reliability before integration.',
      icon: CheckCircle,
    },
    {
      title: 'Regular Updates',
      description: 'Data is continuously updated from official sources to ensure current information.',
      icon: Database,
    },
    {
      title: 'Expert Review',
      description: 'Medical and environmental experts review data for accuracy and relevance.',
      icon: Shield,
    },
    {
      title: 'Transparent Attribution',
      description: 'All information includes clear citations of original sources.',
      icon: ExternalLink,
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
              <Database className="w-4 h-4 text-delhi-blue" />
              <span className="text-sm font-paragraph font-medium text-delhi-blue">Data Transparency</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Data Sources & Transparency
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto">
              Delhi Care Grid uses verified data from official government and health organizations
            </p>
          </motion.div>

          <Card className="bg-gradient-to-r from-delhi-blue/10 to-secondary/10 border-delhi-blue/30 p-8 max-w-3xl mx-auto">
            <p className="text-base font-paragraph text-foreground/80 leading-relaxed">
              <strong className="text-delhi-blue">Transparency is fundamental to our platform.</strong> We source all health and environmental 
              information from official government agencies and verified organizations. Every piece of information can be traced back to its original source.
            </p>
          </Card>
        </div>
      </section>

      {/* Data Sources */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          {dataSources.map((category, categoryIndex) => (
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.sources.map((source, sourceIndex) => (
                  <motion.div
                    key={source.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: sourceIndex * 0.1 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 h-full hover:border-secondary/50 transition-all flex flex-col">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                        {source.name}
                      </h3>
                      
                      <p className="text-sm font-paragraph text-foreground/70 mb-4 leading-relaxed flex-1">
                        {source.description}
                      </p>
                      
                      <div className="mb-4">
                        <p className="text-xs font-paragraph font-semibold text-foreground/60 mb-2">Data Points:</p>
                        <div className="flex flex-wrap gap-2">
                          {source.dataPoints.map((point) => (
                            <span
                              key={point}
                              className="text-xs font-paragraph px-2 py-1 bg-white/5 border border-white/10 rounded-full text-foreground/70"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Source
                        </Button>
                      </a>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Data Quality Assurance */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Data Quality & Assurance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataQuality.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 text-center h-full hover:border-health-green/50 transition-all">
                  <div className="w-12 h-12 bg-health-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-health-green" />
                  </div>
                  
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm font-paragraph text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Usage Policy */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              How We Use Data
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'For Health Insights',
                  description: 'We analyze health data to identify trends, predict risks, and provide personalized recommendations.',
                },
                {
                  title: 'For Environmental Monitoring',
                  description: 'Environmental data helps us track air quality, weather patterns, and their impact on health.',
                },
                {
                  title: 'For Program Improvement',
                  description: 'We use data to evaluate program effectiveness and improve health interventions.',
                },
                {
                  title: 'For Policy Support',
                  description: 'Aggregated, anonymized data supports government decision-making and policy development.',
                },
                {
                  title: 'Never for Commercial Use',
                  description: 'We never sell, share, or use health data for commercial purposes without explicit consent.',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 pb-6 border-b border-white/10 last:border-0 last:pb-0">
                  <CheckCircle className="w-6 h-6 text-health-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-base font-paragraph text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
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
