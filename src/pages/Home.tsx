import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { GraduationCap, UserPlus, BookOpen, Award, Briefcase, ArrowRight, CheckCircle, Mail, ExternalLink, Linkedin } from "lucide-react";
import vvdnLogo from "@/assets/vvdn_site_logo.svg";
import naanMudhalvanLogo from "@/assets/logo_naan_mudhalvan.svg";
import essiLogo from "@/assets/logo_essi.png";
import mcetLogo from "@/assets/mcet-logo.png";
import paceLogo from "@/assets/pace-logo-new.png";
import chamberLogo from "@/assets/chamber-logo-new.png";
import testimonialVideo1 from "@/assets/testimonial-video-1.mp4";
import testimonialVideo2 from "@/assets/testimonial-video-2.mp4";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Home = () => {
  const scrollRef = useScrollAnimation();
  
  const steps = [{
    icon: UserPlus,
    title: "Sign up via Skill Bridge",
    description: "Create your account and join our learning community"
  }, {
    icon: BookOpen,
    title: "Opt for a course",
    description: "Choose from our comprehensive range of skill-building courses"
  }, {
    icon: GraduationCap,
    title: "Attend training",
    description: "Engage in interactive learning with expert instructors"
  }, {
    icon: Award,
    title: "Earn certification",
    description: "Receive industry-recognized certificates upon completion"
  }, {
    icon: Briefcase,
    title: "Apply for jobs / internships",
    description: "Leverage your new skills for career opportunities"
  }];

  return (
    <div className="min-h-screen bg-gradient-bg" ref={scrollRef}>
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto animate-on-scroll">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            From awareness to employment -{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skill Bridge
            </span>{" "}
            guides you every step of the way.
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your career journey with our comprehensive learning platform. 
            From skill development to job placement, we're with you at every milestone.
          </p>

          <Link to="/courses">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-primary hover:shadow-primary transition-all duration-300 hover:scale-105">
              Browse Courses
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
            Your Journey to Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our proven 5-step process to transform your skills and accelerate your career
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative stagger-children animate-on-scroll">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30"></div>
            
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-3">
                    <CardHeader className="text-center pb-4">
                      <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-primary animate-float" style={{ animationDelay: `${index * 0.4}s` }}>
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="bg-gradient-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                        {index + 1}
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="h-6 w-6 text-primary animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children animate-on-scroll">
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-primary">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Industry-Recognized Certificates</h3>
              <p className="text-muted-foreground leading-relaxed">Earn certificates that employers value and trust, backed by our industry partnerships.</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Expert Instructors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn from industry professionals with years of real-world experience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-primary">
                <Briefcase className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Career Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get job placement assistance and career guidance throughout your journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 animate-on-scroll">
        <div className="bg-gradient-primary rounded-3xl p-12 text-center shadow-primary transition-all duration-500 hover:shadow-[0_12px_40px_-8px_hsl(210_85%_58%_/_0.5)]">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 tracking-tight">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">Join learners who have successfully bridged their skills gap and achieved their career goals.</p>
          <Link to="/courses">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners-section" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
            Our Trusted Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Collaborating with industry leaders to provide you with the best learning experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-children animate-on-scroll">
          {[
            { logo: naanMudhalvanLogo, name: "Naan Mudhalvan" },
            { logo: essiLogo, name: "Electronics Sector Skill Council of India" },
            { logo: chamberLogo, name: "Pollachi Chamber of Commerce" },
            { logo: mcetLogo, name: "Mahalingam College of Engineering" },
            { logo: paceLogo, name: "PA College of Engineering and Technology" },
            { logo: vvdnLogo, name: "VVDN Technologies" },
          ].map((partner, i) => (
            <div key={i} className="text-center group">
              <div className="w-28 h-24 mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{partner.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
            What Our Learners Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear directly from learners who have transformed their careers with Skill Bridge
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto stagger-children animate-on-scroll">
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-500">
            <CardContent className="p-4 sm:p-6">
              <video 
                className="aspect-video w-full rounded-xl object-cover"
                controls
                preload="auto"
                controlsList=""
              >
                <source src={testimonialVideo1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-500">
            <CardContent className="p-4 sm:p-6">
              <video 
                className="aspect-video w-full rounded-xl object-cover"
                controls
                preload="auto"
                controlsList=""
              >
                <source src={testimonialVideo2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or need support? We're here to help you on your learning journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto stagger-children animate-on-scroll">
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-primary">
                <ExternalLink className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Contact Form</h3>
              <p className="text-muted-foreground mb-6">Fill out our form for detailed inquiries and support</p>
              <Button asChild className="bg-gradient-primary hover:shadow-primary transition-all duration-300 hover:scale-105">
                <a href="https://forms.gle/uh86ujPGrAWVgbRx7" target="_blank" rel="noopener noreferrer">
                  Open Form
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Email Us</h3>
              <p className="text-muted-foreground mb-6">Reach out directly for quick questions or support</p>
              <Button asChild variant="secondary" className="transition-all duration-300 hover:scale-105">
                <a href="mailto:reachskillbridge@gmail.com">
                  reachskillbridge@gmail.com
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Home;
