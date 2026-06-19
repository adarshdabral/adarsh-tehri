import { Link } from "@tanstack/react-router";
import { Plus, Star } from "lucide-react";
import type { Product } from "@/data";
import { inr } from "./format";
import { useApp } from "@/stores/app-store";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function ProductCard({ p, index = 0 }: { p: Product; index?: number }) {
  const add = useApp((s) => s.addToCart);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.04, duration: 0.5 }}
      className="group"
    >
      <Link to="/marketplace/$id" params={{ id: p.id }} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-muted">
          <img src={p.image} alt={p.name} loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
          <button onClick={(e) => { e.preventDefault(); add(p.id); toast.success(`${p.name} added to cart`); }} className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-foreground text-background shadow-card transition hover:scale-110" aria-label="Add to cart">
            <Plus className="h-4 w-4" />
          </button>
          {p.mrp && (
            <div className="absolute left-3 top-3 rounded-full bg-accent-warm px-2.5 py-1 text-[11px] font-semibold text-accent-warm-foreground">Save {inr(p.mrp - p.price)}</div>
          )}
        </div>
        <div className="mt-3 space-y-1">
          <div className="text-[11px] uppercase tracking-wider text-teal">{p.vendor}</div>
          <h3 className="line-clamp-1 font-display text-base">{p.name}</h3>
          <div className="flex items-center justify-between pt-1">
            <div>
              <span className="font-semibold">{inr(p.price)}</span>
              {p.mrp && <span className="ml-1.5 text-xs text-muted-foreground line-through">{inr(p.mrp)}</span>}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="h-3 w-3 fill-foreground text-foreground" /> {p.rating}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}