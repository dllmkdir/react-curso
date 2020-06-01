//Javascript Intro
// For Google Chrome, you can Sources >> Snippets >> + New Snippet in the Developer Console.
// For firefox use the multiline console
console.log('hola')
//String
var foo = "esto definitivamente es una cadena"
// Number
var num = 3
// Float
var num2 = 3.0
//Array
var arreglo = [1, 2, 3, 4, 5, 65, 6, 7, 9, "hola"]

console.log(foo)
console.log(num)
console.log(num2)
console.log(arreglo)
console.log(arreglo[5])
//Objetos, JSONs
//var : crea variables a nivel global, es decir las variables se introducen dentro del objeto window
var miObj = { "a": 3, "b": 4 }
console.log(miObj)
console.log(miObj["a"])
console.log(miObj.b)

//LET , CONST Y  VAR
//LET: variable que se crea dentro de un bloque de código, no se agrega a window
let miLet = 100
console.log(miLet)
miLet = 200
console.log(miLet)
//CONST: Es una variable constante, es decir no se puede cambiar
//no se anidan a window, también consumen menos memoria.
const miconst = 100
console.log(miconst)

//Window es el contenedor de todo lo que se encuentra en la ventana del navegador. es el elemento padre.
console.log(window)

//NULL y UNDEFINED
//undefined todas las variables que no existen
// osea los nulls son generados por el usuario
let miVariableInexistente = null
console.log(miVariableInexistente)//null

//undefined es generado por no asignar una variable
let miVariableInexistente2
console.log(miVariableInexistente2)//regresa undefined

//Doble operador, básicamente equipara memoria

//regresa true porque compara memoria
console.log(miVariableInexistente == undefined)//true

//triple operador no solo compara memoria, sino también compara tipos
console.log(miVariableInexistente === undefined)//false

miVariableInexistente = 23
if (miVariableInexistente) {
    console.log('la variable ya no es inexistente')
}

let miArreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < miArreglo.length; i++) {
    const element = miArreglo[i];
    console.log(element)
}
//while 
let suma = 0
while (suma < 60) {
    suma += 1
}
console.log(suma)

//funciones
function laMejorFuncion() {
    return "esta funcion es genial"
}
console.log(laMejorFuncion())

function funcionQueSuma(a, b) {
    return a + b
}
console.log(funcionQueSuma(2, 3))

//Operador REST
function funcionSumaLista(...lista) {
    let suma = 0
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        suma += element
    }
    return suma
}
console.log(funcionSumaLista(1, 2, 3, 4, 5))

const listAnidada = ['esponja', 'pantalones']
const listaCompleta = ['bob', ...listAnidada, 'cuadrados']
console.log(listaCompleta)

const listaObjTest = { ...listaCompleta }
console.log(listaObjTest)

//Arrow functions heredan el contexto directamente externo
//las arrow functions no tienen contexto propio
this.prueba = 100
const funcionY = () => {
    if (this === window) {
        console.log("window existe en este contexto, porque fue heredado")
        console.log(this.prueba)
    } else {
        console.log("Probamos que window no existe en este contexto")
    }
}
funcionY()

//MAP Y FILTER
console.log("MAP Y FILTER");

const arregloAsombroso = [
    { nombre: "John", apellido: "Wick" },
    { nombre: "Malvado", apellido: "Ted" },
    { nombre: "Neo", apellido: "Anderson" },
    { nombre: "Kevin", apellido: "Lomax" },
    { nombre: "Kevin", apellido: "Spacey" },
]
//map
console.log("map")
//tu puedes editar el arreglo
for (let i = 0; i < arregloAsombroso.length; i++) {
    const element = arregloAsombroso[i];

}

//map lo que hace es iterar sobre una copia del arreglo
//esta copia hace referencia directa sobre el elemento a editar
//se puede crear otros arreglo de la misma índole usando map
//y almacenandolos en variables
const arregloCambiado = arregloAsombroso.map((personaje, index) => {
    return `${personaje.nombre} - ${index}`
})
console.log(arregloCambiado)
//filter
const arregloFiltrado = arregloAsombroso.filter((personaje) => {
    return personaje.apellido !== "Spacey"
})

console.log(arregloFiltrado)

//accediendo a elemento del DOM
//Document Object Model
//Es la jerarquía general del sitio
const titulo = document.getElementById('titulo')
let autor = document.getElementById('autor')
console.log(titulo)
console.log(autor)
autor.innerHTML = "Yo Mero Cantinero"
autor.style = "color:red;"

//Usando distintos elementos
//arreglo tipo NodeList
let botones = document.querySelectorAll('.uk-button')
console.log(botones)

//iterar sobre un NodeList
Array.from(botones).map((boton, index) => {
    boton.innerHTML = "Yeah" + index
    console.log(boton)
})

document.getElementById('botontest').addEventListener('mouseenter', (e) => {
    console.log("Fui clickeado")
})

console.log("Escuchando solo un elemento")
document.getElementById('boton-box').addEventListener('click', (e) => {
    //previene el comportamiento default del elemento en el DOM
    e.preventDefault()
    //detiene la propagación de triggers externos
    e.stopPropagation()
    //discriminamos para obtener solo los botones
    if (e.target.nodeName === "BUTTON") {
        console.log("soy un botón y fui clickeado!")
        alert(e.target.innerHTML)
    }
})

//existen tres contenedores
//sobre los cuales opera js
//call stack
//popea calls 
//de manera lineal

//webapis
//API utilizado para ejecutar contenido tipo js
//setTimeout
//axios.get()
//axios.post()
//fetch
//

//promise stack - Callback Queue
//Todo lo que paso y espero en Webapis va a regresar en forma de promesa
//y va a serlanzado hacia el callstack

//eventLoop

//se ejecuta todo en js utilizando un solo hilo
// browsers, web
//js es asíncrono
//

function setTarda() {
    // es que va a esperar un tiempo determinado para ejecutar una función
    setTimeout(() => {
        document.getElementById('titulo').innerHTML = "Cambiado después de 3 segundos"
    }, 3000)
    return "se Tarda Cambio de titulo"
}
console.log(setTarda())


// las promesas en javascript se esperan y se resulve o se rechazan
function promesaSeTarda() {
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById('autor').innerHTML = "Autor cambiado"
            resolve()
        }, 5000)
    })
    //si la promesa fue exitosa
    promesa.then(() => {
        console.log("promesa exitosa")
    }).catch(() => {
        //reconocer si la promesa no fue exitosa
        console.log("promesa no exitosa :(")
    })

    return "funcion finalizada"
}
console.log(promesaSeTarda())

//multiples promesas
console.log("Multiples Promesas")
let promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 1000)
})
let promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 2000)
})
let promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject()
    }, 3000)
})
let promesa4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 4000)
})
let promesa5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 5000)
})

Promise.all([promesa1, promesa2, promesa3, promesa4, promesa5]).then(() => {
    console.log("todas las promesas fueron exitosas")
}).catch((reason) => {
    console.log("Alguna promesa no fue exitosa!")
})


//async Await
const test = async () => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById('description').innerHTML = "Descripción cambiada después de mucho tiempo"
            console.log("timeout!")
            resolve()
        }, 6000)

    })
    await console.log("Esto se debió imprimir después de 6 segundos")
    return "test finalizado"
}
//contexto síncrono o global, regresará una promesa pendiente
console.log(test());

//declaramos un contexto asíncrono
(async function () {
    //tendremos un contexto asíncrono para resolver llamadas asíncronas
    let response = await test()
    console.log(response)
})()

// EXAMEN
// hacer fetch a la siguiente URL y tratar el array dependiendo de la tarea asignada
// https://developers.google.com/web/updates/2015/03/introduction-to-fetch
{
    const response = await fetch('http://www.json-generator.com/api/json/get/cjLRKsXUHS?indent=2')
    console.log(response)
    let lista = await response.json()

    const response2 = await fetch('http://www.json-generator.com/api/json/get/ckobxRtHQO?indent=2')
    console.log(response2)
    const lista2 = await response2.json()

    lista = [...lista, ...lista2]

    console.log(lista)

    lista = lista.map((e) => {
        e.company = "Softtek"
        return e
    })

    //Tipo 1
    const blacklist = ['strawberry', 'apple']
    const listaFiltrada1 = lista.filter((elemento) =>
        blacklist.indexOf(elemento.favoriteFruit) >= 0
    )
    console.log(listaFiltrada1)
    //Tipo 2
    const listaFiltrada2 = lista.filter((e) => e.age > 24 && e.gender === 'male')
    console.log(listaFiltrada2)

}

// CON PROMISE STACK

{
    let promiseStack = []
    promiseStack.push(fetch('https://www.json-generator.com/api/json/get/cjLRKsXUHS?indent=2'))

    promiseStack.push(fetch('https://www.json-generator.com/api/json/get/ckobxRtHQO?indent=2'))
    const response = await Promise.all(promiseStack)

    lista = [...await response[0].json(), ...await response[1].json()].map((e) => {
        e.company = "Softtek"
        return e
    })
    //Tipo 1
    const blacklist = ['strawberry', 'apple']
    const listaFiltrada1 = lista.filter((elemento) =>
        blacklist.indexOf(elemento.favoriteFruit) >= 0
    )
    console.log(listaFiltrada1)
    //Tipo 2
    const listaFiltrada2 = lista.filter((e) => e.age > 24 && e.gender === 'male')
    console.log(listaFiltrada2)

}


