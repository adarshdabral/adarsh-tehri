"use client";
import Link from "next/link";
import { Calendar, MapPin, Ticket } from "lucide-react";
import type { EventItem } from "@/types/event";
import { inr } from "./format";
import { motion } from "framer-motion";

export function EventCard({ e, index = 0, large = false }: { e: EventItem; index?: number; large?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <Link
href={`/events/${e._id}`}
className="block"
>
        <div className="relative overflow-hidden">
         <img
  src={e.image || "/placeholder-event.jpg"}
  alt={e.title}
  loading="lazy"
  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
    large ? "aspect-[16/11]" : "aspect-[4/3]"
  }`}
/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium backdrop-blur">
        <Calendar className="h-3 w-3" /> Activity
          </div>
          <div className="absolute inset-x-4 bottom-4 text-white">
            <div className="text-[11px] uppercase tracking-wider text-white/80">{e.category}</div>
            <h3 className={`mt-1 font-display ${large ? "text-2xl md:text-3xl" : "text-xl"} leading-tight`}>{e.title}</h3>
            <p className="mt-1 line-clamp-1 text-sm text-white/85">
  {e.duration || "Local Experience"}
</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs text-white/80"><MapPin className="h-3 w-3" /> {e.village}</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-foreground">
                <Ticket className="h-3.5 w-3.5" /> {e.price === 0 ? "Free" : inr(e.price)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}