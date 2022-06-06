const forbtn = document.getElementById("forBtn")
let formsg = document.getElementById("formsg")

forbtn.addEventListener("click", function() {
    formsg.textContent = "Se a enviado el formulario!"
})
