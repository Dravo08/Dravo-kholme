// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);