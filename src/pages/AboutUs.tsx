import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Target, 
  Heart, 
  Users, 
  MapPin, 
  Zap,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">SkillBridge</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/courses" className="text-foreground hover:text-primary transition-colors">
              Courses
            </Link>
            <Button variant="outline" size="sm">Sign In</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              SkillBridge
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting youth to opportunities, transforming potential into careers.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 pt-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-primary rounded-full p-3">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
              </div>
              
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  Every student wonders what comes next after college — some dream of big companies, some want to work with technology, and many are simply unsure where to begin. That uncertainty can feel overwhelming, especially when the path from education to employment isn't always straightforward.
                </p>
                
                <p className="text-lg leading-relaxed">
                  SkillBridge was created to make the next step clearer. We guide students into structured, government-backed training programs that focus on real skills and real jobs. With practical courses and recognized certifications, SkillBridge helps turn questions about the future into confidence and direction.
                </p>
                
                <p className="text-lg leading-relaxed">
                  I'm Priyansh Agarwal, a national-level tennis player and student from Gurugram, passionate about technology and community building.
                </p>
                
                <p className="text-lg leading-relaxed">
                  I started SkillBridge to close the gap between students and skill opportunities. Many talented students miss out because no one shows them the path.
                </p>
                
                <p className="text-lg leading-relaxed">
                  SkillBridge raises awareness, simplifies enrollment, and helps students access government-backed training that's <span className="text-foreground font-medium">accessible, visible, and actionable</span>.
                </p>
              </div>
            </div>
            
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-gradient-secondary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-12 w-12 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Bridging the Gap</h3>
                  <p className="text-muted-foreground text-lg">
                    "No student should be left behind because of lack of awareness or access to opportunities."
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm font-medium text-foreground">— Priyansh Agarwal</p>
                    <p className="text-sm text-muted-foreground">Founder, SkillBridge</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="bg-gradient-primary rounded-full p-3">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Mission</h2>
            </div>
          </div>

          <Card className="bg-gradient-primary border-0 shadow-primary">
            <CardContent className="p-12">
              <div className="text-center">
                <p className="text-xl md:text-2xl text-primary-foreground leading-relaxed mb-8">
                  At SkillBridge, our mission is to make sure <span className="font-bold">no student is left behind</span> because of a lack of awareness or access.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="bg-primary-foreground/10 rounded-xl p-6">
                    <Zap className="h-8 w-8 text-primary-foreground mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold text-primary-foreground mb-3">Building Movement</h3>
                    <p className="text-primary-foreground/90 text-sm">
                      We are building a movement that connects youth directly to government-backed training
                    </p>
                  </div>
                  
                  <div className="bg-primary-foreground/10 rounded-xl p-6">
                    <GraduationCap className="h-8 w-8 text-primary-foreground mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold text-primary-foreground mb-3">Job-Ready Skills</h3>
                    <p className="text-primary-foreground/90 text-sm">
                      Equipping students with practical, industry-relevant skills for immediate employment
                    </p>
                  </div>
                  
                  <div className="bg-primary-foreground/10 rounded-xl p-6">
                    <MapPin className="h-8 w-8 text-primary-foreground mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold text-primary-foreground mb-3">Pan-India Vision</h3>
                    <p className="text-primary-foreground/90 text-sm">
                      Piloted in Tamil Nadu and expanding across India to maximize impact
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Transforming Potential into Impact
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            We are here to turn talent into impact, creating a bridge between where students are and where they want to be. Together, we're not just building careers—we're building futures.
          </p>
          
          <a href="https://forms.gle/vTmobjGSr2kWs3hs9" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-primary hover:shadow-primary">
              Join Our Mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
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
    </div>
  );
};

export default AboutUs;