import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What services does CodeBaster Solutions offer?",
          answer: "We offer comprehensive web development services including custom web applications, e-commerce solutions, mobile app development, UI/UX design, and digital transformation consulting."
        },
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex web applications can take 8-16 weeks. We provide detailed timelines during the project planning phase."
        },
        {
          question: "Do you work with small businesses or only large enterprises?",
          answer: "We work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and tailored to meet the specific needs and budget of each client."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          question: "What technologies do you use for web development?",
          answer: "We specialize in modern technologies including React, Node.js, TypeScript, Python, and various databases. We choose the best technology stack based on your project requirements."
        },
        {
          question: "Do you provide ongoing maintenance and support?",
          answer: "Yes, we offer comprehensive maintenance packages that include regular updates, security patches, performance monitoring, and technical support to ensure your application runs smoothly."
        },
        {
          question: "Can you help migrate my existing website to a new platform?",
          answer: "Absolutely! We have extensive experience in website migrations, including data migration, SEO preservation, and ensuring minimal downtime during the transition process."
        }
      ]
    },
    {
      category: "Process",
      questions: [
        {
          question: "How do you handle project communication?",
          answer: "We maintain regular communication through dedicated project managers, weekly progress updates, and collaborative tools. You'll always know the status of your project."
        },
        {
          question: "What is your development process?",
          answer: "We follow an agile development methodology with phases including discovery, planning, design, development, testing, and deployment. Each phase involves client feedback and approval."
        },
        {
          question: "Do you provide project estimates before starting?",
          answer: "Yes, we provide detailed project estimates after understanding your requirements. Our estimates include timeline, costs, and deliverables, with transparent pricing structure."
        }
      ]
    },
    {
      category: "Pricing",
      questions: [
        {
          question: "How do you structure your pricing?",
          answer: "Our pricing is project-based and depends on scope, complexity, and timeline. We offer fixed-price projects for defined scope and hourly rates for ongoing development work."
        },
        {
          question: "Do you require full payment upfront?",
          answer: "No, we work with milestone-based payments. Typically, we require 25% upfront, 50% at key milestones, and 25% upon project completion and client approval."
        },
        {
          question: "Are there any hidden costs?",
          answer: "We believe in transparent pricing. All costs are discussed upfront, including development, hosting, third-party services, and any additional features requested during the project."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services, process, and how we can help your business grow.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold mb-6 text-primary">{category.category}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${categoryIndex}-${index}`}
                        className="border border-border rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help. Reach out to us through any of these channels.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <CardTitle>WhatsApp Chat</CardTitle>
                  <CardDescription>
                    Connect instantly via WhatsApp
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-green-500 hover:bg-green-600"
                    onClick={() => window.open('https://wa.me/916268409259', '_blank')}
                  >
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>
                    Get instant answers from our support team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>
                    codebastarsolutions@gmail.com
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('mailto:codebastarsolutions@gmail.com', '_blank')}
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Phone Support</CardTitle>
                  <CardDescription>
                    +91 6268409259
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('tel:+916268409259', '_blank')}
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;