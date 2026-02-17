import { useEffect, useRef } from "react";

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const el = ref.current;
    if (el) {
      // Observe the element itself
      if (el.classList.contains("animate-on-scroll") || el.classList.contains("stagger-children")) {
        observer.observe(el);
      }
      // Observe children with animation classes
      el.querySelectorAll(".animate-on-scroll, .stagger-children").forEach((child) => {
        observer.observe(child);
      });
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};
