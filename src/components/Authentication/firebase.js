
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJKZGMwClEA3E9F3ETrHT1umjGGgQe2H0",
  authDomain: "react-authentication-4ba57.firebaseapp.com",
  projectId: "react-authentication-4ba57",
  storageBucket: "react-authentication-4ba57.appspot.com",
  messagingSenderId: "801587205735",
  appId: "1:801587205735:web:e79f13d3b0664ee1ece6c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);