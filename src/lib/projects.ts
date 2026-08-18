export type ProjectStatus =
  | "Ready to Move"
  | "Under Construction"
  | "New Launch"
  | "Sold Out";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: "Residential" | "Commercial" | "Villas" | "Plotted";
  status: ProjectStatus;
  location: string;
  city: string;
  priceFrom: string;
  configuration: string;
  area: string;
  possession: string;
  featured: boolean;
  cover: string;
  gallery: string[];
  overview: string[];
  highlights: string[];
  amenities: string[];
  specs: { label: string; value: string }[];
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const projects: Project[] = [
  {
    slug: "ameva-aurum",
    name: "Ameva Aurum",
    tagline: "Independent floors with a private lift and terrace",
    category: "Residential",
    status: "Ready to Move",
    location: "Sector 57, Golf Course Ext. Road",
    city: "Gurugram",
    priceFrom: "₹3.95 Cr",
    configuration: "4 BHK + Study",
    area: "3,240 – 3,680 sq. ft.",
    possession: "Ready",
    featured: true,
    cover: u("1613490493576-7fde63acd811"),
    gallery: [
      u("1600585154340-be6161a56a0c"),
      u("1600607687939-ce8a6c25118c"),
      u("1522708323590-d24dbb6b0267"),
      u("1600566753086-00f18fb6b3ea"),
      u("1560448204-e02f11c3d0e2"),
    ],
    overview: [
      "Aurum is a collection of twelve independent floors on a single tree-lined boulevard in Sector 57 — four homes per tower, one home per level, and a private lift that opens directly into your foyer.",
      "Every floor is planned around a nine-foot-deep sun deck, so the living room, dining room and master suite each borrow light from two directions. The result is a home that feels considerably larger than its carpet area suggests.",
    ],
    highlights: [
      "One apartment per floor — zero shared walls",
      "Private lift opening into a personal foyer",
      "Imported Italian marble across living areas",
      "Stilt + 4 with dedicated basement parking",
      "Terrace rights with the top floor",
    ],
    amenities: [
      "Private Lift",
      "Landscaped Deck",
      "EV Charging",
      "Power Backup",
      "Modular Kitchen",
      "Smart Home Wiring",
      "24×7 Security",
      "Rainwater Harvesting",
    ],
    specs: [
      { label: "Land Parcel", value: "2.4 Acres" },
      { label: "Towers", value: "12 Blocks" },
      { label: "Units", value: "48 Residences" },
      { label: "Open Space", value: "68%" },
    ],
  },
  {
    slug: "ameva-skyline-heights",
    name: "Ameva Skyline Heights",
    tagline: "Forty storeys above the Dwarka Expressway",
    category: "Residential",
    status: "Under Construction",
    location: "Sector 106, Dwarka Expressway",
    city: "Gurugram",
    priceFrom: "₹2.40 Cr",
    configuration: "3 & 4 BHK",
    area: "1,980 – 3,150 sq. ft.",
    possession: "Dec 2027",
    featured: true,
    cover: u("1486406146926-c627a92ad1ab"),
    gallery: [
      u("1512453979798-5ea266f8880c"),
      u("1545324418-cc1a3fa10c00"),
      u("1560448204-e02f11c3d0e2"),
      u("1600210492486-724fe5c67fb0"),
      u("1517840901100-8179e982acb7"),
    ],
    overview: [
      "Skyline Heights is our tallest development to date — four towers rising forty floors, set back from the expressway behind a two-acre forest buffer that absorbs both noise and dust.",
      "The podium level carries the entire amenity programme, which means the ground plane stays green and cars never meet pedestrians. Above it, apartments are stacked so that no two balconies overlook each other.",
    ],
    highlights: [
      "Four towers, G+40 with double-height sky lobbies",
      "2-acre forest buffer along the expressway",
      "Podium-level clubhouse of 42,000 sq. ft.",
      "Zero-vehicle ground plane",
      "IGBC Gold pre-certified",
    ],
    amenities: [
      "Sky Lounge",
      "Infinity Pool",
      "Clubhouse",
      "Co-working Deck",
      "Kids' Zone",
      "Amphitheatre",
      "Jogging Loop",
      "Concierge",
    ],
    specs: [
      { label: "Land Parcel", value: "11.6 Acres" },
      { label: "Towers", value: "4 Towers" },
      { label: "Units", value: "986 Residences" },
      { label: "Open Space", value: "81%" },
    ],
  },
  {
    slug: "ameva-vireo-villas",
    name: "Ameva Vireo Villas",
    tagline: "Twenty-eight courtyard villas in the Aravalli foothills",
    category: "Villas",
    status: "New Launch",
    location: "Sohna Road, Sector 33",
    city: "Gurugram",
    priceFrom: "₹6.75 Cr",
    configuration: "5 BHK Villa",
    area: "5,400 – 6,900 sq. ft.",
    possession: "Mar 2029",
    featured: true,
    cover: u("1600047509807-ba8f99d2cdde"),
    gallery: [
      u("1512917774080-9991f1c4c750"),
      u("1600596542815-ffad4c1539a9"),
      u("1505873242700-f289a29e1e0f"),
      u("1600607687920-4e2a09cf159d"),
      u("1568605114967-8130f3a36994"),
    ],
    overview: [
      "Vireo takes the traditional North Indian courtyard house and rebuilds it for the way families actually live now — a shaded central void that every room opens onto, with the service wing pushed cleanly to the rear.",
      "Each villa sits on its own plot with a private pool, a double-height living volume and a roof terrace framed to hold the Aravalli ridge in view.",
    ],
    highlights: [
      "Central courtyard with a reflecting pool",
      "Private plunge pool on every plot",
      "Double-height living room",
      "Separate service entry and staff quarter",
      "Direct Aravalli ridge views",
    ],
    amenities: [
      "Private Pool",
      "Home Automation",
      "Solar Water",
      "Guest Suite",
      "Landscaped Court",
      "4-Car Parking",
      "Gated Enclave",
      "Organic Garden",
    ],
    specs: [
      { label: "Land Parcel", value: "9.2 Acres" },
      { label: "Villas", value: "28 Homes" },
      { label: "Plot Size", value: "500 – 650 sq. yd." },
      { label: "Open Space", value: "74%" },
    ],
  },
  {
    slug: "ameva-quorum",
    name: "Ameva Quorum",
    tagline: "Grade-A workspaces built for the next decade",
    category: "Commercial",
    status: "Under Construction",
    location: "Golf Course Ext. Road, Sector 66",
    city: "Gurugram",
    priceFrom: "₹1.85 Cr",
    configuration: "Office Suites",
    area: "850 – 12,000 sq. ft.",
    possession: "Sep 2027",
    featured: true,
    cover: u("1497366754035-f200968a6e72"),
    gallery: [
      u("1497366811353-6870744d04b2"),
      u("1431576901776-e539bd916ba2"),
      u("1487958449943-2429e8be8625"),
      u("1470723710355-95304d8aece4"),
      u("1449157291145-7efd050a4d0e"),
    ],
    overview: [
      "Quorum is planned for occupiers who have stopped thinking in cubicles — floor plates are column-free across 18 metres, ceilings clear 3.4 metres, and every suite can be split or merged without touching a services shaft.",
      "The building runs on a chilled-water VRF system with fresh-air pre-conditioning, and the double-skin facade cuts solar gain on the western face by roughly forty percent.",
    ],
    highlights: [
      "Column-free 18 m floor plates",
      "3.4 m clear ceiling height",
      "Double-skin performance facade",
      "Six high-speed destination-control lifts",
      "Two levels of basement parking",
    ],
    amenities: [
      "F&B Atrium",
      "Conference Centre",
      "Fitness Studio",
      "Valet Parking",
      "Fibre Backbone",
      "100% DG Backup",
      "Terrace Café",
      "Bicycle Bay",
    ],
    specs: [
      { label: "Land Parcel", value: "3.1 Acres" },
      { label: "Structure", value: "G+14" },
      { label: "Leasable Area", value: "5.2 Lakh sq. ft." },
      { label: "Efficiency", value: "82%" },
    ],
  },
  {
    slug: "ameva-serene-estate",
    name: "Ameva Serene Estate",
    tagline: "A licensed plotted township with everything already built",
    category: "Plotted",
    status: "Ready to Move",
    location: "Sector 95, New Gurugram",
    city: "Gurugram",
    priceFrom: "₹1.20 Cr",
    configuration: "180 – 500 sq. yd. Plots",
    area: "180 – 500 sq. yd.",
    possession: "Ready",
    featured: false,
    cover: u("1449844908441-8829872d2607"),
    gallery: [
      u("1568605114967-8130f3a36994"),
      u("1580587771525-78b9dba3b914"),
      u("1541888946425-d81bb19240f5"),
      u("1502672260266-1c1ef2d93688"),
      u("1449844908441-8829872d2607"),
    ],
    overview: [
      "Serene Estate is a fully developed plotted colony — roads laid, sewerage connected, power underground and the community centre operational before a single plot was handed over.",
      "Buyers get approved building plans for three floor configurations, so construction can begin the week after registry.",
    ],
    highlights: [
      "All infrastructure completed and handed over",
      "Underground electrical and sewerage lines",
      "Pre-approved floor plans included",
      "Central park of 1.8 acres",
      "Clear title with DTCP licence",
    ],
    amenities: [
      "Community Centre",
      "Central Park",
      "Wide Sector Roads",
      "Street Lighting",
      "Gated Entry",
      "Water Treatment",
      "Sports Court",
      "Retail Plaza",
    ],
    specs: [
      { label: "Land Parcel", value: "22 Acres" },
      { label: "Plots", value: "310 Plots" },
      { label: "Road Width", value: "9 – 24 m" },
      { label: "Green Cover", value: "31%" },
    ],
  },
  {
    slug: "ameva-nova-residences",
    name: "Ameva Nova Residences",
    tagline: "Boutique apartments for people who move often",
    category: "Residential",
    status: "Ready to Move",
    location: "Sector 65, Gurugram",
    city: "Gurugram",
    priceFrom: "₹1.65 Cr",
    configuration: "2 & 3 BHK",
    area: "1,180 – 1,940 sq. ft.",
    possession: "Ready",
    featured: false,
    cover: u("1600585154340-be6161a56a0c"),
    gallery: [
      u("1600566753086-00f18fb6b3ea"),
      u("1560448204-e02f11c3d0e2"),
      u("1522708323590-d24dbb6b0267"),
      u("1600607687939-ce8a6c25118c"),
      u("1505873242700-f289a29e1e0f"),
    ],
    overview: [
      "Nova is deliberately small — a single tower of eighty-four apartments where the lift lobby serves three homes per floor rather than eight.",
      "Every apartment is delivered fully fitted: wardrobes, kitchen, air-conditioning and light fixtures are all in place, so a family can move in with nothing but furniture.",
    ],
    highlights: [
      "Only three apartments per floor",
      "Delivered fully fitted and furnished-ready",
      "Walking distance to the metro corridor",
      "Rooftop residents' lounge",
      "Managed rental programme available",
    ],
    amenities: [
      "Rooftop Lounge",
      "Gym",
      "Covered Parking",
      "Wardrobes Included",
      "Piped Gas",
      "Visitor Lounge",
      "Package Room",
      "CCTV Coverage",
    ],
    specs: [
      { label: "Land Parcel", value: "1.4 Acres" },
      { label: "Towers", value: "1 Tower" },
      { label: "Units", value: "84 Residences" },
      { label: "Open Space", value: "62%" },
    ],
  },
  {
    slug: "ameva-crest",
    name: "Ameva Crest",
    tagline: "Six penthouses over the DLF golf greens",
    category: "Residential",
    status: "Sold Out",
    location: "DLF Phase 4, Golf Course Road",
    city: "Gurugram",
    priceFrom: "₹12.50 Cr",
    configuration: "5 BHK Penthouse",
    area: "7,200 – 8,400 sq. ft.",
    possession: "Ready",
    featured: false,
    cover: u("1600596542815-ffad4c1539a9"),
    gallery: [
      u("1517840901100-8179e982acb7"),
      u("1505873242700-f289a29e1e0f"),
      u("1600210492486-724fe5c67fb0"),
      u("1613490493576-7fde63acd811"),
      u("1600585154340-be6161a56a0c"),
    ],
    overview: [
      "Crest was built once and will not be repeated — six duplex penthouses on a plot that fronts the eleventh fairway, each with a private pool on the upper terrace.",
      "The project sold out in eleven weeks, entirely to buyers who had already lived in an Ameva home.",
    ],
    highlights: [
      "Duplex layout with an internal staircase",
      "Private terrace pool on every unit",
      "Uninterrupted golf-course frontage",
      "Imported German fittings throughout",
      "Dedicated concierge and valet",
    ],
    amenities: [
      "Terrace Pool",
      "Private Elevator",
      "Wine Cellar",
      "Home Theatre",
      "Staff Quarters",
      "Valet Service",
      "Golf Views",
      "Smart Automation",
    ],
    specs: [
      { label: "Land Parcel", value: "1.1 Acres" },
      { label: "Towers", value: "1 Block" },
      { label: "Units", value: "6 Penthouses" },
      { label: "Open Space", value: "70%" },
    ],
  },
  {
    slug: "ameva-latitude",
    name: "Ameva Latitude",
    tagline: "A high street that stays busy after dark",
    category: "Commercial",
    status: "New Launch",
    location: "Sector 88, New Gurugram",
    city: "Gurugram",
    priceFrom: "₹68 Lakh",
    configuration: "Retail & F&B",
    area: "420 – 3,500 sq. ft.",
    possession: "Jun 2028",
    featured: false,
    cover: u("1449157291145-7efd050a4d0e"),
    gallery: [
      u("1470723710355-95304d8aece4"),
      u("1487958449943-2429e8be8625"),
      u("1497366811353-6870744d04b2"),
      u("1431576901776-e539bd916ba2"),
      u("1512453979798-5ea266f8880c"),
    ],
    overview: [
      "Latitude is planned as an open-air high street rather than a mall — two facing rows of shopfronts along a shaded pedestrian spine, with the food and beverage cluster anchored at the far end so footfall is pulled through the whole length.",
      "Upper floors carry serviced offices, which keeps the street occupied on weekdays as well as weekends.",
    ],
    highlights: [
      "Open-air pedestrian high street",
      "F&B anchor at the terminus",
      "Serviced offices on upper levels",
      "Double-height shopfronts on the ground floor",
      "Assured footfall from 4,000 nearby homes",
    ],
    amenities: [
      "Alfresco Dining",
      "Event Plaza",
      "Ample Parking",
      "Signage Rights",
      "Service Corridors",
      "Public Restrooms",
      "Landscaped Spine",
      "24×7 Access",
    ],
    specs: [
      { label: "Land Parcel", value: "4.6 Acres" },
      { label: "Structure", value: "G+4" },
      { label: "Retail Units", value: "142 Shops" },
      { label: "Frontage", value: "310 m" },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const featuredProjects = projects.filter((p) => p.featured);

export const categories = [
  "All",
  "Residential",
  "Commercial",
  "Villas",
  "Plotted",
] as const;
