console.log("validando forms");

let formulario = document.querySelector('.form');
let inputField= document.querySelector('.search');
let message = document.querySelector('.message');

formulario.addEventListener('submit', function(evento){
 evento.preventDefault();

if(inputField.value == ""){

    message.innerText = "El campo es obligatorio"

} else if(inputField.value.length <3){ message.innerText = "Ingresar al menos 3 caracteres"
}else {
    formulario.submit()
}


})

inputField.addEventListener('focus', function(evento){
    console.log(evento)
message.innerText= "";
this.value = "";
})
