---
name: ui-ux-responsive-design
description: Rules for building interfaces that feel intentional, stay aligned, adapt smoothly to every screen size and browser, and match how real users actually scan and act on a page. Use this whenever designing or building a website, app UI, landing page, dashboard, or any responsive layout.
---

# UI/UX & Responsive Design Rules

A working reference for building interfaces that are usable on every device, consistent across browsers, and comfortable to look at and use. Treat every rule below as a default — deviate only when the content genuinely calls for it, and know why.

---

## 1. User Mindset First (the psychology behind the rules)

Every layout decision should trace back to how people actually read and act on a screen, not just how it looks in a mockup.

- **Visual hierarchy**: the eye should always know what matters most, second, and least. Size, weight, color, and spacing — not borders and boxes — are the primary tools for creating that order.
- **Scanning patterns**: users scan in an **F-pattern** on text-heavy pages (left-aligned headings and leading words get read first) and a **Z-pattern** on sparse, visual pages (top-left → top-right → bottom-left → bottom-right, which is why CTAs commonly sit bottom-right of a hero). Put the most important content on these paths, not in the corners they skip.
- **Fitts's Law**: the time to reach a target depends on its size and distance. Primary actions must be large and close to where the user's attention already is. Never shrink a button to save space if it's the primary action.
- **Hick's Law**: more choices = slower decisions. Every screen should have one obvious primary action; secondary actions should visually recede.
- **Miller's Law (7±2)**: don't present more than ~5-7 unrelated choices or nav items at once. Group, collapse, or paginate beyond that.
- **Jakob's Law**: users spend most of their time on *other* sites. Match established conventions (cart icon top-right, logo top-left → home, underlined/colored text = link) unless breaking convention is the deliberate point.
- **Progressive disclosure**: show only what's needed for the current step; reveal detail on demand (accordions, "show more," modals) instead of front-loading everything.
- **Feedback & affordance**: every interactive element must look interactive (cursor, hover, active states) and every action must produce visible feedback within ~100ms (loading state, color change, toast).
- **Error prevention over error correction**: disable invalid actions, validate inline, confirm destructive actions — don't just show a red message after the fact.
- **Recognition over recall**: show options, don't make users remember codes, IDs, or prior steps.

---

## 2. Layout & Grid Rules

- **Use a grid, always.** 12-column grid for web, 4-column for narrow mobile. Every element's width and position should trace back to grid columns/gutters, not arbitrary pixel values.
- **Spacing scale, not arbitrary numbers.** Use a consistent scale (e.g. 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96). Every margin/padding in the design should be one of these values. This alone is what makes a layout feel "aligned" even before you check edges.
- **Whitespace is a layout element, not empty space.** Related items sit close together (small gap); unrelated groups get a larger gap (proximity principle, one of the Gestalt laws). If two things need a label to explain they're related, they're too far apart.
- **One primary column of focus.** Even in multi-column layouts, there should be one dominant reading path; sidebars and widgets support it, they don't compete with it.
<br>
- **Above-the-fold priority**: the single most important message/action must be visible without scrolling on a *standard* viewport (~600-650px visible height on common laptops) — but never sacrifice mobile layout to force desktop-only above-the-fold content.
- **Content-out, not container-in.** Size sections based on the content's natural length; don't force fixed heights that cause overflow or awkward empty space when real (longer/shorter/translated) content is dropped in.

---

## 3. Alignment Rules

- **Pick one edge and stick to it.** Left-align body text and form labels by default (centered paragraphs are hard to scan past 1-2 lines). Reserve center alignment for short headlines, hero statements, and isolated elements.
- **Align to a shared axis.** Every element in a row/column should share a left, right, center, or baseline edge with its neighbors — never "eyeballed" placement.
- **Optical alignment beats mathematical alignment when they conflict.** A triangle icon or quote mark next to text often needs a 1-2px nudge to *look* aligned even though the math says it already is. Trust the eye for icon/glyph alignment specifically.
- **Vertically center within a fixed-height container using flex/grid** (`align-items: center`), never manual top-padding math — the latter breaks the moment content length changes.
- **Text baselines align, not bounding boxes.** When mixing font sizes/weights in one line (e.g. price + "/mo"), align on the text baseline, not the box edges.
- **Consistent icon-to-text alignment.** Icons paired with labels should share the optical center line of the text, with a consistent gap (usually 8px) across the entire product.

---

## 4. Responsiveness Rules (every device)

**Mobile-first, not desktop-shrunk.** Build the smallest viewport first, then add complexity as space allows — this forces genuine prioritization instead of cramming a desktop layout into a phone.

### Standard breakpoints (adjust to content, not the other way around)
```
320–479px    Small phones
480–767px    Large phones
768–1023px   Tablets / small laptops
1024–1279px  Laptops
1280–1919px  Desktops
1920px+      Large / external displays
```

### Rules
- **Fluid over fixed.** Use `%`, `fr`, `minmax()`, `clamp()`, and `auto` before hardcoding pixel widths. Reserve fixed px for borders, icons, and fine details only.
- **Fluid typography** with `clamp()` so text scales smoothly instead of jumping at breakpoints:
  ```css
  font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem);
  ```
- **Flexible media.** `img, video { max-width: 100%; height: auto; }` always. Use `srcset`/`sizes` or `<picture>` so phones don't download desktop-sized images.
- **Touch targets ≥ 44×44px (iOS) / 48×48dp (Android)**, with at least 8px spacing between adjacent tappable elements — regardless of how small the icon inside looks.
- **Never rely on hover for critical functionality.** Touch devices have no hover; anything hidden until `:hover` (tooltips, dropdown menus, reveal-on-hover actions) needs a tap-accessible equivalent.
- **Avoid raw `100vh` on mobile.** Mobile browser chrome (address bar) resizes the viewport, causing jumpy `100vh` sections. Use `100dvh` (dynamic viewport height) with a `100vh` fallback, or `min-height` instead of fixed `height`.
- **Respect safe areas** on notched devices:
  ```css
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
           env(safe-area-inset-bottom) env(safe-area-inset-left);
  ```
- **Test real breakpoints, not just "mobile/desktop."** Check the awkward middle sizes (600px, 900px) where two-column layouts often break before they reach the next named breakpoint.
- **Collapse navigation intelligently.** Full nav → condensed nav → hamburger, in that order as width shrinks; don't jump straight from full nav to hamburger at the first sign of tightness.
- **Orientation changes must not break layout** — test portrait and landscape on tablets and phones both.
- **Use container queries for reusable components** (`@container`) so a component adapts to the space it's placed in, not just the viewport — critical for cards/widgets reused in sidebars vs. full-width areas.

---

## 5. Browser Compatibility Rules

- **Progressive enhancement, not graceful degradation.** Build the core experience with widely-supported features first, then layer on enhancements — don't build for the newest browser and hope older ones cope.
- **Check support before using any newer CSS/JS feature** (e.g. via caniuse.com) — especially `:has()`, container queries, `subgrid`, and newer color functions (`oklch`, `color-mix`).
- **Always provide a fallback for cutting-edge properties:**
  ```css
  height: 100vh;      /* fallback for browsers without dvh support */
  height: 100dvh;
  ```
- **Normalize default styles.** Use a CSS reset or `:where()`-based normalize so buttons, inputs, and headings don't silently differ across Chrome/Safari/Firefox default stylesheets.
- **Test the actual rendering engines**, not just "browsers": Chromium (Chrome/Edge/Brave), WebKit (Safari/iOS — including iOS Chrome, which is WebKit under the hood), and Gecko (Firefox). iOS Safari is the most common source of surprise bugs (viewport units, date inputs, sticky positioning, `-webkit-` prefixes for some flex/gradient behavior).
- **Feature-detect, don't browser-detect.** Use `@supports` in CSS and capability checks in JS instead of user-agent sniffing, which breaks the moment a browser updates its UA string.
- **Font rendering will differ slightly** across OS/browser (subpixel rendering, font smoothing) — don't rely on pixel-perfect text alignment across platforms; build in small tolerance.
- **Avoid unsupported units in critical layout** (e.g. don't rely solely on `svh`/`lvh` without a `vh` fallback).
- **Test with browser zoom at 200%** and with system font size increased — layouts must reflow, not clip or overlap (this is also a WCAG requirement).

---

## 6. Element Sizing & Positioning Rules

- **Every spacing/sizing value comes from the 4px/8px scale** (see Layout Rules) — no one-off values like `13px` or `27px` margins.
- **Buttons**: minimum height 40-48px on desktop, 44-48px on mobile; horizontal padding roughly 1.5–2× the vertical padding so text doesn't feel cramped.
- **Icons**: keep a consistent size set per context (e.g. 16px inline, 20-24px UI controls, 32px+ feature icons) — never scale icons ad hoc per instance.
- **Line length**: body text at 45–75 characters per line (roughly 60-75ch max-width) — full-width text on a wide desktop screen is a common, easy-to-miss failure.
- **z-index scale, not arbitrary jumps.** Define tiers once (e.g. base:0, dropdown:10, sticky-header:100, modal:1000, toast:1100) and reuse them — random 9999 values cause stacking bugs later.
- **Sticky/fixed elements must reserve their own space** (don't let a fixed header overlap the first section's content — pad the body/section by the header's height).
- **Don't let content dictate container size unpredictably.** Set `min-width`/`max-width` guards on flexible containers so a long unbroken string (URL, email) can't blow out a layout — pair with `overflow-wrap: break-word`.

---

## 7. Typography Rules

- **One type scale, consistently applied** — e.g. a modular scale (1.25× or 1.333× ratio) from a base of 16px. Every heading/body/caption size in the product should come from this scale.
- **Body text minimum 16px** on the web (smaller reliably hurts readability and forces mobile browsers to auto-zoom on input focus).
- **Line-height**: ~1.4–1.6 for body text, ~1.1–1.3 for large headings (tighter as size increases).
- **Limit to 2 typefaces** (one display/heading, one body) plus a monospace if needed for data — more creates visual noise.
- **Never justify body text on the web** (`text-align: justify`) — it creates uneven word spacing without hyphenation support in most browsers.

---

## 8. Color & Accessibility Rules

- **Contrast ratios (WCAG AA minimum):** 4.5:1 for normal text, 3:1 for large text (≥24px or ≥19px bold) and for UI component borders/icons that convey meaning.
- **Never use color as the only signal** — pair error/success/warning states with an icon or text label too, for color-blind users (~8% of men).
- **Design and test both light and dark backgrounds if dark mode is supported** — don't just invert colors; re-check contrast in each mode independently.
- **Focus states must be visible and never removed.** `outline: none` without a replacement focus style breaks keyboard navigation — always provide a clear visible focus ring.

---

## 9. Motion & "Smooth" UI Feel

- **Animate only `transform` and `opacity`** for anything performance-sensitive — animating `width`, `height`, `top`/`left`, or `box-shadow` directly forces layout recalculation and causes visible jank. Use `transform: translate/scale` instead.
- **Duration guide:**
  ```
  Micro-interactions (hover, toggle):     100–200ms
  Standard transitions (menus, modals):   200–300ms
  Larger/entrance transitions:            300–500ms
  Avoid anything slower than ~500ms for UI feedback — it reads as lag, not polish.
  ```
- **Easing**: use `ease-out` for elements entering/appearing (fast start, gentle stop — feels responsive) and `ease-in` for elements exiting. Avoid linear easing for anything except continuous motion (spinners, marquees).
- **Respect reduced motion:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }
  ```
- **Loading states must appear immediately** — skeleton screens or spinners within ~100ms of an action, so nothing ever feels frozen or unresponsive.
- **Avoid layout shift.** Reserve space for images, ads, and async content (explicit `width`/`height` or `aspect-ratio`) so content doesn't jump as things load — this is both a UX and a Core Web Vitals (CLS) issue.

---

## 10. Performance = Perceived Smoothness

Smooth UI isn't only animation quality — a laggy page feels un-smooth no matter how polished the transitions are.

- Lazy-load offscreen images/media (`loading="lazy"`).
- Serve responsive image sizes (`srcset`) instead of one large image scaled down by CSS.
- Keep the initial interactive path (above-the-fold content, primary CTA) render-blocked on as little as possible; defer non-critical JS/CSS.
- Debounce/throttle scroll and resize handlers — unthrottled handlers are a common source of scroll jank.
- Test on a mid-range/throttled device and connection, not just a dev machine on fast wifi — this is where real jank shows up.

---

## 11. Pre-Ship Checklist

- [ ] Layout tested at 320px, 375px, 768px, 1024px, 1440px, and 1920px widths
- [ ] Every spacing value traces to the spacing scale
- [ ] All interactive elements ≥44px touch target with adequate spacing
- [ ] No functionality is hover-only
- [ ] Tested in Chromium, WebKit (Safari/iOS), and Firefox
- [ ] Keyboard navigation works end-to-end; focus states visible
- [ ] Text contrast passes WCAG AA in every theme/mode supported
- [ ] Zoomed to 200% and reflow checked
- [ ] Reduced-motion preference respected
- [ ] No layout shift on image/content load
- [ ] Primary action is the clearest, largest, most reachable element on every screen