import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  ShoppingCart, 
  Database, 
  Shield,
  Zap,
  Users,
  Headphones,
  Rocket,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React & Next.js", "Node.js Backend", "Responsive Design", "SEO Optimized"],
      price: "Starting from ₹25,000",
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "Native iOS/Android", "Cross-platform"],
      price: "Starting from ₹40,000",
      popular: true
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that convert visitors to customers",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting from ₹15,000",
      popular: false
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete online store setup with payment integration and inventory management",
      features: ["Shopify/WooCommerce", "Payment Gateway", "Inventory Management", "Analytics"],
      price: "Starting from ₹35,000",
      popular: false
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust server-side applications and APIs for your digital products",
      features: ["API Development", "Database Design", "Cloud Integration", "Authentication"],
      price: "Starting from ₹30,000",
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Web Security",
      description: "Comprehensive security audits and protection for your web applications",
      features: ["Security Audit", "SSL Implementation", "Data Protection", "Penetration Testing"],
      price: "Starting from ₹20,000",
      popular: false
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Skilled developers and designers with years of experience"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock support for all your technical needs"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Modern Tech",
      description: "Latest technologies and best practices in development"
    }
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
    { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
    { step: "03", title: "Design", description: "Crafting beautiful and functional designs" },
    { step: "04", title: "Development", description: "Building your solution with clean, scalable code" },
    { step: "05", title: "Testing", description: "Rigorous testing to ensure quality and performance" },
    { step: "06", title: "Launch", description: "Deploying your solution and providing ongoing support" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive digital solutions to transform your business and drive growth in the digital age.
            </p>
            <Button variant="default" size="lg">
              Get Free Consultation
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From concept to deployment, we provide end-to-end digital solutions tailored to your business needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className={`hover:shadow-lg transition-all duration-300 relative ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full group">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We combine technical expertise with creative vision to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures project success from start to finish.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground ml-16">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Get Free Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open('https://wa.me/916268409259', '_blank')}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;