import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Environment & Air Health', href: '/environment' },
    { name: 'Mental Wellness', href: '/mental-wellness' },
    { name: 'Health AI Assistant', href: '/ai-assistant' },
    { name: 'Dashboards', href: '/dashboards' },
    { name: 'Alerts', href: '/alerts' },
    { name: 'Awareness Hub', href: '/awareness' },
    { name: 'About', href: '/about' },
  ];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-health-green rounded-lg flex items-center justify-center">
              <span className="text-2xl font-heading font-bold text-secondary-foreground">DC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-foreground">Delhi Care Grid</span>
              <span className="text-xs text-foreground/60 font-paragraph">Government of NCT of Delhi</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-paragraph font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-secondary/10 text-secondary'
                    : 'text-foreground/80 hover:text-secondary hover:bg-secondary/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden md:flex items-center space-x-2 text-foreground/80 hover:text-secondary"
            >
              <Globe className="w-4 h-4" />
              <span className="font-paragraph">{language === 'en' ? 'हिंदी' : 'English'}</span>
            </Button>

            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden md:inline-flex border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                Login
              </Button>
            </Link>

            <Link to="/demo">
              <Button size="sm" className="hidden md:inline-flex bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Demo Mode
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm">
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background border-white/10">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-base font-paragraph font-medium rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'bg-secondary/10 text-secondary'
                          : 'text-foreground/80 hover:text-secondary hover:bg-secondary/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <Button
                      variant="ghost"
                      onClick={toggleLanguage}
                      className="w-full justify-start text-foreground/80 hover:text-secondary"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      {language === 'en' ? 'हिंदी' : 'English'}
                    </Button>
                    <Link to="/login" className="block" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                        Login
                      </Button>
                    </Link>
                    <Link to="/demo" className="block" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                        Demo Mode
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
