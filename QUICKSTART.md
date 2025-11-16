# Quick Start Guide

## Get Started in 3 Steps

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Configure Firebase

Open `src/firebase.js` and replace the placeholder values with your Firebase project credentials:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",              // Replace with your API key
  authDomain: "yourapp.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123..."
}
```

**Where to find these values:**
1. Go to https://console.firebase.google.com/
2. Select your project (or create a new one)
3. Click the gear icon → Project Settings
4. Scroll to "Your apps" section
5. Click the `</>` icon to add a web app (if you haven't already)
6. Copy the configuration values

**Enable Email/Password Authentication:**
1. In Firebase Console, go to **Authentication**
2. Click **Sign-in method** tab
3. Enable **Email/Password** provider
4. Click **Save**

### Step 3: Run the App

```bash
npm run dev
```

Visit `http://localhost:3000` and start using the app!

## Test the App

1. **Register**: Create a new account at `/register`
2. **Login**: Sign in at `/login`
3. **Dashboard**: View your protected dashboard
4. **Password Reset**: Test forgot password at `/forgot-password`
5. **Logout**: Sign out from the dashboard

## Project Structure Overview

```
src/
├── views/          # All page components
├── stores/         # Pinia authentication store
├── router/         # Vue Router with guards
├── firebase.js     # 🔑 Configure this file!
├── main.js         # App entry point
└── App.vue         # Root component
```

## Common Issues

**"Firebase not initialized" error:**
- Make sure you've updated `src/firebase.js` with your credentials

**"Email/Password auth not enabled" error:**
- Enable Email/Password in Firebase Console → Authentication → Sign-in method

**Port 3000 already in use:**
- The app will automatically use the next available port

## Next Steps

- Customize the UI in component files
- Add more Firebase features (Firestore, Storage, etc.)
- Deploy to Firebase Hosting or Vercel

Enjoy building! 🚀

