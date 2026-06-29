import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const btnCadastro = document.getElementById("btnCadastro");
const btnLogin = document.getElementById("btnLogin");

btnCadastro.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
        alert("Conta criada com sucesso!");
    })
    .catch((erro) => {
        alert(erro.message);
    });
});

btnLogin.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    signInWithEmailAndPassword(auth, email, senha)
    .then(() => {
        alert("Login realizado!");
    })
    .catch((erro) => {
        alert(erro.message);
    });
});
