let email = document.querySelector("#email");
let formulario = document.querySelector("#formulario")
let emailHelp = document.querySelector("#emailHelp")


formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    if (email.value === "") {
        setTimeout(validateMail, 0)
        setTimeout(validateMailDefault, 3000)
    } else {
        email.value = ""
        $('#myModal').modal('show')
    }

})


function validateMail() {
    email.style.borderColor = "red";
    emailHelp.style.display = "flex";

}



function validateMailDefault() {
    email.style.borderColor = "#ced4da"
    emailHelp.style.display = "none";

}