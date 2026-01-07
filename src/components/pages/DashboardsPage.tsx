import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Heart, 
  Shield, 
  Building2,
  TrendingUp,
  Activity,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

export default function DashboardsPage() {
  const [selectedRole, setSelectedRole] = useState<string>('student');

  const roles = [
    { id: 'student', name: 'Student', icon: GraduationCap, color: 'secondary' },
    { id: 'parent', name: 'Parent', icon: Users, color: 'health-green' },
    { id: 'teacher', name: 'Teacher', icon: Heart, color: 'delhi-purple' },
    { id: 'admin', name: 'Administrator', icon: Shield, color: 'delhi-blue' },
    { id: 'government', name: 'Government Official', icon: Building2, color: 'delhi-orange' },
  ];

  const studentMetrics = [
    { label: 'Health Score', value: 85, max: 100, icon: Activity, color: 'health-green' },
    { label: 'Wellness Activities', value: 12, max: 20, icon: Heart, color: 'secondary' },
    { label: 'Air Quality Alerts', value: 3, max: 10, icon: AlertTriangle, color: 'delhi-orange' },
    { label: 'Resources Accessed', value: 8, max: 15, icon: CheckCircle, color: 'delhi-blue' },
  ];

  const parentMetrics = [
    { label: 'Children Monitored', value: 2, max: 5, icon: Users, color: 'secondary' },
    { label: 'Active Alerts', value: 5, max: 10, icon: AlertTriangle, color: 'delhi-orange' },
    { label: 'Health Reports', value: 8, max: 12, icon: BarChart3, color: 'health-green' },
    { label: 'Wellness Score', value: 78, max: 100, icon: TrendingUp, color: 'delhi-blue' },
  ];

  const teacherMetrics = [
    { label: 'Students Tracked', value: 45, max: 50, icon: GraduationCap, color: 'secondary' },
    { label: 'Wellness Sessions', value: 15, max: 20, icon: Heart, color: 'delhi-purple' },
    { label: 'Interventions', value: 8, max: 15, icon: Shield, color: 'health-green' },
    { label: 'Class Health Score', value: 82, max: 100, icon: Activity, color: 'delhi-blue' },
  ];

  const adminMetrics = [
    { label: 'Total Students', value: 1250, max: 1500, icon: GraduationCap, color: 'secondary' },
    { label: 'Active Programs', value: 12, max: 15, icon: CheckCircle, color: 'health-green' },
    { label: 'School Health Score', value: 88, max: 100, icon: TrendingUp, color: 'delhi-blue' },
    { label: 'Compliance Rate', value: 95, max: 100, icon: Shield, color: 'delhi-purple' },
  ];

  const governmentMetrics = [
    { label: 'Schools Connected', value: 5000, max: 6000, icon: Building2, color: 'secondary' },
    { label: 'Students Protected', value: 2500000, max: 3000000, icon: GraduationCap, color: 'health-green' },
    { label: 'City Health Index', value: 76, max: 100, icon: Activity, color: 'delhi-blue' },
    { label: 'Program Reach', value: 92, max: 100, icon: TrendingUp, color: 'delhi-orange' },
  ];

  const getMetrics = (role: string) => {
    switch (role) {
      case 'student': return studentMetrics;
      case 'parent': return parentMetrics;
      case 'teacher': return teacherMetrics;
      case 'admin': return adminMetrics;
      case 'government': return governmentMetrics;
      default: return studentMetrics;
    }
  };

  const recentActivities = [
    { title: 'Wellness Workshop Completed', time: '2 hours ago', type: 'success' },
    { title: 'Air Quality Alert Received', time: '5 hours ago', type: 'warning' },
    { title: 'Health Report Generated', time: '1 day ago', type: 'info' },
    { title: 'Mental Health Resource Accessed', time: '2 days ago', type: 'success' },
    { title: 'Preventive Guidance Received', time: '3 days ago', type: 'info' },
  ];

  const upcomingEvents = [
    { title: 'Mental Wellness Session', date: 'Tomorrow, 10:00 AM', category: 'Wellness' },
    { title: 'Health Screening Camp', date: 'Jan 15, 2026', category: 'Health' },
    { title: 'Air Quality Workshop', date: 'Jan 20, 2026', category: 'Environment' },
    { title: 'Parent-Teacher Meeting', date: 'Jan 25, 2026', category: 'School' },
  ];

  const formatValue = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
    return value.toString();
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-delhi-blue/10 border border-delhi-blue/20 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-delhi-blue" />
              <span className="text-sm font-paragraph font-medium text-delhi-blue">Role-Based Insights</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Smart Dashboards
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto">
              Personalized health insights and analytics for every stakeholder in Delhi's health ecosystem
            </p>
          </motion.div>

          {/* Role Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <Tabs value={selectedRole} onValueChange={setSelectedRole} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white/5 border border-white/10 p-1 h-auto gap-1">
                {roles.map((role) => (
                  <TabsTrigger
                    key={role.id}
                    value={role.id}
                    className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex flex-col items-center py-3 px-2"
                  >
                    <role.icon className="w-5 h-5 mb-1" />
                    <span className="text-xs font-paragraph font-medium">{role.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Dashboard Content */}
              {roles.map((role) => (
                <TabsContent key={role.id} value={role.id} className="mt-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Main Metrics */}
                    <div className="lg:col-span-8 space-y-6">
                      {/* Metrics Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {getMetrics(role.id).map((metric, index) => (
                          <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:border-secondary/50 transition-all">
                              <div className="flex items-start justify-between mb-4">
                                <div className={`w-12 h-12 bg-${metric.color}/20 rounded-lg flex items-center justify-center`}>
                                  <metric.icon className={`w-6 h-6 text-${metric.color}`} />
                                </div>
                                <TrendingUp className="w-5 h-5 text-health-green" />
                              </div>
                              
                              <h3 className="text-sm font-paragraph text-foreground/60 mb-2">{metric.label}</h3>
                              
                              <div className="flex items-baseline space-x-2 mb-3">
                                <span className="text-4xl font-heading font-bold text-foreground">
                                  {formatValue(metric.value)}
                                </span>
                                <span className="text-sm font-paragraph text-foreground/50">
                                  / {formatValue(metric.max)}
                                </span>
                              </div>
                              
                              <Progress value={(metric.value / metric.max) * 100} className="h-2" />
                            </Card>
                          </motion.div>
                        ))}
                      </div>

                      {/* Chart Placeholder */}
                      <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-xl font-heading font-bold text-foreground">Health Trends</h3>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-secondary">
                              <LineChart className="w-4 h-4 mr-2" />
                              Line
                            </Button>
                            <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-secondary">
                              <BarChart3 className="w-4 h-4 mr-2" />
                              Bar
                            </Button>
                            <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-secondary">
                              <PieChart className="w-4 h-4 mr-2" />
                              Pie
                            </Button>
                          </div>
                        </div>
                        
                        <div className="h-64 flex items-center justify-center bg-white/5 rounded-lg border border-white/10">
                          <div className="text-center">
                            <BarChart3 className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
                            <p className="text-base font-paragraph text-foreground/60">
                              Interactive health analytics and trend visualization
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                      {/* Recent Activities */}
                      <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
                        <h3 className="text-lg font-heading font-bold text-foreground mb-4">Recent Activities</h3>
                        <div className="space-y-4">
                          {recentActivities.map((activity, index) => (
                            <div key={index} className="flex items-start space-x-3 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                activity.type === 'success' ? 'bg-health-green' :
                                activity.type === 'warning' ? 'bg-delhi-orange' :
                                'bg-delhi-blue'
                              }`} />
                              <div className="flex-1">
                                <p className="text-sm font-paragraph font-medium text-foreground">{activity.title}</p>
                                <p className="text-xs font-paragraph text-foreground/50 mt-1">{activity.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>

                      {/* Upcoming Events */}
                      <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
                        <h3 className="text-lg font-heading font-bold text-foreground mb-4">Upcoming Events</h3>
                        <div className="space-y-4">
                          {upcomingEvents.map((event, index) => (
                            <div key={index} className="pb-4 border-b border-white/10 last:border-0 last:pb-0">
                              <div className="flex items-start justify-between mb-2">
                                <p className="text-sm font-paragraph font-medium text-foreground">{event.title}</p>
                                <span className="text-xs font-paragraph px-2 py-1 bg-secondary/20 text-secondary rounded-full flex-shrink-0 ml-2">
                                  {event.category}
                                </span>
                              </div>
                              <p className="text-xs font-paragraph text-foreground/50">{event.date}</p>
                            </div>
                          ))}
                        </div>
                      </Card>

                      {/* Quick Actions */}
                      <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
                        <h3 className="text-lg font-heading font-bold text-foreground mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                          <Button 
                            onClick={() => window.location.href = '/dashboards'}
                            className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 justify-start"
                          >
                            <Activity className="w-4 h-4 mr-2" />
                            View Health Report
                          </Button>
                          <Button 
                            onClick={() => window.location.href = '/alerts'}
                            variant="outline" 
                            className="w-full border-white/20 text-foreground hover:border-secondary hover:text-secondary justify-start"
                          >
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            Check Alerts
                          </Button>
                          <Button 
                            onClick={() => window.location.href = '/mental-wellness'}
                            variant="outline" 
                            className="w-full border-white/20 text-foreground hover:border-secondary hover:text-secondary justify-start"
                          >
                            <Heart className="w-4 h-4 mr-2" />
                            Access Resources
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
