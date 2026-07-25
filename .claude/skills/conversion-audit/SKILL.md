---
name: conversion-audit
description: Run a CRO (conversion-rate-optimization) audit of the Sraventix website — scores it across lead capture, trust/social proof, offer clarity, analytics, content/channel fit, and technical SEO, then publishes a scored dashboard artifact. Use when asked to audit the site's conversion readiness, check for lead-capture gaps, produce a "conversion score," or re-run the weekly/periodic conversion audit.
---

# Conversion audit

Sraventix Technologies LLP is an EdTech / workforce-training company (South India, based in Ongole, Andhra Pradesh) whose website's job is turning visitors into leads (students, professionals, and organizations) and leads into paying customers. This skill runs a structural CRO audit of the live site and produces a scored report artifact the founder can act on.

Nobody expects 100% conversion. Frame everything against realistic benchmarks: even the strongest Indian edtech players (NxtWave, Scaler, GUVI, PW Skills) convert roughly 3–8% of visitors to leads and 5–15% of leads to paying students. The goal is maximizing that share and closing the follow-up loop, not chasing full conversion.

## Rubric

Score each category 0–10 based on what actually exists in the code (components, pages, metadata) — this is a heuristic/structural audit, not live analytics, unless a prior run recorded that analytics is now connected (check for `gtag`, `fbq(`, or `clarity.ms` references — see Analytics category).

| Category | Weight | What to check |
|---|---|---|
| Lead Capture & Conversion Paths | 25% | Contact form behavior, WhatsApp/phone CTAs, register/brochure flows, whether any lead data is captured into an owned list vs. only chat, presence of a self-serve payment path |
| Trust & Social Proof | 20% | Named testimonials with faces/outcomes, partner logos, real event photography with specific captions, trainer/founder bios, third-party reviews |
| Offer Clarity & Urgency | 15% | Syllabus/curriculum depth per course, pricing clarity, batch dates, seat counts, certificate samples, live-vs-self-paced comparison |
| Analytics & Measurement | 15% | Grep for `gtag`, `fbq(`, `clarity.ms`/`clarity(`, `GA_MEASUREMENT`, pixel IDs across `src/`. Zero hits = 0/10 |
| Content & Channel Fit | 10% | Audience segmentation (e.g. a "who we serve" page), regional-language content, lead magnets (masterclass/webinar/guide), blog/YouTube/social linkage |
| Technical & SEO Foundation | 15% | `robots.ts`/`sitemap.ts`/`manifest.ts`, structured data (JSON-LD), Open Graph/Twitter metadata, image alt text, per-course/long-tail page coverage |

Weighted overall = Σ(category score/10 × weight) × 100. Tiers: 0–39 Critical, 40–59 Developing, 60–79 Solid, 80–100 Optimized.

## Steps

1. **Gather evidence.** Read the actual current components/pages — don't rely on a previous run's notes for what exists today. Check `src/components/sections/*`, `src/components/layout/*`, `src/components/chat/*`, `src/app/**/page.tsx`, `src/app/layout.tsx`, `src/lib/site.ts`. Grep `src/` for analytics tags (see rubric above).
2. **Check prior runs.** Read `claude/audits/*.md` (sorted by filename/date) for the most recent prior score, so this run can report a trend delta ("Lead Capture moved 6.5 → 7.5 since last run because X shipped"). If this is the first run, say so — don't invent a trend.
3. **Score each category 0–10**, weight them, and compute the overall score and tier per the rubric.
4. **Write bullet evidence** for each category: 2–3 "working" bullets (what's genuinely shipped, cite the specific file/component) and 2–3 "gap" bullets (what's missing, be concrete about the failure mode — not "improve trust" but "no named testimonials exist, stats are unsourced").
5. **Build a prioritized roadmap** in three tiers — Now (this week, cheap/high-leverage, analytics and urgency fixes usually belong here), Next (2–4 weeks, structural additions like gated brochures or per-course pages), Later (ongoing growth motions like a masterclass funnel or language localization). Tie each item back to the category it fixes.
6. **Publish the artifact.** Load the `artifact-design` skill first. Build a single self-contained HTML file (score gauge, category cards with progress bars color-coded by tier — red/amber/green — working/gap bullet lists, and the Now/Next/Later roadmap). Match the site's own brand tokens from `src/app/globals.css` (`--color-navy: #0f172a`, `--color-blue: #2563eb`, `--color-emerald: #10b981`, etc.) — this report is about their brand, so it should look like it belongs to it. Style both light and dark themes per the artifact-design skill's token pattern.
7. **Redeploy to the same URL.** Check `claude/audits/dashboard-url.txt` for a previously published artifact URL. If it exists, republish with `Artifact(url: <that url>, ...)` so the link stays stable across runs. If it doesn't exist yet, publish fresh and write the returned URL into that file.
8. **Log the run.** Write `claude/audits/<YYYY-MM-DD>.md` with the overall score, the per-category weighted table, the artifact URL, and a short "notes for next run" section — same shape as `claude/audits/2026-07-25.md` (the baseline run). This is what step 2 reads next time.
9. Tell the user the score, the tier, the single highest-leverage fix, and the artifact link — don't just say "done," summarize the actual verdict.
