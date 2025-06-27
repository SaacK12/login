import { auth } from "./firebaseConfig.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const userMenu = document.getElementById("user-menu");
const userDropdown = document.getElementById("userDropdown");
const logoutBtn = document.getElementById("logout-btn");
const loginLink = document.getElementById("login-link");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userDropdown.textContent = user.email;
    userMenu.style.display = "block";
    loginLink.style.display = "none";
  } else {
    userMenu.style.display = "none";
    loginLink.style.display = "block";
  }
});

logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signOut(auth).then(() => {
    console.log("Sesión cerrada");
    location.reload();
  }).catch((error) => {
    console.error("Error al cerrar sesión: ", error);
  });
});