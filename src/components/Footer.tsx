import codebasterLogo from "@/assets/codebaster-logo-new.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src={codebasterLogo} 
              alt="CodeBaster Solutions Logo" 
              className="h-12 w-auto"
            />
            <p className="text-primary-foreground/80">
              Empowering local talent to create world-class digital solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-smooth">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Custom Software</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Cloud Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>hello@codebastersolutions.com</li>
              <li>+91 12345 67890</li>
              <li>Dantewada, Chhattisgarh</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 CodeBaster Solutions. Built with ❤️ in Dantewada.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;