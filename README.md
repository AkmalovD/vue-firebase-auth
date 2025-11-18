# Vue 3 + Firebase Authentication

A complete authentication system built with Vue 3 (Composition API + Script Setup), Vite, and Firebase Authentication.

## Features

- ✅ User Registration (Email/Password)
- ✅ User Login
- ✅ Password Reset
- ✅ Protected Routes with Navigation Guards
- ✅ Persistent Authentication State
- ✅ User Dashboard
- ✅ Logout Functionality
- ✅ Modern UI with Vue Green Theme
- ✅ Loading States & Error Handling
- ✅ Fully Responsive

## Tech Stack

- **Vue 3** - Composition API with Script Setup
- **Vite** - Fast build tool
- **Firebase** - Authentication backend
- **Vue Router** - Client-side routing
- **Pinia** - State management
- **Firebase SDK v10** - Latest Firebase features

## Project Structure

```
├── src/
│   ├── views/              # Page components
│   │   ├── Login.vue
│   │   ├── Register.vue
│   │   ├── ForgotPassword.vue
│   │   └── Dashboard.vue
│   ├── stores/             # Pinia stores
│   │   └── auth.js
│   ├── router/             # Vue Router config
│   │   └── index.js
│   ├── firebase.js         # Firebase configuration
│   ├── App.vue             # Root component
│   ├── main.js             # Application entry
│   └── style.css           # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use existing one)
3. Enable **Email/Password** authentication:
   - Go to **Authentication** → **Sign-in method**
   - Enable **Email/Password** provider
4. Get your Firebase configuration:
   - Go to **Project Settings** → **General**
   - Scroll down to **Your apps**
   - Click on **Web app** (</>) icon
   - Copy the configuration object

5. Update `src/firebase.js` with your credentials:

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

### 3. Run the Application

```bash
npm run dev
```

The application will start at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

## How It Works

### Authentication Flow

1. **Registration**: New users can sign up with email and password
2. **Login**: Existing users can sign in with their credentials
3. **Password Reset**: Users can request a password reset email
4. **Dashboard**: Protected page only accessible to authenticated users
5. **Logout**: Users can sign out from the dashboard

### Route Protection

The application uses Vue Router navigation guards to protect routes:

- **Guest Routes** (`/login`, `/register`, `/forgot-password`): Redirect to dashboard if already authenticated
- **Protected Routes** (`/dashboard`): Redirect to login if not authenticated

### State Management

Authentication state is managed using Pinia store (`src/stores/auth.js`):

- `user`: Current user object
- `loading`: Loading state during auth initialization
- `error`: Error messages from auth operations
- `initAuth()`: Initialize auth state listener
- `register()`: Register new user
- `login()`: Sign in user
- `logout()`: Sign out user
- `resetPassword()`: Send password reset email

### Auth State Persistence

The app uses Firebase's `onAuthStateChanged` listener to:
- Detect authentication state changes
- Persist user session across page refreshes
- Automatically update UI based on auth state

## Pages

### Login (`/login`)
- Email/password login form
- Link to registration and password reset
- Redirects to dashboard on success

### Register (`/register`)
- Email/password registration form
- Password confirmation validation
- Minimum 6 characters password requirement
- Redirects to dashboard on success

### Forgot Password (`/forgot-password`)
- Email input for password reset
- Sends reset link via email
- Success/error message display

### Dashboard (`/dashboard`)
- Protected route (auth required)
- Displays user information
- Logout button
- Shows account details and features

## Security Features

- ✅ Client-side validation
- ✅ Firebase Authentication security rules
- ✅ Protected routes with navigation guards
- ✅ Secure password handling (handled by Firebase)
- ✅ Password reset via email
- ✅ Session persistence

## Customization

### Styling

The app uses scoped CSS in each component with Vue's official green theme:

**Color Palette:**
- Primary Green: `#42b883` (Vue logo green)
- Dark Gray-Blue: `#35495e` (Vue logo dark)
- Background: White `#ffffff`
- Text: Dark `#333`, Muted `#666`

To customize:
1. Update colors in component `<style>` sections
2. Modify gradient backgrounds
3. Change global styles in `src/style.css`

### Firebase Features

To add more Firebase features:

1. Import additional Firebase modules in `src/firebase.js`
2. Add new methods to the auth store
3. Create new components/pages as needed

## Troubleshooting

### Firebase Configuration Error

If you see Firebase initialization errors:
- Double-check your Firebase configuration in `src/firebase.js`
- Ensure Email/Password authentication is enabled in Firebase Console

### Route Guard Issues

If routes aren't protecting correctly:
- Check that auth state is initialized before routing
- Verify `meta.requiresAuth` and `meta.requiresGuest` in route definitions

### Build Errors

If you encounter build errors:
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

## License

MIT

## Author

Built with ❤️ using Vue 3 and Firebase

