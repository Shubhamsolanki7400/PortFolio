// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDHP_HX3Yf_sbMxpgYhSbPdbVkdOAtJ4Es",
  authDomain: "react-portfolio-bd3ff.firebaseapp.com",
  projectId: "react-portfolio-bd3ff",
  storageBucket: "react-portfolio-bd3ff.appspot.com",
  messagingSenderId: "739615877299",
  appId: "1:739615877299:web:312042713112accb23e8c6"
};

export const app = initializeApp(firebaseConfig);

export const db=getFirestore()