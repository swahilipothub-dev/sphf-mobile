# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Expo Router entry point; routes are file-based (e.g., `(tabs)` group). Keep screens small and reuse shared UI.
- `components/`: Reusable UI pieces (themed text/view, parallax layouts, icons). Favor named exports and prop-driven styling.
- `hooks/`: Theme/color hooks; import via the `@/` alias configured in `tsconfig.json`.
- `constants/`: Theme tokens and shared config values. Update here before scattering literals.
- `assets/images/`: App icons, splash assets, and logos. Respect current dimensions when replacing.
- `scripts/reset-project.js`: Resets the starter code; use only for clean slates.

## Build, Test, and Development Commands
- `npm install`: Install dependencies (use npm to match `package-lock.json`).
- `npm run start`: Launch Expo dev server; scan QR or use simulator prompts.
- `npm run android` / `npm run ios` / `npm run web`: Start platform-specific previews from the Expo server.
- `npm run lint`: Run ESLint with Expo defaults; use `-- --fix` to auto-correct when possible.
- `npm run reset-project`: Move starter code to `app-example/` and create a clean `app/` tree.

## Coding Style & Naming Conventions
- Language: TypeScript with `strict` mode. Prefer functional React components and React hooks for state/effects.
- Formatting: 2-space indentation, single quotes, trailing commas per linter. Avoid inline styles when a shared style makes sense.
- Naming: Components and screens in `PascalCase`, hooks in `camelCase` prefixed with `use`, style objects in `camelCase`. Route files should reflect screen purpose (e.g., `profile.tsx`).
- Imports: Use the `@/` alias for root-relative paths; group React/Expo imports before local modules.

## Testing Guidelines
- Automated tests are not present yet. Prioritize linting and manual smoke-testing via `npm run start` on at least one mobile simulator plus web.
- When introducing tests, colocate them near the feature (`__tests__/component.test.tsx`) and favor React Native Testing Library patterns.
- Keep components small so they are testable; avoid side effects in top-level modules.

## Commit & Pull Request Guidelines
- No formal convention exists; use clear, imperative commit messages (e.g., `Add themed button component`). Keep related changes in a single commit when practical.
- Pull requests should include a brief summary, linked issue or ticket, affected platforms (android/ios/web), and screenshots or screen recordings for UI changes.
- Run `npm run lint` and ensure the app starts locally for any platform you touched before opening a PR. Mention any known limitations or follow-up tasks in the description.

## Security & Configuration
- Do not commit API keys or secrets. Expo config lives in `app.json`/`app.config.*`; prefer environment variables or secure storage for sensitive data.
- Validate third-party package additions with the team, and pin versions in `package-lock.json`.
