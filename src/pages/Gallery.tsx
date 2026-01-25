import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import gallery1 from "@/assets/gallery/gallery-1.png";
import gallery2 from "@/assets/gallery/gallery-2.png";
import gallery3 from "@/assets/gallery/gallery-3.png";
import gallery4 from "@/assets/gallery/gallery-4.png";
import gallery5 from "@/assets/gallery/gallery-5.png";
import gallery6 from "@/assets/gallery/gallery-6.png";
import gallery7 from "@/assets/gallery/gallery-7.png";
const Gallery = () => {
  const galleryImages = [{
    id: 1,
    src: gallery1,
    alt: "SkillBridge presentation at seminar"
  }, {
    id: 2,
    src: gallery2,
    alt: "Learners participating in training session"
  }, {
    id: 3,
    src: gallery3,
    alt: "Speaker at SkillBridge workshop"
  }, {
    id: 4,
    src: gallery4,
    alt: "Interactive session in computer lab"
  }, {
    id: 5,
    src: gallery5,
    alt: "Training session with learners"
  }, {
    id: 6,
    src: gallery6,
    alt: "Presentation at SkillBridge event"
  }, {
    id: 7,
    src: gallery7,
    alt: "Team interaction at SkillBridge"
  }];
  return <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Glimpses from our training sessions, workshops, and events
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryImages.map(image => <Card key={image.id} className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  
                </div>
              </CardContent>
            </Card>)}
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Gallery;