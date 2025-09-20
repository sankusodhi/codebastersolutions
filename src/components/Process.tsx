import { Card } from "@/components/ui/card";
import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle, Users } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: "01",
      title: "Discovery & Consultation",
      description: "We start by understanding your business goals, challenges, and requirements through detailed discussions.",
      duration: "1-2 weeks"
    },
    {
      icon: Lightbulb,
      step: "02", 
      title: "Planning & Strategy",
      description: "We create a comprehensive project plan, wireframes, and technical architecture tailored to your needs.",
      duration: "1-2 weeks"
    },
    {
      icon: Code,
      step: "03",
      title: "Development & Design",
      description: "Our team brings your vision to life with clean code, responsive design, and regular progress updates.",
      duration: "4-12 weeks"
    },
    {
      icon: CheckCircle,
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing across devices and browsers ensures your application works flawlessly for all users.",
      duration: "1-2 weeks"
    },
    {
      icon: Rocket,
      step: "05",
      title: "Launch & Deployment",
      description: "We handle the complete deployment process and ensure your application goes live smoothly.",
      duration: "1 week"
    },
    {
      icon: Users,
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to keep your application running at peak performance.",
      duration: "Ongoing"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach that ensures project success from concept to completion.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-soft transition-smooth group relative">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-2xl font-bold text-primary">{step.step}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Duration: {step.duration}
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2"></div>
                )}
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-card rounded-2xl shadow-soft">
            <h3 className="text-xl font-semibold mb-2">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-4">
              Let's discuss how we can bring your ideas to life with our proven process.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-soft transition-smooth"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;