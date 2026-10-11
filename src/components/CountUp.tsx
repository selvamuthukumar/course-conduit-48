import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  /** Animation length in ms */
  duration?: number;
  /** ms to wait after start conditions are met before counting */
  delay?: number;
  /** Wait until the element scrolls into view before counting */
  waitForView?: boolean;
  /** Wait until the intro loader has finished before counting */
  waitForIntro?: boolean;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const CountUp = ({
  target,
  duration = 1000,
  delay = 0,
  waitForView = false,
  waitForIntro = false,
}: CountUpProps) => {
  const reduced = prefersReducedMotion();
  const [value, setValue] = useState(reduced ? target : 1);
  const [started, setStarted] = useState(reduced);
  const spanRef = useRef<HTMLSpanElement>(null);
  const visibleRef = useRef(!waitForView);
  const introDoneRef = useRef(
    !waitForIntro || Boolean((window as any).__introDone)
  );

  useEffect(() => {
    if (started) return;
    const maybeStart = () => {
      if (visibleRef.current && introDoneRef.current) setStarted(true);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        visibleRef.current = entries.some((entry) => entry.isIntersecting);
        maybeStart();
      },
      { threshold: 0.25 }
    );
    if (waitForView && spanRef.current) observer.observe(spanRef.current);
    const onIntroDone = () => {
      introDoneRef.current = true;
      maybeStart();
    };
    if (waitForIntro && !introDoneRef.current) {
      window.addEventListener("intro-done", onIntroDone);
    }
    maybeStart();
    return () => {
      observer.disconnect();
      window.removeEventListener("intro-done", onIntroDone);
    };
  }, [started, waitForView, waitForIntro]);

  useEffect(() => {
    if (!started || reduced) return;
    let raf = 0;
    let startTime: number | null = null;
    const timer = window.setTimeout(() => {
      const tick = (ts: number) => {
        if (startTime === null) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.max(1, Math.round(target * eased)));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [started, reduced, target, duration, delay]);

  return <span ref={spanRef}>{value}</span>;
};

export default CountUp;
