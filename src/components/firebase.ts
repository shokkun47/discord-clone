import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCHrNKX5i3x9IgF8I7VBGSo9yDJRq86MEs",
  authDomain: "discord-clone-udemy-cd626.firebaseapp.com",
  projectId: "discord-clone-udemy-cd626",
  storageBucket: "discord-clone-udemy-cd626.appspot.com",
  messagingSenderId: "518734870576",
  appId: "1:518734870576:web:39369d14c699d22affd5f5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };