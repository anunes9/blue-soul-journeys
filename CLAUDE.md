# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start development server (http://localhost:3000)
bun run build    # Production build
bun run lint     # Biome linter
bun run format   # Biome formatter (writes in-place)
```

No test suite is configured. There is no `bun test` command.

## Architecture

**Next.js 16 App Router** with full i18n via `next-intl`. All routes live under `src/app/[locale]/`, which means every page receives a `locale` param (`en`, `pt`, `es`).

### Routing & i18n

- `src/i18n/routing.ts` — defines supported locales (`en`, `pt`, `es`) and default (`en`)
- `src/proxy.ts` — Next.js middleware that intercepts all non-API/static requests and routes to the correct locale
- `src/i18n/navigation.ts` — re-exports `next-intl` navigation helpers (use these instead of `next/navigation` for locale-aware links)
- `src/i18n/request.ts` — server-side locale resolution
- Translation files: `messages/en.json`, `messages/pt.json`, `messages/es.json`

Every page must call `setRequestLocale(locale)` at the top (required by `next-intl` for static rendering). When adding new copy, add keys to all three message files.

### Pages

| Route | Component |
|---|---|
| `/[locale]` | Landing page: Hero → Mission → Destinations → AboutUs → Contact → Footer |
| `/[locale]/destinations/[slug]` | Destination detail page |
| `/[locale]/journeys` | Journeys list |
| `/[locale]/my-story` | My story page |
| `/[locale]/what-i-do` | What I do page |
| `/[locale]/why-travel-with-me` | Why travel with me page |
| `/[locale]/how-it-works` | How it works page |

### Data

Destination data is static and lives in `src/data/destinations.ts`. The `Destination` interface is defined there. To add a destination, append to the `destinations` array and add the corresponding static images to `public/images/`.

### API

`src/app/api/contact/route.ts` — POST endpoint that sends contact form emails via **Resend**. Requires `RESEND_API_KEY` environment variable.

### Key conventions

- **Styling**: Tailwind CSS 4 with a custom ocean-themed palette (`ocean-deep`, `ocean-mid`, `aqua`, `sand`, `navy`) defined as CSS variables in `src/app/globals.css`
- **Class merging**: use `cn()` from `src/lib/utils.ts` (wraps `tailwind-merge` + `clsx`)
- **Icons**: Lucide React
- **Linter/formatter**: Biome with 2-space indentation; imports are auto-organised
- **Images**: External images must be allowed in `next.config.ts` under `images.remotePatterns`
- **WhatsApp contact URL**: defined in `src/lib/contact.ts` — update there if the number changes
- **Metadata & SEO**: JSON-LD schema (`TravelAgency`) and full OG/Twitter/hreflang tags are generated in `src/app/[locale]/layout.tsx`
