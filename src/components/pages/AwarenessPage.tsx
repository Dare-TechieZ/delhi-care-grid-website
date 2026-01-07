import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Calendar, User, FileText, Video, Image as ImageIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { AwarenessHubContent } from '@/entities';

export default function AwarenessPage() {
  const [content, setContent] = useState<AwarenessHubContent[]>([]);
  const [selectedType, setSelectedType] = useState<string>('All');

  useEffect(() => {
    const fetchContent = async () => {
      const { items } = await BaseCrudService.getAll<AwarenessHubContent>('awarenesshubcontent');
      setContent(items.sort((a, b) => {
        const dateA = a.publicationDate ? new Date(a.publicationDate).getTime() : 0;
        const dateB = b.publicationDate ? new Date(b.publicationDate).getTime() : 0;
        return dateB - dateA;
      }));
    };
    fetchContent();
  }, []);

  const contentTypes = ['All', ...Array.from(new Set(content.map(c => c.contentType).filter(Boolean)))];

  const filteredContent = selectedType === 'All' 
    ? content 
    : content.filter(c => c.contentType === selectedType);

  const getContentIcon = (type: string | undefined) => {
    switch (type?.toLowerCase()) {
      case 'video':
        return Video;
      case 'article':
        return FileText;
      case 'infographic':
        return ImageIcon;
      case 'campaign':
        return BookOpen;
      default:
        return BookOpen;
    }
  };

  const getContentColor = (type: string | undefined) => {
    switch (type?.toLowerCase()) {
      case 'video':
        return 'delhi-purple';
      case 'article':
        return 'delhi-blue';
      case 'infographic':
        return 'secondary';
      case 'campaign':
        return 'health-green';
      default:
        return 'delhi-blue';
    }
  };

  const featuredContent = content.slice(0, 3);

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
              <BookOpen className="w-4 h-4 text-health-green" />
              <span className="text-sm font-paragraph font-medium text-health-green">Educational Resources</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Awareness Hub
            </h1>
            
            <p className="text-lg md:text-xl font-paragraph text-foreground/70 max-w-3xl mx-auto">
              Educational content, health articles, awareness campaigns, and downloadable resources for Delhi's health ecosystem
            </p>
          </motion.div>

          {/* Featured Content */}
          {featuredContent.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Featured Content</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredContent.map((item, index) => {
                  const ContentIcon = getContentIcon(item.contentType);
                  const color = getContentColor(item.contentType);
                  
                  return (
                    <motion.div
                      key={item._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:border-secondary/50 transition-all h-full group">
                        {item.mainImage && (
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={item.mainImage}
                              alt={item.title || 'Content image'}
                              width={400}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 right-4">
                              <div className={`w-10 h-10 bg-${color}/90 backdrop-blur-sm rounded-lg flex items-center justify-center`}>
                                <ContentIcon className="w-5 h-5 text-white" />
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <div className="p-6">
                          {item.contentType && (
                            <span className={`text-xs font-paragraph px-3 py-1 bg-${color}/20 text-${color} rounded-full border border-${color}/30 inline-block mb-3`}>
                              {item.contentType}
                            </span>
                          )}
                          
                          <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                            {item.title}
                          </h3>
                          
                          <p className="text-sm font-paragraph text-foreground/70 mb-4 leading-relaxed line-clamp-3">
                            {item.summary}
                          </p>
                          
                          <div className="flex items-center justify-between text-xs font-paragraph text-foreground/50 mb-4">
                            {item.author && (
                              <div className="flex items-center space-x-1">
                                <User className="w-3 h-3" />
                                <span>{item.author}</span>
                              </div>
                            )}
                            {item.publicationDate && (
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{new Date(item.publicationDate).toLocaleDateString('en-IN')}</span>
                              </div>
                            )}
                          </div>
                          
                          {item.downloadUrl && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                              onClick={() => window.open(item.downloadUrl, '_blank')}
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Content Section */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
            All Resources
          </h2>

          {/* Content Type Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {contentTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? 'default' : 'outline'}
                onClick={() => setSelectedType(type)}
                className={selectedType === type 
                  ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' 
                  : 'border-white/20 text-foreground/80 hover:border-secondary hover:text-secondary'
                }
              >
                {type}
              </Button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item, index) => {
              const ContentIcon = getContentIcon(item.contentType);
              const color = getContentColor(item.contentType);
              
              return (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:border-secondary/50 transition-all h-full group">
                    {item.mainImage && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={item.mainImage}
                          alt={item.title || 'Content image'}
                          width={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <div className={`w-10 h-10 bg-${color}/90 backdrop-blur-sm rounded-lg flex items-center justify-center`}>
                            <ContentIcon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        {item.contentType && (
                          <span className={`text-xs font-paragraph px-3 py-1 bg-${color}/20 text-${color} rounded-full border border-${color}/30`}>
                            {item.contentType}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm font-paragraph text-foreground/70 mb-4 leading-relaxed line-clamp-3">
                        {item.summary}
                      </p>
                      
                      {item.campaignGoals && (
                        <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                          <p className="text-xs font-paragraph text-foreground/60 mb-1">Campaign Goals:</p>
                          <p className="text-sm font-paragraph text-foreground/80 line-clamp-2">{item.campaignGoals}</p>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-xs font-paragraph text-foreground/50 mb-4">
                        {item.author && (
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span className="truncate">{item.author}</span>
                          </div>
                        )}
                        {item.publicationDate && (
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(item.publicationDate).toLocaleDateString('en-IN')}</span>
                          </div>
                        )}
                      </div>
                      
                      {item.downloadUrl && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                          onClick={() => window.open(item.downloadUrl, '_blank')}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Resource
                        </Button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {filteredContent.length === 0 && (
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-12 text-center">
              <BookOpen className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">No content found</h3>
              <p className="text-base font-paragraph text-foreground/60">Try selecting a different content type</p>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
