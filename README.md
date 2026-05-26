# Fast React Pizza Co

> A fast, modern, and minimal React + Vite starter for a pizza ordering demo — focused on speed, simplicity, and developer experience.

Fast React Pizza is a small single-page app demonstrating a clear frontend architecture with features like a restaurant menu, cart, order search, and basic user creation. It uses Vite, React, Tailwind CSS, and a small internal services layer for API calls.

## Why this project

- Lightweight Vite + React scaffold for rapid prototyping
- Clean feature-based structure (menu, cart, order, user)
- Tailwind for fast, responsive UI styling
- Practical examples of state management and API integration

## Features

- Browse restaurant menu and add items to cart
- Cart overview, item edits, and empty-cart state
- Create and search orders
- Simple user creation and username component
- Modular services for external APIs (geocoding, restaurants)

## Tech stack

- React (JSX)
- Vite (dev server & build)
- Tailwind CSS
- JavaScript modules and simple slice-style state

## Prerequisites

- Node.js 16+ or newer
- npm or yarn

## Quick Start

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-org/fast-react-pizza.git
cd fast-react-pizza
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Environment

This project uses Vite. If any external APIs require keys, prefix them with `VITE_` in an `.env` file at the project root. Example:

```
VITE_GEOCODING_API_KEY=your_key_here
VITE_RESTAURANT_API_URL=https://api.example.com
```

Access them in code via `import.meta.env.VITE_GEOCODING_API_KEY`.

## Project Structure

- `src/`
  - `features/` — feature folders: `menu`, `cart`, `order`, `user`
  - `services/` — API wrappers (`apiGeocoding.js`, `apiRestaurant.js`)
  - `ui/` — UI components and layout
  - `utils/` — helpers

## Contributing

Contributions are welcome. Recommended workflow:

1. Create a fork and a feature branch
2. Keep changes focused and small
3. Open a PR with a clear description

If you add features, try to include a short README update and tests where appropriate.

## Tips for extension

- Add proper input validation and error boundaries in UI
- Integrate a lightweight state manager (Redux Toolkit / Zustand) for complex flows
- Add unit and integration tests (Jest, Vitest, React Testing Library)

## License

MIT — see the `LICENSE` file for details.

## Contact

Questions or suggestions? Open an issue or pull request.

# React + Vite

\_This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh\_
