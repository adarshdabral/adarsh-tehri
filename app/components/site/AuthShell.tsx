import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import heroImg from "@/assets/hero-tehri-lake.jpg";
import type { ReactNode } from "react";

export function AuthShell({ title, sub, children }: { title: string; sub?: string; children: ReactNode }) {
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <div className="flex flex-col justify-between bg-surface px-6 py-8 md:px-16 md:py-12">
        <Logo />
        <div className="mx-auto w-full max-w-md">
          <h1 className="font-display text-3xl md:text-4xl">{title}</h1>
          {sub && <p className="mt-2 text-muted-foreground">{sub}</p>}
          <div className="mt-8">{children}</div>
        </div>
        <div className="text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">← Back to home</Link>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image
          src={heroImg}
          alt="Tehri Lake"
          fill
          className="absolute inset-0 h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <div className="eyebrow text-white/80">Sustainable Tourism</div>
          <p className="mt-3 font-display text-3xl leading-tight">My homestay income now pays for my daughter&apos;s college in Dehradun.</p>
          <p className="mt-2 text-sm text-white/80">Sushila Devi, Host since 2019 — Khand Gaon</p>
        </div>
      </div>
    </div>
  );
}