import { initializeApp } from "firebase/app";

const firebase = initializeApp({
  apiKey: process.env.VUE_APP_FIREBSE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBSE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBSE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBSE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBSE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBSE_APP_ID,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
});

export default firebase;
