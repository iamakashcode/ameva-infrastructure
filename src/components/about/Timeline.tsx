"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

const milestones = [
  {
    year: "2007",
    title: "The first 22 acres",
    copy: "Ameva is founded with a single licensed plotted colony in New Gurugram. All 310 plots sell before the community centre is finished.",
  },
  {
    year: "2011",
    title: "Construction brought in-house",
    copy: "After a subcontractor walks off a site mid-slab, we build our own construction division. It has poured every slab since.",
  },
  {
    year: "2015",
    title: "First high-rise",
    copy: "Nova Residences proves that a single-tower, three-homes-per-floor format can work commercially in Sector 65.",
  },
  {
    year: "2019",
    title: "The delay penalty clause",
    copy: "We add a buyer-payable penalty to every booking form, three years before it becomes common practice in the region.",
  },
  {
    year: "2022",
    title: "Commercial vertical launched",
    copy: "Quorum opens the Grade-A office portfolio on Golf Course Extension Road, leasing 60% of its floor plate pre-completion.",
  },
  {
    year: "2025",
    title: "Six million square feet",
    copy: "The portfolio crosses 6.4M sq. ft. delivered across 42 projects, with 2,100 families now living in an Ameva address.",
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.9"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[4.6rem] top-2 hidden h-[calc(100%-3rem)] w-px bg-navy-900/12 lg:block">
        <motion.div style={{ scaleY, originY: 0 }} className="h-full w-full bg-steel-600" />
      </div>

      <ol className="space-y-12">
        {milestones.map((m, i) => (
          <li key={m.year}>
            <Reveal delay={i * 0.04} amount={0.4}>
              <div className="group grid gap-4 lg:grid-cols-[9rem_1fr] lg:gap-10">
                <div className="flex items-start gap-5">
                  <span className="font-display text-3xl leading-none text-steel-600 lg:text-4xl">
                    {m.year}
                  </span>
                  <span className="mt-1.5 hidden size-2.5 shrink-0 rounded-full bg-cream-50 ring-2 ring-cream-100/25 transition-all duration-500 group-hover:bg-steel-600 group-hover:ring-steel-400/40 lg:block lg:translate-x-[0.15rem]" />
                </div>

                <div className="border-b border-navy-900/10 pb-8">
                  <h3 className="text-2xl leading-tight text-navy-900">{m.title}</h3>
                  <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-navy-900/62">
                    {m.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
