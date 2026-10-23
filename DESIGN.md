---
name: PICO SulTeng API Docs
description: A calm, precise API reference in the Stripe-docs manner, built around the PICO logo blue.
colors:
  ground: "#f6f8fb"
  surface: "#fbfcfe"
  sunk: "#eef2f8"
  ink: "#0f1b2d"
  ink-soft: "#3d4d63"
  muted: "#56667c"
  rule: "#dbe3ee"
  rule-soft: "#e8eef6"
  rule-strong: "#b8c4d6"
  brand: "#2a62b0"
  brand-hover: "#1f4f94"
  on-brand: "#f6f8fb"
  brand-tint: "#e6eef9"
  accent: "#4ea9e3"
  success: "#1f8a5b"
  code-panel: "#0f1b2d"
  code-ink: "#dbe7f7"
  code-muted: "#9aabc4"
  code-rule: "#26354d"
  logo-plate: "#fbfcfe"
  scrim: "#0b1220"
  dark-ground: "#0b1220"
  dark-surface: "#111a2b"
  dark-sunk: "#0e1626"
  dark-ink: "#e6edf7"
  dark-ink-soft: "#c3cfe0"
  dark-muted: "#9aaac0"
  dark-rule: "#223049"
  dark-rule-soft: "#1a263b"
  dark-rule-strong: "#34476a"
  dark-brand-text: "#7db4ee"
  dark-brand-solid-hover: "#2f6bbd"
  dark-brand-tint: "#14233d"
  dark-success: "#3fbf86"
  dark-code-panel: "#050911"
  dark-logo-plate: "#e6edf7"
  syntax-keyword: "#7db4ee"
  syntax-string: "#a7e3b8"
  syntax-number: "#f2d28b"
  syntax-punctuation: "#8fa3bf"
  syntax-comment: "#8196b0"
  syntax-property: "#dbe7f7"
typography:
  h1:
    fontFamily: "Inter Variable, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 3.6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.143
    letterSpacing: "-0.03em"
  h2:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 650
    lineHeight: "2.25rem"
    letterSpacing: "-0.015em"
  h3:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: "1.75rem"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: "1.25rem"
  caption:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: "1.25rem"
  button:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: "1.25rem"
  brand:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: "1.5rem"
    letterSpacing: "-0.01em"
  stat-title:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 650
    lineHeight: "1.5rem"
    letterSpacing: "-0.01em"
  stat-figure:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: "2rem"
    letterSpacing: "-0.01em"
    fontFeature: "tnum"
  page-title:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  key-path:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "14px"
  code:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "1.5rem"
    fontFeature: "tnum"
rounded:
  control: "6px"
  card: "8px"
  pill: "999px"
spacing:
  nav-desktop: "72px"
  nav-mobile: "64px"
  rail: "280px"
  sidebar-item: "36px"
  content-max: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.card}"
    height: "48px"
    padding: "0 24px"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    height: "48px"
    padding: "0 24px"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.control}"
  sidebar-item-active:
    backgroundColor: "{colors.brand-tint}"
    textColor: "{colors.brand}"
    rounded: "{rounded.control}"
    height: "36px"
  method-pill:
    backgroundColor: "{colors.brand-tint}"
    textColor: "{colors.brand}"
    rounded: "{rounded.pill}"
  state-pill-on:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.pill}"
  callout:
    backgroundColor: "{colors.brand-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px"
  table-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
  code-panel:
    backgroundColor: "{colors.code-panel}"
    textColor: "{colors.code-ink}"
    rounded: "{rounded.card}"
    padding: "24px"
---

# Design System: PICO SulTeng API Docs

## Overview

**Creative North Star: "The Clear Reference"**

This is a calm, precise API reference in the Stripe-docs manner. It is built around the blue of the PICO logo. It earns trust by craft, not by ornament. A developer finds an endpoint and copies a working cURL in seconds. A researcher finds a formula and its source.

The surface is a cool near-white ground with navy ink. One blue carries every action and every active state. Dark navy code panels sit on the page in both themes. Inter sets all the text. Numbers use tabular figures so columns line up. The dark theme is a full peer with its own measured values. It is not an inversion.

The build matches the approved comp (canon card, seed 8a7291fb). The reviewer sampled the hero pixels and found them equal to the comp: ground (246,248,251), code panel (15,27,45), button (42,98,176).

**Key Characteristics:**
- One blue (logo blue #2a62b0) for action, links and active state. Everything else is neutral.
- Hairline borders and an 8px radius. Depth is a soft two-layer shadow on cards only.
- Dark navy code panels with the cURL and Response tabs and a copy button.
- Tabular numerals everywhere numbers sit in a column.
- State is always shape plus text, never color alone.
- Light and dark are peers. Contrast is measured for both.

## Colors

A cool, near-white neutral field with one logo blue and one lighter sky accent that only appears on dark surfaces. The tokens live in `src/style.css` as RGB triplets so Tailwind can apply alpha. The hex values in the frontmatter are normative.

### Primary
- **Logo Blue** (#2a62b0): the action color. Primary buttons, links, inline code text, method pill text, the active sidebar item, the light-mode focus ring. 5.7 on ground.
- **Logo Blue, pressed** (#1f4f94): primary button hover. 7.6 on ground.
- **Blue Tint** (#e6eef9): the quiet wash behind the active nav item, method pills, inline code chips and callouts. Ink on it measures 14.8.
- **On Brand** (#f6f8fb): text on a blue fill. 5.7 on the blue, 7.6 on the hover blue.

### Secondary
- **Sky Accent** (#4ea9e3): only on dark surfaces. The focus ring in dark theme and in code panels, the selected code tab underline, and the text selection wash at 30 percent. It measures only 2.4 on the light ground, so it never carries light-mode text or rings.

### Neutral (light)
- **Cool Ground** (#f6f8fb): the page.
- **Surface** (#fbfcfe): the nav, cards, table cards, modal and the logo plate.
- **Sunk** (#eef2f8): table header rows, hover on quiet controls, the warning callout.
- **Ink** (#0f1b2d): body and headings. 16.3 on ground.
- **Ink Soft** (#3d4d63): secondary text and nav links. 8.1 on ground.
- **Muted** (#56667c): captions, key paths, table headers. 5.5 on ground.
- **Rule** (#dbe3ee), **Rule Soft** (#e8eef6), **Rule Strong** (#b8c4d6): hairlines, row dividers and outlines of off or deprecated pills.
- **Success** (#1f8a5b): the live dot. 4.2 on surface, so it is a 3:1 dot that always sits beside text.

### Neutral (dark)
- **Night Ground** (#0b1220), **Surface** (#111a2b), **Sunk** (#0e1626).
- **Ink** (#e6edf7, 15.9 on ground), **Ink Soft** (#c3cfe0, 11.9), **Muted** (#9aaac0, 7.9).
- **Rule** (#223049), **Rule Soft** (#1a263b), **Rule Strong** (#34476a).
- **Brand text** (#7db4ee, 8.6): links and active text. Buttons keep the fill #2a62b0 with hover #2f6bbd (on-brand text 5.7 and 5.0).
- **Brand tint** (#14233d). **Success** (#3fbf86, 7.5). **Logo plate** (#e6edf7).
- Focus ring is the sky accent, 7.2 on ground and 6.7 on surface.

### Code panel
- Light theme panel is navy (#0f1b2d) with code ink #dbe7f7 (13.8), muted tab text #9aabc4 (7.4) and rule #26354d.
- Dark theme panel is deeper than the page (#050911) with the page rule (#223049) as its border. Ink measures 15.9.
- Syntax colors are deliberate palette additions for the panel only. Keywords, functions, null, builtins and parameters use #7db4ee (7.9). Strings use #a7e3b8 (11.8). Numbers and booleans use #f2d28b (11.8). Punctuation and operators use #8fa3bf (6.7). Comments use #8196b0 (5.7). Properties and attribute names use #dbe7f7.
- The scrim is rgb(11 18 32 / 0.6) in both themes.

### Named Rules
**The One Blue Rule.** Logo blue is the only hue that marks action. Hairlines, text and surfaces stay neutral. Fields are never red, orange or purple. The logo is blue, red clashes with it, and this is a user decision.

**The Measured Contrast Rule.** Every text and ring color in the tokens comment of `src/style.css` has a measured ratio. Body text stays at 4.5 or higher. Large text and UI stay at 3 or higher. A new color needs a measured number before it ships.

**The No Pure Rule.** Text is never #000 or #fff. Ink is navy. On-brand is the ground color.

## Typography

**Display, Body and Label Font:** Inter Variable. It is self-hosted through @fontsource-variable/inter. System-ui is the fallback.
**Mono Font:** the system stack (ui-monospace, SF Mono, Menlo, Consolas) with tabular numerals

**Character:** Inter is a very common face. It was chosen on purpose for a read-mode docs surface, under the user's canon choice. Weight and tight tracking do the work, not a second family.

### Hierarchy
- **H1** (700, clamp(2.25rem, 1.4rem + 3.6vw, 3.5rem), line 1.143, tracking -0.03em, balanced): the page and hero title. 56/64 at desktop.
- **H2** (650, 1.75rem, line 2.25rem, tracking -0.015em, balanced): section titles. 28/36.
- **H3** (600, 1.25rem, line 1.75rem, tracking -0.01em, balanced): sub sections. 20/28. Stat group titles use 17px at 650.
- **Body** (400, 0.875rem to 1.125rem, line 1.5 to 1.65): table cells and callouts are 14px. Page lead text is 18px with a prose measure. Docs prose keeps lines near 65 to 75 characters.
- **Label** (600, 0.8125rem, line 1.25rem): sidebar group names, table headers, tabs, captions. Sentence case, no tracking.
- **Button text** (600, 15px, line 1.25rem): the large 48px buttons. Small buttons use 14px.
- **Brand name** (700, 17px, tracking -0.01em): the PICO SulTeng name in the nav.
- **Stat title** (650, 17px) and **Stat figure** (700, 18px on small screens and 22px from sm up, tabular): the group titles and numbers in the stat card.
- **Page title** (700, 2.25rem on small screens and 2.5rem from sm up, line 1.2, tracking -0.03em): the h1 on docs pages. The home page title uses the 56px display size.
- **Key path** (400, 11px mono, line 14px): the JSON path under each stat row, with breaks after dots.
- **Caption** (600, 0.75rem, line 1.25rem): method pills, state pills, key hints and the stat card footnote. This is the smallest size for text that people read. The one exception is the key path under each stat row, which is 11px mono with a 5.5 to 1 contrast and is a label for a developer, not reading text.
- **Code** (400, 0.875rem, line 1.5rem): code panels. Inline code is 0.8125rem on a blue tint chip.
- **Stat figure** (700, 18px on small screens and 22px from sm up, tabular): the numbers in the stat card.

### Named Rules
**The Tabular Rule.** Code, tables and stat figures use tabular numerals so digits align.

**The Real Subscript Rule.** Symbols like R_t render as a real subscript through `subscripts()` in `src/lib/wrap.ts`.

## Layout

The app shell is a centered container of 90rem (1440px). The docs page has a 17.5rem (280px) sticky left rail. Next to it is a content column of up to 76rem with a 3rem gap. An on-this-page rail shows on wide screens. Content width is shared across docs pages. Nav height is 72px from md up and 64px below, held in `--nav-h`. Scroll padding and heading scroll margin use the nav height plus 1rem. Horizontal page padding steps 16px, 32px, 64px.

Below lg the sidebar becomes a drawer, 20rem or 88vw at most, under a scrim. Tables sit inside table cards. When a card is narrower than 36rem its rows stack. Name and state share the first line, then type, then description. Hidden columns carry `stack-hide`, and cells with `data-label` print their label before the value. The stacked layout follows the card width, not the viewport.

Spacing follows a 4px base. Common steps are 8, 12, 16, 24, 48 and 64. Touch devices get a 44px minimum on icon buttons through `.touch-target`. A skip link is the first focus stop.

### Named Rules
**The Whole Token Rule.** URLs and key paths break only after a slash or a dot, through `<wbr>` (`afterSlash`, `afterDot` in `src/lib/wrap.ts`). They never break in the middle of a token.

## Elevation & Depth

Hairlines first, shadow second. Cards sit on the ground with a 1px rule and a soft two-layer shadow. Dark theme drops the lift and keeps a single tight shadow, because borders carry the depth there.

### Shadow Vocabulary
- **Card** (`0 1px 2px rgb(15 27 45 / 0.06), 0 8px 24px rgb(15 27 45 / 0.06)`): table cards and code panels. Dark: `0 1px 2px rgb(3 7 14 / 0.35)`.
- **Stat card** (`0 1px 2px rgb(15 27 45 / 0.04), 0 12px 32px rgb(15 27 45 / 0.06)`): the home stat card. Dark uses the card shadow.
- **Pop** (`0 4px 12px rgb(15 27 45 / 0.08), 0 24px 64px rgb(15 27 45 / 0.22)`): the drawer and the search palette. Dark: `0 24px 64px rgb(3 7 14 / 0.6)`.
- **Button** (`0 1px 2px rgb(15 27 45 / 0.2)`): primary button only.

### Named Rules
**The Soft Shadow Rule.** Shadows are blurred and low in opacity. Offset hard shadows are not used.

## Shapes

Gently rounded and quiet. Cards, table cards, code panels, the modal, callouts, primary buttons, the nav search field and the promo band use 8px. Smaller controls (ghost buttons, nav links, sidebar items, inline code chips) use 6px. Method and state pills use 999px. Borders are 1px hairlines everywhere. Callouts carry the 1px border on all four sides. Scrollbars are thin, 8px, with a rounded rule-strong thumb.

## Components

### Buttons
- **Shape:** 8px radius. Medium is 48px tall with 24px side padding and 15px text. Small is 36px tall.
- **Primary:** logo blue fill, on-brand text, 600 weight, one-pixel shadow. Hover goes to #1f4f94.
- **Secondary:** surface fill, ink text, strong rule border at 60 percent. Hover goes to sunk.
- **Ghost (btn-ghost):** 6px radius, surface fill, rule border, ink-soft text. Used for toggles, the menu button and copy buttons. Hover goes to sunk and ink. Inside a code panel it goes transparent with the code rule border.
- **Disabled:** 50 percent opacity and a not-allowed cursor.

### Navigation
Fixed top bar on surface with a rule underline. Logo at 40px beside a 17px bold wordmark. Links are 14px, 500 weight, ink-soft, 6px radius. The active link has the blue tint and ink text and sets `aria-current="page"`. The external Swagger UI link has an external-link icon and a screen reader note. A search field sits at the right (240px wide from md, an icon only below). Language and theme toggles show from md up. Below md they move into a menu with a toggle button that sets `aria-expanded`. Menu rows are 12px tall padded with the tint on the active row.

### Sidebar and drawer
Items are 36px tall, 14px text. Active uses the blue tint, brand text and 600 weight. Hover uses sunk. Group names are 13px muted labels. A version line sits at the bottom. As a drawer it sits under a 60 percent scrim. While it is open the page behind is `inert`, focus moves into the drawer, Escape closes it from anywhere, and a close button shows.

### Search palette
A modal on a 60 percent scrim with the pop shadow and an 8px radius. The input takes focus on open and focus returns to the opener on close. Arrow keys move, Enter chooses, Escape closes, and Tab loops between the input and the close button. Press `/` or Ctrl or Cmd plus K to open. Page scroll is locked while open.

### Pills
- **Method pill:** blue tint, brand text, mono 12px, 700 weight, 999px radius.
- **State pill:** shape plus text. Filled blue means required or on. Outline means optional or off. Dashed with a strike means deprecated. A tinted pill means paginated. Color is never the only signal.
- **Mark:** small filled, half or hollow squares beside text in the glossary.

### Tables
A table card holds a data table. Header row is sunk, muted, 13px, 600 weight. Cells have 16px by 12px padding and a soft rule between rows. The mobile layout stacks as described in Layout.

### Callouts
8px radius, 1px border all around (blue at 25 percent), blue tint fill, 20px icon, 14px text at 1.65 line. The warning tone uses the strong rule and sunk fill and a triangle icon in place of a circle. Tone changes the icon and the title, not only the color.

### Code panel
Navy panel in both themes, 8px radius, hairline border, card shadow. The header holds cURL and Response tabs (13px, 600). The selected tab has a 2px sky accent underline. Tabs support arrow keys, Home and End. The tab choice is remembered across panels. A copy button sits in the header. Code is 14px on a 24px line with 24px padding and scrolls sideways.

### Stat card
The home signature piece. A bordered surface card with groups for Sulawesi Tengah and Indonesia. Each group has a title, a "latest record" date, and four cumulative rows (positive, recovered, deceased, active). Each row shows the label, its key path in small mono with dot breaks, and a tabular figure. Missing values keep a reserved cell so the layout does not shift. It rises and fades in once on first load.

### Heading anchors
A link glyph after h2 and h3 headings. Hidden until hover or keyboard focus, then muted, then blue on hover. On devices without hover it shows at 60 percent opacity.

### Focus
`:focus-visible` is a 2px outline with a 2px offset. It is logo blue on light, and sky accent on dark and inside code panels.

### Motion
One authored motion: the stat card `rise-in`, 500ms, 12px up and fade, with a gentle ease-out (cubic-bezier(0.16, 1, 0.3, 1)). Other motion is 150ms color transitions. Reduced motion turns off animation and shortens transitions.

## Do's and Don'ts

### Do:
- **Do** use logo blue (#2a62b0) for every action and active state, and keep all other surfaces neutral.
- **Do** pair every state with text or shape. Required, optional, paginated, deprecated, warning and success all carry a label.
- **Do** keep both themes measured. Add dark values whenever you add a light value.
- **Do** use 8px for cards and panels, 6px for controls and 999px for pills.
- **Do** use tabular numerals for numbers and code.
- **Do** break URLs and key paths only after a slash or a dot.
- **Do** keep a visible focus ring on every control, blue on light and sky on dark and code.
- **Do** give icon buttons a text label for assistive tech and a 44px target on touch devices.

### Don't:
- **Do not** use red, orange or purple fields or accents. The logo is blue and red clashes. This is a user decision.
- **Do not** use gradient text.
- **Do not** put a small label above a heading to introduce it.
- **Do not** use a colored side border thicker than 1px. Borders are 1px on all sides.
- **Do not** use emoji as icons. Icons come from `icons/Icon.vue`.
- **Do not** break a URL or key path in the middle of a token.
- **Do not** signal state by color alone.
- **Do not** use pure black or pure white for text.
- **Do not** use the sky accent for text or rings on a light surface. It measures 2.4.

## Known Gaps

- Indonesian text was machine-authored and has not been reviewed by a native speaker.
- WCAG 2.2 AA is assumed from the measured contrast and the build. It is not verified with axe or Lighthouse.
- The Dinkes Sulteng logo looks small in its tile because of the source image crop. The user accepted this as a known issue.
- Not browser-verified: the two-column endpoint layout at 1600px and up. Hover and focus states, including the heading anchor. Widths between 400 and 1400. Reduced motion. The mobile menu toggles.
- The `/api` redirect is covered by a router test only.
- Heading anchors may show on touch devices at 60 percent opacity. This is not confirmed on a real phone.
- The glossary percentile formula still prints a literal z_p in monospace.
- The home hero matches the comp except for font width, small added copy buttons, an external-link icon on Swagger UI, key paths on the Indonesia rows and a sun icon in light mode.
- Inter is a very common face. It stays by deliberate choice.
