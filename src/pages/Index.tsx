import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Technologies from "@/components/Technologies";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Services />
      <Portfolio />
      <Process />
      <Technologies />
      <Team />
      <Testimonials />
      <WhyChooseUs />
      <Contact />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Index;
