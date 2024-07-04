// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "instinger-794e0.firebaseapp.com",
  projectId: "instinger-794e0",
  storageBucket: "instinger-794e0.appspot.com",
  messagingSenderId: "535767844238",
  appId: "1:535767844238:web:4dbd62cb231609dc9910df"
};

export const app = initializeApp(firebaseConfig);