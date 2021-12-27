const obtenerUsuarios = () =>{
    fetch(`https://rickandmortyapi.com/api/character`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        tarjeta(data.results)
        clickTarjeta(data.results)
    })
}    
    
const tarjeta = (info)=>{
    const contenedor = document.querySelector(".contenedor")
    const html = info.reduce ((acc, elemento) => {

        return acc + 
        `<div class="tarjeta">
            <div class="tarjeta-nombre"> ${elemento.name} </div>
            <img class="img-boton" src= "${elemento.image}" id="${elemento.id}" />
        </div>
        `
    }, "")
    contenedor.innerHTML = html

}
obtenerUsuarios()



const clickTarjeta = ()=>{
    const imgBotones = document.querySelectorAll(".img-boton")
    const contenedor = document.querySelector(".contenedor")
    const tarjetaDetalles = document.querySelector(".tarjeta-detalles")

    for (let i = 1; i < imgBotones.length; i++) {
        imgBotones[i].onclick=()=>{
            console.log(i);
            contenedor.classList.add("display-none");
            tarjetaDetalles.classList.remove("display-none");
            mostrarTarjetaDetalles(i)
        }
    }
}
clickTarjeta()


const mostrarTarjetaDetalles = (id)=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) =>  res.json())
    .then((data) => {
    console.log(data)
    detalles(data)
    })
}

const detalles = (data) =>{
    const tarjetaDetalles = document.querySelector(".tarjeta-detalles")
    const detallesEnHTML =
    `<h2>${data.name}</h2>
    <div>
        <img src= "${data.image}"/>
    </div>
    `
    tarjetaDetalles.innerHTML= detallesEnHTML
}  


mostrarTarjetaDetalles()