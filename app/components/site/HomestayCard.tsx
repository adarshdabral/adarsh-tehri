"use client";

import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { inr } from "./format";

type Homestay = {
  _id: string;
  title: string;
  location: string;
  price: number;
  images: string[];
  rating: number;
  category: string;
};

export function HomestayCard({
  h,
  index = 0,
}: {
  h: Homestay;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group"
    >
      <Link
        href={`/homestays/${h._id}`}
        className="block"
      >
        <div className="relative overflow-hidden rounded-2xl bg-muted">
          <img
            src={
              h.images?.length > 0
                ? h.images[0]
                : "https://placehold.co/600x750?text=No+Image"
            }
            alt={h.title}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur capitalize">
            {h.category}
          </div>
        </div>

        <div className="mt-3.5 space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="line-clamp-1 font-display text-lg leading-snug">
              {h.title}
            </h3>

            <div className="flex shrink-0 items-center gap-1 text-sm">
              <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
              <span className="font-medium">
                {h.rating?.toFixed(1) ?? "0.0"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {h.location}
          </div>

          <div className="pt-1">
            <span className="font-semibold">
              {inr(h.price)}
            </span>
            <span className="text-sm text-muted-foreground">
              {" "}
              / night
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}