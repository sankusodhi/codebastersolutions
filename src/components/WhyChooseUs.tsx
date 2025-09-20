import { Card } from "@/components/ui/card";
import { MapPin, Users, Award, Clock, DollarSign, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Born and raised in Dantewada, we understand local business needs and challenges intimately."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We're not just service providers — we're your neighbors, invested in our community's success."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Every project undergoes rigorous testing and quality assurance to ensure excellence."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect your time and deadlines, delivering projects on schedule without compromising quality."
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "High-quality solutions at fair prices that provide exceptional value for your investment."
    },
    {
      icon: Shield,
      title: "Ongoing Support",
      description: "We don't disappear after delivery — comprehensive support and maintenance for peace of mind."
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">CodeBaster?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're more than a software company — we're your trusted technology partners
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-soft transition-smooth group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join us today, and let's build something amazing together! 💫
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-smooth"
              >
                Start Your Project
              </a>
              <a 
                href="tel:+1234567890" 
                className="border border-white/30 bg-white/10 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/20 transition-smooth"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;