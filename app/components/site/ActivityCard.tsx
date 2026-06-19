import { Link } from "@tanstack/react-router";
import { Clock, Users, MapPin } from "lucide-react";
import type { Activity } from "@/data";
import { inr } from "./format";
import { motion } from "framer-motion";

export function ActivityCard({ a, index = 0 }: { a: Activity; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group overflow-hidden rounded-2xl border border-hairline bg-card transition hover:shadow-lift"
    >
      <Link to="/activities/$id" params={{ id: a.id }} className="block">
        <div className="relative overflow-hidden">
          <img src={a.image} alt={a.title} loading="lazy" className="aspect-[5/4] w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium backdrop-blur">{a.category}</div>
        </div>
        <div className="space-y-2 p-5">
          <h3 className="font-display text-lg leading-snug">{a.title}</h3>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {a.village}</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {a.duration}</span>
            <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {a.groupSize}</span>
          </div>
          <div className="flex items-end justify-between pt-1">
            <div><span className="font-semibold">{inr(a.price)}</span><span className="text-xs text-muted-foreground"> / person</span></div>
            <div className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium">{a.difficulty}</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}