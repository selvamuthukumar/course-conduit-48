import { Button } from "@/components/ui/button";
import { GraduationCap, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-8 border-t border-border">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Button asChild size="sm" className="bg-[#0077B5] text-white hover:bg-[#005885] p-2">
            <a 
              href="https://www.linkedin.com/company/skill-bridge-initiative/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BRifq2tjiSWevfo0YmJS68w%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold text-foreground">SkillBridge</span>
        </div>
        <p className="text-muted-foreground">
          Bridging the gap between skills and opportunities.
        </p>
      </div>
    </footer>
  );
};

export default Footer;