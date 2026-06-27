"use client";
import { motion } from "framer-motion";

export function HomestaySkeletonCard({
  index = 0,
}: {
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group"
    >
      <div className="overflow-hidden rounded-2xl border bg-background">
        {/* Image Skeleton */}
        <div className="aspect-[4/5] w-full animate-pulse bg-muted" />

        <div className="p-4 space-y-3">
          {/* Title */}
          <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />

          {/* Location */}
          <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />

          {/* Price */}
          <div className="h-4 w-1/3 animate-pulse rounded bg-muted" />

          {/* Rating */}
          <div className="h-4 w-1/4 animate-pulse rounded bg-muted" />
        </div>
      </div>
    </motion.div>
  );
}