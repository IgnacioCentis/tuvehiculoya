// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCth53cV8q1T8yClsAEkNcFajGf5rj_gcw",
  authDomain: "tuvehiculoya19805.firebaseapp.com",
  projectId: "tuvehiculoya19805",
  storageBucket: "tuvehiculoya19805.appspot.com",
  messagingSenderId: "308076556783",
  appId: "1:308076556783:web:3107753148cfaa2108861a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//retorno en funcion la const app
export default function getFirestoreApp(){
    return app
}