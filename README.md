# Luxury Car Comparison

An elegant, interactive interface for browsing and comparing the world's finest luxury automobiles. Select multiple high-end cars and compare them across key metrics including price, top speed, fuel efficiency, and acceleration performance.

## Framework

Vite 6.x + React 19.x

## Features

- **Browse Luxury Cars**: Browse 8 premium vehicles including Ferrari, Lamborghini, Bugatti, Porsche, Mercedes-AMG, Rolls-Royce, Aston Martin, and McLaren
- **Car Selection**: Click to select multiple cars for comparison
- **Flexible Comparison**: Toggle comparison metrics (Price, Top Speed, Mileage, Acceleration)
- **Detailed Specs**: View complete features, horsepower, and specifications for each vehicle
- **Visual Highlights**: Automatically highlights the best-performing cars in each metric category

## Preview

Configured to run on `0.0.0.0:8080` for k8s HTTPRoute access.

## Development

```bash
npm install
npm run dev
```

Server will be available at:
- Local: http://localhost:8080
- Network: http://0.0.0.0:8080
- k8s: http://*.nodeops.app (or your HTTPRoute domain)

## Build

```bash
npm run build
npm run preview
```

## Design

**Theme**: Clean Light with premium gradient backgrounds

**Color Palette**:
- Primary: Blue (600) for interactive elements
- Backgrounds: Slate gradients for sophisticated appearance
- Accents: Green for best-in-class metrics, Amber for horsepower highlights
- Typography: Bold, modern sans-serif via Tailwind defaults

**UI Features**:
- Responsive grid layout (1-4 columns based on screen size)
- Sticky header with selection counter
- Smooth hover animations and transitions
- Interactive comparison table with metric highlighting
- Visual selection indicators on selected cars