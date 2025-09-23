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

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home page, just scroll to contact section
      const contactSection = document.getElementById("contact-section");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page then scroll to contact section
      navigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact-section");
        contactSection?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handlePartnersClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home page, just scroll to partners section
      const partnersSection = document.getElementById("partners-section");
      partnersSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page then scroll to partners section
      navigate("/");
      setTimeout(() => {
        const partnersSection = document.getElementById("partners-section");
        partnersSection?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">SkillBridge</span>
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