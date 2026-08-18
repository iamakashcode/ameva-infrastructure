"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { featuredProjects } from "@/lib/projects";
import { Button } from "@/components/ui/Button";

/**
 * Pins the section and converts vertical scroll into a horizontal pan
 * across the featured developments.
 */
export function FeaturedProjects() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);

    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);

    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const x = useSpring(rawX, { stiffness: 220, damping: 40, mass: 0.5 });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={wrapRef}
      className="relative bg-cream-50"
      style={{ height: `calc(100svh + ${distance}px)` }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} className="flex items-center gap-6 pl-5 md:gap-8 md:pl-10">
          {/* Intro panel */}
          <div className="w-[78vw] shrink-0 sm:w-[42vw] lg:w-[30vw]">
            <span className="eyebrow flex items-center gap-3 text-steel-600">
              <span className="h-px w-8 bg-steel-600/45" />
              Featured Developments
            </span>
            <h2 className="mt-5 text-4xl leading-[1.05] text-navy-900 sm:text-5xl">
              Four addresses,{" "}
              <span className="italic text-steel-600">one standard.</span>
            </h2>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-navy-900/62">
              Every Ameva development is built by the same in-house team, to the
              same published specification — whether it is a four-home boulevard
              or a forty-storey tower.
            </p>
            <div className="mt-9 hidden items-center gap-3 text-navy-900/48 lg:flex">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase">
                Scroll to pan
              </span>
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </div>
            <div className="mt-9 lg:hidden">
              <Button href="/projects" variant="outline">
                All Projects
              </Button>
            </div>
          </div>

          {/* Project panels */}
          {featuredProjects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group relative h-[62svh] w-[80vw] shrink-0 overflow-hidden rounded-2xl sm:h-[68svh] sm:w-[54vw] lg:w-[38vw]"
            >
              <Image
                src={p.cover}
                alt={p.name}
                fill
                sizes="(min-width: 1024px) 38vw, 80vw"
                priority={i < 2}
                className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-navy-950/10" />

              <span className="absolute left-5 top-5 rounded-full bg-navy-950/60 px-3.5 py-1.5 text-[0.65rem] tracking-wide text-cream-100/85 backdrop-blur">
                {p.status}
              </span>

              <span className="absolute right-5 top-5 font-display text-5xl text-cream-100/20">
                0{i + 1}
              </span>

              <div className="absolute inset-x-5 bottom-5">
                <p className="flex items-center gap-1.5 text-[0.75rem] text-steel-300">
                  <MapPin className="size-3.5" strokeWidth={1.5} />
                  {p.location}
                </p>
                <h3 className="mt-2 text-3xl leading-tight text-cream-100 sm:text-4xl">
                  {p.name}
                </h3>
                <p className="mt-2 max-w-xs text-sm text-cream-100/60">{p.tagline}</p>

                <div className="mt-5 flex items-end justify-between border-t border-cream-100/15 pt-4">
                  <div>
                    <p className="text-[0.6rem] tracking-[0.18em] text-cream-100/45 uppercase">
                      Starting
                    </p>
                    <p className="mt-1 font-display text-2xl text-cream-100">
                      {p.priceFrom}
                    </p>
                  </div>
                  <span className="grid size-11 place-items-center rounded-full border border-cream-100/25 text-cream-100 transition-colors duration-500 group-hover:border-steel-400 group-hover:bg-steel-400 group-hover:text-navy-950">
                    <ArrowUpRight className="size-4" strokeWidth={1.75} />
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* Outro panel */}
          <div className="flex w-[70vw] shrink-0 flex-col justify-center pr-10 sm:w-[36vw] lg:w-[26vw]">
            <h3 className="text-3xl leading-tight text-navy-900 sm:text-4xl">
              Eight more, across{" "}
              <span className="italic text-steel-600">four verticals.</span>
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-navy-900/62">
              Residences, villas, plotted townships and Grade-A commercial —
              browse the full portfolio with live availability.
            </p>
            <div className="mt-8">
              <Button href="/projects">View All Projects</Button>
            </div>
          </div>
        </motion.div>

        {/* Progress rail */}
        <div className="container-x mt-10 hidden lg:block">
          <div className="h-px w-full overflow-hidden bg-navy-900/12">
            <motion.div style={{ width: progress }} className="h-full bg-steel-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
