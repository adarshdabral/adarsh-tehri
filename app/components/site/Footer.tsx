"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { partners } from "@/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-hairline bg-cream">
      <div className="container-app grid gap-12 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Adarsh Tehri is a community-owned platform connecting travellers to homestays, artisans
            and experiences across the Tehri Garhwal Himalayas — built to keep tourism revenue in
            the villages where it belongs.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex max-w-sm gap-2">
            <Input placeholder="Your email" className="bg-card" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>

        {[
          { title: "Explore", links: [["Homestays", "/homestays"], ["Experiences", "/activities"], ["Events", "/events"], ["Marketplace", "/marketplace"]] as const },
          { title: "Host", links: [["Become a host", "/auth/register"], ["Host dashboard", "/dashboard/host"], ["Vendor dashboard", "/dashboard/vendor"], ["Organizer", "/dashboard/organizer"]] as const },
          { title: "Company", links: [["Our story", "/"], ["Impact", "/"], ["Press", "/"], ["Contact", "/"]] as const },
        ].map((col) => (
          <div key={col.title}>
            <div className="eyebrow mb-4">{col.title}</div>
            <ul className="space-y-2.5 text-sm">
              {col.links.map(([label, to]) => (
                <li key={label}>
                  <Link href={to} className="text-foreground/80 transition hover:text-foreground">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-hairline">
        <div className="container-app py-8">
          <div className="eyebrow mb-4 text-center">In partnership with</div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {partners.map((p) => <span key={p}>{p}</span>)}
          </div>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="container-app flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row">
          <div>© 2026 Adarsh Tehri Foundation • A non-profit social enterprise</div>
          <div className="flex gap-5"><a href="#" className="hover:text-foreground">Privacy</a><a href="#" className="hover:text-foreground">Terms</a><a href="#" className="hover:text-foreground">Impact report</a></div>
        </div>
      </div>
    </footer>
  );
}