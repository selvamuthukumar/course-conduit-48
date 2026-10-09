import gallery16 from "@/assets/gallery/gallery-16.png";
import gallery1 from "@/assets/gallery/gallery-1.png";
import gallery22 from "@/assets/gallery/gallery-22.png";
import gallery17 from "@/assets/gallery/gallery-17.png";
import gallery11 from "@/assets/gallery/gallery-11.jpg";
import gallery20 from "@/assets/gallery/gallery-20.png";
import gallery19 from "@/assets/gallery/gallery-19.png";
import gallery15 from "@/assets/gallery/gallery-15.jpg";
import gallery13 from "@/assets/gallery/gallery-13.jpg";
import toiArticle from "@/assets/media/toi-article.jpg";
import etEdgeArticle from "@/assets/media/et-edge.jpg";
import tribuneArticle from "@/assets/media/tribune.jpg";
import newsbytesArticle from "@/assets/media/newsbytes.jpg";
import educationExpressArticle from "@/assets/media/education-express.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { GraduationCap, UserPlus, BookOpen, Award, Briefcase, ArrowRight, CheckCircle, Mail, ExternalLink, Linkedin, Newspaper } from "lucide-react";
import vvdnLogo from "@/assets/vvdn_site_logo.svg";
import founderPhoto from "@/assets/founder-photo.png";
import naanMudhalvanLogo from "@/assets/logo_naan_mudhalvan.svg";
import essiLogo from "@/assets/logo_essi.png";
import mcetLogo from "@/assets/mcet-logo.png";
import paceLogo from "@/assets/pace-logo-new.png";
import chamberLogo from "@/assets/chamber-logo-new.png";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IntroLoader from "@/components/IntroLoader";

const marqueeImages = [gallery16, gallery1, gallery22, gallery17, gallery11, gallery20, gallery19, gallery15, gallery13];

// Media coverage slots. Drop an image import above and set `image` to it,
// then fill `outlet` (publication name) and `url` (article link).
type MediaItem = { outlet: string; image: string | null; url: string };
const mediaCoverage: MediaItem[] = [
  { outlet: "The Times of India", image: toiArticle, url: "https://timesofindia.indiatimes.com/education/news/he-is-in-class-12-and-plays-tennis-at-the-national-level-now-gurugram-student-priyansh-agarwal-has-built-ai-technology-to-analyse-his-game/articleshow/133752485.cms" },
  { outlet: "ET Edge", image: etEdgeArticle, url: "https://etedge-insights.com/" },
  { outlet: "The Tribune", image: tribuneArticle.url, url: "https://www.tribuneindia.com/news/delhi/from-tennis-court-to-ai-class-12-tennis-player-builds-tool-to-decode-his-game/" },
  { outlet: "NewsBytes", image: newsbytesArticle.url, url: "https://www.newsbytesapp.com/news/science/gurugram-12th-grader-priyansh-agarwal-builds-tennedge-ai-system/tldr" },
  { outlet: "The Education Express", image: educationExpressArticle.url, url: "https://www.theeducationexpress.in/2026/09/04/priyansh-agarwal-tennedge-ai-class-12-student-builds-tennis-tech/" },
];

const Home = () => {

  const steps = [{
    icon: UserPlus,
    title: "Sign up via Skill Bridge",
    description: "Students register for Skill Bridge program through their college."
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
  return <div className="min-h-screen bg-gradient-bg">
      {/* Intro loader */}
      <IntroLoader />

      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-nav-foreground">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/40 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-24 w-[32rem] h-[32rem] rounded-full bg-secondary/30 blur-3xl animate-float-slow" />
        <div className="relative container mx-auto px-4 pt-24 pb-28">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-nav-foreground/20 bg-nav-foreground/10 px-4 py-1.5 text-sm font-medium backdrop-blur mb-8">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              Government-backed electronics skilling
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.05] tracking-tight">
              From awareness to employment —{" "}
              <span className="text-gradient-hero">Skill Bridge</span>{" "}
              guides you every step of the way.
            </h1>
            <p className="text-xl text-nav-foreground/75 mb-12 max-w-2xl mx-auto">
              Transform your career journey with our comprehensive learning platform.
              From skill development to job placement, we're with you at every milestone.
            </p>
            <Link to="/courses">
              <Button size="lg" className="text-lg px-10 py-7 rounded-full bg-gradient-primary shadow-glow hover:scale-105 transition-transform">
                Browse Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: GraduationCap, value: "500+ Trainees", label: "Built training-to-employment pipeline reaching 500+ students in electronics manufacturing sector" },
              { icon: Award, value: "Govt. of India", label: "Appreciated by the Ministry of Skill Development, Government of India and Chambers of Commerce" },
              { icon: UserPlus, value: " Mobilised 15000+ Students", label: "Mobilised 15,000+ students across NCR and Tamil Nadu for government-backed electronics skills training" },
              { icon: Briefcase, value: "70% Trainees", label: "Secured jobs after completing our government-backed training programs" },
            ].map((s, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform animate-fade-in" style={{ animationDelay: `${0.2 + i * 0.15}s`, animationFillMode: "both" }}>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-gradient-hero">{s.value}</div>
                <div className="mt-2 text-nav-foreground/75">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background" />

      {/* Scrolling gallery strip */}
      <section className="relative overflow-hidden bg-gradient-hero text-nav-foreground py-10 border-b border-nav-foreground/10">
        <div className="w-full overflow-hidden marquee-track" style={{ width: "max-content" }}>
          <div className="flex gap-6 px-3">
            {[...marqueeImages, ...marqueeImages].map((img, i) => (
              <img key={i} src={img} alt="Skill Bridge training session" className="h-52 w-80 object-cover rounded-2xl shadow-glow border border-nav-foreground/15" />
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </section>
      </section>

      {/* Media Coverage */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            In the Media
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Coverage of our work across newspapers and media publications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {mediaCoverage.map((item, i) => (
            <div key={i} className="flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-gradient-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="flex aspect-[4/3] w-full items-center justify-center bg-muted/50">
                {item.image ? (
                  <img src={item.image} alt={item.outlet || "Media coverage"} className="h-full w-full object-contain" />
                ) : (
                  <div className="flex flex-col items-center gap-2 px-4 text-center text-muted-foreground">
                    <Newspaper className="h-8 w-8 opacity-50" />
                    <span className="text-xs font-medium">Add screenshot</span>
                  </div>
                )}
              </div>
              <div className="mt-auto border-t border-border/60 p-4">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                    {item.outlet || "Read the article"}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  </a>
                ) : (
                  <div className="rounded-lg border border-dashed border-border px-3 py-2 text-center text-xs text-muted-foreground">
                    {"\n"}
                  </div>
                )}
              </div>
            </div>
          ))}
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
              <p className="text-muted-foreground">Earn certificates that employers value and trust, backed by our industry partnerships.</p>
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
      <section id="partners-section" className="container mx-auto px-4 py-16">
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

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            What Our Learners Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear directly from learners who have transformed their careers with Skill Bridge
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-card transition-all duration-300 overflow-visible">
            <CardContent className="p-4 sm:p-6 relative">
              <iframe
                className="aspect-video w-full rounded-xl relative z-10"
                src="https://www.youtube.com/embed/MVxgm3Ia3kE?si=Vsr5kCiOD2Yk_w-T"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card transition-all duration-300 overflow-visible">
            <CardContent className="p-4 sm:p-6 relative">
              <iframe
                className="aspect-video w-full rounded-xl relative z-10"
                src="https://www.youtube.com/embed/zg-sVZZviMg?si=lKATm3UuTzHAVXMF"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Meet the Founder
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hi, I am <span className="font-semibold text-foreground">Priyansh Agarwal</span>, a national tennis player and a student based in Gurugram who is passionate about technology and community building. Through this initiative, I aim to bridge the gap between students and the Naan Mudhalvan scheme, helping students in Tamil Nadu gain industry skills and improve their chances of meaningful employment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to raise awareness and simplify enrolment, making government-backed training more accessible for every student.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-card">
              <img
                src={founderPhoto}
                alt="Priyansh Agarwal - Founder"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or need support? We're here to help you on your learning journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-primary">
                <ExternalLink className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Contact Form</h3>
              <p className="text-muted-foreground mb-6">Fill out our form for detailed inquiries and support</p>
              <Button asChild className="bg-gradient-primary hover:shadow-primary">
                <a href="https://forms.gle/uh86ujPGrAWVgbRx7" target="_blank" rel="noopener noreferrer">
                  Open Form
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Email Us</h3>
              <p className="text-muted-foreground mb-6">Reach out directly for quick questions or support</p>
              <Button asChild variant="secondary">
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
    </div>;
};
export default Home;
