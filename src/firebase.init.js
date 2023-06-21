// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrEC-9GirjH1eutpK5MqmxGm4LCXO2SKQ",
  authDomain: "knoct-polygon-id.firebaseapp.com",
  projectId: "knoct-polygon-id",
  storageBucket: "knoct-polygon-id.appspot.com",
  messagingSenderId: "557830862813",
  appId: "1:557830862813:web:40eb532596702ca8a22834",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
