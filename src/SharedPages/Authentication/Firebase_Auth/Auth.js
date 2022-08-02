import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBma7S0OoOMjpYeNEuSo122OV8qdtG7jbk",
  authDomain: "pure-power-6c1e2.firebaseapp.com",
  projectId: "pure-power-6c1e2",
  storageBucket: "pure-power-6c1e2.appspot.com",
  messagingSenderId: "102619367232",
  appId: "1:102619367232:web:74074dcc471e061e929ca5",
  measurementId: "G-RPXPRY4KNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;