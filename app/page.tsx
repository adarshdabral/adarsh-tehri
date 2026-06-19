// import Hero from "./components/Hero";

// export default function Home() {
//   return (
//     <main>
//       <Hero />
//     </main>
//   );
// }
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Users,
  ArrowRight,
  Sparkles,
  Quote,
} from "lucide-react";

import heroImg from "@/assets/hero-tehri-lake.jpg";

import { SiteShell } from "@/app/components/site/SiteShell";
import { SectionHeader } from "@/app/components/site/SectionHeader";
import { HomestayCard } from "@/app/components/site/HomestayCard";
import { ProductCard } from "@/app/components/site/ProductCard";
import { ActivityCard } from "@/app/components/site/ActivityCard";
import { EventCard } from "@/app/components/site/EventCard";
import { Stat } from "@/app/components/site/Stat";
import { Button } from "@/app/components/ui/button";

import {
  homestays,
  products,
  activities,
  events,
  testimonials,
} from "@/data";

export default function HomePage() {
  return (
    <SiteShell transparentHeader>
      {/* HERO SECTION */}

      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <img
          src={heroImg.src}
          alt="Tehri Lake"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container-app text-white">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="eyebrow text-white/80">
                Tehri Garhwal • Uttarakhand
              </div>

              <h1 className="mt-4 text-5xl md:text-7xl font-bold">
                Where the lake holds the sky — and the village holds the story.
              </h1>

              <p className="mt-6 max-w-xl text-white/80">
                Stay with families, walk with farmers, eat what they grew.
              </p>
            </motion.div>

            {/* SEARCH BAR */}

            <div className="mt-10 rounded-2xl border border-white/30 bg-white/10 p-2 backdrop-blur-xl">
              <form className="grid md:grid-cols-[1.2fr_1fr_1fr_auto] gap-2">
                <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-black">
                  <MapPin size={18} />
                  <input
                    className="w-full outline-none"
                    placeholder="Tehri Lake"
                  />
                </div>

                <div className="rounded-xl bg-white px-4 py-3 text-black">
                  <input
                    className="w-full outline-none"
                    placeholder="Dates"
                  />
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-black">
                  <Users size={18} />
                  <input
                    className="w-full outline-none"
                    placeholder="Guests"
                  />
                </div>

                <Button>
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </form>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/80">
              <Sparkles size={14} />
              <span>248 verified homestays</span>
              <span>•</span>
              <span>37 Garhwali villages</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOMESTAYS */}

      <section className="container-app py-24">
        <SectionHeader
          eyebrow="Hand-picked homestays"
          title="Sleep where the lake meets the mountain."
          sub="Every home is owned by a Tehri family."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {homestays.slice(0, 4).map((h, i) => (
            <HomestayCard key={h.id} h={h} index={i} />
          ))}
        </div>
      </section>

      {/* ACTIVITIES */}

      <section className="bg-surface py-24">
        <div className="container-app">
          <SectionHeader
            eyebrow="Experiences"
            title="Walk further. Eat slower. Listen longer."
            sub="Guided by villagers."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.slice(0, 6).map((a, i) => (
              <ActivityCard key={a.id} a={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}

      <section className="container-app py-24">
        <SectionHeader
          eyebrow="What's On"
          title="Festivals, fairs and folk evenings."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {events.slice(0, 3).map((e, i) => (
            <EventCard key={e.id} e={e} index={i} large />
          ))}
        </div>
      </section>

      {/* MARKETPLACE */}

      <section className="bg-cream py-24">
        <div className="container-app">
          <SectionHeader
            eyebrow="Marketplace"
            title="Take a piece of the mountain home."
          />

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {products.slice(0, 6).map((p, i) => (
              <ProductCard key={p.id} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}

      <section className="container-app py-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-5xl font-bold">
              A tourism model that gives more than it takes.
            </h2>

            <p className="mt-4 text-muted-foreground">
              92% revenue retained locally.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <Stat value={248} label="Homestays" />
            <Stat value={37} label="Villages" />
            <Stat value={612} label="Women earning" />
            <Stat value={92} suffix="%" label="Revenue retained" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="bg-black text-white py-24">
        <div className="container-app">
          <h2 className="text-5xl font-bold max-w-3xl">
            It feels less like a booking and more like coming home.
          </h2>

          <div className="grid lg:grid-cols-4 gap-6 mt-12">
            {testimonials.map((t) => (
              <div key={t.id} className="rounded-2xl bg-white/5 p-6">
                <Quote size={18} />

                <p className="mt-4">{t.quote}</p>

                <div className="mt-5">
                  <p>{t.author}</p>
                  <p className="text-sm text-white/60">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}