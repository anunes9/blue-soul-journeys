# Blue Soul Journeys

Website for [Blue Soul Journeys](https://www.bluesouljourneys.com/) — personalized dive expeditions crafted with passion, ethics, and deep respect for ocean communities.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Linting**: Biome
- **Formatting**: Prettier
- **Package Manager**: Bun

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Theme variables, fonts, custom animations
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/
│   ├── landing/
│   │   ├── Hero.tsx       # Hero section with underwater background
│   │   └── Footer.tsx     # Site footer with navigation and contact
│   └── ui/
│       └── button.tsx     # Button component with ocean-themed variants
└── lib/
    └── utils.ts           # cn() utility for class merging
```

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command        | Description                  |
| -------------- | ---------------------------- |
| `bun dev`      | Start development server     |
| `bun run build`| Production build             |
| `bun start`    | Start production server      |
| `bun run lint` | Run Biome linter             |
| `bun run format`| Format code with Biome      |

## Design System

The project uses a custom ocean-themed color palette defined as CSS variables in `globals.css` and mapped through `tailwind.config.ts`:

- **Ocean**: deep, mid, light
- **Aqua**: default, light
- **Sand**: default, dark
- **Navy**

Fonts: Inter (sans), Playfair Display (serif), Merriweather (serif)
