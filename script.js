principal()

//Compra de Producto

let valor = Number(prompt("Ingrese monto disponible"))
if (valor > 0 && valor < 1000) {
    if (valor >= 95) {
        alert("Puedes comprar Pantalon, Camisa, Zapatillas y Medias")
    } else if (valor >= 90) {
        alert("Puedes comprar Pantalon, Camisa y Zapatillas")
    } else if (valor >= 50) {
        alert("Puedes comprar Pantalon y Camisa")
    } else if (valor >= 40) {
        alert("Puedes comprar Zapatillas")
    } else if (valor >= 30) {
        alert("Puedes comprar Pantalon")
    } else if (valor >= 20) {
        alert("Puedes comprar Camisa")
    } else if (valor >= 5) {
        alert("Puedes comprar Medias")
    } else {
        alert("No te alcanza el dinero")
    }
} else {
    alert("Dato fuera del parametro")
} 


principal()

//Costo total productos

for (let i = 0; i < 5; i++) {
    let producto = prompt("Ingrese Producto").toUpperCase()
    let precio = prompt("Ingrese Precio")
    alert(producto + " cuesta " + precio)
}

//Funcion

function saludar(nombreCompleto) {
    alert("Bienvenido/a " + nombreCompleto + "!")
}

function principal() {
    let nombre = prompt("Ingrese su nombre completo")
    saludar(nombre)
}




