import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const team = [
  {
    name: "Arjun Mehrotra",
    role: "Founder & Managing Director",
    bio: "Civil engineer by training. Spent nine years on site before starting Ameva, and still signs off every structural drawing.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Nandita Rao",
    role: "Director, Design & Planning",
    bio: "Leads master planning and unit layouts. Responsible for the deep-balcony format that runs through every Ameva residence.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sameer Qureshi",
    role: "Head of Construction",
    bio: "Runs the in-house build division of 340 people. Has personally handed over 28 of our 42 completed projects.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Priya Balakrishnan",
    role: "Director, Legal & Compliance",
    bio: "Handles RERA filings, title diligence and buyer documentation. The reason our encumbrance certificates arrive before the cheque.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
  },
];

export function Team() {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {team.map((m) => (
        <RevealItem key={m.name}>
          <article className="group relative h-full overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm shadow-navy-900/5 transition-all duration-500 hover:border-steel-600/35 hover:shadow-lg hover:shadow-navy-900/8">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src={m.image}
                alt={m.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 92vw"
                className="object-cover grayscale transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${m.name} on LinkedIn`}
                className="absolute right-4 top-4 grid size-9 translate-y-2 place-items-center rounded-full bg-cream-100/95 text-navy-900 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <ArrowUpRight className="size-4" strokeWidth={1.75} />
              </a>
            </div>

            <div className="p-6">
              <h3 className="text-xl leading-tight text-navy-900">{m.name}</h3>
              <p className="mt-1.5 text-[0.72rem] tracking-[0.14em] text-steel-600 uppercase">
                {m.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-navy-900/58">{m.bio}</p>
            </div>
          </article>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
