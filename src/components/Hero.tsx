import { Button } from "@/components/ui/button";
import { Star, Heart, Lightbulb, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-primary">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium">CodeBaster Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Where Local Talent Becomes{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Digital Champions
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Born in Dantewada, crafted with passion. We don't just build software — 
              we build dreams, trust, and a future powered by local talent.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Empower local youth</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span>World-class solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-primary" />
                <span>Grow with community</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" className="text-lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={heroImage} 
                alt="CodeBaster Solutions team collaborating on digital projects"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-hero rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent opacity-15 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;