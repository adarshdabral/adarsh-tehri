export function PageHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="border-b border-hairline bg-surface">
      <div className="container-app py-12 md:py-16">
        {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
        <h1 className="font-display text-4xl leading-tight md:text-6xl text-balance">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{sub}</p>}
      </div>
    </div>
  );
}