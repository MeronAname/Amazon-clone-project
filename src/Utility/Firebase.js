// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";  

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDUT1JM1DcnMABTHIohKta9sfjYZE-aFCU",
//   authDomain: "clone-1eda2.firebaseapp.com",
//   projectId: "clone-1eda2",
//   storageBucket: "clone-1eda2.firebasestorage.app",
//   messagingSenderId: "1049620772151",
//   appId: "1:1049620772151:web:52638d3c17e9642fbf16b2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Auth and Firestore correctly
// export const auth = getAuth(app);
// export const db = getFirestore(app);  // Use getFirestore instead of app.firestore()
//Firebase Functions run backend code only when needed, without managing a server.

// for initialize Firebase in your project
import firebase from "firebase/compat/app";

// handle authentication services (e.g., login, signup)
import { getAuth } from "firebase/auth";

// backward compatibility with older Firebase versions.
import "firebase/compat/auth";

// handle Firestore database
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUT1JM1DcnMABTHIohKta9sfjYZE-aFCU",
  authDomain: "clone-1eda2.firebaseapp.com",
  projectId: "clone-1eda2",
  storageBucket: "clone-1eda2.firebasestorage.app",
  messagingSenderId: "1049620772151",
  appId: "1:1049620772151:web:52638d3c17e9642fbf16b2"
};

// Initialize Firebase app
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Initialize Firestore database
export const db = app.firestore();
