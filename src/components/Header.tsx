import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import codebasterLogo from "@/assets/codebaster-logo-new.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src={codebasterLogo} 
            alt="CodeBaster Solutions Logo" 
            className="h-10 w-auto"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">About</Link>
          <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">Services</a>
          <Link to="/blog" className="text-muted-foreground hover:text-primary transition-smooth">Blog</Link>
          <Link to="/careers" className="text-muted-foreground hover:text-primary transition-smooth">Careers</Link>
          <Link to="/faq" className="text-muted-foreground hover:text-primary transition-smooth">FAQ</Link>
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