// firebase.js

// ✅ Import required Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAvOLYaDb6pQqd4CZDfsWWsvKWDExWJ8A4",
  authDomain: "kholme-menu1.firebaseapp.com",
  databaseURL: "https://kholme-menu1-default-rtdb.firebaseio.com",
  projectId: "kholme-menu1",
  storageBucket: "kholme-menu1.firebasestorage.app",
  messagingSenderId: "434798935284",
  appId: "1:434798935284:web:527ae90b4d4833a30ff2a1",
  measurementId: "G-9XG8BZ9YXK"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Export the database to use elsewhere
export const db = getDatabase(app);
