"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { EASE } from "@/lib/motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/MagneticButton";

const HERO_IMG =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85";

const line = {
  hidden: { y: "112%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, delay: 0.35 + i * 0.11, ease: EASE },
  }),
};

const quickStats = [
  { k: "18+", v: "Years Building" },
  { k: "42", v: "Projects Delivered" },
  { k: "6.4M", v: "Sq. Ft. Developed" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28 sm:pt-32"
    >
      {/* Backdrop */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 -z-20">
        <Image
          src={HERO_IMG}
          alt="Ameva Infrastructure development skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Scrims */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/85 via-navy-950/55 to-navy-950"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_120%,rgba(127,168,212,0.22),transparent_62%)]"
      />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="container-x relative pb-24 sm:pb-14"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
          className="flex items-center gap-3"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-steel-400 opacity-70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-steel-400" />
          </span>
          <span className="eyebrow text-cream-100/70">
            Gurugram · Delhi NCR · Since 2007
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="mt-6 max-w-5xl text-[clamp(2.4rem,min(8.4vw,12.5vh),7rem)] leading-[0.94] tracking-tight text-cream-100">
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span custom={0} variants={line} initial="hidden" animate="show" className="block">
              Landmarks made
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span custom={1} variants={line} initial="hidden" animate="show" className="block">
              to <span className="italic text-steel-300">outlive</span> the
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span custom={2} variants={line} initial="hidden" animate="show" className="block">
              skyline.
            </motion.span>
          </span>
        </h1>

        {/* Sub + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.9, ease: EASE }}
          className="mt-7 flex flex-col gap-8 sm:mt-9 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-md text-[0.975rem] leading-relaxed text-cream-100/65">
            Residences, independent floors and commercial landmarks across Delhi
            NCR — engineered to a specification we publish before we sell, and
            handed over on the date we promised.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Magnetic strength={0.2}>
              <Button href="/projects" variant="onDark">
                Explore Projects
              </Button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Button href="/contact" variant="onDarkOutline">
                Book a Site Visit
              </Button>
            </Magnetic>
          </div>
        </motion.div>

        {/* Stat rail */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.9, ease: EASE }}
          className="mt-8 flex items-end justify-between gap-6 border-t border-cream-100/15 pt-6 sm:mt-12"
        >
          <ul className="flex flex-wrap gap-8 sm:gap-14">
            {quickStats.map((s) => (
              <li key={s.v}>
                <p className="font-display text-3xl text-cream-100 sm:text-4xl">{s.k}</p>
                <p className="mt-1 text-[0.7rem] tracking-wide text-cream-100/50">{s.v}</p>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-3 text-cream-100/50 sm:flex">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase">Scroll</span>
            <motion.span
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
              className="grid size-9 place-items-center rounded-full border border-cream-100/20"
            >
              <ArrowDown className="size-3.5" strokeWidth={1.5} />
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
