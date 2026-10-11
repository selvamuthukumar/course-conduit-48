import { useEffect } from "react";

// Site-wide scroll reveal: fades/slides in headings, cards, images and sections as they enter view.
const SELECTOR =
  "main section h1, main section h2, main section h3, main section p, section h2, section h3, section > div > p, [class*='card'], .rounded-lg, .rounded-xl, .rounded-2xl, section img, footer > div";

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("sr-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.dataset.sr || el.closest("nav, header, [role='dialog'], .marquee-track, .sr-skip")) return;
        if (el.parentElement?.closest("[data-sr]:not(.sr-in)")) return; // avoid double-nesting
        el.dataset.sr = "1";
        const sibs = el.parentElement ? Array.from(el.parentElement.children) : [];
        el.style.setProperty("--sr-delay", `${Math.min(sibs.indexOf(el), 5) * 80}ms`);
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add("sr-in");
        } else {
          el.classList.add("sr");
          io.observe(el);
        }
      });
    };

    scan();
    const mo = new MutationObserver(() => requestAnimationFrame(scan));
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);
  return null;
}
