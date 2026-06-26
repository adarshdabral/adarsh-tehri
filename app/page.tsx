import Image from "next/image";

import {
  Search,
  MapPin,
  Users,
  Sparkles,
} from "lucide-react";

import heroImg from "@/assets/hero-tehri-lake.jpg";

import { getLandingHomestays } from "@/lib/homestays";
import { getLandingActivities } from "@/lib/activities";
import { getLandingProducts } from "@/lib/products";

import { SiteShell } from "@/components/site/SiteShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { HomestayCard } from "@/components/site/HomestayCard";
import { ProductCard } from "@/components/site/ProductCard";
import { ActivityCard } from "@/components/site/ActivityCard";
import { EventCard } from "@/components/site/EventCard";
import { Stat } from "@/components/site/Stat";
import { Button } from "@/components/ui/button";

import { HomestaySkeletonCard } from "@/components/site/HomestaySkeletonCard";
import { ActivitySkeletonCard } from "@/components/site/ActivitySkeletonCard";

import { HeroContent } from "@/components/site/HeroContent";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [
    homestays,
    activitiesData,
    productsData,
  ] = await Promise.all([
    getLandingHomestays(),
    getLandingActivities(),
    getLandingProducts(),
  ]);

  const homestaySkeletonCount = Math.max(
    0,
    4 - homestays.length
  );

  const activitySkeletonCount = Math.max(
    0,
    6 - activitiesData.length
  );

  const productSkeletonCount = Math.max(
    0,
    6 - productsData.length
  );

  return (
    <SiteShell transparentHeader>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <Image
          src={heroImg}
          alt="Tehri Lake"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container-app text-white">
            <HeroContent />

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

                <Button type="submit">
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
          {homestays.slice(0, 4).map((h: any, i: number) => (
            <HomestayCard
              key={h._id}
              h={h}
              index={i}
            />
          ))}

          {Array.from({
            length: homestaySkeletonCount,
          }).map((_, i) => (
            <HomestaySkeletonCard
              key={`homestay-skeleton-${i}`}
            />
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
            {activitiesData
              .slice(0, 6)
              .map((a: any, i: number) => (
                <ActivityCard
                  key={a._id}
                  a={a}
                  index={i}
                />
              ))}

            {Array.from({
              length: activitySkeletonCount,
            }).map((_, i) => (
              <ActivitySkeletonCard
                key={`activity-skeleton-${i}`}
                index={i}
              />
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
          {activitiesData
            .slice(0, 3)
            .map((e: any, i: number) => (
              <EventCard
                key={e._id}
                e={e}
                index={i}
                large
              />
            ))}

          {Array.from({
            length: Math.max(
              0,
              3 - activitiesData.length
            ),
          }).map((_, i) => (
            <div
              key={`event-skeleton-${i}`}
              className="aspect-[16/11] rounded-2xl bg-gray-200 animate-pulse"
            />
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
            {productsData
              .slice(0, 6)
              .map((p: any, i: number) => (
                <ProductCard
                  key={p._id}
                  p={p}
                  index={i}
                />
              ))}

            {Array.from({
              length: productSkeletonCount,
            }).map((_, i) => (
              <div
                key={`product-skeleton-${i}`}
                className="h-64 rounded-xl bg-gray-200 animate-pulse"
              />
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
            <Stat
              value={248}
              label="Homestays"
            />

            <Stat
              value={37}
              label="Villages"
            />

            <Stat
              value={612}
              label="Women earning"
            />

            <Stat
              value={92}
              suffix="%"
              label="Revenue retained"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}