const firebaseConfig = {
  apiKey: "AIzaSyAhKCJWa_XIGvoYpe_CbLf9Uw60G2RM-R0",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "login-41986",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
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
