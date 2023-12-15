import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUwh7dCelxivmwq1l1mHweNypKIP9eb_M",
  authDomain: "proyecto-prueba-6eb34.firebaseapp.com",
  projectId: "proyecto-prueba-6eb34",
  storageBucket: "proyecto-prueba-6eb34.appspot.com",
  messagingSenderId: "80992932466",
  appId: "1:80992932466:web:3174b5eaedc5a7711fa8eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
