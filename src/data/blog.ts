export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
  };
  featured: boolean;
  published: boolean;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "introducing-the-surgicai-journal",
    title: "Introducing the SurgicAI Journal",
    description:
      "A first look at how SurgicAI will share product updates, research notes, and surgical education insights.",
    excerpt:
      "The SurgicAI Journal is where product notes, release context, and practical lessons from building surgeon-first software will live.",
    publishedAt: "2026-03-10",
    readingTime: "3 min read",
    category: "Company",
    tags: ["SurgicAI", "Product", "Surgical Education"],
    author: {
      name: "Gabriel del Carmen, MD",
      role: "Founder",
    },
    featured: true,
    published: true,
    sections: [
      {
        heading: "Why add a journal now",
        paragraphs: [
          "SurgicAI is growing beyond a single product page. A journal gives the ecosystem a place for launch notes, implementation context, and deeper explanations of how each tool fits into surgical training and day-to-day practice.",
          "It also creates a cleaner structure for future SEO work, because product, research, and educational content can live on durable URLs instead of being compressed into one landing page.",
        ],
      },
      {
        heading: "What will live here",
        paragraphs: [
          "The initial blog scaffold is designed for release notes, product explainers, technical essays, and surgeon-facing educational content. Over time, posts can be moved from static TypeScript data to a CMS or MDX workflow without changing route structure.",
          "That means the content model can evolve without having to rebuild the surrounding navigation, metadata, sitemap, or schema support.",
        ],
      },
      {
        heading: "What comes next",
        paragraphs: [
          "The immediate next step is publishing real posts tied to launches like MARCUS updates, Latent rollout notes, and surgical training essays. Once that content exists, the current scaffold already supports index pages, canonical metadata, article schema, and sitemap generation.",
        ],
      },
    ],
  },
  {
    slug: "latent-v0-4-1-beta-launch",
    title: "Offline, Always: Latent v0.4.1 Beta Is Live",
    description:
      "Latent v0.4.1 is now in beta for macOS — a fully local medical ambient scribe that transcribes and structures clinical encounters without any PHI leaving your device.",
    excerpt:
      "The transcription pipeline runs entirely on your Mac. No audio touches a server. This is what building for surgical floors actually requires.",
    publishedAt: "2026-03-07",
    readingTime: "7 min read",
    category: "Product Launch",
    tags: ["Latent", "Beta", "Clinical Documentation", "Offline", "macOS"],
    author: {
      name: "Gabriel del Carmen, MD",
      role: "Founder",
    },
    featured: false,
    published: true,
    sections: [
      {
        heading: "The documentation burden is specific",
        paragraphs: [
          "The note isn't an afterthought. For most residents — especially in general surgery — documentation is a significant chunk of the working day, often stretching into the evening after the clinical work is already done. A typical surgical resident might complete eight to fifteen patient encounters in a day. Each one requires some form of written documentation. The mental cost of translating what happened in an exam room into a structured, billable note accumulates in a way that's hard to describe unless you've been doing it for years.",
          "The tools available for this are, in practice, not very good. Voice-to-text works for dictation but doesn't produce structure. Cloud-based ambient scribes exist, but they come with consent requirements, connectivity assumptions, and institutional-approval timelines that make them unavailable on most floors. The gap between what's theoretically possible and what a resident can actually use on a Tuesday morning is wide.",
        ],
      },
      {
        heading: "Why offline matters more than it sounds",
        paragraphs: [
          "The instinct when building a transcription tool for healthcare is to build it in the cloud. Cloud transcription is fast, inexpensive, and accurate. It's also a PHI problem, a hospital-policy problem, and in some environments a structural impossibility — not because of regulatory caution, but because surgical floors often have poor connectivity, operate inside institutional networks that block external traffic, or fall under policies that prevent health information from leaving the hospital's infrastructure.",
          "Latent was designed offline from the start, not as a compliance checkbox but because that's the only version that works without asking anyone for permission. The transcription pipeline runs entirely on your Mac using locally-hosted models through Ollama. No audio leaves the device. No session is stored remotely. The note is generated locally, ready to be copied into your EMR the moment the encounter ends.",
          "This also means the tool is available to anyone with a compatible Mac, regardless of institutional policy, network access, or vendor approval status. That scope — personal, local, immediately usable — is the point.",
        ],
      },
      {
        heading: "What changed in v0.4.1",
        paragraphs: [
          "The March 5th release addressed two friction points that surfaced repeatedly during early beta feedback. The first was interrupted sessions. The previous pipeline didn't handle mid-session crashes or manual stops cleanly — the local transcription layer would sometimes fail to export from a partial recording, leaving you with nothing. That's fixed. The pipeline now checkpoints continuously and exports cleanly from any interruption point.",
          "The second was first-run setup. Getting Ollama installed and a language model pulled locally is not complicated for developers, but it's genuinely unfamiliar territory for most clinicians. The v0.4.1 setup flow now includes explicit Ollama health checks before attempting first-run model downloads, so you can see exactly what state the environment is in before the tool tries to proceed. Clearer setup feedback sounds minor until you're running through it at 9 PM after a long call day and you just need the thing to work.",
        ],
      },
      {
        heading: "System requirements and beta access",
        paragraphs: [
          "Latent requires macOS 12 or later, 16 GB RAM, 10 GB of available disk space for local model storage, and a locally-installed instance of Ollama. Beta access is currently available by email request — not to manufacture scarcity, but because the goal at this stage is to gather feedback from actual clinical workflows before broadening onboarding.",
          "If you're a resident or attending working in a context where documentation load is high and cloud-based tools aren't an option, this is the beta worth testing.",
        ],
      },
      {
        heading: "What comes next",
        paragraphs: [
          "The roadmap beyond v0.4.1 is focused on encounter templates for common note types, improved speaker segmentation for multi-provider encounters, and cleaner export formatting that maps more naturally to the note structures clinicians actually use. The offline model infrastructure is stable, so the remaining work is mostly at the surface: making the transcript-to-note step feel less like a raw dump and more like a note that happens to have written itself.",
          "The longer-term goal is for Latent to handle the full documentation cycle for a clinical shift — not a notes assistant you have to manage, but infrastructure that disappears into the workflow.",
        ],
      },
    ],
  },
  {
    slug: "marcus-v0-9-3-retrieval-update",
    title: "What Happens When the Answer Isn't in Your Head",
    description:
      "MARCUS v0.9.3 improves citation retrieval speed and knowledge indexing for surgical residents who need sourced answers under time pressure.",
    excerpt:
      "The failure mode isn't ignorance — it's retrieval. v0.9.3 is about making sourced answers load as fast as the question arrives.",
    publishedAt: "2026-02-27",
    readingTime: "6 min read",
    category: "Release Notes",
    tags: ["MARCUS", "Beta", "Evidence Retrieval", "Surgical Education", "v0.9.3"],
    author: {
      name: "Gabriel del Carmen, MD",
      role: "Founder",
    },
    featured: false,
    published: true,
    sections: [
      {
        heading: "The retrieval problem nobody names",
        paragraphs: [
          "There's a specific moment that happens in every surgical residency — usually late in a consult, or mid-rounds, or during a handoff — when someone asks a question and you know the general answer but can't recall the exact number, the threshold, the protocol edge case. Not because you haven't studied it. Because surgical training involves an enormous volume of episodic knowledge: the kind of thing absorbed once on a night shift and not actively rehearsed since.",
          "The failure mode isn't ignorance. It's retrieval. You know the answer exists. You might even remember reading it. But you're standing in a hallway with ten seconds and no good way to surface it. Most residents reach for their phone. That works for common questions. For specific ones — post-op management thresholds, institutional protocol deviations, uncommon presentations — it mostly doesn't.",
        ],
      },
      {
        heading: "What changed in v0.9.3",
        paragraphs: [
          "The February 24th release focused on two things: retrieval speed and source traceability. Neither is glamorous. They are also, in practice, the only things that matter when you're trying to use a knowledge tool under time pressure.",
          "Faster citation retrieval means that when MARCUS synthesizes an answer, the underlying sources surface more quickly and more cleanly alongside the response. Prior to this update, latency in the citation layer sometimes caused answers to render before their sources were fully loaded — which created a trust gap where the claim appeared before the evidence supporting it. That's been corrected.",
          "Improved knowledge indexing for institutional protocols means that content added from local protocol sets gets indexed in a way that surfaces more reliably in relevant queries. Residents who loaded department-specific guidelines into MARCUS should see those answers compete more accurately with general literature when the query touches local practice.",
        ],
      },
      {
        heading: "On citations as part of the answer",
        paragraphs: [
          "There's a design philosophy baked into MARCUS that's worth naming directly: the answer is not enough. In surgical education — and in clinical practice — a sourced answer is categorically different from an unsourced one. Not because the words are different, but because sourced answers are teachable. You can bring a citation to an attending. You can track the provenance of a protocol. You can disagree with a recommendation when you can see where it came from.",
          "The v0.9.3 rendering changes make citations feel like part of the answer rather than a footnote that loads late. In practice, this changes how much you trust the tool during actual use — which is the only metric that matters.",
        ],
      },
      {
        heading: "What comes next for MARCUS",
        paragraphs: [
          "The next development track is improving synthesis quality for case-adjacent queries — questions that aren't 'what is the threshold for X' but closer to 'given this presentation, what should I be thinking about.' That kind of question requires not just retrieval but clinical structure, and the work there is early. The retrieval foundation has to be solid first, which is what this update addressed.",
          "If you're in the MARCUS beta, push it on the questions that are hard to Google well. That's where the difference between sourced synthesis and a search result actually shows up.",
        ],
      },
    ],
  },
  {
    slug: "drainbow-product-preview",
    title: "The Problem With Eyeballing Drain Output",
    description:
      "DrainBow is a coming-soon iOS app for surgical drain output tracking — designed around the specific workflow ambiguities that drain management creates on the surgical floor.",
    excerpt:
      "Drain output lives in a gap between the EMR and the bedside. DrainBow is being built to close it.",
    publishedAt: "2026-01-20",
    readingTime: "5 min read",
    category: "Product Preview",
    tags: ["DrainBow", "Coming Soon", "iOS", "Drain Tracking", "Surgical Workflow"],
    author: {
      name: "Gabriel del Carmen, MD",
      role: "Founder",
    },
    featured: false,
    published: true,
    sections: [
      {
        heading: "Serous, serosanguineous, or something in between",
        paragraphs: [
          "Every surgical floor has a version of the same conversation. A nurse pages about a drain that looks different. A resident goes to look. The output is somewhere between serosanguineous and frankly bloody — or between serous and bilious — and a judgment call gets made based on experience, or lack of it, or whatever the resident half-remembered from rounds two days ago. The documentation says 'drain output unremarkable' because there isn't a structured way to record the uncertainty.",
          "This isn't a rare edge case. Drain management is a daily workflow in surgical inpatient care, and it's one of the places where early clinical deterioration shows up first. The problem is that drain output interpretation is inherently visual, inherently qualitative, and currently dependent on whoever is standing at the bedside at that moment — with no structured record of what was actually observed.",
        ],
      },
      {
        heading: "Why existing tools don't fit",
        paragraphs: [
          "The EMR handles drain output as a number. Volume in milliliters. That's the extent of it. Character, color, consistency, trend over shifts — none of that lives in a structured field. Nurses document it in free text if they document it at all. Residents trying to assess whether output is changing have to scroll through nursing notes, which may or may not contain the relevant observation, and reconstruct a trend mentally from fragmented prose.",
          "There's no good tool for this because the workflow doesn't fit cleanly into either the EMR or the nurse-facing documentation layer. It lives in a gap: too specific for general clinical tools, too clinically important to leave untracked.",
        ],
      },
      {
        heading: "What DrainBow is building",
        paragraphs: [
          "DrainBow is an iOS app in development for surgical drain output tracking, built specifically around the classification and trend problems that current tools don't address. The v0.1.0-preview milestone, defined in January 2026, covers the core logging flow, a first-pass drain color classification system, and handoff-ready summaries structured for sign-out notes.",
          "The color classification system is the technically interesting piece. Rather than asking a nurse or resident to pick from a predefined dropdown, the current design anchors classification to a visual record at the time of observation — something observable, documentable, and comparable across shifts. That design is still being developed, but it's the part that makes DrainBow something other than a spreadsheet.",
          "The goal isn't to replace clinical judgment. It's to give that judgment a structured record — one that captures the observation when it happens and makes trends visible across shifts and across the different clinicians who all looked at the same drain and saw something slightly different.",
        ],
      },
      {
        heading: "Timeline and how to follow along",
        paragraphs: [
          "DrainBow is expected to launch on iOS in June 2026. TestFlight onboarding is in preparation, and the first beta cohort will be a small set of residents and floor nurses at surgical centers willing to stress-test the workflow integration in a real setting.",
          "If you're on a surgical service and drain management is part of your daily work, the notify list is worth joining. Early beta users will directly shape how the handoff summary format and classification system develop before the broader launch.",
        ],
      },
    ],
  },
  {
    slug: "boards-practice-product-preview",
    title: "Oral Boards Are a Performance, Not a Test",
    description:
      "Boards Practice is a coming-soon web tool for surgical oral board preparation — built around the specific structure, tone, and case management that oral exams actually require.",
    excerpt:
      "Most residents underperform on oral boards relative to their knowledge. The feedback loop during training is too loose and too infrequent. That's the problem Boards Practice is built to fix.",
    publishedAt: "2025-12-22",
    readingTime: "6 min read",
    category: "Product Preview",
    tags: ["Boards Practice", "Coming Soon", "Oral Boards", "Surgical Residency", "Training"],
    author: {
      name: "Gabriel del Carmen, MD",
      role: "Founder",
    },
    featured: false,
    published: true,
    sections: [
      {
        heading: "Sitting across from an examiner",
        paragraphs: [
          "Passing the surgical oral boards isn't primarily about what you know. Plenty of residents who know the material fail their oral exam, and the reasons are consistent: they present their case in the wrong order, they answer the question they heard instead of the one that was actually asked, they commit to a diagnosis before the examiner expected them to stay in ambiguity, or they deliver a correct answer in a flat tone that reads as clinical hesitation when it's really just nerves.",
          "Oral boards are a performance format. That's not a criticism — it reflects something real about how surgeons are expected to think and communicate under pressure. A consultant who can't walk a referring physician through a case clearly is a less effective surgeon, regardless of underlying knowledge. The exam format tests something worth testing. It just requires a kind of preparation that reading textbooks and grinding practice questions doesn't provide.",
        ],
      },
      {
        heading: "What practice actually requires",
        paragraphs: [
          "To improve at oral boards, you have to do oral boards — repeatedly, with feedback specific enough to be corrective. That feedback needs to cover at least three things: clinical accuracy (did you reach the right diagnosis and management?), structural clarity (did you present in a logical sequence?), and delivery (did you project appropriate confidence without overclaiming?). Most practice only addresses the first.",
          "Most residents practice by pairing with co-residents or finding an attending willing to run mock cases. Both are valuable. Both are also unpredictable in feedback quality, limited by availability, and socially awkward in the specific way that asking a colleague or supervisor to judge your performance is awkward. The result is that most residents don't get enough reps, and the ones they do get aren't structured around the rubric that actually matters on exam day.",
        ],
      },
      {
        heading: "What Boards Practice is building",
        paragraphs: [
          "Boards Practice is a web tool for surgical oral board preparation, currently in development with an expected launch in August 2026. The v0.1.0-preview scope, locked in December 2025, covers three areas: timed case presentations, rubric-based scoring across clinical accuracy, structural clarity, and delivery tone, and examiner-style feedback formatted the way a real examiner gives it — direct, specific, without the padding that makes feedback from peers harder to act on.",
          "The rubric work is the hardest part to get right. Scoring a case for clinical accuracy is tractable. Scoring for structural clarity and delivery tone — in a way that's granular enough to actually change behavior — is harder, and the early rubric development is still being refined with input from surgeons who've sat as examiners. The goal isn't to make every case a pass/fail exercise but to give residents the kind of feedback that's usually only available from a skilled mock board session with an experienced examiner.",
        ],
      },
      {
        heading: "What comes next",
        paragraphs: [
          "The beta will begin with general surgery cases before expanding to other surgical subspecialties. The case library is being built around the known structures of the ABS oral examination, and the feedback system will be calibrated against input from surgeons who've examined at the board level.",
          "The thing being built toward isn't a study tool. It's a rehearsal platform — the kind of environment you use the same way an athlete uses a practice field, not to learn new material but to develop the specific performance skill the actual exam requires. If you're a resident who wants early access when the beta opens, the notify list is the right place to start.",
        ],
      },
    ],
  },
  {
    slug: "future-release-notes",
    title: "Release Notes, Product Essays, and Surgical Research Updates",
    description:
      "A placeholder entry representing the kinds of editorial formats planned for the SurgicAI blog.",
    excerpt:
      "Future posts can cover launch notes, surgical education theory, offline documentation tooling, and research-backed product decisions.",
    publishedAt: "2026-03-18",
    readingTime: "2 min read",
    category: "Upcoming",
    tags: ["Roadmap", "SEO", "Releases"],
    author: {
      name: "Gabriel del Carmen, MD",
      role: "Founder",
    },
    featured: false,
    published: false,
    sections: [
      {
        heading: "Placeholder",
        paragraphs: [
          "This entry exists to define the shape of future blog content without publishing it yet.",
        ],
      },
    ],
  },
];

export const publishedBlogPosts = blogPosts.filter((post) => post.published);

export const upcomingBlogPosts = blogPosts.filter((post) => !post.published);

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}
