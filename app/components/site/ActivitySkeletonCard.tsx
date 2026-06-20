"use client";

import { motion } from "framer-motion";

export function ActivitySkeletonCard({
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
        delay: index * 0.05,
      }}
      className="overflow-hidden rounded-2xl border"
    >
      <div className="aspect-[5/4] animate-pulse bg-muted" />

      <div className="space-y-3 p-5">
        <div className="h-5 w-3/4 rounded bg-muted animate-pulse" />

        <div className="h-4 w-1/2 rounded bg-muted animate-pulse" />

        <div className="h-4 w-1/3 rounded bg-muted animate-pulse" />

        <div className="h-4 w-1/4 rounded bg-muted animate-pulse" />
      </div>
    </motion.div>
  );
}