import { Link } from "@tanstack/react-router";
import { Heart, Star, MapPin } from "lucide-react";
import type { Homestay } from "@/data";
import { inr } from "./format";
import { useApp } from "@/stores/app-store";
import { motion } from "framer-motion";

export function HomestayCard({ h, index = 0 }: { h: Homestay; index?: number }) {
  const wishlist = useApp((s) => s.wishlist);
  const toggle = useApp((s) => s.toggleWishlist);
  const liked = wishlist.includes(h.id);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group"
    >
      <Link to="/homestays/$id" params={{ id: h.id }} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-muted">
          <img src={h.images[0]} alt={h.title} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
          <button onClick={(e) => { e.preventDefault(); toggle(h.id); }} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 backdrop-blur transition hover:scale-110" aria-label="Save">
            <Heart className={`h-4 w-4 transition ${liked ? "fill-accent-warm text-accent-warm" : "text-foreground"}`} />
          </button>
          <div className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">{h.type}</div>
        </div>
        <div className="mt-3.5 space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="line-clamp-1 font-display text-lg leading-snug">{h.title}</h3>
            <div className="flex shrink-0 items-center gap-1 text-sm">
              <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
              <span className="font-medium">{h.rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> {h.village}
          </div>
          <div className="pt-1">
            <span className="font-semibold">{inr(h.price)}</span>
            <span className="text-sm text-muted-foreground"> / night</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}