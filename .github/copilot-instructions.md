# Vite + React + TypeScript One-Page Application

This is a modern one-page application built with:
- **Vite**: Fast build tool and development server
- **React**: UI library for building components
- **TypeScript**: Type-safe JavaScript

## Project Structure

```
src/
  ├── App.tsx        # Main application component
  ├── App.css        # Application styles
  ├── main.tsx       # Entry point
  ├── index.css      # Global styles
  └── react.svg      # Logo asset
index.html           # HTML entry point
vite.config.ts       # Vite configuration
tsconfig.json        # TypeScript configuration
```

## Development & Build

- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Lint code**: `npm run lint`

## Available Scripts

- `npm install` - Install dependencies
- `npm run dev` - Start development server (typically on http://localhost:5173)
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally

## Getting Started

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open your browser to the URL shown in the terminal (usually http://localhost:5173)
4. Edit files in `src/` to see hot module replacement (HMR) in action

## Adding Features

To add new pages or components to this one-page application:

1. Create new components in `src/components/`
2. Import and use them in `src/App.tsx`
3. Use React Router or internal state management to handle navigation if needed

## Deployment

Build the project and deploy the `dist` folder to your hosting provider:

```bash
npm run build
# dist folder is ready for deployment
```
