import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/lib/projects";

// Solid light chips so they stay legible over any cover photo.
const statusTone: Record<string, string> = {
  "Ready to Move": "bg-cream-50/92 text-emerald-700 ring-emerald-700/20",
  "Under Construction": "bg-cream-50/92 text-amber-700 ring-amber-700/20",
  "New Launch": "bg-cream-50/92 text-steel-700 ring-steel-700/25",
  "Sold Out": "bg-navy-900/75 text-cream-100/85 ring-cream-100/20",
};

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm shadow-navy-900/5 transition-all duration-500 hover:border-steel-600/35 hover:shadow-xl hover:shadow-navy-900/10"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={project.cover}
          alt={project.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[0.65rem] font-medium tracking-wide ring-1 ring-inset backdrop-blur ${
            statusTone[project.status]
          }`}
        >
          {project.status}
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-cream-50/85 px-3 py-1.5 text-[0.65rem] tracking-wide text-navy-900/80 backdrop-blur">
          {project.category}
        </span>

        {/* slide-up arrow */}
        <span className="absolute bottom-4 right-4 grid size-10 translate-y-3 place-items-center rounded-full bg-steel-600 text-cream-50 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-4" strokeWidth={2} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl leading-tight text-navy-900 transition-colors duration-300 group-hover:text-steel-600">
          {project.name}
        </h3>

        <p className="mt-2 flex items-center gap-1.5 text-[0.8rem] text-navy-900/52">
          <MapPin className="size-3.5 text-steel-600" strokeWidth={1.5} />
          {project.location}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-navy-900/58">
          {project.tagline}
        </p>

        <div className="mt-6 flex items-end justify-between border-t border-navy-900/10 pt-5">
          <div>
            <p className="text-[0.62rem] tracking-[0.18em] text-navy-900/45 uppercase">
              Starting
            </p>
            <p className="mt-1 font-display text-2xl text-navy-900">
              {project.priceFrom}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[0.62rem] tracking-[0.18em] text-navy-900/45 uppercase">
              Configuration
            </p>
            <p className="mt-1 text-sm text-navy-900/80">{project.configuration}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
