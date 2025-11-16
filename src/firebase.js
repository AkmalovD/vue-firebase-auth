import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcz-TUeNKcFQ-leTz00v3ncYPT0Jtpj6E",
  authDomain: "vue-firebase-35f51.firebaseapp.com",
  projectId: "vue-firebase-35f51",
  storageBucket: "vue-firebase-35f51.firebasestorage.app",
  messagingSenderId: "968767339724",
  appId: "1:968767339724:web:7ae084bd691ad819419669",
  measurementId: "G-JLN4Y34K1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export { auth }