import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our programs and enrollment process
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gradient-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                Do the students need to pay for enrolling in the course?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                No. Students do not need to pay any fees as the training is fully supported under the government scheme. In fact, participants also receive a small stipend during their training period, making it easier to focus on learning without financial burden.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gradient-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                What is the duration of the course?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                The course duration varies depending on the specific program. Please check the individual course details for specific duration information, or contact our support team for more details about your chosen course.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gradient-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                Which organisation would provide the certificate on completion of the course?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                The Electronic Skills Council of India would provide the certificates to the enrollees.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gradient-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                What are the placement opportunities?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Students who train with dedication and successfully complete their certification will be supported by SkillBridge in connecting with reputed firms. While no program can guarantee a job, our focus is on preparing you for real industry needs and aiding you in securing strong placement opportunities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gradient-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                What is the medium of the course?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Courses are delivered in English along with regional language support to ensure easy understanding. For example, in Tamil Nadu, sessions are conducted in both English and Tamil, so that every student can learn comfortably and confidently.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQ;