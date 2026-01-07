import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, GraduationCap, Users, Heart, Building2, Lock, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const roles = [
    { id: 'student', name: 'Student', icon: GraduationCap, color: 'secondary' },
    { id: 'parent', name: 'Parent', icon: Users, color: 'health-green' },
    { id: 'teacher', name: 'Teacher', icon: Heart, color: 'delhi-purple' },
    { id: 'admin', name: 'Administrator', icon: Shield, color: 'delhi-blue' },
    { id: 'government', name: 'Government Official', icon: Building2, color: 'delhi-orange' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboards');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-sm font-paragraph font-medium text-secondary">Secure Authentication</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Secure Login
              </h1>
              
              <p className="text-lg font-paragraph text-foreground/70">
                Access your personalized health dashboard with role-based authentication
              </p>
            </div>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 md:p-12">
              {/* Role Selection */}
              <div className="mb-8">
                <Label className="text-base font-paragraph font-medium text-foreground mb-4 block">
                  Select Your Role
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {roles.map((role) => (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all ${
                        selectedRole === role.id
                          ? 'border-secondary bg-secondary/10'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <role.icon className={`w-6 h-6 mb-2 ${selectedRole === role.id ? 'text-secondary' : 'text-foreground/60'}`} />
                      <span className={`text-xs font-paragraph font-medium ${selectedRole === role.id ? 'text-secondary' : 'text-foreground/60'}`}>
                        {role.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-sm font-paragraph font-medium text-foreground mb-2 block">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-12 h-12 bg-background/50 border-white/20 text-foreground placeholder:text-foreground/40"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-sm font-paragraph font-medium text-foreground mb-2 block">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-12 h-12 bg-background/50 border-white/20 text-foreground placeholder:text-foreground/40"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-background/50" />
                    <span className="font-paragraph text-foreground/70">Remember me</span>
                  </label>
                  <a href="#" className="font-paragraph font-medium text-secondary hover:text-secondary/80">
                    Forgot password?
                  </a>
                </div>

                <Button type="submit" className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base">
                  Sign In Securely
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/5 font-paragraph text-foreground/60">Or</span>
                </div>
              </div>

              {/* Demo Mode */}
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/demo')}
                className="w-full h-12 border-white/20 text-foreground hover:border-secondary hover:text-secondary text-base"
              >
                Explore Demo Mode
              </Button>

              {/* Security Notice */}
              <div className="mt-8 p-4 bg-delhi-blue/10 border border-delhi-blue/20 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-delhi-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-paragraph font-semibold text-foreground mb-1">
                      Secure Government Authentication
                    </h4>
                    <p className="text-xs font-paragraph text-foreground/70 leading-relaxed">
                      Your credentials are protected with bank-grade encryption. We never share your personal information 
                      without explicit consent. All data is stored securely in compliance with government data protection standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Registration Link */}
              <div className="mt-6 text-center">
                <p className="text-sm font-paragraph text-foreground/70">
                  Don't have an account?{' '}
                  <a href="#" className="font-medium text-secondary hover:text-secondary/80">
                    Register here
                  </a>
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
