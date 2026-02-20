import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import skillbridgeLogo from "@/assets/skillbridge-logo.png";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const smoothScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const targetPosition = section.offsetTop - 80;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500;
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

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
    setMobileOpen(false);
    if (location.pathname === "/") {
      smoothScrollToSection("contact-section");
    } else {
      navigate("/");
      setTimeout(() => smoothScrollToSection("contact-section"), 100);
    }
  };

  const handlePartnersClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === "/") {
      smoothScrollToSection("partners-section");
    } else {
      navigate("/");
      setTimeout(() => smoothScrollToSection("partners-section"), 100);
    }
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/courses" },
    { label: "About Us", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "FAQs", path: "/faq" },
  ];

  const linkClasses = (path: string) =>
    `relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
      isActive(path)
        ? "bg-[hsl(var(--nav-accent)/0.15)] text-[hsl(var(--nav-accent))]"
        : "text-[hsl(var(--nav-foreground)/0.8)] hover:text-[hsl(var(--nav-foreground))] hover:bg-[hsl(var(--nav-accent)/0.08)]"
    }`;

  const buttonClasses =
    "relative px-3 py-2 text-sm font-medium transition-colors rounded-md text-[hsl(var(--nav-foreground)/0.8)] hover:text-[hsl(var(--nav-foreground))] hover:bg-[hsl(var(--nav-accent)/0.08)]";

  return (
    <header className="sticky top-0 z-50 bg-[image:var(--gradient-nav)] shadow-[var(--shadow-nav)] backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={skillbridgeLogo} alt="Skill Bridge logo" className="h-12 w-auto object-contain rounded-sm bg-[hsl(var(--nav-foreground)/0.1)] p-1" />
            <span className="text-xl font-bold text-[hsl(var(--nav-foreground))]">Skill Bridge</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={linkClasses(link.path)}
              >
                {link.label}
              </Link>
            ))}
            <button onClick={handlePartnersClick} className={buttonClasses}>
              Partners
            </button>
            <button onClick={handleContactClick} className={buttonClasses}>
              Contact
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-[hsl(var(--nav-foreground))] hover:bg-[hsl(var(--nav-accent)/0.1)]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-1 border-t border-[hsl(var(--nav-accent)/0.15)] pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={linkClasses(link.path)}
              >
                {link.label}
              </Link>
            ))}
            <button onClick={handlePartnersClick} className={buttonClasses + " text-left"}>
              Partners
            </button>
            <button onClick={handleContactClick} className={buttonClasses + " text-left"}>
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
