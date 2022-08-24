import {
  initializeAuth,
  browserLocalPersistence,
  browserPopupRedirectResolver,
  browserSessionPersistence,
  indexedDBLocalPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import firebase from "./firebase";

const auth = initializeAuth(firebase, {
  persistence: [
    browserLocalPersistence,
    indexedDBLocalPersistence,
    browserSessionPersistence,
  ],
  popupRedirectResolver: browserPopupRedirectResolver,
});

export const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password).then(
    (result) => result.user
  );

export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password).then(
    (result) => result.user
  );

export const logout = () => signOut(auth);

export const setAuthStateListener = (cb) => onAuthStateChanged(auth, cb);

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export const loginWithGoogle = () =>
  signInWithPopup(auth, provider).then((result) => result.user);
