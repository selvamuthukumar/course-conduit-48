import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Heart, Users, MapPin, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const AboutUs = () => {
  return <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skill Bridge
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting youth to opportunities, transforming potential into careers.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 pb-20">
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
                  Skill Bridge was created to make the next step clearer. We guide students into structured, government-backed training programs that focus on real skills and real jobs. With practical courses and recognized certifications, Skill Bridge helps turn questions about the future into confidence and direction.
                </p>
                
                


                
                
                
                <p className="text-lg leading-relaxed">
                  Skill Bridge raises awareness, simplifies enrollment, and helps students access government-backed training that's <span className="text-foreground font-medium">accessible, visible, and actionable</span>.
                </p>
              </div>
            </div>
            
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-gradient-secondary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-12 w-12 text-secondary-foreground" />
                  </div>
                  
                  <p className="text-3xl text-zinc-900 font-light">“Great opportunities almost never fit your schedule.”</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm font-medium text-foreground">— Reid Hoffman</p>
                    <p className="text-sm text-muted-foreground">Founder, LinkedIn</p>
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
                  At Skill Bridge, our mission is to make sure <span className="font-bold">no student is left behind</span> because of a lack of awareness or access.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
                  <div className="bg-primary-foreground/10 rounded-xl p-6">
                    <Users className="h-8 w-8 text-primary-foreground mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold text-primary-foreground mb-3">200+ Students</h3>
                    <p className="text-primary-foreground/90 text-sm">
                      Successfully enrolled 200+ students in government funded electronic courses through partnerships.
                    </p>
                  </div>

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
                    <p className="text-primary-foreground/90 text-sm">Equipping students with practical, electronic industry-relevant skills for immediate employment</p>
                  </div>
                  
                  <div className="bg-primary-foreground/10 rounded-xl p-6">
                    <MapPin className="h-8 w-8 text-primary-foreground mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold text-primary-foreground mb-3">Pan-India Vision</h3>
                    <p className="text-primary-foreground/90 text-sm">
                      Piloted in Tamil Nadu and expanding across India to maximize impact
                    </p>
                  </div>

                  <div className="bg-primary-foreground/10 rounded-xl p-6">
                    <Users className="h-8 w-8 text-primary-foreground mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold text-primary-foreground mb-3">2200+ Students</h3>
                    <p className="text-primary-foreground/90 text-sm">
                      Mobilized 2,200+ students through skilling outreach sessions.
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

      <Footer />
    </div>;
};
export default AboutUs;