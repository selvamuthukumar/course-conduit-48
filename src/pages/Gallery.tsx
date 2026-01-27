import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

import gallery1 from "@/assets/gallery/gallery-1.png";
import gallery2 from "@/assets/gallery/gallery-2.png";
import gallery4 from "@/assets/gallery/gallery-4.png";
import gallery8 from "@/assets/gallery/gallery-8.jpg";
import gallery9 from "@/assets/gallery/gallery-9.jpg";
import gallery10 from "@/assets/gallery/gallery-10.jpg";
import gallery11 from "@/assets/gallery/gallery-11.jpg";
import gallery12 from "@/assets/gallery/gallery-12.jpg";
import gallery13 from "@/assets/gallery/gallery-13.jpg";
import gallery14 from "@/assets/gallery/gallery-14.jpg";
import gallery15 from "@/assets/gallery/gallery-15.jpg";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: gallery8, alt: "AI/ML walkthrough session" },
    { id: 2, src: gallery1, alt: "SkillBridge presentation at seminar" },
    { id: 3, src: gallery14, alt: "Speaker addressing students in hall" },
    { id: 4, src: gallery11, alt: "Session at KIT Kalaignarkarunanidhi Institute" },
    { id: 5, src: gallery2, alt: "Learners participating in training session" },
    { id: 6, src: gallery12, alt: "Students in formal attire at workshop" },
    { id: 7, src: gallery15, alt: "Training session in computer lab" },
    { id: 8, src: gallery10, alt: "Interactive classroom training session" },
    { id: 9, src: gallery4, alt: "Interactive session in computer lab" },
    { id: 10, src: gallery9, alt: "Large hall presentation session" },
    { id: 11, src: gallery13, alt: "Seminar room training with students" },
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {galleryImages.map((image) => (
            <Card 
              key={image.id} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;
