# App Testing and Demo Checklist

This checklist helps you verify the AI-Powered Emergency Medical Response System before deployment.

## Local development setup
- [ ] Install Node.js and Expo CLI
- [ ] Run `npm install` in the project root
- [ ] Verify `app.json` points to `assets/icon.png` and `assets/splash.png`
- [ ] Add Firebase config values in `services/firebase.js`
- [ ] Install backend dependencies:
  - `cd backend`
  - `python -m pip install -r requirements.txt`
- [ ] Install Cloud Function dependencies:
  - `cd functions`
  - `npm install`

## Run the app
- [ ] Start Expo:
  - `npm start`
- [ ] Open on Android (or iOS on Mac):
  - `npm run android`
  - `npm run ios`
- [ ] Confirm the app launches and shows the login screen

## App feature tests
- [ ] Register a new user and log in
- [ ] Check location permissions and verify the home screen shows coordinates
- [ ] Tap the emergency button and confirm the alert flow works
- [ ] Verify the assigned responder information appears on the emergency screen
- [ ] Open the symptom checker and enter sample symptoms
- [ ] Verify the AI advice appears and falls back if backend is unavailable
- [ ] Open the responder list screen and confirm real-time responder data loads
- [ ] Open nearby hospitals and verify Google Maps links work

## Backend tests
- [ ] Start the Python backend: `python backend/app.py`
- [ ] Confirm `/symptom-check`, `/nearby-responders`, and `/dispatch-emergency` return valid JSON
- [ ] Confirm the app can call the backend from your device or emulator

## Firebase / Cloud Functions tests
- [ ] Deploy functions if configured: `firebase deploy --only functions`
- [ ] Confirm Firestore records are created under `emergencies`
- [ ] Confirm responder statuses update in `responders`
- [ ] Verify SMS dispatch logs if Twilio is enabled

## Deployment readiness
- [ ] Verify the icon and splash screens display correctly
- [ ] Check the `eas.json` file and project configuration
- [ ] Log in to Expo with `eas login`
- [ ] Run production builds:
  - `npm run eas:build:android`
  - `npm run eas:build:ios`
- [ ] Prepare the final demo by walking through each feature end-to-end

## Notes
- If the app cannot reach the Python backend from an Android emulator, use `http://10.0.2.2:5000`
- If using a physical device, ensure your PC and phone are on the same network and update `BACKEND_URL` in `services/apiService.js`
- Replace the placeholder `assets/icon.png` and `assets/splash.png` with your final branding before submission
