# Authentication Flow Documentation

This document explains how authentication works in this Vue 3 + Firebase project.

## Architecture Overview

```
┌─────────────────┐
│   Vue Router    │ ← Navigation Guards
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Pinia Store    │ ← State Management
│  (auth.js)      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Firebase Auth  │ ← Backend Service
└─────────────────┘
```

## Initialization Flow

### 1. Application Start (`main.js`)

```javascript
const authStore = useAuthStore()
authStore.initAuth().then(() => {
  app.use(router)
  app.mount('#app')
})
```

**What happens:**
- Pinia store is created
- `initAuth()` sets up Firebase `onAuthStateChanged` listener
- App waits for auth state to be determined before mounting
- This ensures routing decisions are based on actual auth state

### 2. Auth State Listener (`stores/auth.js`)

```javascript
onAuthStateChanged(auth, (firebaseUser) => {
  user.value = firebaseUser
  loading.value = false
})
```

**What happens:**
- Listens for auth state changes (login, logout, page refresh)
- Updates the `user` state automatically
- Sets `loading` to false once state is determined
- Persists across page refreshes

## User Flows

### Registration Flow

```
User visits /register
     │
     ▼
Fills email + password
     │
     ▼
Clicks "Sign Up"
     │
     ▼
authStore.register(email, password)
     │
     ▼
Firebase createUserWithEmailAndPassword()
     │
     ├── Success
     │   └── User object stored in state
     │       └── Redirect to /dashboard
     │
     └── Error
         └── Error message displayed
```

### Login Flow

```
User visits /login
     │
     ▼
Fills email + password
     │
     ▼
Clicks "Sign In"
     │
     ▼
authStore.login(email, password)
     │
     ▼
Firebase signInWithEmailAndPassword()
     │
     ├── Success
     │   └── User object stored in state
     │       └── Redirect to /dashboard
     │
     └── Error
         └── Error message displayed
```

### Password Reset Flow

```
User visits /forgot-password
     │
     ▼
Enters email
     │
     ▼
Clicks "Send Reset Link"
     │
     ▼
authStore.resetPassword(email)
     │
     ▼
Firebase sendPasswordResetEmail()
     │
     ├── Success
     │   └── Success message displayed
     │       └── Email sent to user
     │           └── User clicks link in email
     │               └── Redirected to Firebase reset page
     │
     └── Error
         └── Error message displayed
```

### Logout Flow

```
User clicks "Logout" in dashboard
     │
     ▼
authStore.logout()
     │
     ▼
Firebase signOut()
     │
     ▼
onAuthStateChanged triggers
     │
     ▼
user.value = null
     │
     ▼
Router guard detects no auth
     │
     ▼
Redirect to /login
```

## Route Protection

### Navigation Guard Logic (`router/index.js`)

```javascript
router.beforeEach(async (to, from, next) => {
  // 1. Wait for auth to initialize
  if (authStore.loading) {
    await authStore.initAuth()
  }
  
  // 2. Check route requirements
  const requiresAuth = to.meta.requiresAuth
  const requiresGuest = to.meta.requiresGuest
  const isAuthenticated = !!authStore.user
  
  // 3. Make routing decision
  if (requiresAuth && !isAuthenticated) {
    next('/login')  // Protected route, no auth → login
  } else if (requiresGuest && isAuthenticated) {
    next('/dashboard')  // Guest route, has auth → dashboard
  } else {
    next()  // Allow navigation
  }
})
```

### Route Definitions

| Route | Meta | Behavior |
|-------|------|----------|
| `/login` | `requiresGuest: true` | Redirects to `/dashboard` if authenticated |
| `/register` | `requiresGuest: true` | Redirects to `/dashboard` if authenticated |
| `/forgot-password` | `requiresGuest: true` | Redirects to `/dashboard` if authenticated |
| `/dashboard` | `requiresAuth: true` | Redirects to `/login` if not authenticated |

## State Management

### Auth Store Properties

```javascript
{
  user: null | Object,      // Current user or null
  loading: true | false,    // Auth initialization status
  error: null | string      // Last error message
}
```

### Auth Store Methods

| Method | Purpose | Firebase Function |
|--------|---------|-------------------|
| `initAuth()` | Initialize auth listener | `onAuthStateChanged()` |
| `register(email, password)` | Create new account | `createUserWithEmailAndPassword()` |
| `login(email, password)` | Sign in user | `signInWithEmailAndPassword()` |
| `logout()` | Sign out user | `signOut()` |
| `resetPassword(email)` | Send reset email | `sendPasswordResetEmail()` |

## Security Features

### 1. Route Guards
- Prevent unauthorized access to protected routes
- Redirect authenticated users away from auth pages
- Wait for auth state before making decisions

### 2. Firebase Security
- Passwords never stored in client
- Authentication tokens managed by Firebase
- Secure communication with Firebase servers

### 3. Form Validation
- Client-side validation before Firebase calls
- Email format validation (HTML5)
- Password length requirements
- Password confirmation matching

## Error Handling

### Common Firebase Errors

| Error Code | Message | Common Cause |
|------------|---------|--------------|
| `auth/email-already-in-use` | Email already exists | Registration with existing email |
| `auth/invalid-email` | Invalid email format | Malformed email address |
| `auth/user-not-found` | No user found | Login with non-existent account |
| `auth/wrong-password` | Incorrect password | Login with wrong credentials |
| `auth/weak-password` | Password too weak | Password < 6 characters |
| `auth/too-many-requests` | Too many attempts | Rate limiting triggered |

### Error Display

- Errors are stored in `authStore.error`
- Each component has local `localError` for UI display
- Errors clear on next action attempt
- User-friendly messages shown in UI

## Session Persistence

### How It Works

1. **Login/Register**: Firebase creates session token
2. **Token Storage**: Stored in browser's IndexedDB by Firebase SDK
3. **Page Refresh**: 
   - `onAuthStateChanged` fires immediately
   - Token validated with Firebase
   - User state restored
4. **Tab Close**: Token persists (default: `LOCAL` persistence)
5. **Logout**: Token cleared from storage

### Persistence Modes

Firebase supports three modes (this project uses default `LOCAL`):

- `LOCAL`: Persists even after browser restart
- `SESSION`: Persists only in current tab
- `NONE`: Only in memory (cleared on refresh)

## Best Practices Implemented

✅ **Wait for auth before routing** - Prevents flash of wrong content
✅ **Centralized state management** - Single source of truth
✅ **Loading states** - Better UX during async operations
✅ **Error handling** - User-friendly error messages
✅ **Route protection** - Security via navigation guards
✅ **Composition API** - Modern Vue 3 patterns
✅ **Reactive state** - Automatic UI updates

## Extending the System

### Adding OAuth Providers

```javascript
// In firebase.js
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// In auth store
const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
}
```

### Adding Email Verification

```javascript
// In auth store
import { sendEmailVerification } from 'firebase/auth'

const verifyEmail = async () => {
  await sendEmailVerification(auth.currentUser)
}
```

### Adding User Profile

```javascript
// In auth store
import { updateProfile } from 'firebase/auth'

const updateUserProfile = async (displayName, photoURL) => {
  await updateProfile(auth.currentUser, { displayName, photoURL })
}
```

## Debugging Tips

### Check Auth State
```javascript
// In browser console
console.log(useAuthStore().user)
```

### Monitor Firebase Calls
```javascript
// Enable Firebase logging
import { setLogLevel } from 'firebase/app'
setLogLevel('debug')
```

### Test Route Guards
1. Open `/dashboard` while logged out → should redirect to `/login`
2. Open `/login` while logged in → should redirect to `/dashboard`
3. Refresh `/dashboard` while logged in → should stay on dashboard

---

**Questions?** Check README.md or QUICKSTART.md for more information.

