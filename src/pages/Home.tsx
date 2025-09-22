import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, UserPlus, BookOpen, Award, Briefcase, ArrowRight, Play, CheckCircle } from "lucide-react";
import vvdnLogo from "@/assets/vvdn_site_logo.svg";
import naanMudhalvanLogo from "@/assets/logo_naan_mudhalvan.svg";
import essiLogo from "@/assets/logo_essi.png";
import mcetLogo from "@/assets/mcet-logo.png";
import paceLogo from "@/assets/pace-logo-new.png";
import chamberLogo from "@/assets/chamber-logo-new.png";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
const Home = () => {
  const {
    user,
    profile
  } = useAuth();
  const steps = [{
    icon: UserPlus,
    title: "Sign up via SkillBridge",
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
    title: "Apply for jobs/internships",
    description: "Leverage your new skills for career opportunities"
  }];
  return <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">SkillBridge</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/courses" className="text-foreground hover:text-primary transition-colors">
              Courses
            </Link>
            {user ? <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Welcome, {profile?.full_name || profile?.email}
                </span>
                <Link to="/profile">
                  <Button variant="outline" size="sm">Profile</Button>
                </Link>
              </div> : <Link to="/auth">
                <Button variant="outline" size="sm">Sign In</Button>
              </Link>}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            From awareness to employment -{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              SkillBridge
            </span>{" "}
            guides you every step of the way.
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transform your career journey with our comprehensive learning platform. 
            From skill development to job placement, we're with you at every milestone.
          </p>

          {/* Video/Animation Placeholder */}
          <div className="bg-gradient-card rounded-2xl p-8 mb-12 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center group cursor-pointer">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-6 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Play className="h-12 w-12 text-primary" />
                </div>
                <p className="text-lg font-medium text-foreground">Watch how SkillBridge works</p>
                <p className="text-muted-foreground">2 minute intro video</p>
              </div>
            </div>
          </div>

          <Link to="/courses">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-primary hover:shadow-primary">
              Browse Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Journey to Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our proven 5-step process to transform your skills and accelerate your career
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30"></div>
            
            {steps.map((step, index) => {
            const IconComponent = step.icon;
            return <div key={index} className="relative">
                  <Card className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                    <CardHeader className="text-center pb-4">
                      <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-primary">
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
                  {index < steps.length - 1 && <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>}
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-primary">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Industry-Recognized Certificates</h3>
              <p className="text-muted-foreground">
                Earn certificates that employers value and trust, backed by our industry partnerships.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Expert Instructors</h3>
              <p className="text-muted-foreground">
                Learn from industry professionals with years of real-world experience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-primary">
                <Briefcase className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Career Support</h3>
              <p className="text-muted-foreground">
                Get job placement assistance and career guidance throughout your journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-primary rounded-3xl p-12 text-center shadow-primary">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">Join learners who have successfully bridged their skills gap and achieved their career goals.</p>
          <Link to="/courses">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Partners Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Collaborating with industry leaders to provide you with the best learning experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-28 h-24 mx-auto mb-4 flex items-center justify-center">
              <img src={naanMudhalvanLogo} alt="Naan Mudhalvan" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">Naan Mudhalvan</h3>
          </div>
          <div className="text-center">
            <div className="w-28 h-24 mx-auto mb-4 flex items-center justify-center">
              <img src={essiLogo} alt="Electronics Sector Skill Council of India" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Electronics Sector Skill Council of India</h3>
          </div>
          <div className="text-center">
            <div className="w-28 h-24 mx-auto mb-4 flex items-center justify-center">
              <img src={chamberLogo} alt="Chamber of Commerce" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Pollachi Chamber of Commerce</h3>
          </div>
          <div className="text-center">
            <div className="w-28 h-24 mx-auto mb-4 flex items-center justify-center">
              <img src={mcetLogo} alt="Mahalingam College of Engineering" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Mahalingam College of Engineering</h3>
          </div>
          <div className="text-center">
            <div className="w-28 h-24 mx-auto mb-4 flex items-center justify-center">
              <img src={paceLogo} alt="PA College of Engineering and Technology" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">PA College of Engineering and Technology</h3>
          </div>
          <div className="text-center">
            <div className="w-28 h-24 mx-auto mb-4 flex items-center justify-center">
              <img src={vvdnLogo} alt="VVDN Technologies" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">VVDN Technologies</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-border">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">SkillBridge</span>
          </div>
          <p className="text-muted-foreground">
            Bridging the gap between skills and opportunities.
          </p>
        </div>
      </footer>
    </div>;
};
export default Home;