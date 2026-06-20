"use client";

import { useEffect, useRef, useState } from "react";

export function Stat({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(([ent]) => {
      if (!ent.isIntersecting) return;

      const start = performance.now();
      const dur = 1400;

      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);

        setN(Math.round(value * eased));

        if (p < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      obs.disconnect();
    });

    obs.observe(ref.current);

    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <div className="font-display text-4xl md:text-5xl">
        {n.toLocaleString("en-IN")}
        {suffix}
      </div>

      <div className="mt-2 text-sm text-muted-foreground">
        {label}
      </div>
    </div>
  );
}