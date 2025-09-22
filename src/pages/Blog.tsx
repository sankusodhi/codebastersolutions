import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape and how they impact modern businesses.",
      author: "CodeBaster Team",
      date: "September 15, 2024",
      category: "Web Development",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices",
      excerpt: "Learn how to structure and develop React applications that can grow with your business needs.",
      author: "CodeBaster Team",
      date: "September 10, 2024",
      category: "React",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Mobile-First Design: Why It Matters More Than Ever",
      excerpt: "Understanding the importance of mobile-first approach in today's digital ecosystem.",
      author: "CodeBaster Team",
      date: "September 5, 2024",
      category: "Design",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "API Integration: Connecting Your Applications Seamlessly",
      excerpt: "A comprehensive guide to integrating third-party APIs in your web applications.",
      author: "CodeBaster Team",
      date: "August 28, 2024",
      category: "Backend",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Digital Transformation: How Small Businesses Can Compete",
      excerpt: "Strategies for small businesses to leverage technology for competitive advantage.",
      author: "CodeBaster Team",
      date: "August 20, 2024",
      category: "Business",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Performance Optimization: Making Your Website Lightning Fast",
      excerpt: "Techniques and tools to improve your website's loading speed and user experience.",
      author: "CodeBaster Team",
      date: "August 15, 2024",
      category: "Performance",
      readTime: "9 min read"
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
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tips, and stories from the world of web development and digital innovation.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Stay Updated with Our Latest Posts
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss out on the latest insights and tips from our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;