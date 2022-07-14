let nome = document.querySelector("#nome")
let sobrenome = document.querySelector("#sobrenome")
let emailCadastro = document.querySelector("#criarEmail")
let telefone = document.querySelector("#telefone")
let senhaCadastro = document.querySelector("#criarSenha")

nome.addEventListener("blur", ()=>{
    if(nome.value == ""){
        nome.classList.remove("border-dark")
        nome.classList.add("border-danger")
    }
    else{
        nome.classList.remove("border-danger")
        nome.classList.add("border-success")
    }
})

sobrenome.addEventListener("blur", ()=>{
    if(sobrenome.value == ""){
        sobrenome.classList.remove("border-dark")
        sobrenome.classList.add("border-danger")
     }
     else{
        sobrenome.classList.remove("border-danger")
        sobrenome.classList.add("border-success")
    }
})

emailCadastro.addEventListener("blur", ()=>{
    if(emailCadastro.value.indexOf("@") == -1 || emailCadastro.value.indexOf(".com") == -1 || emailCadastro.value == ""){
        emailCadastro.classList.remove("border-dark")
        emailCadastro.classList.add("border-danger")
    }
    else{
        emailCadastro.classList.remove("border-danger")
        emailCadastro.classList.add("border-success")
    }
})