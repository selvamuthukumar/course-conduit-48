import { GraduationCap } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const smoothScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const targetPosition = section.offsetTop - 80; // Offset for header
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500; // 1.5 seconds for slow, smooth scroll
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      // Easing function for smooth animation
      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      smoothScrollToSection("contact-section");
    } else {
      navigate("/");
      setTimeout(() => {
        smoothScrollToSection("contact-section");
      }, 100);
    }
  };

  const handlePartnersClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      smoothScrollToSection("partners-section");
    } else {
      navigate("/");
      setTimeout(() => {
        smoothScrollToSection("partners-section");
      }, 100);
    }
  };

  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">Skill Bridge</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-foreground hover:text-primary transition-colors ${
              isActive("/") ? "text-primary font-medium" : ""
            }`}
          >
            Home
          </Link>
          <Link 
            to="/courses" 
            className={`text-foreground hover:text-primary transition-colors ${
              isActive("/courses") ? "text-primary font-medium" : ""
            }`}
          >
            Courses
          </Link>
          <Link 
            to="/about" 
            className={`text-foreground hover:text-primary transition-colors ${
              isActive("/about") ? "text-primary font-medium" : ""
            }`}
          >
            About Us
          </Link>
          <button 
            onClick={handlePartnersClick}
            className="text-foreground hover:text-primary transition-colors"
          >
            Partners
          </button>
          <Link 
            to="/gallery" 
            className={`text-foreground hover:text-primary transition-colors ${
              isActive("/gallery") ? "text-primary font-medium" : ""
            }`}
          >
            Gallery
          </Link>
          <Link 
            to="/faq" 
            className={`text-foreground hover:text-primary transition-colors ${
              isActive("/faq") ? "text-primary font-medium" : ""
            }`}
          >
            FAQs
          </Link>
          <button 
            onClick={handleContactClick}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;