import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Globe, Smartphone, Database, Cloud, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built with cutting-edge technologies to solve your unique business challenges.",
      features: ["Web Applications", "Desktop Software", "API Development"]
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Beautiful, responsive websites that captivate your audience and drive business growth.",
      features: ["Responsive Design", "SEO Optimized", "CMS Integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter"]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Robust database design and management for secure, scalable data handling.",
      features: ["Database Design", "Performance Optimization", "Data Migration"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions for modern businesses.",
      features: ["Cloud Migration", "DevOps", "Server Management"]
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Complete digital overhaul to modernize your business processes and workflows.",
      features: ["Process Automation", "Digital Strategy", "Legacy Modernization"]
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            World-class digital solutions delivered by passionate local talent
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-soft transition-smooth group bg-background">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  Learn More
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;