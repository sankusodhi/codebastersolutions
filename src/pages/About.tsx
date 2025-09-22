import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About CodeBaster Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a team of passionate developers and designers committed to delivering innovative digital solutions that transform businesses.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6">
                  Founded in 2024, CodeBaster Solutions emerged from a vision to bridge the gap between innovative technology and practical business solutions. Our journey began with a simple belief: every business deserves access to cutting-edge digital solutions.
                </p>
                <p className="text-muted-foreground mb-6">
                  Since our inception, we've helped numerous businesses transform their digital presence, streamline operations, and achieve remarkable growth through technology.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Innovation</Badge>
                  <Badge variant="secondary">Quality</Badge>
                  <Badge variant="secondary">Excellence</Badge>
                  <Badge variant="secondary">Growth</Badge>
                </div>
              </div>
              <div className="bg-gradient-primary p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="mb-4">
                  To empower businesses with innovative digital solutions that drive growth, efficiency, and success in the modern digital landscape.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p>
                  To be the leading technology partner for businesses worldwide, creating solutions that make a lasting impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "We constantly push boundaries to deliver cutting-edge solutions"
                },
                {
                  title: "Quality",
                  description: "Excellence in every line of code and design element"
                },
                {
                  title: "Collaboration",
                  description: "Working closely with clients to achieve shared success"
                },
                {
                  title: "Integrity",
                  description: "Transparent communication and ethical business practices"
                }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;