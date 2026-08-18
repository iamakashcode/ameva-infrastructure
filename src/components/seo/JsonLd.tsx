import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

/** Organization graph, rendered once in the root layout. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${site.url}/#organization`,
    name: site.name,
    description: site.description,
    url: site.url,
    logo: `${site.url}/logo.jpeg`,
    image: `${site.url}/logo.jpeg`,
    telephone: site.phone,
    email: site.email,
    foundingDate: "2007",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122102",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.396,
      longitude: 77.073,
    },
    openingHours: "Mo-Sa 10:00-19:00",
    areaServed: { "@type": "Place", name: "Delhi NCR" },
    sameAs: site.socials.map((s) => s.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProjectJsonLd({ slug }: { slug: string }) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: p.name,
    description: p.tagline,
    url: `${site.url}/projects/${p.slug}`,
    image: [p.cover, ...p.gallery],
    address: {
      "@type": "PostalAddress",
      streetAddress: p.location,
      addressLocality: p.city,
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    amenityFeature: p.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a,
      value: true,
    })),
    provider: { "@id": `${site.url}/#organization` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
