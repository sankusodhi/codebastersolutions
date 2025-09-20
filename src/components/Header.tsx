import { Button } from "@/components/ui/button";
import codebasterLogo from "@/assets/codebaster-logo-new.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={codebasterLogo} 
            alt="CodeBaster Solutions Logo" 
            className="h-10 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">About</a>
          <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">Services</a>
          <a href="#why-us" className="text-muted-foreground hover:text-primary transition-smooth">Why Us</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a>
        </nav>
        
        <Button variant="hero" className="hidden md:inline-flex">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;