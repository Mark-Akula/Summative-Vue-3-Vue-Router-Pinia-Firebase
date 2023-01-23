import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVbI8CJR6B8OOwmFs3iG3fznVG-3annbM",
  authDomain: "csproj-feee8.firebaseapp.com",
  projectId: "csproj-feee8",
  storageBucket: "csproj-feee8.appspot.com",
  messagingSenderId: "1095200144365",
  appId: "1:1095200144365:web:ae9ace2f31dc30169285e4",
  measurementId: "G-WLGWTVP1VQ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();

export { auth, firestore, storage }