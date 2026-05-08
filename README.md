# nhs-tech-test
# React Cart Simulation

A lightweight e-commerce cart built with React functional components.

## How to Run
1. **Clone the repo**: `[git clone <repo-url>](https://github.com/IanC-1/nhs-tech-test-1.git)`
2. **Install dependencies**: `npm install`
3. **Start development server**: `npm run dev`
4. **Build for production**: `npm run build`

## Features
- **Local Persistence**: Items remain in cart after browser refresh via `localStorage`.
- **Live Updates**: Totals and subtotals recalculate immediately on quantity change.
- **Safety**: Items are removed if quantity hits zero; totals never go negative.

## Testing
Run `npm test` to execute the Vitest suite.

### What is tested?
The `useCart` hook logic is verified to ensure:
1. Adding products correctly updates the total.
2. Decrementing quantity below zero removes the item.
3. The total price is accurately derived from current state.
