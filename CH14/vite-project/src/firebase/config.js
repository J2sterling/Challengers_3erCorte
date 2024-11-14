import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBU-L_owBdyNyU4EvEibRjEYptCg_vheZs",
  authDomain: "pokemon-d30b4.firebaseapp.com",
  projectId: "pokemon-d30b4",
  storageBucket: "pokemon-d30b4.firebasestorage.app",
  messagingSenderId: "107822636137",
  appId: "1:107822636137:web:e5368401e25dc09b5d16f8",
  measurementId: "G-SHVT11YF6T"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const googleAuthProvider = new GoogleAuthProvider();

export { app, auth, googleAuthProvider };
