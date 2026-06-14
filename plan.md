# Implementation Plan - FSL Education Hub

Build a premium, high-converting landing page, application flow, and thank-you page for FSL Education Hub, focusing on online tutoring mentorship.

## Scope & Non-Goals
- **Scope:** Landing page (Home, About, Results, Benefits, Pricing, FAQ, Follow Us), Multi-step Application Form, Thank You Page.
- **Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP + ScrollTrigger, Lenis Smooth Scrolling, ShadCN UI.
- **Persistence:** Notion API integration for form submissions.
- **Non-Goals:** Real-time chat, student dashboard, payment gateway integration (pricing is informational/CTA-based), user authentication.

## Assumptions & Open Questions
- **Assumption:** The user will provide the `NOTION_TOKEN` and `NOTION_DATABASE_ID` in their environment or via the Architect.
- **Assumption:** Image placeholders will be used for profile photos and earnings screenshots.
- **Question:** Is there a specific WhatsApp group link for the Thank You page? (Will use a placeholder if not).

## Affected Areas
- **Frontend:** All pages and components.
- **Data:** Notion API integration (Server Actions or API Routes).
- **Animations:** Global Lenis setup, GSAP scroll triggers, and Framer Motion reveals.

## Ordered Phases

### Phase 1: Foundation & Styling
- Install dependencies: `gsap`, `lenis`, `framer-motion`, `@notionhq/client`, `canvas-confetti`.
- Configure Tailwind with brand colors: Royal Magenta (`#8A0F6B`), Royal Fuchsia (`#A21D8F`), Berry Purple (`#6A0D73`), Gold (`#FFD700`).
- Setup global smooth scrolling with Lenis.
- **Owner:** `frontend_engineer`

### Phase 2: Navigation & Hero Section
- Create a sticky glassmorphism Navbar.
- Build the premium Hero section with animated gradients and trust badges.
- **Owner:** `frontend_engineer`

### Phase 3: Content Sections (Standard)
- About Us: Mentor cards with Framer Motion modals for success stories.
- Benefits: Staggered reveal grid of feature cards.
- Free Masterclass: High-contrast section with bonus giveaway card.
- Pricing & FAQ: Premium pricing card and ShadCN Accordion-based FAQ.
- Follow Us: Social links with glow effects.
- **Owner:** `frontend_engineer`

### Phase 4: Cinematic Sections (GSAP)
- Results Section: Pinning vertical scroll and horizontal scrolling for earnings/student results.
- Testimonials Section: Auto-scrolling horizontal cards with GSAP.
- **Owner:** `frontend_engineer`

### Phase 5: Application Flow & Notion Integration
- Multi-step form with progress indicator (6 questions).
- Next.js API route/Server Action for Notion integration using `@notionhq/client`.
- Redirect logic to Thank You page.
- **Owner:** `frontend_engineer`

### Phase 6: Thank You Page & Final Polish
- Success card with `canvas-confetti` animation.
- Final mobile-first responsiveness check and SEO meta tags.
- **Owner:** `frontend_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the entire site, animations, and Notion integration.

**Per-agent instructions:**
### 1. frontend_engineer
- **Phases:** 1-6
- **Scope:** Full site implementation including complex GSAP animations and Notion API integration.
- **Files:**
  - `src/lib/lenis-provider.tsx` (Smooth scroll)
  - `src/components/sections/*.tsx` (Modular sections)
  - `src/app/apply/page.tsx` (Application form)
  - `src/app/api/notion/route.ts` (Submission handler)
  - `src/app/thanks/page.tsx` (Thank you)
- **Depends on:** none
- **Acceptance criteria:**
  - GSAP horizontal scroll in Results/Testimonials works perfectly.
  - Theme matches the "Royal Magenta" brand identity.
  - Notion submission sends data correctly (can be tested with logs if tokens are missing).
  - Lenis smooth scroll is active globally.
  - Multi-step form validates and transitions smoothly.

**Do not dispatch:**
- `supabase_engineer` (Not in scope)
- `quick_fix_engineer` (Initial build is handled by frontend_engineer)
