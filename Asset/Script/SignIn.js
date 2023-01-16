const formID = document.getElementById("formLogin")
const username = document.getElementById("inputUsername")
const password = document.getElementById("inputPassword")
const togglePassword = document.getElementById("toggle-password");

function hidePassword(){
    inputPassword.classList.toggle("visible");
    if (password.type === "password"){
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}

togglePassword.addEventListener('click',hidePassword)


