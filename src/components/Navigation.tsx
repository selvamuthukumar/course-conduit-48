import { Link, useLocation, useNavigate } from "react-router-dom";
import skillbridgeLogo from "@/assets/skillbridge-logo.png";

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
    <header className="container mx-auto px-4 py-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={skillbridgeLogo} alt="Skill Bridge logo" className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110" />
          <span className="text-2xl font-bold text-foreground tracking-tight">Skill Bridge</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link 
            to="/" 
            className={`relative text-foreground hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
              isActive("/") ? "text-primary font-medium after:scale-x-100" : ""
            }`}
          >
            Home
          </Link>
          <Link 
            to="/courses" 
            className={`relative text-foreground hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
              isActive("/courses") ? "text-primary font-medium after:scale-x-100" : ""
            }`}
          >
            Courses
          </Link>
          <Link 
            to="/about" 
            className={`relative text-foreground hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
              isActive("/about") ? "text-primary font-medium after:scale-x-100" : ""
            }`}
          >
            About Us
          </Link>
          <button 
            onClick={handlePartnersClick}
            className="relative text-foreground hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Partners
          </button>
          <Link 
            to="/gallery" 
            className={`relative text-foreground hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
              isActive("/gallery") ? "text-primary font-medium after:scale-x-100" : ""
            }`}
          >
            Gallery
          </Link>
          <Link 
            to="/faq" 
            className={`relative text-foreground hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
              isActive("/faq") ? "text-primary font-medium after:scale-x-100" : ""
            }`}
          >
            FAQs
          </Link>
          <button 
            onClick={handleContactClick}
            className="relative text-foreground hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;