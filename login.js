import { auth } from "./firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Sesión iniciada");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error(error);
      alert("Error al iniciar sesión: " + error.message);
    });
}