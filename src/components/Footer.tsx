import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import skillbridgeLogo from "@/assets/skillbridge-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[image:var(--gradient-nav)] text-[hsl(var(--nav-foreground))]">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={skillbridgeLogo} alt="Skill Bridge logo" className="h-8 w-8 object-contain" />
            <span className="text-lg font-bold">Skill Bridge</span>
          </div>
          <p className="text-sm text-[hsl(var(--nav-foreground)/0.7)]">
            Bridging the gap between skills and opportunities.
          </p>
          <Button asChild size="sm" className="bg-[hsl(var(--nav-accent)/0.15)] text-[hsl(var(--nav-accent))] hover:bg-[hsl(var(--nav-accent)/0.25)] border-0">
            <a
              href="https://www.linkedin.com/company/skill-bridge-initiative/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BRifq2tjiSWevfo0YmJS68w%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              Follow us
            </a>
          </Button>
        </div>
        <div className="mt-6 pt-6 border-t border-[hsl(var(--nav-accent)/0.15)] text-center text-xs text-[hsl(var(--nav-foreground)/0.5)]">
          © {new Date().getFullYear()} Skill Bridge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
