const obtenerUsuarios = () =>{
    fetch(`https://rickandmortyapi.com/api/character`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        tarjeta(data.results)
        clickTarjeta(data.results)
        volverListadoUsuario()
    })
}    
    
const tarjeta = (info)=>{
    const contenedor = document.querySelector(".contenedor")
    const html = info.reduce ((acc, elemento) => {

        return acc + 
        `<div class="tarjeta">
            <div class="tarjeta-nombre"> ${elemento.name} </div>
            <img class="img-principal" src= "${elemento.image}" id="${elemento.id}" />
        </div>
        `
    }, "")
    contenedor.innerHTML = html
}

const clickTarjeta = ()=>{
    const imgBotones = document.querySelectorAll(".img-principal")
    const contenedor = document.querySelector(".contenedor")
    const contenedorDetalles = document.querySelector(".contenedor-detalles")

    for (let i = 0; i < imgBotones.length; i++) {
        imgBotones[i].onclick=()=>{
            console.log(imgBotones[i].id);
            contenedor.style.display = "none"
            contenedorDetalles.style.display = "flex"
            mostrarTarjetaDetalles(imgBotones[i].id)
        }
    }
}

const detalles = (data) =>{
    const contenedorDetalles = document.querySelector(".contenedor-detalles")
    const detallesEnHTML =
    `
    <div class="tarjeta-detalles">
        <h1 class="titulo-detalles-nombre">${data.name}</h1>
        <h2>Status: ${data.status}</h2>
        <h2>Species: ${data.species}</h2>
        <h2>Gender: ${data.gender}</h2>
        <h2>Location: ${data.location.name}</h2>
        <div>
            <img class="img-detalles" src= "${data.image}"/>
        </div>
        <button type="button" class="boton-atras" id="${data.id}"> Atrás </button>
    </div>
    `
    contenedorDetalles.innerHTML= detallesEnHTML
}  

const mostrarTarjetaDetalles = (i) => {
    fetch(`https://rickandmortyapi.com/api/character/${i}`)
    .then((res) =>  res.json())
    .then((data) => {
    detalles(data)
    volverListadoUsuario()

    })
}

const volverListadoUsuario = ()=>{
    const contenedor = document.querySelector(".contenedor")
    const contenedorDetalles = document.querySelector(".contendor-detalles")
    const botonAtras = document.querySelector(".boton-atras")

    botonAtras.onclick =()=>{
        contenedor.style.display = "flex"
        contenedorDetalles.style.display = "none"
    }
}
obtenerUsuarios()
clickTarjeta()
mostrarTarjetaDetalles()
