"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { inr } from "./format";

type Product = {
  _id: string;
  name: string;
  description?: string;
  price: number;
  mrp?: number;
  image?: string;
  vendor: string;
  rating: number;
  stock?: number;
  category?: string;
};

export function ProductCard({
  p,
  index = 0,
}: {
  p: Product;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.04,
        duration: 0.5,
      }}
      className="group"
    >
      <Link
        href={`/marketplace/${p._id}`}
        className="block"
      >
        <div className="relative overflow-hidden rounded-2xl bg-muted">
          <img
            src={
              p.image && p.image.trim() !== ""
                ? p.image
                : "https://placehold.co/600x600?text=No+Image"
            }
            alt={p.name}
            loading="lazy"
            className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
          />

          {p.mrp && p.mrp > p.price && (
            <div className="absolute left-3 top-3 rounded-full bg-accent-warm px-2.5 py-1 text-[11px] font-semibold text-accent-warm-foreground">
              Save {inr(p.mrp - p.price)}
            </div>
          )}
        </div>

        <div className="mt-3 space-y-1">
          <div className="text-[11px] uppercase tracking-wider text-teal">
            {p.vendor}
          </div>

          <h3 className="line-clamp-1 font-display text-base">
            {p.name}
          </h3>

          <div className="flex items-center justify-between pt-1">
            <div>
              <span className="font-semibold">
                {inr(p.price)}
              </span>

              {p.mrp && p.mrp > p.price && (
                <span className="ml-1.5 text-xs text-muted-foreground line-through">
                  {inr(p.mrp)}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="h-3 w-3 fill-foreground text-foreground" />
              {p.rating.toFixed(1)}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}