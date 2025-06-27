import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhKCJWa_XIGvoYpe_CbLf9Uw60G2RM-R0",
  authDomain: "login-41986.firebaseapp.com",
  projectId: "login-41986",
  storageBucket: "login-41986.appspot.com",
  messagingSenderId: "214081083315",
  appId: "1:214081083315:web:3fc2e8a1a15e16e48d9dc6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };