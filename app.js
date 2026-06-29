import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const email = document.getElementById("email");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

document.getElementById("btnCadastro").addEventListener("click", async () => {

    if(email.value === "" || senha.value === ""){
        mensagem.innerHTML = "Preencha todos os campos.";
        return;
    }

    try{

        await createUserWithEmailAndPassword(
            auth,
            email.value,
            senha.value
        );

        mensagem.innerHTML = "✅ Conta criada com sucesso!";

    }catch(e){

        mensagem.innerHTML = e.message;

    }

});

document.getElementById("btnLogin").addEventListener("click", async () => {

    if(email.value === "" || senha.value === ""){
        mensagem.innerHTML = "Preencha todos os campos.";
        return;
    }

    try{

        await signInWithEmailAndPassword(
            auth,
            email.value,
            senha.value
        );

        mensagem.innerHTML = "🎉 Login realizado com sucesso!";

    }catch(e){

        mensagem.innerHTML = e.message;

    }

});
