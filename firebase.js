import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBd6XQNSFgnbkPqH7VB6DGRxBhhe4n2M8M",
  authDomain: "jc-arena-185b7.firebaseapp.com",
  projectId: "jc-arena-185b7",
  storageBucket: "jc-arena-185b7.firebasestorage.app",
  messagingSenderId: "61349634749",
  appId: "1:61349634749:web:5bdfdf90d4a4a2a73f4dd4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
