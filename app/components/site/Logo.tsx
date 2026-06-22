import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className={`h-8 w-8 ${light ? "text-white" : "text-primary"}`} fill="none">
        <path d="M4 28c4-10 10-14 16-14s12 4 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 32c3-2 6-2 8 0M16 32c3-2 6-2 8 0M24 32c3-2 6-2 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <circle cx="20" cy="9" r="2.5" fill="currentColor" />
      </svg>
      <div className="leading-none">
        <div className={`font-display text-lg ${light ? "text-white" : "text-foreground"}`}>Adarsh Tehri</div>
        <div className={`text-[10px] uppercase tracking-[0.22em] ${light ? "text-white/70" : "text-muted-foreground"}`}>
          Tehri • Garhwal
        </div>
      </div>
    </Link>
  );
}