import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow, title, sub, action,
}: { eyebrow?: string; title: string; sub?: string; action?: ReactNode }) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
        <h2 className="font-display text-3xl leading-tight text-balance md:text-5xl">{title}</h2>
        {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{sub}</p>}
      </div>
      {action}
    </div>
  );
}