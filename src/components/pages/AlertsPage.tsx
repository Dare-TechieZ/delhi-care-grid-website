import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Bell, Filter, Clock, MapPin, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BaseCrudService } from '@/integrations';
import { HealthAlerts } from '@/entities';

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<HealthAlerts[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('All');

  useEffect(() => {
    const fetchAlerts = async () => {
      const { items } = await BaseCrudService.getAll<HealthAlerts>('healthalerts');
      setAlerts(items.sort((a, b) => {
        const dateA = a.issueDate ? new Date(a.issueDate).getTime() : 0;
        const dateB = b.issueDate ? new Date(b.issueDate).getTime() : 0;
        return dateB - dateA;
      }));
    };
    fetchAlerts();
  }, []);

  const categories = ['All', ...Array.from(new Set(alerts.map(a => a.category).filter(Boolean)))];
  const severities = ['All', ...Array.from(new Set(alerts.map(a => a.severityLevel).filter(Boolean)))];

  const filteredAlerts = alerts.filter(alert => {
    const categoryMatch = selectedCategory === 'All' || alert.category === selectedCategory;
    const severityMatch = selectedSeverity === 'All' || alert.severityLevel === selectedSeverity;
    return categoryMatch && severityMatch;
  });

  const getSeverityColor = (severity: string | undefined) => {
    switch (severity?.toLowerCase()) {
      case 'high':
      case 'critical':
        return 'destructive';
      case 'medium':
      case 'moderate':
        return 'delhi-orange';
      case 'low':
        return 'secondary';
      default:
        return 'delhi-blue';
    }
  };

  const getSeverityBgColor = (severity: string | undefined) => {
    switch (severity?.toLowerCase()) {
      case 'high':
      case 'critical':
        return 'bg-destructive/10 border-destructive/30';
      case 'medium':
      case 'moderate':
        return 'bg-delhi-orange/10 border-delhi-orange/30';
      case 'low':
        return 'bg-secondary/10 border-secondary/30';
      default:
        return 'bg-delhi-blue/10 border-delhi-blue/30';
    }
  };

  const alertStats = [
    {
      label: 'Active Alerts',
      value: alerts.length,
      icon: Bell,
      color: 'secondary',
    },
    {
      label: 'High Priority',
      value: alerts.filter(a => a.severityLevel === 'High').length,
      icon: AlertTriangle,
      color: 'destructive',
    },
    {
      label: 'Categories',
      value: categories.length - 1,
      icon: Filter,
      color: 'delhi-blue',
    },
    {
      label: 'Today',
      value: alerts.filter(a => {
        if (!a.issueDate) return false;
        const today = new Date().toDateString();
        return new Date(a.issueDate).toDateString() === today;
      }).length,
      icon: Clock,
      color: 'delhi-orange',
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
              <Bell className="w-4 h-4 text-delhi-orange" />
              <span className="text-sm font-paragraph font-medium text-delhi-orange">Real-Time Notifications</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Health Alerts & Notifications
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto">
              Stay informed with real-time preventive health alerts and environmental warnings for Delhi
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {alertStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 text-center hover:border-secondary/50 transition-all">
                  <div className={`w-12 h-12 bg-${stat.color}/20 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                  <div className="text-3xl font-heading font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm font-paragraph text-foreground/60">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6 items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <label className="text-sm font-paragraph text-foreground/60 mb-2">Category</label>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
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
            </div>

            <div className="flex flex-col items-center">
              <label className="text-sm font-paragraph text-foreground/60 mb-2">Severity</label>
              <div className="flex flex-wrap justify-center gap-2">
                {severities.map((severity) => (
                  <Button
                    key={severity}
                    variant={selectedSeverity === severity ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedSeverity(severity)}
                    className={selectedSeverity === severity 
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' 
                      : 'border-white/20 text-foreground/80 hover:border-secondary hover:text-secondary'
                    }
                  >
                    {severity}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alerts List */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          {filteredAlerts.length === 0 ? (
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-12 text-center">
              <Info className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">No alerts found</h3>
              <p className="text-base font-paragraph text-foreground/60">Try adjusting your filters</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredAlerts.map((alert, index) => (
                <motion.div
                  key={alert._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className={`bg-white/5 backdrop-blur-sm border p-6 md:p-8 hover:border-${getSeverityColor(alert.severityLevel)}/50 transition-all ${getSeverityBgColor(alert.severityLevel)}`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className={`w-12 h-12 bg-${getSeverityColor(alert.severityLevel)}/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <AlertTriangle className={`w-6 h-6 text-${getSeverityColor(alert.severityLevel)}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            {alert.severityLevel && (
                              <span className={`text-xs font-paragraph font-medium px-3 py-1 rounded-full bg-${getSeverityColor(alert.severityLevel)}/20 text-${getSeverityColor(alert.severityLevel)} border border-${getSeverityColor(alert.severityLevel)}/30`}>
                                {alert.severityLevel} Priority
                              </span>
                            )}
                            {alert.category && (
                              <span className="text-xs font-paragraph px-3 py-1 bg-delhi-blue/20 text-delhi-blue rounded-full border border-delhi-blue/30">
                                {alert.category}
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                            {alert.alertTitle}
                          </h3>
                          
                          <p className="text-base font-paragraph text-foreground/80 leading-relaxed mb-4">
                            {alert.alertMessage}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm font-paragraph text-foreground/60">
                            {alert.issueDate && (
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4" />
                                <span>
                                  Issued: {new Date(alert.issueDate).toLocaleDateString('en-IN', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric'
                                  })}
                                  {alert.issueTime && ` at ${alert.issueTime}`}
                                </span>
                              </div>
                            )}
                            
                            {alert.validUntil && (
                              <div className="flex items-center space-x-2">
                                <Info className="w-4 h-4" />
                                <span>
                                  Valid until: {new Date(alert.validUntil).toLocaleDateString('en-IN', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric'
                                  })}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className={`border-${getSeverityColor(alert.severityLevel)} text-${getSeverityColor(alert.severityLevel)} hover:bg-${getSeverityColor(alert.severityLevel)} hover:text-white flex-shrink-0`}
                      >
                        View Details
                      </Button>
                    </div>
                    
                    {/* Action Recommendations */}
                    <div className={`bg-background/50 rounded-lg p-4 border border-${getSeverityColor(alert.severityLevel)}/20`}>
                      <h4 className="text-sm font-heading font-semibold text-foreground mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-secondary" />
                        Recommended Actions
                      </h4>
                      <ul className="space-y-1 text-sm font-paragraph text-foreground/70">
                        <li className="flex items-start space-x-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Follow official health guidelines and preventive measures</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Monitor updates through Delhi Care Grid platform</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Contact helplines if you need immediate assistance</span>
                        </li>
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
