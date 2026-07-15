# AI-Powered Emergency Medical Response System

A React Native Expo app prototype for a real-time emergency response system.

## Features
- Secure login and registration with Firebase Authentication
- One-tap emergency alert flow with live dispatch
- Symptom checker powered by a local AI placeholder and remote Python API
- Real-time responder list from Firestore with status tracking
- Nearby hospital map links
- Live GPS tracking updates in the app
- Firebase Cloud Functions scaffold for alert notifications

## Emergency dispatch flow
- Emergency button sends current location to a backend service
- Backend assigns the nearest responder and returns dispatch details
- App saves the dispatched emergency record to Firestore
- Assigned responder status is updated in Firestore for real-time tracking

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start Expo:
   ```bash
   npm start
   ```
3. Open in Expo Go or a simulator.

## Install on your phone
1. Install Expo Go:
   - Android: Google Play store
   - iOS: App Store
2. In the project directory run:
   ```bash
   npm start
   ```
3. Scan the QR code with Expo Go.
4. The app should launch on your phone immediately.

If the QR code does not work, open the app on the same Wi-Fi network as your computer.

## Testing the app
- Run the app locally:
  ```bash
  npm start
  ```
- Open on Android:
  ```bash
  npm run android
  ```
- Open on iOS (Mac only):
  ```bash
  npm run ios
  ```

## EAS deployment
1. Install EAS CLI:
   ```bash
   npm install -g eas-cli
   ```
2. Log in to Expo:
   ```bash
   eas login
   ```
3. Configure your project with EAS if needed:
   ```bash
   eas build:configure
   ```
4. Build for Android:
   ```bash
   npm run eas:build:android
   ```
5. Build for iOS (macOS only):
   ```bash
   npm run eas:build:ios
   ```

## Testing checklist
See `TESTING.md` for a full local and deployment test plan.

## Python backend
1. Install Python dependencies:
   ```bash
   cd backend
   python -m pip install -r requirements.txt
   ```
2. Start the backend service:
   ```bash
   python app.py
   ```
3. On Android emulator, Expo will call the backend at `http://10.0.2.2:5000`.

## Firebase setup
1. Go to https://console.firebase.google.com/ and create a new Firebase project.
2. In the Firebase console, enable Authentication:
   - Authentication -> Get started -> Email/Password sign-in.
3. Create a Firestore database:
   - Firestore Database -> Create database -> Start in test mode.
4. Obtain your Firebase web app config
   - Project Settings -> Your apps -> Add app -> Web
   - Copy the config values.
5. Open `services/firebase.js` and replace the placeholder values:
   ```js
   const firebaseConfig = {
     apiKey: '<YOUR_FIREBASE_API_KEY>',
     authDomain: '<YOUR_FIREBASE_AUTH_DOMAIN>',
     projectId: '<YOUR_FIREBASE_PROJECT_ID>',
     storageBucket: '<YOUR_FIREBASE_STORAGE_BUCKET>',
     messagingSenderId: '<YOUR_FIREBASE_MESSAGING_SENDER_ID>',
     appId: '<YOUR_FIREBASE_APP_ID>'
   };
   ```
6. Optionally, copy `services/firebase.example.js` to `services/firebase.js` and fill the values.

## Firebase Cloud Functions
1. Install function dependencies:
   ```bash
   cd functions
   npm install
   ```
2. Deploy functions with Firebase CLI:
   ```bash
   firebase deploy --only functions
   ```

## Notes
- Replace Firebase config values in `services/firebase.js` with your own project settings.
- If you test on a physical device, make sure your phone and PC are on the same Wi-Fi network and update `BACKEND_URL` in `services/apiService.js` to your PC's local IP address (for example `http://192.168.1.100:5000`).
- The AI symptom checker now tries the Python backend first and falls back to the local heuristic service.
- Cloud Functions currently logs notifications and can send SMS if Twilio is configured in Firebase functions config.
