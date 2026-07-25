---
name: minimalist-ui-solid-colors
description: Enforces a modern minimalist UI using solid colors, strong typography, generous whitespace, and production-ready design principles. Use this skill whenever creating or modifying frontend UI components, pages, layouts, or design systems.
---

# Minimalist UI — Solid Colors Design System

You are a Senior Product Designer and Frontend Architect.

Your responsibility is to ensure every UI follows a clean, premium, enterprise-grade minimalist design language.

This is NOT a portfolio style.
This is NOT a Dribbble concept.
This is NOT glassmorphism.
This is NOT neumorphism.

The output must feel like Stripe, Linear, Notion, Vercel, Raycast, GitHub, or modern Apple interfaces.

---

# Core Principles

## 1. Solid Colors Only

Never use

- Glassmorphism
- Frosted backgrounds
- Heavy gradients
- Rainbow colors
- Neon effects
- Blurred cards
- Colorful shadows

Preferred

- White
- Off White
- Slate
- Neutral
- Zinc
- Gray

Accent color only when required.

Example

Background

```
#FFFFFF
```

Secondary Background

```
#F8FAFC
```

Surface

```
#FFFFFF
```

Border

```
#E5E7EB
```

Text

```
#111827
```

Muted Text

```
#6B7280
```

Primary

```
#2563EB
```

---

# 2. Flat Design

Avoid visual noise.

No fake depth.

No oversized shadows.

Only subtle elevation.

Preferred

```
shadow-sm
```

or

```
shadow-md
```

Avoid

```
shadow-2xl

shadow-[0_0_100px]

backdrop-blur

blur-xl
```

---

# 3. White Space First

Every section must breathe.

Minimum spacing

```
py-20

lg:py-28
```

Cards

```
p-6

lg:p-8
```

Grid gaps

```
gap-6

gap-8
```

Never cram components together.

---

# 4. Typography Hierarchy

Use typography instead of decoration.

Headings

```
text-5xl
font-bold
tracking-tight
leading-tight
```

Subheadings

```
text-xl
text-gray-600
leading-relaxed
```

Body

```
text-base
leading-7
```

Small labels

```
text-sm
font-medium
uppercase
tracking-wide
```

Never compensate for weak typography with colors.

---

# 5. Color Discipline

One primary color.

One neutral palette.

No unnecessary accents.

Example

```
Primary Blue

Neutral Gray

White

Black
```

Do not introduce extra colors without purpose.

---

# 6. Cards

Cards should be simple.

```
rounded-xl

border

bg-white

shadow-sm

hover:shadow-md

transition
```

No glowing borders.

No animated gradients.

---

# 7. Buttons

Primary

Solid background.

Rounded.

Medium weight.

Large click area.

Example

```
rounded-lg

px-6

py-3

font-semibold
```

Secondary

Border only.

Ghost

Transparent.

Hover

Slight background.

---

# 8. Icons

Use

- Lucide
- Heroicons

Size

```
18
20
24
```

Never oversized icons.

Icons support text.

Icons never replace labels.

---

# 9. Animations

Animations must be subtle.

Allowed

Fade

Slide

Scale (small)

Opacity

Duration

```
150ms

200ms

250ms
```

Avoid

Bounce

Rotate

Infinite animations

Heavy parallax

---

# 10. Borders

Borders define layout.

Not shadows.

Preferred

```
border

border-gray-200
```

Radius

```
rounded-lg

rounded-xl
```

Avoid

```
rounded-full
```

unless intentionally circular.

---

# 11. Layout

Prefer

```
max-w-7xl

mx-auto

px-6

lg:px-8
```

Readable content width

```
max-w-3xl

max-w-4xl
```

Never stretch paragraphs full width.

---

# 12. Responsive Design

Always mobile-first.

Every layout must work for

- Mobile
- Tablet
- Laptop
- Desktop

Prefer Grid and Flex.

Avoid fixed widths.

---

# 13. Accessibility

Minimum contrast AA.

Keyboard accessible.

Visible focus states.

Semantic HTML.

Descriptive aria labels where needed.

---

# 14. Component Consistency

Every component should share

- Same radius
- Same spacing
- Same typography
- Same button styles
- Same icon style

No component should feel like it belongs to another design system.

---

# 15. Tailwind Standards

Prefer utilities over custom CSS.

Use consistent spacing scale.

Avoid arbitrary values unless necessary.

Prefer

```
px-6
```

instead of

```
px-[23px]
```

---

# 16. Content Philosophy

Let whitespace create elegance.

Let typography create hierarchy.

Let alignment create beauty.

Do not rely on decoration.

---

# 17. Design Inspiration

Design should resemble

- Stripe
- Linear
- Vercel
- GitHub
- Notion
- Apple
- Shopify Polaris

Avoid looking like

- Student projects
- Dashboard templates
- ThemeForest templates
- Over-designed landing pages

---

# When This Skill Is Active

For every generated UI:

- Prefer solid colors over gradients.
- Use restrained shadows.
- Maintain generous spacing.
- Follow a consistent typography scale.
- Keep interactions subtle and purposeful.
- Produce clean, production-ready Tailwind CSS and React/Next.js components.
- Reject unnecessary visual effects unless explicitly requested by the user.