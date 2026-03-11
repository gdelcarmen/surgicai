export type ProductStatus = "Stable" | "Beta" | "Alpha" | "Coming Soon";
export type ProductPlatform = "Web" | "macOS" | "iOS";

export type ReleaseAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type ReleaseProduct = {
  slug: string;
  name: string;
  description: string;
  note?: string;
  version: string;
  releaseDateLabel: string;
  platforms: ProductPlatform[];
  status: ProductStatus;
  primaryAction: ReleaseAction;
  changelogPreview: string[];
};

export type ChangelogEntry = {
  productSlug: string;
  productName: string;
  version: string;
  date: string;
  summary: string;
};

export type SystemRequirement = {
  productSlug: string;
  productName: string;
  items: string[];
};

export const releaseProducts: ReleaseProduct[] = [
  {
    slug: "marcus",
    name: "MARCUS",
    description: "AI-powered knowledge system for surgical residents",
    version: "v0.9.3",
    releaseDateLabel: "February 24, 2026",
    platforms: ["Web"],
    status: "Beta",
    primaryAction: {
      label: "Open MARCUS",
      href: "https://marcus.surgic.ai",
      external: true,
    },
    changelogPreview: [
      "Faster citation retrieval and cleaner source traceability in answer views.",
      "Improved knowledge indexing for institutional protocols and resident study flows.",
    ],
  },
  {
    slug: "latent",
    name: "Latent",
    description: "Fully offline medical ambient scribe",
    note: "100% Offline - No PHI leaves your device",
    version: "v0.4.1",
    releaseDateLabel: "March 5, 2026",
    platforms: ["macOS"],
    status: "Beta",
    primaryAction: {
      label: "Download for Mac",
      href: "mailto:contact@surgic.ai?subject=Latent%20beta%20download",
    },
    changelogPreview: [
      "Local transcription pipeline now resumes cleanly after interrupted sessions.",
      "Setup flow adds clearer Ollama checks before first-run model downloads.",
    ],
  },
  {
    slug: "drainbow",
    name: "DrainBow",
    description: "Surgical drain output tracking for iOS",
    version: "v0.1.0-preview",
    releaseDateLabel: "Expected June 2026",
    platforms: ["iOS"],
    status: "Coming Soon",
    primaryAction: {
      label: "Notify Me",
      href: "mailto:contact@surgic.ai?subject=Notify%20me%20when%20DrainBow%20launches",
    },
    changelogPreview: [
      "Preparing TestFlight onboarding and first-pass drain color classification workflows.",
      "Initial trend tracking and handoff summaries are in active development.",
    ],
  },
  {
    slug: "boards-practice",
    name: "Boards Practice",
    description: "AI oral boards preparation for surgical residents",
    version: "v0.1.0-preview",
    releaseDateLabel: "Expected August 2026",
    platforms: ["Web"],
    status: "Coming Soon",
    primaryAction: {
      label: "Notify Me",
      href: "mailto:contact@surgic.ai?subject=Notify%20me%20when%20Boards%20Practice%20launches",
    },
    changelogPreview: [
      "Case scaffolding and examiner feedback loops are being tuned for resident practice.",
      "Early rubric work covers clinical accuracy, structure, and delivery tone.",
    ],
  },
];

export const changelogEntries: ChangelogEntry[] = [
  {
    productSlug: "latent",
    productName: "Latent",
    version: "v0.4.1",
    date: "March 5, 2026",
    summary: "Improved local setup checks, better interrupted-session recovery, and smoother offline transcript exports.",
  },
  {
    productSlug: "marcus",
    productName: "MARCUS",
    version: "v0.9.3",
    date: "February 24, 2026",
    summary: "Refined retrieval quality for protocol-backed answers and tightened citation rendering in the response panel.",
  },
  {
    productSlug: "latent",
    productName: "Latent",
    version: "v0.4.0",
    date: "February 14, 2026",
    summary: "Added Ollama-guided onboarding, local encounter templates, and cleaner speaker segmentation defaults.",
  },
  {
    productSlug: "marcus",
    productName: "MARCUS",
    version: "v0.9.0",
    date: "January 28, 2026",
    summary: "Launched beta release for surgical residents with faster search, improved synthesis, and better source provenance.",
  },
  {
    productSlug: "drainbow",
    productName: "DrainBow",
    version: "v0.1.0-preview",
    date: "January 12, 2026",
    summary: "Defined the initial iOS preview milestone covering drain logging, trend review, and handoff-ready summaries.",
  },
  {
    productSlug: "boards-practice",
    productName: "Boards Practice",
    version: "v0.1.0-preview",
    date: "December 18, 2025",
    summary: "Locked the first oral boards practice scope, including timed cases, rubric-based scoring, and examiner-style feedback.",
  },
];

export const systemRequirements: SystemRequirement[] = [
  {
    productSlug: "latent",
    productName: "Latent",
    items: ["macOS 12 or later", "16 GB RAM", "10 GB available disk space", "Ollama installed locally"],
  },
  {
    productSlug: "marcus",
    productName: "MARCUS",
    items: ["Modern browser", "Internet connection"],
  },
  {
    productSlug: "drainbow",
    productName: "DrainBow",
    items: ["iOS 16 or later"],
  },
  {
    productSlug: "boards-practice",
    productName: "Boards Practice",
    items: ["Modern browser", "Internet connection", "Microphone access for oral response practice"],
  },
];
