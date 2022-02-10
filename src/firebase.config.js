import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXeq3U0-pLrSYs27y7YIz_9RMgN7Ux4_o",
  authDomain: "house-marketplace-9202d.firebaseapp.com",
  projectId: "house-marketplace-9202d",
  storageBucket: "house-marketplace-9202d.appspot.com",
  messagingSenderId: "876278109992",
  appId: "1:876278109992:web:b6c4251d5a2b3eb3ff221d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
