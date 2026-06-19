import type { ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { SiteShell } from "./SiteShell";
import { useApp } from "@/stores/app-store";
import { demoUsers } from "@/data";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const NAV: Record<string, { to: string; label: string }[]> = {
  tourist: [
    { to: "/dashboard/tourist", label: "Overview" },
    { to: "/wishlist", label: "Wishlist" },
    { to: "/orders", label: "Orders" },
    { to: "/profile", label: "Profile" },
  ],
  host: [
    { to: "/dashboard/host", label: "Overview" },
    { to: "/homestays", label: "My listings" },
    { to: "/profile", label: "Profile" },
  ],
  vendor: [
    { to: "/dashboard/vendor", label: "Overview" },
    { to: "/marketplace", label: "Storefront" },
    { to: "/profile", label: "Profile" },
  ],
  organizer: [
    { to: "/dashboard/organizer", label: "Overview" },
    { to: "/events", label: "My events" },
    { to: "/profile", label: "Profile" },
  ],
  admin: [
    { to: "/dashboard/admin", label: "Overview" },
    { to: "/homestays", label: "Listings" },
    { to: "/marketplace", label: "Products" },
    { to: "/profile", label: "Profile" },
  ],
};

export function DashboardShell({ role, title, sub, children }: { role: keyof typeof NAV; title: string; sub?: string; children: ReactNode }) {
  const userId = useApp((s) => s.currentUserId);
  const user = demoUsers.find((u) => u.id === userId)!;
  const loc = useLocation();

  return (
    <SiteShell>
      <div className="border-b border-hairline bg-surface">
        <div className="container-app py-10 md:py-14">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="eyebrow mb-2">{role} dashboard</div>
              <h1 className="font-display text-3xl md:text-5xl text-balance">{title}</h1>
              {sub && <p className="mt-2 max-w-2xl text-muted-foreground">{sub}</p>}
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-hairline bg-card p-3 pr-4">
              <Avatar className="h-10 w-10"><AvatarImage src={user.avatar} /></Avatar>
              <div>
                <div className="text-sm font-medium">{user.name}</div>
                <Badge variant="secondary" className="mt-0.5 text-[10px] capitalize">{user.role}</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-app grid gap-8 py-10 lg:grid-cols-[220px_1fr]">
        <aside>
          <nav className="sticky top-24 space-y-1">
            {NAV[role].map((n) => {
              const active = loc.pathname === n.to;
              return (
                <Link key={n.to} to={n.to} className={`block rounded-lg px-3 py-2 text-sm transition ${active ? "bg-foreground text-background" : "text-foreground/80 hover:bg-muted"}`}>
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <div>{children}</div>
      </div>
    </SiteShell>
  );
}

export function KpiCard({ label, value, delta, hint }: { label: string; value: string; delta?: string; hint?: string }) {
  return (
    <div className="rounded-2xl border border-hairline bg-card p-5">
      <div className="eyebrow">{label}</div>
      <div className="mt-2 font-display text-3xl">{value}</div>
      <div className="mt-1 flex items-center gap-2 text-xs">
        {delta && <span className="rounded-full bg-secondary px-2 py-0.5 text-teal">{delta}</span>}
        {hint && <span className="text-muted-foreground">{hint}</span>}
      </div>
    </div>
  );
}