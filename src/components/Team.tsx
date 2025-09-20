import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Rohit Kumar",
      role: "Founder & Lead Developer",
      expertise: "Full Stack Development, Cloud Architecture",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#",
        email: "rohit@codebastarsolutions.com"
      }
    },
    {
      name: "Priya Singh",
      role: "Frontend Specialist",
      expertise: "React, Vue.js, UI/UX Design",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#", 
        email: "priya@codebastarsolutions.com"
      }
    },
    {
      name: "Amit Patel",
      role: "Backend Engineer",
      expertise: "Node.js, Python, Database Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#",
        email: "amit@codebastarsolutions.com"
      }
    },
    {
      name: "Sneha Verma",
      role: "Mobile App Developer",
      expertise: "React Native, Flutter, iOS/Android",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#",
        email: "sneha@codebastarsolutions.com"
      }
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developers and designers working together to bring your ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-soft transition-smooth group">
              <div className="relative mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.expertise}</p>
              
              <div className="flex justify-center space-x-3">
                <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-smooth">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-smooth">
                  <Github className="w-5 h-5" />
                </a>
                <a href={`mailto:${member.social.email}`} className="text-muted-foreground hover:text-primary transition-smooth">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;