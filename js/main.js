/*
let titulo = document.getElementById("titulo")

let nombre = prompt ("Escribe su Nombre")
let tarea = prompt ("Escribe su tarea")

titulo.innerHTML = `
<h1>${nombre}</h1>
<p>${tarea}</p>
`

document.append(titulo)
----------------------------------
const productos= [
    {id:1, nombre:"Lenovo", precio: 450000},
    {id:1, nombre:"Samsung", precio: 950000},
    {id:1, nombre:"Mac", precio: 1250000},
    {id:1, nombre:"Asus", precio: 900000},
]

for (const producto of productos){
    let contenedor = document.createElement("div")

    contenedor.innerHTML =`
    <h3>${producto.id}</h3>
    <p>${producto.nombre}</p>
    <p>${producto.precio}</p>
`
document.body.appendChild(contenedor)
}

----------------------------------------------



let boton = document.getElementById("boton")

function saludar(){
    let nombre = prompt("Dime tu nombre")
    alert("Bienvenido "+nombre+" a Programacion")
}   

boton.addEventListener("click", saludar)



---------------------------


LOCAL STORAGE
HAY 4 METODOS PARA EL STORAGE

setItem() permitir crear una clave y asignarle un valor
getItem() permite recuperar o traer una clave desde el storage
removeItem() para eliminar un dato
clear() elimina todo
------------------------------------------
localStorage setItem("bienvenida","Hola gracias por visitar nuestra pagina")

let saludo = localStorage.getItem("bienvenida")

alert(saludo)
------------------------




*/
//DOM VINCULAR BY ID
const btn = document.getElementById("btn");
const container = document.querySelector("#container");
const inputCorreo = document.querySelector("#correo");
const botonEnviar = document.querySelector("#boton");
//EVENTO CLICK
btn.addEventListener("click", function () {
  let nombre = prompt("Nombre:");
  let apuesta = prompt("Cantidad a apostar US$:");
  let equipo = prompt ("Equipo Ganador:")

  const newCard = document.createElement("div");

  newCard.classList.add("card");
  newCard.innerHTML = `
    <h2>Nueva Apuesta de: ${nombre}</h2>
    <p>$USD ${apuesta} a que ${equipo} ganará </p>
    `;

  container.appendChild(newCard);
});
//LOCAL STORAGE
function guardarFormulario(){
    localStorage.setItem("correo", inputCorreo.value)
}
botonEnviar.addEventListener("click",guardarFormulario)

