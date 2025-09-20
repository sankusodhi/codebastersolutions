import { Card } from "@/components/ui/card";
import { Heart, Lightbulb, Handshake, Sparkles } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Heart,
      title: "Heart",
      description: "We put our heart into every project, treating your success as our own.",
      gradient: "from-red-400 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge solutions that push boundaries and create possibilities.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "Trust and transparency form the foundation of all our relationships.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We don't just deliver projects, we deliver transformational experiences.",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Technology with <span className="bg-gradient-primary bg-clip-text text-transparent">Purpose</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe technology is not just about codes and screens — it's about people, 
            trust, and making lives better.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-soft transition-smooth group">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-gradient-subtle rounded-2xl">
            <p className="text-lg font-medium text-primary mb-2">Our Promise</p>
            <p className="text-2xl font-bold">
              Your business growth = our happiness 🌸
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;