# DESIGN.md: Prada Obsidian & Mega Mendung

## Design Read
Reading this as: personal engineering and UI/UX portfolio for hiring managers at top technology companies, in a Prada Obsidian and Mega Mendung editorial craft visual language, dial ENERGY 2 / RHYTHM 3 / MOTION 2.

## Dial: ENERGY 2 / RHYTHM 3 / MOTION 2
- **ENERGY 2 (Balanced):** Controlled editorial restraint with one distinct brushed-gold accent and a sculptural Three.js centerpiece rather than loud page-wide glow or neon clutter.
- **RHYTHM 3 (Varied):** Each section has its own compositional structure while preserving strict bilateral grid symmetry: Hero (asymmetric-balanced 2-column stage + centered 3D centerpiece), About (2-column editorial prose + unified 3-column Roman capability ledger), Experience (full-width architectural ledger rows), Selected Works (mirror-symmetric flagship split cards + uniform 2-column or 3-column grids), Correspondence (50:50 equal-height dual cards + closing batik seal).
- **MOTION 2 (Purposeful):** Cursor-driven 3D tilt and specular sheen on cards, smooth section reveal transitions, and interactive 3D Mega Mendung relief tilt; zero decorative infinite loops (`R-19`).

## Brand Identity & Dark Mode Justification (R-20, R-21)
- **Identity:** *Prada Obsidian* draws directly from Indonesian *Batik Prada* (gold leaf pressed onto dark charcoal cloth) and Cirebon *Mega Mendung* (concentric layered cloud contours representing calm depth and continuous flow).
- **Why fixed dark theme:** *Batik Prada* gold foil requires a deep obsidian cloth ground (`#0A0A09`) to create authentic metallic contrast without looking washed out (`R-21`).

## Color Palette (2 Core Dark Neutrals + 1 Deliberate Gold Accent, R-25, R-29)
| Token | Hex | Role | Contrast Check |
|---|---|---|---|
| `--background` | `#0A0A09` | Warm Obsidian primary canvas | Base |
| `--surface` | `#12110F` | Smoked Charcoal card surface | Base surface |
| `--surface-elevated` | `#1A1814` | Dark Umber elevated surface | Subtle layer lift |
| `--foreground` | `#F5F2EB` | Warm Ivory headings & primary copy | `17.72:1` on `#0A0A09` (PASS AA) |
| `--foreground-secondary` | `#B5ADA0` | Warm Stone body prose | `8.49:1` on `#12110F` (PASS AA) |
| `--chip-text` | `#E6E0D4` | Skill & stack chip labels | `14.36:1` on `#12110F` (PASS AA) |
| `--muted` | `#8C8272` | Captions, metadata & placeholders | `4.99:1` on `#12110F` (PASS AA) |
| `--border-subtle` | `#26221C` | Structural hairlines & dividers | Non-text divider |
| `--border-control` | `#6E6555` | Interactive button/input boundaries | `3.29:1` on `#12110F` (PASS 1.4.11) |
| `--primary` | `#D4AF5A` | Brushed Champagne Gold (single accent) | `9.06:1` on `#12110F` (PASS AA); `#0A0A09` on `#D4AF5A` = `9.51:1` (PASS AA) |
| `--accent-gold-hover` | `#E0BE6E` | Gold CTA hover surface | `#0A0A09` on `#E0BE6E` = `11.09:1` (PASS AA) |
| `--secondary` | `#E5C878` | Highlight gold for labels & active states | `11.56:1` on `#12110F` (PASS AA) |

## Typography (R-06)
- **Display Serif (`Philosopher`, 400 / 700 / italic):** Curved, flared calligraphic terminals echo traditional batik and Javanese heritage lettering while remaining crisp and legible at display sizes.
- **UI Sans (`Plus Jakarta Sans`, 400 / 500 / 600 / 700):** Created by Indonesian type foundry Tokotype; delivers crisp geometric legibility for technical summaries, dates, and interactive controls.
- **Scale:** Fluid `clamp()` display headings (`clamp(2.35rem, 4.6vw, 3.6rem)` for H1, `clamp(1.95rem, 3.6vw, 3rem)` for H2) so mobile and desktop proportions scale smoothly without clipping at 200% zoom.

## Identity Motif & Connected Thread
- Overlapping *Mega Mendung* cloud clusters (`MegaMendungCluster`) with stepped obsidian depth layers and opposing diagonal gold spiral ribbons bridge every section down a central `1px` champagne-gold spine (`01`, `02`, `03`, `04`), while mirrored animated cloud clusters and vertical *sulur* wave threads flow smoothly down both margins as the user scrolls (`MegaMendungTapestry`).

## One-Line Visual Decisions (R-31)
- **Color:** Smoked obsidian and a single brushed champagne-gold accent evoke *Batik Prada* craft while maximizing readability and focus (`R-01`, `R-29`).
- **Layout & Symmetry:** Symmetric outer padding (`max-w-6xl mx-auto px-5 sm:px-10 lg:px-24`), mirror-aligned columns, mirrored margin tapestry clouds, and zero-hole Showcase grids eliminate visual imbalance across all breakpoints (`R-03`, `R-05`).
- **Typography:** Pairing Indonesian-authored `Plus Jakarta Sans` with calligraphic `Cormorant Garamond` connects heritage craft with clean software engineering clarity (`R-06`).
- **Spacing:** Vertical rhythm alternates generous section breathing room with compact `1px` hairline dividers and golden spine connectors so sections read as one continuous narrative (`R-05`).
- **Card Hierarchy:** `ShowcaseCard` separates mirror-symmetric flagship split cards from standard grid cards and adds 3D tilt plus specular gold sheen to convey tactile depth (`R-14`).
- **3D & Motif:** Soft flowing Three.js golden silk-mist ribbons and fine gold-dust motes (`HeroGoldMist3D`) set the Hero atmosphere, while authentic 6-contour *Mega Mendung* vector motifs link every section down the page (`R-22`).
- **Icons & Glass:** Restraint limits backdrop blur strictly to the navigation pill (`R-10`), keeps ambient shimmer strictly within the Hero mist stage (`R-13`), and restricts icons to functional navigation and verified links (`R-04`).
