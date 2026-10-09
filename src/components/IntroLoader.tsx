import { useEffect, useState } from "react";
import { GraduationCap, Award, Users } from "lucide-react";

const IntroLoader = () => {
  const [phase, setPhase] = useState<"loading" | "fading" | "done">(
    () => ((window as any).__introShown ? "done" : "loading")
  );

  useEffect(() => {
    if (phase === "done") return;
    (window as any).__introShown = true;
    const fadeTimer = setTimeout(() => setPhase("fading"), 2600);
    const doneTimer = setTimeout(() => setPhase("done"), 3200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[image:var(--gradient-nav)] flex flex-col items-center justify-center transition-opacity duration-500 ${
        phase === "fading" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center px-6">
        {/* Logo mark */}
        <div className="intro-item" style={{ animationDelay: "0.1s" }}>
          <span className="text-3xl md:text-4xl font-bold text-[hsl(var(--nav-foreground))] tracking-tight">
            Skill Bridge
          </span>
        </div>

        <div className="h-px w-24 mx-auto my-10 bg-[hsl(var(--nav-accent)/0.4)] intro-line" />

        {/* Stat 1 */}
        <div className="intro-item flex items-center justify-center gap-3 mb-6" style={{ animationDelay: "0.6s" }}>
          <GraduationCap className="h-6 w-6 text-[hsl(var(--nav-accent))] shrink-0" />
          <span className="text-xl md:text-2xl font-semibold text-[hsl(var(--nav-foreground))]">
            500+ students trained across India
          </span>
        </div>

        {/* Stat 2 */}
        <div className="intro-item flex items-center justify-center gap-3 mb-6" style={{ animationDelay: "1.2s" }}>
          <Award className="h-6 w-6 text-[hsl(var(--nav-accent))] shrink-0" />
          <span className="text-xl md:text-2xl font-semibold text-[hsl(var(--nav-foreground))]">
            Appreciated by Government of India
          </span>
        </div>

        {/* Stat 3 */}
        <div className="intro-item flex items-center justify-center gap-3" style={{ animationDelay: "1.8s" }}>
          <Users className="h-6 w-6 text-[hsl(var(--nav-accent))] shrink-0" />
          <span className="text-xl md:text-2xl font-semibold text-[hsl(var(--nav-foreground))]">
            15000+ students mobilized of electronic courses
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntroLoader;
