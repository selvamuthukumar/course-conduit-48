import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, TrendingUp, Award, Building, MapPin, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const OurImpact = () => {
  const impactStats = [
    {
      icon: Users,
      number: "1,000+",
      label: "Students Trained",
      description: "Across various skill development programs"
    },
    {
      icon: Award,
      number: "85%",
      label: "Certification Rate",
      description: "Students successfully completing programs"
    },
    {
      icon: Building,
      number: "50+",
      label: "Partner Organizations",
      description: "Industry collaborations and partnerships"
    },
    {
      icon: TrendingUp,
      number: "70%",
      label: "Employment Rate",
      description: "Graduates finding relevant employment"
    }
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      course: "Electronics & Communication",
      achievement: "Secured placement at VVDN Technologies",
      quote: "SkillBridge transformed my career path. The practical training and industry connections made all the difference."
    },
    {
      name: "Rahul Kumar",
      course: "Digital Skills Training",
      achievement: "Started own tech consultancy",
      quote: "The skills I learned through SkillBridge gave me the confidence to become an entrepreneur."
    },
    {
      name: "Anjali Patel",
      course: "IoT Development",
      achievement: "Promoted to Team Lead within 6 months",
      quote: "The hands-on experience and certification helped me advance quickly in my career."
    }
  ];

  const initiatives = [
    {
      icon: MapPin,
      title: "Rural Outreach Program",
      description: "Bringing skill development opportunities to remote areas across Tamil Nadu",
      impact: "Reached 15+ villages, trained 300+ rural youth"
    },
    {
      icon: GraduationCap,
      title: "College Partnership Initiative",
      description: "Collaborating with engineering colleges to bridge the skill gap",
      impact: "Active partnerships with 8 premier institutions"
    },
    {
      icon: Building,
      title: "Industry Connect Program",
      description: "Direct placement assistance and internship opportunities",
      impact: "200+ successful placements in last year"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Impact & Work
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming lives through skill development, creating opportunities, and building a skilled workforce for tomorrow.
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Measuring Our Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real numbers, real impact - see how we're making a difference in the lives of students and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-primary">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{stat.label}</h3>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Key Initiatives
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strategic programs designed to maximize impact and reach every corner of our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => {
            const IconComponent = initiative.icon;
            return (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-gradient-secondary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{initiative.title}</h3>
                  <p className="text-muted-foreground mb-4">{initiative.description}</p>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="text-sm font-medium text-primary">{initiative.impact}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Success Stories */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real students whose lives have been transformed through our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{story.quote}"
                </blockquote>
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-foreground">{story.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{story.course}</p>
                  <p className="text-sm font-medium text-primary">{story.achievement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-primary rounded-3xl p-12 text-center shadow-primary">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Be Part of Our Impact Story
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through our skill development programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://forms.gle/vTmobjGSr2kWs3hs9" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
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
    </div>
  );
};

export default OurImpact;