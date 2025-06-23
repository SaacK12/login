const firebaseConfig = {
  apiKey: "AIzaSyAhKCJWa_XIGvoYpe_CbLf9Uw60G2RM-R0",
  authDomain: "login-41986.firebaseapp.com",
  projectId: "login-41986",
  storageBucket: "login-41986.firebasestorage.app",
  messagingSenderId: "214081083315",
  appId: "1:214081083315:web:3fc2e8a1a15e16e48d9dc6"
};

// Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function enviar(){
let email= document.getElementById("email").value;
let contraseña= document.getElementById("contraseña").value;
    if (!email || !contraseña){
        alert("Por favor, complete los campos")
    }
    else {alert("lalelilolu")}
}
