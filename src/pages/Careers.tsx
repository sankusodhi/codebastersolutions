import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Users, Lightbulb, Trophy, Heart } from "lucide-react";

const Careers = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹8-15 LPA",
      description: "Join our frontend team to build exceptional user experiences with React and modern web technologies."
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹6-12 LPA",
      description: "Create beautiful and intuitive designs that solve real user problems and drive business success."
    },
    {
      id: 3,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "4-6 years",
      salary: "₹10-18 LPA",
      description: "Work on both frontend and backend systems, building complete solutions from ground up."
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹9-16 LPA",
      description: "Build and maintain our deployment pipelines, ensuring scalable and reliable infrastructure."
    },
    {
      id: 5,
      title: "Project Manager",
      department: "Operations",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹8-14 LPA",
      description: "Lead project delivery, coordinate with teams, and ensure client satisfaction and timely execution."
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for you and your family."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Learning & Growth",
      description: "Continuous learning opportunities, conferences, and skill development programs."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Culture",
      description: "Collaborative, inclusive environment where every voice matters and innovation thrives."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Performance Rewards",
      description: "Merit-based promotions, bonuses, and recognition for outstanding contributions."
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
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Be part of a dynamic team that's shaping the future of digital innovation. We're looking for passionate individuals who want to make a difference.
            </p>
            <Button variant="default" size="lg">
              View Open Positions
            </Button>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe in creating an environment where talent thrives and innovation happens naturally.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our current job openings and find the perfect role for your skills and career goals.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <Badge variant="secondary">{job.department}</Badge>
                      </div>
                    </div>
                    <CardDescription className="text-base">{job.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    <Button className="w-full">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Don't See a Perfect Match?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and tell us how you can contribute to our team.
            </p>
            <Button variant="secondary" size="lg">
              Send Your Resume
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;