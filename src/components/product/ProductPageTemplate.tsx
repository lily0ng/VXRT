import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { AnimatedGridBackground } from '../shared/AnimatedGridBackground';
import { SectionHeading } from '../shared/SectionHeading';
import { ExternalLink } from 'lucide-react';
interface ScenarioTile {
  icon: React.ReactNode;
  title: string;
  description: string;
}
interface TechnicalSpec {
  label: string;
  value: string;
}
interface TabData {
  name: string;
  specs: TechnicalSpec[];
}
interface FeatureColumn {
  title: string;
  items: string[];
}
interface ProductPageData {
  name: string;
  tagline: string;
  description: string;
  heroSvg: React.ReactNode;
  scenarios: ScenarioTile[];
  technicalTabs: TabData[];
  architectureSvg: React.ReactNode;
  architectureDescription: string;
  features: FeatureColumn[];
  pricingStarting: string;
  pricingDescription: string;
}
interface ProductPageTemplateProps {
  data: ProductPageData;
}
export function ProductPageTemplate({ data }: ProductPageTemplateProps) {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <div className="w-full bg-void-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6
              }}
              className="space-y-6">
              
              <Badge
                variant="outline"
                className="border-steel-gray text-muted-gray">
                
                VXRT INFRASTRUCTURE
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ghost-white">
                {data.name}
              </h1>
              <p className="text-xl md:text-2xl text-exploit-red font-heading">
                {data.tagline}
              </p>
              <p className="text-base md:text-lg text-muted-gray font-body leading-relaxed">
                {data.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="gap-2">
                  Start free trial
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View docs
                </Button>
              </div>
            </motion.div>

            {/* Right: Hero SVG */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="flex items-center justify-center">
              
              {data.heroSvg}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What this product is built for */}
      <section className="py-20 bg-void-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What this product is built for"
            description="Real-world offensive security scenarios"
            className="mb-12" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {data.scenarios.map((scenario, index) =>
            <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-dark-base border-steel-gray hover:border-exploit-red transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-exploit-red">{scenario.icon}</div>
                    <h3 className="text-lg font-heading font-semibold text-ghost-white">
                      {scenario.title}
                    </h3>
                    <p className="text-sm text-muted-gray font-body">
                      {scenario.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Technical Profile */}
      <section className="py-20 bg-dark-base/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Technical Profile"
            description="Specifications and capabilities"
            className="mb-12" />
          
          <Card className="bg-dark-base border-steel-gray">
            <CardContent className="p-6">
              <Tabs
                defaultValue={data.technicalTabs[0].name}
                className="w-full">
                
                <TabsList className="grid w-full grid-cols-4 bg-void-black">
                  {data.technicalTabs.map((tab) =>
                  <TabsTrigger
                    key={tab.name}
                    value={tab.name}
                    className="font-heading data-[state=active]:text-exploit-red">
                    
                      {tab.name}
                    </TabsTrigger>
                  )}
                </TabsList>
                {data.technicalTabs.map((tab) =>
                <TabsContent key={tab.name} value={tab.name} className="mt-6">
                    <div className="space-y-3">
                      {tab.specs.map((spec, index) =>
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 px-4 rounded hover:bg-void-black/50 transition-colors border-b border-steel-gray/30 last:border-0">
                      
                          <span className="font-mono text-sm text-muted-gray">
                            {spec.label}
                          </span>
                          <span className="font-mono text-sm text-ghost-white">
                            {spec.value}
                          </span>
                        </div>
                    )}
                    </div>
                  </TabsContent>
                )}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Architecture View */}
      <section className="py-20 bg-void-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Architecture View"
            description={data.architectureDescription}
            className="mb-12" />
          
          <Card className="bg-dark-base border-steel-gray">
            <CardContent className="p-8 md:p-12 flex items-center justify-center min-h-[400px]">
              {data.architectureSvg}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Built for Offensive Security Teams */}
      <section className="py-20 bg-dark-base/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Built for Offensive Security Teams"
            description="Purpose-built for offensive operations"
            className="mb-12" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            className="grid md:grid-cols-3 gap-8">
            
            {data.features.map((feature, index) =>
            <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-dark-base border-l-2 border-l-exploit-red border-steel-gray">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-heading font-semibold text-ghost-white">
                      {feature.title}
                    </h3>
                    <ul className="space-y-2">
                      {feature.items.map((item, itemIndex) =>
                    <li
                      key={itemIndex}
                      className="text-sm text-muted-gray font-body flex items-start gap-2">
                      
                          <span className="text-exploit-red mt-1">•</span>
                          <span>{item}</span>
                        </li>
                    )}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-void-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <SectionHeading
              title="Ready to deploy?"
              description={data.pricingDescription} />
            
            <div className="flex items-center justify-center gap-2">
              <span className="text-muted-gray font-body">Starting at</span>
              <span className="text-4xl font-heading font-bold text-exploit-red">
                {data.pricingStarting}
              </span>
              <span className="text-muted-gray font-body">/month</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2">
                Start now
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Talk to VXRT
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>);

}