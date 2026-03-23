// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const hasConfig = firebaseConfig.apiKey && firebaseConfig.projectId;

let app, auth, db;

if (hasConfig) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} else {
  // Stub exports so imports don't break
  auth = null;
  db = null;
}

const provider = hasConfig ? new GoogleAuthProvider() : null;

export { auth, db };
export const loginWithGoogle = () =>
  hasConfig ? signInWithPopup(auth, provider) : Promise.reject("Firebase not configured");
export const logout = () =>
  hasConfig ? signOut(auth) : Promise.reject("Firebase not configured");
