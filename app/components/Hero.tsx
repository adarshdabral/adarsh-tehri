"use client";

import Link from "next/link";
import { Mountain, Store } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/tehri-hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Organic Texture */}
      <div className="absolute inset-0 bg-[url('/textures/paper.png')] opacity-10" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <p className="mb-4 tracking-[0.4em] text-stone-200 uppercase">
            Uttarakhand • Community • Heritage
          </p>

          <h1 className="font-serif text-6xl md:text-8xl font-bold text-white">
            TEHRI
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-32 bg-amber-300" />

          <h2 className="mt-8 text-3xl md:text-5xl font-semibold leading-tight text-white">
            Connecting People,
            <br />
            Preserving Heritage,
            <br />
            Building Local Prosperity
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-stone-200">
            An integrated digital platform revitalizing the Tehri region
            through sustainable tourism, local commerce, cultural
            preservation, and community engagement.
          </p>
        </div>

        {/* Bottom Login Options */}
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/consumer/login"
            className="group flex items-center gap-3 rounded-full bg-[#F5F0E6] px-8 py-4 font-medium text-[#1E4D3D] transition hover:scale-105"
          >
            <Mountain size={22} />
            Continue as Visitor
          </Link>

          <Link
            href="/business/login"
            className="group flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20"
          >
            <Store size={22} />
            Business Owner Login
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce text-white/70">
          ↓ Discover Tehri
        </div>
      </div>
    </section>
  );
}