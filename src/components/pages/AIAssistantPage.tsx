import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Search, BookOpen, Shield, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BaseCrudService } from '@/integrations';
import { VerifiedHealthInformation } from '@/entities';

export default function AIAssistantPage() {
  const [healthInfo, setHealthInfo] = useState<VerifiedHealthInformation[]>([]);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<VerifiedHealthInformation[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const fetchData = async () => {
      const { items } = await BaseCrudService.getAll<VerifiedHealthInformation>('verifiedhealthinformation');
      setHealthInfo(items);
      setSearchResults(items);
    };
    fetchData();
  }, []);

  const categories = ['All', ...Array.from(new Set(healthInfo.map(info => info.healthCategory).filter(Boolean)))];

  const handleSearch = () => {
    if (!query.trim()) {
      setSearchResults(healthInfo);
      return;
    }

    const filtered = healthInfo.filter(info => 
      info.healthQuestion?.toLowerCase().includes(query.toLowerCase()) ||
      info.verifiedAnswer?.toLowerCase().includes(query.toLowerCase()) ||
      info.keywords?.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setSearchResults(healthInfo);
    } else {
      setSearchResults(healthInfo.filter(info => info.healthCategory === category));
    }
  };

  const features = [
    {
      title: 'Verified Information',
      description: 'All health information is verified by medical experts and government sources',
      icon: Shield,
      color: 'health-green',
    },
    {
      title: 'Evidence-Based',
      description: 'Answers backed by scientific research and official health guidelines',
      icon: BookOpen,
      color: 'delhi-blue',
    },
    {
      title: 'Personalized Guidance',
      description: 'AI-powered recommendations tailored to your health queries',
      icon: Sparkles,
      color: 'secondary',
    },
    {
      title: 'Regular Updates',
      description: 'Content continuously updated with latest health research and policies',
      icon: TrendingUp,
      color: 'delhi-purple',
    },
  ];

  const popularQueries = [
    'How to protect against air pollution?',
    'Mental health support for students',
    'Preventive health measures for children',
    'Nutrition guidelines for school students',
    'Stress management techniques',
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
              <span className="text-sm font-paragraph font-medium text-secondary">AI-Powered Health Assistant</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Health AI Assistant
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto mb-12">
              Get instant access to verified health information and AI-powered preventive guidance
            </p>

            {/* Search Interface */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                    <Input
                      type="text"
                      placeholder="Ask any health question..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                      className="pl-12 h-14 bg-background/50 border-white/20 text-foreground placeholder:text-foreground/40 text-base"
                    />
                  </div>
                  <Button 
                    onClick={handleSearch}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8"
                  >
                    <Send className="w-5 h-5 md:mr-2" />
                    <span className="hidden md:inline">Search</span>
                  </Button>
                </div>

                {/* Popular Queries */}
                <div className="mt-6">
                  <p className="text-sm font-paragraph text-foreground/60 mb-3">Popular queries:</p>
                  <div className="flex flex-wrap gap-2">
                    {popularQueries.map((pq) => (
                      <button
                        key={pq}
                        onClick={() => {
                          setQuery(pq);
                          handleSearch();
                        }}
                        className="text-xs font-paragraph px-3 py-1.5 bg-white/5 border border-white/10 rounded-full hover:border-secondary hover:text-secondary transition-colors"
                      >
                        {pq}
                      </button>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Why Trust Our AI Assistant
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 text-center h-full hover:border-secondary/50 transition-all">
                  <div className={`w-16 h-16 bg-${feature.color}/20 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm font-paragraph text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Information Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            Verified Health Information
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => handleCategoryFilter(category)}
                className={selectedCategory === category 
                  ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' 
                  : 'border-white/20 text-foreground/80 hover:border-secondary hover:text-secondary'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results */}
          {searchResults.length === 0 ? (
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-12 text-center">
              <Search className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">No results found</h3>
              <p className="text-base font-paragraph text-foreground/60">Try a different search query or category</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {searchResults.map((info, index) => (
                <motion.div
                  key={info._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 hover:border-secondary/50 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          {info.healthCategory && (
                            <span className="text-xs font-paragraph px-3 py-1 bg-delhi-blue/20 text-delhi-blue rounded-full">
                              {info.healthCategory}
                            </span>
                          )}
                          <div className="flex items-center space-x-1 text-xs font-paragraph text-foreground/50">
                            <Shield className="w-3 h-3 text-health-green" />
                            <span>Verified</span>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                          {info.healthQuestion}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="prose prose-invert max-w-none mb-6">
                      <p className="text-base font-paragraph text-foreground/80 leading-relaxed">
                        {info.verifiedAnswer}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                      {info.sourceCitation && (
                        <div className="flex items-center space-x-2 text-sm font-paragraph text-foreground/60">
                          <BookOpen className="w-4 h-4" />
                          <span>Source: {info.sourceCitation}</span>
                        </div>
                      )}
                      
                      {info.expertReviewer && (
                        <div className="flex items-center space-x-2 text-sm font-paragraph text-foreground/60">
                          <Shield className="w-4 h-4 text-health-green" />
                          <span>Reviewed by: {info.expertReviewer}</span>
                        </div>
                      )}
                      
                      {info.lastUpdated && (
                        <div className="text-sm font-paragraph text-foreground/50">
                          Updated: {new Date(info.lastUpdated).toLocaleDateString('en-IN')}
                        </div>
                      )}
                    </div>
                    
                    {info.keywords && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {info.keywords.split(',').map((keyword, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-paragraph px-2 py-1 bg-white/5 border border-white/10 rounded-full text-foreground/60"
                          >
                            {keyword.trim()}
                          </span>
                        ))}
                      </div>
                    )}
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
