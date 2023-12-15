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
  apiKey: "AIzaSyDsB8dQiRNJ2TbVGB95q1fWAi1Tfxrfiok",
  authDomain: "proyecto-final-138c5.firebaseapp.com",
  projectId: "proyecto-final-138c5",
  storageBucket: "proyecto-final-138c5.appspot.com",
  messagingSenderId: "616345483608",
  appId: "1:616345483608:web:5696d19a3b5861279e4d2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
