# surgic.ai — Component Design Specification

## What This Document Is

A complete, section-by-section design specification that maps every part of the surgic.ai splash page to a specific UI component from 21st.dev. Each section includes the component source, what it does technically, what content goes into it, and how it must be customized to match the surgic.ai brand.

This document should be read alongside:
- `surgicai-brand-kit.html` — color palette, typography, gradients, CSS variables
- Logo SVG files: `logo-primary-dark.svg`, `logo-wordmark-dark.svg`, `logo-wordmark-light.svg`, `icon-sai-dark.svg`, `icon-sai-light.svg`

---

## Brand Context (for the coding agent)

**surgic.ai** is an ecosystem of tools for surgical education, training, and practice. It is NOT a single product. The founder is Gabriel del Carmen, MD — a PGY-2 General Surgery resident at Albany Medical Center and incoming NCI Surgery Branch Research Fellow. He built these tools because he experienced the gaps in surgical training firsthand.

**The product ecosystem includes:**
1. **MARCUS** (Live) — citation-backed clinical knowledge retrieval
2. **DrainBow** (In Development) — standardized drain/chest tube output color tracking
3. **Surgical Boards Practice** (In Development) — oral board simulation with tone analysis
4. **OP REPORT** (In Development) — physics-based surgical simulation via reinforcement learning
5. **Generative Radiology Training** (Planned) — synthetic radiographic images for unlimited practice
6. **Goals of Care Training** (Planned) — communication skills practice with emotional valence scoring

**Visual identity:**
- Font: DM Sans (primary), JetBrains Mono (code/labels)
- Primary color: Coral `#f97066`
- Gradient: `linear-gradient(135deg, #ff8a82, #e5544a)`
- Dark background: `#0a0c10`
- Surface: `#12151c`
- Elevated: `#1a1e28`
- Border: `#1e2330`
- Text primary: `#e8eaf0`
- Text secondary: `#9ba1b8`
- Text dim: `#6b7394`

**Critical tone rule:** Never lead with "AI" in copy. Describe what tools do, not what technology powers them. The brand name "surgicAI" carries the AI signal — copy should focus on surgical training and practice.

---

## Global: Background Layer

### Component
`npx shadcn@latest add https://21st.dev/r/66hex/dot-shader-background`

### What It Does
A full-page WebGL shader background using Three.js + @react-three/fiber. It renders a grid of animated dots on a solid background with a mouse-trail effect — dots near the cursor light up and fade as the cursor moves away. The dots subtly animate with a wave pattern.

### How It Should Be Used
This component renders as the base layer behind ALL page content. It should be positioned fixed, full viewport, z-index 0, with all page sections layered above it.

### Customizations Required
The component uses `next-themes` for dark/light mode. surgic.ai is dark-mode only on the splash page. Modify the theme colors:

- `bgColor`: Change from `#121212` to `#0a0c10` (surgic.ai bg-primary)
- `dotColor`: Change from `#FFFFFF` to `#f97066` (coral) — this makes the dot grid subtly coral-tinted rather than white
- `dotOpacity`: Keep very low — `0.02` to `0.03`. The dots should be barely perceptible, creating texture not distraction
- `gridSize`: Keep at `100` or increase slightly for finer dots
- Remove the `next-themes` dependency and hardcode the dark theme values since the splash page doesn't switch themes

### Important Notes
- The mouse trail effect is the key interactive element — as users move their cursor, coral dots light up and fade, giving the page a living, responsive feel
- This is GPU-intensive. Ensure it doesn't block the main thread. The component already uses `powerPreference: 'high-performance'`
- On mobile, the trail effect won't work (no hover), but the animated dot wave still provides ambient movement

---

## Section 1: Navigation Bar

### Component
`npx shadcn@latest add https://21st.dev/r/ln-dev7/mega-menu`

### What It Does
A horizontal nav bar with hover-triggered dropdown mega-menus. Each nav item can have sub-menus with icons, labels, and descriptions. Uses framer-motion for smooth animated transitions between menu states with a shared `layoutId` for the hover background and menu container.

### Content

**Logo (left side):** Render the `logo-wordmark-dark.svg` inline. This is the bare wordmark (no suture) — "surgic" in `#e8eaf0` + "AI" in coral gradient. Do not use an image tag — inline the SVG for crispness.

**Nav Items:**

Item 1: **Products** (has submenu)
- Submenu title: "Platform"
- Sub-items:
  - MARCUS — "Citation-backed clinical knowledge retrieval" — icon: Search or BookOpen
  - DrainBow — "Standardized drain output color tracking" — icon: Palette or Droplet
  - Boards Practice — "Oral board simulation with tone analysis" — icon: Mic or GraduationCap
  - OP REPORT — "Physics-based surgical simulation" — icon: Monitor or Cpu
  - Radiology Training — "Synthetic imaging for unlimited practice" — icon: ScanLine or Image
  - Goals of Care — "Communication skills with emotional scoring" — icon: Heart or MessageCircle

Item 2: **About** (no submenu, links to /about)

Item 3: **Security** (no submenu, links to /security)

Item 4: **For Institutions** (no submenu, links to /for-institutions)

**No CTA button in the nav.** The navigation should feel clean and informational, not salesy.

### Customizations Required
- The component's default background is `#0A0A0A` for the dropdown. Change to `#12151c` (surgic.ai surface color)
- Border color on dropdown: change to `border-[#1e2330]` (surgic.ai border)
- Text colors: nav items should be `text-[#9ba1b8]` (text-secondary) with hover to `text-[#e8eaf0]` (text-primary)
- Hover pill background: change from `bg-white/10` to `bg-[#f97066]/10` for a subtle coral tint on hover
- Icon containers in submenu: border should use `border-[#1e2330]`, hover bg should transition to coral `bg-[#f97066]` with dark text
- Font: Apply `font-family: 'DM Sans'` to the entire nav
- Position the nav as sticky top with `backdrop-blur-sm` and `bg-[#0a0c10]/80` for a translucent effect on scroll

---

## Section 2: Hero Section

### Component
`npx shadcn@latest add https://21st.dev/r/designali-in/shader-animation`

### What It Does
A full-screen Three.js WebGL shader animation that renders concentric radiating ring patterns with subtle color shifts. The rings pulse outward from a center point with a smooth, hypnotic motion. It creates a dark, atmospheric background effect.

### How It Should Be Used
This shader serves as the HERO BACKGROUND only — not the full-page background (that's the dot shader). It should be contained within the hero section (roughly viewport height) with content layered on top. Consider reducing its opacity to 40-60% so it doesn't overwhelm the text above it.

### Content Layered on Top of the Shader
The following content sits absolutely positioned or flexbox-centered over the shader animation:

1. **The primary logo SVG** (`logo-primary-dark.svg`) — this is the full wordmark WITH the suture element. This is the only place on the entire site where the suture appears. Render it at a prominent size (roughly 360-400px wide on desktop).

2. **Tagline text** below the logo — one or two lines that communicate the ecosystem positioning. The exact copy should convey: "Tools for every stage of surgical training and practice" without using the word "AI." Keep it short, impactful, and in DM Sans.

3. **No CTA buttons in the hero.** The hero is purely atmospheric — it sets the tone. CTAs come later on the page.

### Customizations Required
- The shader's fragment shader produces rainbow-ish concentric rings by default. The color output needs to be modified to use the coral palette instead. Adjust the `color` calculation in the fragment shader so the output sits within the `#f97066` to `#e5544a` range rather than full RGB. This can be done by multiplying the final color channels to bias toward red/coral tones, or by replacing the per-channel loop with a single luminance calculation tinted to coral.
- Reduce the animation speed: change `time*0.05` to `time*0.02` or lower for a slower, more ambient feel
- The background color is `#000` by default — change the container style to `background: '#0a0c10'`
- Consider adding a radial gradient overlay on top of the shader that fades the edges to `#0a0c10`, creating a vignette effect that makes the rings feel like they emerge from darkness

---

## Section 3: Hero-to-Content Scroll Transition

### Component
`npx shadcn@latest add https://21st.dev/r/aceternity/container-scroll-animation`

### What It Does
A scroll-driven 3D perspective animation. A "card" (which can contain any content) starts tilted at a 20-degree X rotation (as if you're looking down at a screen at an angle) and flattens to 0 degrees as you scroll. It simultaneously scales and the title content above it translates upward. The effect creates the sensation of a device screen rotating to face you.

### How It Should Be Used
This sits immediately below the hero section. The `titleComponent` slot contains introductory text about the product ecosystem. The `children` slot (the card that rotates) should contain a visual preview of the platform — this could be a screenshot/mockup of MARCUS, a grid of product cards, or an abstract representation of the ecosystem.

### Content

**titleComponent (above the rotating card):**
Text introducing the product ecosystem. Direction: "From clinical knowledge retrieval to surgical simulation — one platform, every stage of training." Styled in DM Sans, large heading weight, with one phrase highlighted in coral.

**children (inside the rotating card):**
A visual representation of the surgic.ai platform. Options (choose one):
- A styled screenshot or mockup of the MARCUS interface
- A grid showing all 6 product icons with names and status badges
- An abstract constellation view connecting the products

### Customizations Required
- Card background: Change from `bg-[#222222]` to `bg-[#12151c]` (surgic.ai surface)
- Card border: Change from `border-[#6C6C6C]` to `border-[#1e2330]` (surgic.ai border)
- Inner card background: Change `dark:bg-zinc-900` to `bg-[#0a0c10]`
- Box shadow: Adjust the shadow values to use darker, more subtle shadows appropriate for the near-black background
- The container height (`h-[60rem] md:h-[80rem]`) controls how much scrolling is needed to complete the rotation. Adjust as needed — shorter means faster animation.

---

## Section 4: Product Ecosystem (Non-MARCUS Products)

### Component
`npx shadcn@latest add https://21st.dev/r/minhxthanh/interactive-image-accordion`

### What It Does
A horizontal accordion of panels. One panel is expanded (wide, ~400px) while the others are collapsed (narrow, ~60px). Hovering over a collapsed panel expands it and collapses the previously active one. Each panel has a background image and a title that rotates from vertical (collapsed) to horizontal (expanded). Smooth CSS transitions.

### How It Should Be Used
This showcases the 5 non-MARCUS products. MARCUS gets its own dedicated section below (Section 6). Each accordion panel represents one product.

### Content (5 panels)

Panel 1: **DrainBow**
- Status: In Development
- When expanded: Show product name, one-line description ("Standardized tracking of drain and chest tube output color"), status badge, and category label "Clinical Documentation"
- Background: Since no actual product images exist, use a solid or gradient background. Use a subtle gradient from `#12151c` to a slightly coral-tinted dark (`rgba(249,112,102,0.05)`)

Panel 2: **Surgical Boards Practice**
- Status: In Development
- Description: "Oral board simulation — a virtual examiner that evaluates clinical accuracy, communication tone, and adapts to your performance"
- Category: Board Preparation

Panel 3: **OP REPORT**
- Status: In Development
- Description: "Physics-based surgical simulation. Techniques emerge from experience in realistic tissue environments — not from scripted demonstrations"
- Category: Surgical Simulation

Panel 4: **Generative Radiology Training**
- Status: Planned
- Description: "Synthetically generated radiographic images. Unlimited practice identifying pathology with adaptive difficulty"
- Category: Diagnostic Education

Panel 5: **Goals of Care & Communication**
- Status: Planned
- Description: "Practice difficult conversations with feedback on emotional valence, empathy, and communication structure"
- Category: Soft Skills

### Customizations Required
- **Remove all image dependencies.** The default component uses Unsplash image URLs. Replace `img` tags with styled divs using gradient backgrounds or subtle pattern fills. Each panel should have a slightly different gradient angle or opacity to differentiate them visually while maintaining the dark theme.
- Background for collapsed panels: `bg-[#12151c]` with a `border-r border-[#1e2330]` separator
- Background for expanded panel: a subtle coral gradient overlay — `linear-gradient(180deg, rgba(249,112,102,0.06), transparent)`
- Text color: Title in `#e8eaf0`, description in `#9ba1b8`
- Add a status badge to each expanded panel: a small pill showing "In Development" or "Planned" using `bg-[rgba(249,112,102,0.08)] text-[#f97066] border border-[rgba(249,112,102,0.15)]`
- Change the dark overlay from `bg-black bg-opacity-40` to `bg-[#0a0c10] bg-opacity-60`
- Panel height: adjust from `h-[450px]` as needed
- Add a section heading above the accordion: something like "The Platform" with a subtitle. Style the heading in DM Sans bold, the subtitle in text-secondary.
- Consider adding a subtle icon for each product (using lucide-react) that appears when the panel is expanded

---

## Section 5: Throughline / Philosophy

### Component
`npx shadcn@latest add https://21st.dev/r/uilayout.contact/stacking-card`

### What It Does
Cards that stick to the viewport and stack on top of each other as you scroll. Each card is `position: sticky; top: 0` and slightly scales down as the next card scrolls over it, creating a deck-of-cards stacking effect. Uses framer-motion for the scale transform and Lenis for smooth scrolling. Each card takes a full viewport height of scroll distance.

### How It Should Be Used
3-4 cards stacking on each other, each presenting one pillar of the surgic.ai philosophy. This creates a dramatic, Apple-style scroll sequence where each principle is given its own full-screen moment.

### Content (3-4 cards)

**Card 1:** "Surgical training shouldn't depend on geography"
- Description: "A resident at a community program deserves the same board prep, knowledge access, and simulation environment as someone at a top-5 academic center."
- Color: `#12151c` (surface)

**Card 2:** "Technology should be invisible"
- Description: "The best tools don't announce themselves. They fit into existing workflows, answer questions in the language surgeons think in, and get out of the way."
- Color: `#1a1e28` (elevated)

**Card 3:** "The full arc, not a single point"
- Description: "From learning to read imaging to practicing oral boards to mastering difficult conversations — no single tool covers the journey. An ecosystem does."
- Color: Use a card with a subtle coral accent — perhaps `#1a1e28` background with a coral left-border or top-border accent

**Card 4 (optional):** "Built from the inside"
- Description: "These tools exist because a surgical resident saw what was missing and built it. Every feature comes from lived experience in training."
- Color: `#12151c`

### Customizations Required
- Card backgrounds: Replace the default colors with the surgic.ai palette values listed above
- Card dimensions: The default is `h-[450px] w-[70%]`. Adjust to better fit the content — these are text-heavy cards, not image cards. Consider `h-[400px] w-[80%] max-w-[900px]`
- Remove the image section (`w-[60%]` right side with `<img>`). These cards should be text-only with large, impactful typography. Replace the two-column layout with a single centered text block
- Title: Large DM Sans, `text-3xl` or `text-4xl`, `font-weight: 700`, color `#e8eaf0`
- Description: DM Sans `text-lg`, `font-weight: 400`, color `#9ba1b8`, `max-width: 600px`, centered
- Remove the "See more" link and arrow SVG
- The component wraps everything in `<ReactLenis root>`. If Lenis is already used globally, avoid duplicate wrapping. Otherwise, this component provides its own smooth scrolling context.
- Remove the default header section and footer from the component — only use the card stacking portion
- Card border-radius: `rounded-2xl` instead of `rounded-md`
- Add a subtle border: `border border-[#1e2330]`

---

## Section 6: MARCUS (Standalone Product Feature)

### Component
`npx shadcn@latest add https://21st.dev/r/LegionWebDev/database-with-rest-api`

### What It Does
An animated SVG visualization showing data flowing from multiple source badges at the top, through connecting paths with animated light trails, into a central hub at the bottom. The hub has pulsing concentric circles and floating badge elements. The paths animate with glowing dots traveling along them using SVG `stroke-dasharray` animation.

### How It Should Be Used
This is the MARCUS showcase — the one live product. The visual metaphor of multiple data sources flowing into a central retrieval system is a perfect match for MARCUS's RAG architecture. This is the section where a CTA button appears.

### Content

**Top badges (the 4 source badges):**
These represent the types of sources MARCUS retrieves from. Replace the default "GET/POST/PUT/DELETE" labels:
- Badge 1: "PubMed" (or "Literature")
- Badge 2: "Guidelines"
- Badge 3: "Institutional" (or "Local Protocols")
- Badge 4: "Case Reports"

**Title badge (above the main box):**
Replace "Data exchange using a customized REST API" with: "Citation-backed clinical knowledge retrieval"

**Circle text (bottom center circle):**
Replace "SVG" with the SAI icon or simply "M" for MARCUS

**Floating badges inside the main box:**
- Badge 1: Replace "LegionDev" with "Evidence-Traced" — icon: Shield or CheckCircle
- Badge 2: Replace "v2_updates" with "surgicAI Platform" — icon: Folder or Layers

**Below the component, add:**
- A heading: "MARCUS" with subtitle "Multimodal Agentic Retrieval for Clinical Utility & Synthesis"
- 2-3 lines of description: What MARCUS does — instant, citation-backed answers to clinical questions. Every answer traceable to its source literature. Built for the way surgeons think about evidence.
- A status badge: "Live" with a green indicator
- **A CTA button:** "Try MARCUS →" — styled with the coral gradient background (`linear-gradient(135deg, #f97066, #c43d35)`), white text, rounded corners. This is the primary conversion point on the page.

### Customizations Required
- Light color: Change from `#00A6F5` (blue) to `#f97066` (coral). This affects the glowing dots that travel along the SVG paths
- Badge backgrounds: Change `fill="#18181B"` to `fill="#12151c"`
- Badge text: Change `fill="white"` — keep white, or use `#e8eaf0`
- Replace the database icons next to each badge with more relevant icons (book, clipboard, building, file)
- Main box border and background: Align with surgic.ai surface/border colors
- Pulsing circles: Change `bg-accent/5` to `bg-[rgba(249,112,102,0.03)]` for coral-tinted pulses
- The title badge: use `bg-[#12151c]` with `border-[#1e2330]`
- Bottom circle: `bg-[#12151c]` with `border-t border-[#1e2330]`

---

## Section 7: Credibility / Trust Signals

### Component
`npx shadcn@latest add https://21st.dev/r/ruixen.ui/about-page`

### What It Does
A multi-part about/credibility section with:
1. A hero image with overlaid two-column text (heading + description)
2. An about section with heading, description, and a card layout (one large image left, two stacked cards right) with hover animations

### How It Should Be Used
Adapted as a trust/credibility section — NOT the full about page (that lives at /about). This is a condensed trust signal block on the splash page.

### Content

**Hero portion (top):**
- Image: Replace with a gradient or abstract visual. Could use a coral-to-dark gradient, or a blurred/stylized image of a surgical environment if one is available. If no image, use a solid gradient: `linear-gradient(135deg, #1a1e28, #0a0c10)` with a subtle suture pattern overlay.
- Heading: "Built by a surgical resident who saw the gaps firsthand."
- Subheading: "surgic.ai is the work of Gabriel del Carmen, MD — a general surgery resident and incoming NCI Surgery Branch Research Fellow who builds the tools he wished existed during training."
- Button: "Read the Full Story →" linking to /about

**Card layout (bottom):**

Left large card:
- Could contain a stat block or a key credibility statement
- If an image of Gabriel is available, use it here. If not, use an abstract gradient
- Heading: "From the OR to the codebase"
- Description: Brief text about the founder building at the intersection of surgery and technology

Right top card:
- Background: Dark with coral accent
- Heading: "Research Foundation"
- Description: "NCI Surgery Branch Fellow. Published research spanning surgical oncology, medical imaging, and clinical decision support."
- Button: "Learn More" linking to /about

Right bottom card:
- Background: Gradient
- Heading: "Privacy First"
- Description: "Every tool built with HIPAA-conscious architecture. Patient data never trains models. Citation provenance on every output."
- No external link needed — or link to /security

### Customizations Required
- Replace all Unsplash image URLs with either provided images or gradient backgrounds
- Change all `Image` components from next/image: if images exist, use them; if not, replace with styled divs using gradients
- Color scheme: All backgrounds should use surgic.ai dark palette, text in `#e8eaf0` / `#9ba1b8`
- The `achievements` stat array from the default component could be used if there are real metrics to show. If not, remove the stats section entirely — do not display fake numbers
- Buttons: Style with surgic.ai palette — outline variant using `border-[#1e2330]` with hover to coral
- Card hover effect: The `whileHover: { scale: 1.03 }` is good — keep it
- Gradient overlays on cards: Use coral-tinted versions (`from-[#0a0c10]/70 to-transparent`)

---

## Section 8: Call to Action

### Component
No 21st.dev component — build a simple, custom CTA section consistent with the page's visual language.

### What It Should Include
- A heading: "Be the first at your program." or "Join the surgeons building the future of training."
- A subheading in text-secondary
- An email input field with a submit button:
  - Input: `bg-[#12151c] border border-[#1e2330] rounded-lg text-[#e8eaf0] placeholder-[#6b7394]` with `focus:border-[#f97066]` ring
  - Button: Coral gradient background, white text, "Get Early Access" label
  - Laid out inline (input + button side by side) on desktop, stacked on mobile
- Below the input: Small text in `text-dim` — "Free for individual surgeons and trainees. No credit card required."

### Design Notes
- Keep this section simple and uncluttered. No cards, no images, no complex layout.
- The coral gradient CTA button should have the subtle breathing glow animation: `box-shadow` pulsing from `0 0 0 0 rgba(249,112,102,0)` to `0 0 20px 4px rgba(249,112,102,0.15)` over 3 seconds, infinite
- Center everything horizontally. Max-width ~600px for the form.

---

## Section 9: Footer

### Component
No 21st.dev component — build a minimal custom footer.

### Content
- Left: `logo-wordmark-dark.svg` rendered inline
- Center: Nav links — Products, About, Security, For Institutions, Contact — in `text-[#6b7394]` with hover to `text-[#e8eaf0]`
- Right: "© 2026 surgic.ai" in `text-[#444b66]`
- Top border: `border-t border-[#1e2330]`
- Background: transparent (the dot shader shows through)
- Padding: comfortable but compact — this isn't a mega footer

---

## Page Order (Top to Bottom)

1. Background layer: Dot Shader (full page, fixed, z-0)
2. Navigation: Mega Menu (sticky top, z-50)
3. Hero: Shader Animation background + logo + tagline (viewport height)
4. Scroll Transition: Container Scroll Animation (hero into platform preview)
5. Product Ecosystem: Interactive Image Accordion (5 non-MARCUS products)
6. Throughline: Stacking Cards (3-4 philosophy cards)
7. MARCUS: Database with REST API visualization + CTA
8. Trust: About Page component (condensed credibility section)
9. CTA: Email input form
10. Footer

---

## Dependencies Summary

```
framer-motion (or motion)
three
@react-three/fiber
@react-three/drei
lenis
lucide-react
```

All components use Tailwind CSS for styling. Ensure the Tailwind config includes the surgic.ai custom colors either via CSS variables or direct config extension.