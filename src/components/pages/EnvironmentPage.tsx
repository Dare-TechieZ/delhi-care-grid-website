import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wind, Droplets, Thermometer, Eye, AlertCircle, TrendingDown, TrendingUp, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function EnvironmentPage() {
  const [selectedZone, setSelectedZone] = useState('Central Delhi');

  const airQualityData = {
    aqi: 187,
    status: 'Moderate',
    pm25: 89,
    pm10: 156,
    no2: 45,
    so2: 12,
    co: 1.2,
    o3: 34,
  };

  const zones = [
    { name: 'Central Delhi', aqi: 187, status: 'Moderate', color: 'delhi-orange' },
    { name: 'North Delhi', aqi: 203, status: 'Poor', color: 'destructive' },
    { name: 'South Delhi', aqi: 156, status: 'Moderate', color: 'delhi-orange' },
    { name: 'East Delhi', aqi: 198, status: 'Moderate', color: 'delhi-orange' },
    { name: 'West Delhi', aqi: 172, status: 'Moderate', color: 'delhi-orange' },
    { name: 'New Delhi', aqi: 145, status: 'Moderate', color: 'delhi-orange' },
  ];

  const healthRisks = [
    {
      title: 'Respiratory Health',
      risk: 'Medium',
      description: 'People with respiratory conditions should limit outdoor activities',
      icon: Wind,
      color: 'delhi-orange',
    },
    {
      title: 'Cardiovascular Impact',
      risk: 'Low-Medium',
      description: 'Heart patients should monitor symptoms and avoid strenuous outdoor exercise',
      icon: AlertCircle,
      color: 'secondary',
    },
    {
      title: 'Children & Elderly',
      risk: 'Medium',
      description: 'Vulnerable groups should reduce prolonged outdoor exposure',
      icon: Eye,
      color: 'delhi-orange',
    },
  ];

  const recommendations = [
    'Use N95 masks when outdoors, especially during peak pollution hours',
    'Keep windows closed during high pollution periods',
    'Use air purifiers indoors if available',
    'Stay hydrated and consume antioxidant-rich foods',
    'Limit outdoor physical activities between 6 AM - 10 AM',
    'Monitor AQI regularly through official channels',
  ];

  const pollutants = [
    { name: 'PM2.5', value: airQualityData.pm25, max: 60, unit: 'µg/m³', status: 'Moderate' },
    { name: 'PM10', value: airQualityData.pm10, max: 100, unit: 'µg/m³', status: 'Moderate' },
    { name: 'NO₂', value: airQualityData.no2, max: 80, unit: 'µg/m³', status: 'Good' },
    { name: 'SO₂', value: airQualityData.so2, max: 80, unit: 'µg/m³', status: 'Good' },
    { name: 'CO', value: airQualityData.co, max: 2, unit: 'mg/m³', status: 'Good' },
    { name: 'O₃', value: airQualityData.o3, max: 100, unit: 'µg/m³', status: 'Good' },
  ];

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return 'health-green';
    if (aqi <= 100) return 'secondary';
    if (aqi <= 200) return 'delhi-orange';
    if (aqi <= 300) return 'destructive';
    return 'destructive';
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-delhi-orange/10 border border-delhi-orange/20 rounded-full mb-6">
              <Wind className="w-4 h-4 text-delhi-orange" />
              <span className="text-sm font-paragraph font-medium text-delhi-orange">Real-Time Monitoring</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Environment & Air Health
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto">
              Real-time air quality monitoring and environmental health risk assessment for Delhi
            </p>
          </motion.div>

          {/* Current AQI Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 md:p-12 text-center">
              <div className="mb-6">
                <MapPin className="w-6 h-6 text-secondary mx-auto mb-2" />
                <h2 className="text-xl font-heading font-semibold text-foreground">{selectedZone}</h2>
                <p className="text-sm font-paragraph text-foreground/60">Last updated: {new Date().toLocaleTimeString('en-IN')}</p>
              </div>
              
              <div className={`text-8xl md:text-9xl font-heading font-bold text-${getAQIColor(airQualityData.aqi)} mb-4`}>
                {airQualityData.aqi}
              </div>
              
              <div className={`inline-block px-6 py-3 bg-${getAQIColor(airQualityData.aqi)}/20 border border-${getAQIColor(airQualityData.aqi)}/30 rounded-full mb-6`}>
                <span className={`text-2xl font-heading font-bold text-${getAQIColor(airQualityData.aqi)}`}>
                  {airQualityData.status}
                </span>
              </div>
              
              <p className="text-base font-paragraph text-foreground/70 max-w-2xl mx-auto">
                Air Quality Index (AQI) indicates the level of air pollution. Current conditions suggest limiting prolonged outdoor activities for sensitive groups.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Zone-wise AQI */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Zone-wise Air Quality
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone, index) => (
              <motion.div
                key={zone.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedZone(zone.name)}
                className={`cursor-pointer bg-white/5 backdrop-blur-sm border rounded-xl p-6 transition-all ${
                  selectedZone === zone.name ? 'border-secondary bg-secondary/5' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-heading font-bold text-foreground">{zone.name}</h3>
                  <MapPin className={`w-5 h-5 ${selectedZone === zone.name ? 'text-secondary' : 'text-foreground/40'}`} />
                </div>
                
                <div className={`text-5xl font-heading font-bold text-${zone.color} mb-2`}>
                  {zone.aqi}
                </div>
                
                <div className={`inline-block px-3 py-1 bg-${zone.color}/20 border border-${zone.color}/30 rounded-full`}>
                  <span className={`text-sm font-paragraph font-medium text-${zone.color}`}>
                    {zone.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pollutant Breakdown */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Pollutant Breakdown
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pollutants.map((pollutant, index) => (
              <motion.div
                key={pollutant.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-heading font-bold text-foreground">{pollutant.name}</h3>
                    <span className={`text-xs font-paragraph px-2 py-1 rounded-full ${
                      pollutant.status === 'Good' ? 'bg-health-green/20 text-health-green' :
                      pollutant.status === 'Moderate' ? 'bg-delhi-orange/20 text-delhi-orange' :
                      'bg-destructive/20 text-destructive'
                    }`}>
                      {pollutant.status}
                    </span>
                  </div>
                  
                  <div className="flex items-baseline space-x-2 mb-3">
                    <span className="text-3xl font-heading font-bold text-foreground">{pollutant.value}</span>
                    <span className="text-sm font-paragraph text-foreground/60">{pollutant.unit}</span>
                  </div>
                  
                  <Progress value={(pollutant.value / pollutant.max) * 100} className="h-2 mb-2" />
                  
                  <div className="flex items-center justify-between text-xs font-paragraph text-foreground/50">
                    <span>Safe limit: {pollutant.max} {pollutant.unit}</span>
                    {pollutant.value > pollutant.max ? (
                      <TrendingUp className="w-4 h-4 text-destructive" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-health-green" />
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Risks */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Health Risk Assessment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {healthRisks.map((risk, index) => (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 h-full">
                  <div className={`w-12 h-12 bg-${risk.color}/20 rounded-xl flex items-center justify-center mb-4`}>
                    <risk.icon className={`w-6 h-6 text-${risk.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{risk.title}</h3>
                  
                  <div className={`inline-block px-3 py-1 bg-${risk.color}/20 border border-${risk.color}/30 rounded-full mb-3`}>
                    <span className={`text-sm font-paragraph font-medium text-${risk.color}`}>
                      Risk: {risk.risk}
                    </span>
                  </div>
                  
                  <p className="text-sm font-paragraph text-foreground/70 leading-relaxed">
                    {risk.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Recommendations */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center">
                <AlertCircle className="w-6 h-6 text-secondary mr-3" />
                Preventive Recommendations
              </h3>
              
              <ul className="space-y-4">
                {recommendations.map((rec, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-heading font-bold text-secondary">{index + 1}</span>
                    </div>
                    <span className="text-base font-paragraph text-foreground/80 leading-relaxed">{rec}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
