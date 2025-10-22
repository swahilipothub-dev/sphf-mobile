# Pwani Innovation Week Mobile

Imagine the Pwani Innovation Week plans in your pocket. View the 5‑day schedule and speaker roster in a simple, fast Expo app.

This repository contains a minimal Expo (React Native) project that runs on iOS, Android, and the Web.

## Prerequisites
- Node.js 20+ and npm 9+ (or Yarn/PNPM)
- Git
- Expo CLI (no global install required; use npx)
- For device testing: a phone on the same network
  - iOS: Install the “Expo Go” app from the App Store
  - Android: Install the “Expo Go” app from the Play Store
- For emulators/simulators (optional)
  - macOS + Xcode for the iOS Simulator
  - Android Studio + Android SDK/AVD for the Android Emulator

## Quick start (local development)
1. Clone and install
   ```bash
   git clone <your-fork-or-this-repo-url>
   cd piw-tour-mobile
   npm install
   ```
2. Start the development server
   - `npm start`
   - This opens Expo Dev Tools and prints a QR code in the terminal.
3. Open the app
   - On a physical device: open “Expo Go” and scan the QR code.
   - iOS simulator (macOS): press `i` in the terminal or click “Run on iOS simulator” in Dev Tools.
   - Android emulator: press `a` in the terminal or click “Run on Android device/emulator”.
   - Web (PWA preview): press w or run npm run web.

_Note: Edits to the source files hot‑reload automatically._

## Run on your phone (download the app during development)
The fastest cross‑platform way to “download” and try the app is via Expo Go.
- iOS (App Store): search for “Expo Go” and install.
- Android (Play Store): search for “Expo Go” and install.
- Start the dev server (npm start) and scan the QR code with Expo Go.
- If your phone and computer are not on the same network, switch the connection type in Dev Tools to “Tunnel”.

## Platform specifics
- iOS simulator requires Xcode installed on macOS.
- Android emulator requires Android Studio, an AVD, and the Android SDK/Platform Tools in PATH (adb).
- Web runs in your default browser using React Native Web.

## Available scripts
- `npm start` — start the Metro bundler and Expo Dev Tools
- `npm run ios` — start and run on iOS simulator (macOS only)
- `npm run android` — start and run on Android emulator/device
- `npm run web` — run the web build in the browser
- `npm run lint` — run ESLint + Prettier check
- `npm run format` — fix lint issues and format files

## Project notes
- Tech: Expo SDK 54, React Native 0.81, React 19, Tailwind via NativeWind.
- App config: see app.json for splash screen and icons (assets/piw-logo.png and assets/piw_favicon.png).
- UI: Bottom tab bar for Schedule and Speakers. Custom loader uses a spinning favicon image.

[//]: # (## Building installable binaries &#40;optional&#41;)

[//]: # (For sharing without the Expo Go app, use EAS Build &#40;Expo Application Services&#41;:)

[//]: # (1. Install EAS CLI: npm i -g eas-cli &#40;or npx eas-cli once&#41;)

[//]: # (2. Login: eas login)

[//]: # (3. Configure &#40;first time&#41;: eas build:configure)

[//]: # (4. Build:)

[//]: # (   - Android &#40;APK/AAB&#41;: eas build -p android --profile preview)

[//]: # (   - iOS &#40;IPA/TestFlight&#41;: eas build -p ios --profile preview)

[//]: # (5. After the build completes in the cloud, download the artifact from the EAS dashboard or the terminal link.)

[//]: # ()
[//]: # (Notes:)

[//]: # (- iOS distribution to devices typically uses TestFlight or an enterprise profile. A paid Apple Developer account is required for App Store/TestFlight.)

[//]: # (- Android APKs can be side‑loaded; AABs are for Play Store upload.)

## Troubleshooting
- QR code won’t load on device: ensure phone and computer are on the same network or switch connection to Tunnel in Dev Tools.
- iOS simulator fails to open: open Xcode once to finish installing components, then rerun npm run ios.
- Android emulator not detected: create and start an AVD in Android Studio, or connect a device with USB debugging enabled.
- Port conflicts: close other Expo/Metro instances or set a different port.

## To-do list and Contribution

- Contribute to the project and make it better. See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for more details. 
- See the [To-Do List](docs/CHECKLIST.md) for pending features.

## License
[MIT](LICENSE)

