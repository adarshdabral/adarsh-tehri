"use client";

import { motion } from "framer-motion";

export function ProductSkeletonCard({
  index = 0,
}: {
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.04,
        duration: 0.5,
      }}
    >
      <div className="overflow-hidden rounded-2xl border bg-background">
        <div className="aspect-square animate-pulse bg-muted" />

        <div className="p-4 space-y-3">
          <div className="h-3 w-1/3 rounded bg-muted animate-pulse" />

          <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />

          <div className="h-4 w-1/2 rounded bg-muted animate-pulse" />

          <div className="h-4 w-1/4 rounded bg-muted animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}