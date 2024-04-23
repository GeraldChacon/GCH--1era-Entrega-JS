principal()

function saludar(nombreCompleto) {
    alert("Bienvenido/a " + nombreCompleto + "!")
}

function principal() {
    let nombre = prompt("Ingrese su nombre completo")
    saludar(nombre)
}

let productos = [
    { id: 1, nombre: "royal canin", categoria: "alimentos", stock: 20, precio: 70000,},
    { id: 2, nombre: "proplan", categoria: "alimentos", stock: 30, precio: 10000,},
    { id: 3, nombre: "bocaditos", categoria: "snack", stock: 20, precio: 4500,},
    { id: 4, nombre: "dental care", categoria: "snack", stock: 14, precio: 4200,},
    { id: 5, nombre: "shampoo", categoria: "higiene", stock: 10, precio: 4000,},
]

let valorIngresado = prompt("Ingrese categoria para filtrar").toLowerCase()
let productosFiltrados = productos.filter(producto => producto.categoria.toLowerCase() === valorIngresado)
alert("productos.categoria")


// let productoBuscado = productos.find(function (producto) {return producto.id === 5})
// let productoBuscado = productos.find(producto => producto.id === 5)
// if (productoBuscado) {
// alert("productoBuscado")
// }
