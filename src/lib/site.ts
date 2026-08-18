export const site = {
  name: "Ameva Infrastructure",
  shortName: "Ameva",
  tagline: "Building Landmarks, Not Just Addresses",
  description:
    "Ameva Infrastructure develops premium residences, independent floors and commercial landmarks across Delhi NCR — engineered with precision, delivered with integrity.",
  url: "https://amevainfrastructure.com",
  email: "connect@amevainfrastructure.com",
  salesEmail: "sales@amevainfrastructure.com",
  phone: "+91 98110 45600",
  phoneHref: "+919811045600",
  whatsapp: "919811045600",
  address: {
    line1: "Ameva House, Tower B, 9th Floor",
    line2: "Golf Course Extension Road, Sector 65",
    city: "Gurugram, Haryana 122102",
  },
  hours: "Mon – Sat · 10:00 AM to 7:00 PM",
  rera: "RERA Reg. No. HRERA-GGM-2019-ABC-4471",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Facebook", href: "https://facebook.com" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const stats = [
  { value: 18, suffix: "+", label: "Years of Building" },
  { value: 42, suffix: "", label: "Projects Delivered" },
  { value: 6.4, suffix: "M", label: "Sq. Ft. Developed" },
  { value: 2100, suffix: "+", label: "Happy Families" },
] as const;
