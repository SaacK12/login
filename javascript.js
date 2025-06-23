import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAhKCJWa_XIGvoYpe_CbLf9Uw60G2RM-R0",
  authDomain: "login-41986.firebaseapp.com",
  projectId: "login-41986",
  storageBucket: "login-41986.firebasestorage.app",
  messagingSenderId: "214081083315",
  appId: "1:214081083315:web:3fc2e8a1a15e16e48d9dc6"
};

//TO DO: EVERYTHING!!!

// Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("contraseña").value;
  if (!email || !contraseña) {
    alert("Por favor, complete todos los campos");
  } else {
    auth.signInWithEmailAndPassword(email, contraseña)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Bienvenido, " + user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error: " + errorMessage);
        console.log("Error en login:", errorCode, errorMessage);
      });
  }
});

