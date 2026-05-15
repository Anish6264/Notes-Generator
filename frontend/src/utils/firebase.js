
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authnotesgenerator.firebaseapp.com",
  projectId: "authnotesgenerator",
  storageBucket: "authnotesgenerator.firebasestorage.app",
  messagingSenderId: "42255170466",
  appId: "1:42255170466:web:61b93ec3664bed5213d0fb"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };