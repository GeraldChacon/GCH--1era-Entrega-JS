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
    { id: 6, nombre: "jabon", categoria: "higiene", stock: 18, precio: 500,},

]

alert("A continuacion nuestro listado de Productos")

function listar(lista, propiedad1, propiedad2, propiedad3) {
    return lista.map(producto => "Categoria: " + producto[propiedad1] + " - " + producto[propiedad2]  + " - " + producto[propiedad3]).join("\n")
}

let mostrarString = listar(productos, "categoria", "nombre", "precio").toUpperCase()
console.log(mostrarString)
alert(mostrarString)


let valorIngresado = prompt("Ingrese categoria para filtrar").toLowerCase()
let productosFiltrados = productos.filter(producto => producto.categoria.includes(valorIngresado))
console.log(productosFiltrados)

do {
    if (valorIngresado === "alimentos") {
        alert("Disponibles:\n Proplan\n Royal Canin")
    } else if (valorIngresado === "snack") {
        alert("Disponibles:\n Bocaditos\n Dental Care")
    } else if (valorIngresado === "higiene") {
        alert("Disponibles:\n Shampoo\n Jabon")
    }
} while (valorIngresado === 0)

