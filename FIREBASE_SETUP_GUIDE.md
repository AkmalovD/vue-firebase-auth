# Firebase Setup Guide

Complete step-by-step guide to configure Firebase Authentication for your Vue project.

---

## 📋 Prerequisites

- Google account (for Firebase Console)
- Your Vue project installed (`npm install` already run)

---

## 🚀 Step-by-Step Setup

### Step 1: Go to Firebase Console

1. Open your browser and go to: **https://console.firebase.google.com/**
2. Sign in with your Google account

---

### Step 2: Create a New Project

1. Click the **"Add project"** or **"Create a project"** button

2. **Enter project name:**
   - Type: `vue-auth-app` (or any name you prefer)
   - Click **"Continue"**

3. **Google Analytics (Optional):**
   - Toggle **OFF** if you don't need analytics (simpler for now)
   - Or keep it ON and select your Analytics account
   - Click **"Create project"**

4. Wait for Firebase to set up your project (takes ~30 seconds)

5. Click **"Continue"** when ready

---

### Step 3: Register Your Web App

1. On the Project Overview page, you'll see three icons:
   - iOS icon
   - Android icon  
   - **`</>`** (Web icon) ← Click this one

2. **Register your app:**
   - **App nickname:** `Vue Auth Web App` (or any name)
   - **Firebase Hosting:** Leave unchecked (optional)
   - Click **"Register app"**

3. **Copy your Firebase configuration**
   
   You'll see code that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

   **⚠️ IMPORTANT:** Keep this page open or copy these values somewhere safe!

4. Click **"Continue to console"**

---

### Step 4: Enable Email/Password Authentication

1. In the left sidebar, click **"Authentication"** (🔐 icon)

2. Click the **"Get started"** button (if shown)

3. Click on the **"Sign-in method"** tab at the top

4. You'll see a list of providers:
   - Google
   - Email/Password ← We need this one
   - Phone
   - Anonymous
   - etc.

5. Click on **"Email/Password"**

6. **Enable the provider:**
   - Toggle the first switch to **"Enabled"** (Email/Password)
   - Leave "Email link (passwordless sign-in)" disabled (optional)
   - Click **"Save"**

7. You should now see "Email/Password" with a green checkmark ✅

---

### Step 5: Add Firebase Config to Your Project

1. Open your project in your code editor

2. Navigate to: `src/firebase.js`

3. **Replace the placeholder values** with your actual Firebase config:

**BEFORE (Placeholder):**
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}
```

**AFTER (Your actual values from Step 3):**
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
}
```

4. **Save the file** (Ctrl+S or Cmd+S)

---

### Step 6: Run Your Project

1. Open terminal in your project directory

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to: **http://localhost:3000**

4. You should see the Login page with Vue green theme! 🎉

---

## ✅ Test Your Authentication

### Test 1: Register a New Account

1. Click **"Sign Up"** link
2. Enter email: `test@example.com`
3. Enter password: `password123` (min 6 characters)
4. Confirm password: `password123`
5. Click **"Sign Up"**
6. You should be redirected to the **Dashboard**! ✅

### Test 2: Check Firebase Console

1. Go back to Firebase Console
2. Click **"Authentication"** in sidebar
3. Click **"Users"** tab
4. You should see your test user listed! ✅

### Test 3: Logout and Login

1. Click **"Logout"** button in Dashboard
2. You'll be redirected to Login page
3. Enter the same credentials
4. Click **"Sign In"**
5. You should be back in Dashboard! ✅

### Test 4: Password Reset

1. Go to Login page
2. Click **"Forgot Password?"**
3. Enter your email
4. Click **"Send Reset Link"**
5. Check your email inbox
6. Click the reset link in the email
7. Set a new password
8. Login with new password ✅

### Test 5: Session Persistence

1. While logged in on Dashboard
2. Refresh the page (F5 or Ctrl+R)
3. You should stay logged in! ✅
4. Close the browser completely
5. Open browser again and go to your app
6. You should still be logged in! ✅

---

## 🔍 Where to Find Your Firebase Config Later

If you lost your config values:

1. Go to Firebase Console: https://console.firebase.google.com/
2. Select your project
3. Click the **⚙️ gear icon** (Settings) in the left sidebar
4. Select **"Project settings"**
5. Scroll down to **"Your apps"** section
6. You'll see your Web app with the config values
7. Click **"Config"** radio button to see the configuration object

---

## 🛠️ Troubleshooting

### Error: "Firebase: Error (auth/invalid-api-key)"
**Solution:** Check that you copied the `apiKey` correctly from Firebase Console

### Error: "Firebase: Error (auth/operation-not-allowed)"
**Solution:** Make sure Email/Password authentication is enabled in Firebase Console

### Error: "Firebase: Error (auth/network-request-failed)"
**Solution:** Check your internet connection

### Error: "Firebase: Error (auth/email-already-in-use)"
**Solution:** This email is already registered. Try logging in instead or use a different email.

### Can't see registered users in Firebase Console
**Solution:** Go to Authentication → Users tab. If empty, registration might have failed. Check browser console for errors.

### App shows "Loading..." forever
**Solution:** 
1. Check browser console for errors
2. Verify Firebase config is correct in `src/firebase.js`
3. Make sure `npm install` completed successfully

---

## 📱 Firebase Console Overview

### Important Sections:

**🏠 Project Overview**
- Dashboard with app stats
- Quick actions

**🔐 Authentication**
- **Users:** See all registered users
- **Sign-in method:** Enable/disable auth providers
- **Templates:** Customize email templates
- **Settings:** Configure domains, password policies

**📊 Usage (optional)**
- Monitor authentication requests
- Check quotas

---

## 🔒 Security Best Practices

### ✅ DO:
- Keep your Firebase config public (it's designed to be client-side)
- Use Firebase Security Rules for backend protection
- Enable only the auth methods you need
- Set up email verification for production

### ❌ DON'T:
- Share your Firebase Admin SDK private key
- Disable security rules
- Use weak passwords in production
- Ignore Firebase security warnings

---

## 📈 Next Steps (Optional Enhancements)

### 1. Email Verification
```javascript
// In src/stores/auth.js
import { sendEmailVerification } from 'firebase/auth'

const verifyEmail = async () => {
  await sendEmailVerification(auth.currentUser)
}
```

### 2. Google Sign-In
```javascript
// In src/stores/auth.js
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
}
```

Enable Google provider in Firebase Console → Authentication → Sign-in method

### 3. Update User Profile
```javascript
// In src/stores/auth.js
import { updateProfile } from 'firebase/auth'

const updateUserProfile = async (displayName, photoURL) => {
  await updateProfile(auth.currentUser, { displayName, photoURL })
}
```

### 4. Customize Email Templates

1. Firebase Console → Authentication → Templates
2. Edit templates for:
   - Password reset
   - Email verification
   - Email address change

### 5. Add Firestore Database

1. Firebase Console → Firestore Database
2. Create database
3. Add to `src/firebase.js`:
```javascript
import { getFirestore } from 'firebase/firestore'
export const db = getFirestore(app)
```

---

## 📞 Need Help?

- **Firebase Documentation:** https://firebase.google.com/docs/auth
- **Vue Firebase Guide:** https://firebase.google.com/docs/auth/web/start
- **Firebase Support:** https://firebase.google.com/support

---

## ✨ You're All Set!

Your Vue 3 + Firebase Authentication app is now fully configured and ready to use!

**What you accomplished:**
✅ Created Firebase project
✅ Registered web app
✅ Enabled Email/Password authentication
✅ Configured Firebase in your Vue app
✅ Tested authentication flow

**Happy coding!** 🚀🟢

