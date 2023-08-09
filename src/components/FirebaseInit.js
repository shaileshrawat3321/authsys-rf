import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQic7Fxs1p3jBkmWzNddRHfomyMeESiiM",
  authDomain: "react-auth-40734.firebaseapp.com",
  projectId: "react-auth-40734",
  storageBucket: "react-auth-40734.appspot.com",
  messagingSenderId: "902287394434",
  appId: "1:902287394434:web:1ed105c6e3512bd121d69b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;