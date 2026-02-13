BLUE SOUL JOURNEYS - TECHNICAL IMPLEMENTATION PLAN
Main website: https://www.bluesouljourneys.com/

===============================================================================
1. TECHNICAL STACK
===============================================================================

Frontend: Next.js 16+ (App Router), React 19+, TypeScript
Styling: Tailwind CSS + CSS Modules
UI Components: Headless UI / Radix UI
Forms: React Hook Form + Zod validation
Email: Resend
Images: Next.js Image + Cloudinary/Vercel Blob
Animation: Framer Motion
CMS (Future): Sanity.io or Contentful
Analytics: Vercel Analytics + Google Analytics 4
Hosting: Vercel


===============================================================================
2. SITEMAP AND PROJECT STRUCTURE
===============================================================================

Home (/)
├── About Us (/about)
├── Destinations (/destinations)
 │   ├── Red Sea Liveaboard (/destinations/red-sea)
 │   ├── Maldives North (/destinations/maldives-north)
 │   └── Maldives South (/destinations/maldives-south)
├── Gallery (/gallery)
├── FAQ (/faq)
└── Contact (/contact)


===============================================================================
3. DESIGN SYSTEM
===============================================================================

COLOR PALETTE (Ocean-Inspired)
------------------------------

Primary - Deep Ocean Blues:
  --primary-900: #0A2540 - Deep ocean blue
  --primary-700: #1E4976 - Rich blue
  --primary-500: #2E7CB8 - Ocean blue
  --primary-300: #5BA4D6 - Light blue
  --primary-100: #D6EFFF - Sky blue

Secondary - Aqua/Turquoise:
  --secondary-700: #0D7C7C - Deep teal
  --secondary-500: #14B8B8 - Turquoise
  --secondary-300: #7FE8E8 - Light aqua

Neutral:
  --white: #FFFFFF
  --gray-50 to --gray-900 - Standard gray scale

Accent:
  --sand: #F4E8D8 - Warm sand tone
  --coral: #FF6B6B - Coral accent for CTAs


TYPOGRAPHY
----------

Font Families:
  Headings: Montserrat, sans-serif
  Body: Open Sans, sans-serif
  Accent: Playfair Display, serif

Fluid Typography (clamp values for responsive scaling)


DESIGN PRINCIPLES
-----------------

- Natural & organic aesthetic
- Wave-like section dividers
- Curved edges and organic shapes
- Immersive underwater photography
- Subtle water-themed animations
- Generous whitespace
- Card-based layouts
- Sticky navigation with glass morphism


===============================================================================
4. KEY PAGES STRUCTURE
===============================================================================

HOMEPAGE SECTIONS
-----------------
1. Hero (video/carousel)
2. Featured Destinations (3-card grid)
3. Why Choose Us (4-column features)
4. Featured Journeys (carousel)
5. Testimonials (carousel)
6. Gallery Teaser (masonry)


DESTINATION PAGE SECTIONS
--------------------------
- Hero with imagery
- Introduction
- Quick Facts
- Marine Life grid
- Available Journeys
- Boat/Accommodation details
- Packing list
- How It Works
- CTA to book


===============================================================================
5. SEO STRATEGY
===============================================================================

ON-PAGE SEO
-----------
- Semantic HTML
- Meta tags (title, description, OG, Twitter Cards)
- Schema.org structured data (TravelAction, Product, Review)
- XML sitemap (auto-generated)
- Robots.txt
- Canonical URLs
- Image alt tags
- Internal linking


TECHNICAL SEO
-------------
- Fast page loads (< 2s LCP)
- Mobile-first responsive
- HTTPS (Vercel default)
- Clean URL structure


PERFORMANCE TARGETS
-------------------
- Lighthouse Score: 90+
- Core Web Vitals:
  * LCP: < 2.5s
  * FID: < 100ms
  * CLS: < 0.1


===============================================================================
6. PERFORMANCE OPTIMIZATION
===============================================================================

- Next.js Image component (automatic optimization)
- Route-based code splitting
- Dynamic imports for heavy components
- Prefetching critical routes
- CDN via Vercel Edge Network
- Lazy loading images
- Video lazy loading with placeholders
- WebP/AVIF image formats


===============================================================================
7. FUTURE ENHANCEMENTS
===============================================================================

1. Multi-language (i18n)
2. WhatsApp integration for quick chat
3. Instagram feed integration
4. Interactive dive maps
5. Marine life guide


===============================================================================
8. ACCESSIBILITY REQUIREMENTS
===============================================================================

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus visible states
- Color contrast >= 4.5:1
- Alt text for images
- Form labels and errors
- Skip navigation
- Responsive text
- Screen reader compatible


===============================================================================
9. CONTENT REQUIREMENTS
===============================================================================

TEXT CONTENT NEEDED
-------------------
- Brand messaging
- About Us story
- Destination descriptions (3)
- Journey details (6-10)
- Boat specifications
- Packing lists
- FAQ (20-30 questions)
- Blog posts (3-5)
- Testimonials (10-15)
- Dive certification info
- Legal pages (privacy, terms, etc.)


VISUAL ASSETS NEEDED
--------------------
- Logo (SVG)
- Favicon/app icons
- Hero videos/images
- Destination photos (20-30 each)
- Journey photos (10-15 each)
- Boat photos
- Marine life photos
- Team photos
- Gallery images (50-100)
- Video content


===============================================================================
10. DESIGN REFERENCES
===============================================================================

Design inspiration from Dribbble:
- https://dribbble.com/shots/5805737-Scuba-diving-website
- https://dribbble.com/shots/26153851-Diving-School-Website
- https://dribbble.com/shots/25055224-Scuba-Website
- https://dribbble.com/shots/26741907-DiveIn-Scuba-Diving-Landing-Page-Figma
- https://dribbble.com/shots/16722662-Create-a-compelling-Scuba-Diving-app



I’ll help you create a prompt for Vercel V0 to redesign this website. Let me first take a look at the current site to understand its mission and content.​​​​​​​​​​​​​​​​

Based on the website content, here’s a comprehensive prompt for Vercel V0:

Vercel V0 Prompt for Blue Soul Journeys Homepage Redesign
Design a modern, immersive landing page for Blue Soul Journeys - a premium dive travel service that creates personalized ocean journeys for passionate divers.
Mission & Brand Essence:
	∙	Create dive journeys for people who truly feel at home in the ocean
	∙	Focus on quality, safety, ethical travel, and respect for ocean communities
	∙	Personally accompanied journeys with close attention to detail
	∙	Specializes in liveaboard expeditions and carefully selected dive resorts (Red Sea, Maldives, Mozambique)
Design Requirements:
Color Palette:
	∙	Primary: Deep ocean blues (#0A3D62, #1E88A8, #2E86AB)
	∙	Secondary: Aqua/turquoise accents (#43C6AC, #6DD5ED)
	∙	Neutrals: Sandy beige/cream (#F5F5F0, #E8E8E0)
	∙	Text: Dark navy (#0F1E2E) and white
	∙	Use gradient transitions mimicking water depth (lighter blues at top, deeper blues below)
Layout Sections:
	1.	Hero Section:
	∙	Full-screen background: underwater photography or ocean waves
	∙	Headline: “Dive Journeys Designed for Those Who Truly Feel at Home in the Ocean”
	∙	Subheadline: Brief mission statement about personalized, ethical dive travel
	∙	CTA: “Start Your Journey” button (prominent, ocean-themed)
	∙	Subtle wave animation or parallax scrolling effect
	2.	Mission Statement Section:
	∙	Clean, centered text with ocean-blue background
	∙	Emphasize: “More than just a holiday” - focus on quality, safety, respect for ocean and communities
	∙	Icon trio: Quality · Ethics · Connection
	3.	Services Overview:
	∙	Three-card layout for: Liveaboards, Dive Resorts, Responsible Travel
	∙	Each card with ocean-themed imagery
	∙	Brief description and “Learn More” links
	4.	Featured Destinations:
	∙	Showcase: Red Sea, Maldives, Tofo & Mozambique
	∙	Image cards with hover effects (ripple or wave animation)
	∙	Destination names with brief taglines
	5.	Differentiator Section:
	∙	“Personally accompanied journeys”
	∙	Trust elements: local partnerships, safety focus, attention to detail
	∙	Consider a photo of the founder/guide
	6.	CTA Footer:
	∙	“Ready to Explore?” section with contact form or booking inquiry
	∙	Social media links (Instagram)
	∙	Simple, clean footer with privacy/terms links
Design Style:
	∙	Modern, clean, and sophisticated
	∙	Use fluid, organic shapes inspired by water and waves
	∙	Generous white/negative space to feel breathable like the ocean
	∙	Typography: Modern sans-serif (e.g., Inter, Montserrat) for headings; readable serif or sans-serif for body
	∙	Subtle animations: gentle wave motions, fade-ins, parallax scrolling
	∙	Mobile-first, fully responsive design
Special Elements:
	∙	Integrate the Blue Soul Journeys logo (water droplet design)
	∙	Flowing section dividers that mimic waves or water movement
	∙	Glass-morphism effects for cards (frosted glass look)
	∙	Underwater photography or ocean textures as background elements
	∙	Subtle bubbles or light ray animations
Tone:
Premium, trustworthy, passionate about ocean conservation, personally curated, authentic
Create this as a modern, conversion-focused landing page that makes visitors feel the call of the ocean while establishing trust and credibility.